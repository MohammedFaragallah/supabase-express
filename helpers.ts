import { RealtimePostgresInsertPayload } from "@supabase/supabase-js";
import { Tables } from "./supabase";
import { logger, novu, supabase } from "./services";
import { RequestStatuses } from "./types";
import { PushProviderIdEnum } from "@novu/node";

export const handleStatusInserts = async (
  new_status_payload: RealtimePostgresInsertPayload<Tables<"status_histories">>
  // eslint-disable-next-line unicorn/consistent-function-scoping
) => {
  const {
    new: { created_by, new_status, old_status, request_type, request_uuid },
  } = new_status_payload;

  try {
    const [
      { data: reviewer, error: reviewer_error },
      { data: request, error: request_error },
    ] = await Promise.all([
      supabase
        .from("status_histories")
        .select("*")
        .eq("request_uuid", request_uuid)
        .eq("new_status", RequestStatuses.in_review),
      supabase
        .from(request_type as "base_requests")
        .select("*")
        .eq("id", request_uuid),
    ]);

    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    if (reviewer_error) {
      logger.error(reviewer_error);
    }

    if (request_error) {
      logger.error(request_error);
    }

    const reviewer_id = reviewer?.[0]?.created_by;
    const submitter_id = request?.[0]?.created_by;

    // if (reviewer_id === created_by || submitter_id === created_by) {
    //   logger.log(
    //     "The same user updated the request status no need for a notification"
    //   );
    // } else
    if (
      submitter_id?.length &&
      reviewer_id?.length &&
      request_type?.length &&
      request_uuid?.length &&
      new_status?.length &&
      old_status?.length
    ) {
      const [
        {
          data: { user: reviewer },
          error: reviewer_error,
        },
        {
          data: { user: submitter },
          error: submitter_error,
        },
      ] = await Promise.all([
        supabase.auth.admin.getUserById(reviewer_id),
        supabase.auth.admin.getUserById(submitter_id),
      ]);

      if (reviewer_error) {
        logger.error(reviewer_error);
      }

      if (submitter_error) {
        logger.error(submitter_error);
      }

      await Promise.all([
        novu.subscribers.setCredentials(reviewer_id, PushProviderIdEnum.EXPO, {
          deviceTokens: reviewer?.user_metadata.device_token,
        }),
        novu.subscribers.setCredentials(submitter_id, PushProviderIdEnum.EXPO, {
          deviceTokens: submitter?.user_metadata.device_token,
        }),
      ]);

      const [request_status_change, submitted_request_status_change] =
        await Promise.all([
          novu.trigger("request-status-change", {
            payload: { new_status, old_status, request_type, request_uuid },
            to: { subscriberId: reviewer_id },
          }),
          novu.trigger("submittedrequeststatuschange", {
            payload: { new_status, old_status, request_type, request_uuid },
            to: { subscriberId: submitter_id },
          }),
        ]);

      logger.log(request_status_change);
      logger.log(submitted_request_status_change);
    } else {
      logger.error(
        { payload: new_status_payload, reviewer },
        { created_by, reviewer_id, submitter_id }
      );
    }
  } catch (error) {
    logger.error(error);
  }
};
