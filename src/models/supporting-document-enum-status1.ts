import { s, type EnumSchema } from "../core/index.js";

export const SupportingDocumentEnumStatus1 = {
  Draft: "DRAFT",
  PendingReview: "PENDING_REVIEW",
  Rejected: "REJECTED",
  Approved: "APPROVED",
  Expired: "EXPIRED",
  ProvisionallyApproved: "PROVISIONALLY_APPROVED",
} as const;
export type SupportingDocumentEnumStatus1 =
  | (typeof SupportingDocumentEnumStatus1)[keyof typeof SupportingDocumentEnumStatus1]
  | (string & {});

export const supportingDocumentEnumStatus1Schema: EnumSchema<SupportingDocumentEnumStatus1> =
  s.enumOf<SupportingDocumentEnumStatus1>(SupportingDocumentEnumStatus1);
