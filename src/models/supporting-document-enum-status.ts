import { s, type EnumSchema } from "../core/index.js";

export const SupportingDocumentEnumStatus = {
  Draft: "draft",
  PendingReview: "pending-review",
  Rejected: "rejected",
  Approved: "approved",
  Expired: "expired",
  ProvisionallyApproved: "provisionally-approved",
} as const;
export type SupportingDocumentEnumStatus =
  | (typeof SupportingDocumentEnumStatus)[keyof typeof SupportingDocumentEnumStatus]
  | (string & {});

export const supportingDocumentEnumStatusSchema: EnumSchema<SupportingDocumentEnumStatus> =
  s.enumOf<SupportingDocumentEnumStatus>(SupportingDocumentEnumStatus);
