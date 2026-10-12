import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The verification status of the Supporting Document resource. */
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
