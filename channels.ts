import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";
import { logger, supabase } from "./services";
import { validStatuses } from "./types";
import { handleStatusInserts } from "./helpers";
import { Tables } from "./supabase";

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
