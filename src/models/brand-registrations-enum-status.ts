import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BrandRegistrationsEnumStatus = {
  Pending: "PENDING",
  Approved: "APPROVED",
  Failed: "FAILED",
  InReview: "IN_REVIEW",
  DeletionPending: "DELETION_PENDING",
  DeletionFailed: "DELETION_FAILED",
  Suspended: "SUSPENDED",
} as const;
export type BrandRegistrationsEnumStatus =
  | (typeof BrandRegistrationsEnumStatus)[keyof typeof BrandRegistrationsEnumStatus]
  | (string & {});

export const brandRegistrationsEnumStatusSchema: EnumSchema<BrandRegistrationsEnumStatus> =
  s.enumOf<BrandRegistrationsEnumStatus>(BrandRegistrationsEnumStatus);
