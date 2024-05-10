export enum RequestStatuses {
  approved = "approved",
  cancelled = "cancelled",
  draft = "draft",
  in_review = "in_review",
  need_more_info = "need_more_info",
  rejected = "rejected",
  submitted = "submitted",
}

export const validStatuses = [
  RequestStatuses.approved,
  RequestStatuses.cancelled,
  RequestStatuses.need_more_info,
  RequestStatuses.rejected,
  RequestStatuses.submitted,
];
