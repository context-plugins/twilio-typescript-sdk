import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
