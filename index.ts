import { Novu } from "@novu/node";
import {
  createClient,
  RealtimePostgresInsertPayload,
} from "@supabase/supabase-js";
import dotenv from "dotenv";
import express, { Express } from "express";
import { Database, Tables } from "./supabase";

dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

const logger = console;

export enum RequestStatuses {
  approved = "approved",
  cancelled = "cancelled",
  draft = "draft",
  in_review = "in_review",
  need_more_info = "need_more_info",
  rejected = "rejected",
  submitted = "submitted",
}

const validStatuses = [
  RequestStatuses.approved,
  RequestStatuses.cancelled,
  RequestStatuses.need_more_info,
  RequestStatuses.rejected,
  RequestStatuses.submitted,
];

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const NOVU_API_KEY = process.env.NOVU_API_KEY!;

const novu = new Novu(NOVU_API_KEY);

const supabase = createClient<Database>(
  SUPABASE_URL,
  SUPABASE_SERVICE_ROLE_KEY,
  {
    realtime: {
      log_level: "debug",
      logger: (...arguments_: unknown[]) => {
        for (const argument of arguments_) {
          logger.log(argument);
        }
      },
    },
  }
);

const handleStatusInserts = async (
  payload: RealtimePostgresInsertPayload<Tables<"status_histories">>
  // eslint-disable-next-line unicorn/consistent-function-scoping
) => {
  const {
    new: { new_status, old_status, request_type, request_uuid },
  } = payload;

  try {
    const { data: reviewer, error } = await supabase
      .from("status_histories")
      .select("*")
      .eq("request_uuid", request_uuid)
      .eq("new_status", RequestStatuses.in_review);

    if (error) {
      logger.error(error);
    }

    const subscriberId = reviewer?.[0]?.created_by;

    const validNotification =
      subscriberId && request_type && request_uuid && new_status && old_status;

    if (validNotification) {
      const response = await novu.trigger("request-status-change", {
        payload: {
          new_status,
          old_status,
          request_type,
          request_uuid,
        },
        to: {
          subscriberId,
        },
      });

      logger.log(response);
    } else {
      logger.error({ payload, reviewer });
    }
  } catch (error) {
    logger.error(error);
  }
};

supabase
  .channel("status_histories")
  .on(
    "postgres_changes",
    {
      event: "INSERT",
      filter: `new_status=in.(${validStatuses.join(",")})`,
      schema: "public",
      table: "status_histories",
    },
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    (payload: RealtimePostgresInsertPayload<Tables<"status_histories">>) => {
      logger.log(payload);

      handleStatusInserts(payload).catch((error) => {
        logger.error(error);
      });
    }
  )
  .subscribe((status, error) => {
    logger.log({ error, status });
  });

app.get("/", (req, res) => {
  res.send(
    JSON.stringify(
      supabase.realtime
        .getChannels()
        .map(({ params, state, topic, subTopic }) => ({
          params,
          state,
          topic,
          subTopic,
        })),
      null,
      2
    )
  );
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
