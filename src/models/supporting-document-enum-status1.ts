import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Supporting Document resource. */
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
