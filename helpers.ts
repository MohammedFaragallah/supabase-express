import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";
import { Tables } from "./supabase";
import { logger, novu, supabase } from "./services";
import { RequestStatuses } from "./types";

export const handleStatusInserts = async (
  new_status_payload: RealtimePostgresInsertPayload<Tables<"status_histories">>
  // eslint-disable-next-line unicorn/consistent-function-scoping
) => {
  const {
    new: { created_by, new_status, old_status, request_type, request_uuid },
  } = new_status_payload;

  try {
    const { data: reviewer, error } = await supabase
      .from("status_histories")
      .select("*")
      .eq("request_uuid", request_uuid)
      .eq("new_status", RequestStatuses.in_review);

    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    if (error) {
      logger.error(error);
    }

    const subscriberId = reviewer?.[0]?.created_by;

    // if (subscriberId === created_by) {
    // 	this.logger.log(
    // 		'The same user updated the request status no need for a notification',
    // 	);
    // } else
    if (
      subscriberId?.length &&
      request_type?.length &&
      request_uuid?.length &&
      new_status?.length &&
      old_status?.length
    ) {
      const response = await novu.trigger("request-status-change", {
        payload: { new_status, old_status, request_type, request_uuid },
        to: { subscriberId },
      });

      logger.log(response);
    } else {
      logger.error(
        { payload: new_status_payload, reviewer },
        { created_by, subscriberId }
      );
    }
  } catch (error) {
    logger.error(error);
  }
};
