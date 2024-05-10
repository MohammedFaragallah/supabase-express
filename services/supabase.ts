import { createClient } from "@supabase/supabase-js";
import { Database } from "../supabase";
import { logger } from "./logger";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;

export const supabase = createClient<Database>(
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
