import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BulkHostedNumberOrderEnumRequestStatus = {
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Processed: "PROCESSED",
} as const;
export type BulkHostedNumberOrderEnumRequestStatus =
  | (typeof BulkHostedNumberOrderEnumRequestStatus)[keyof typeof BulkHostedNumberOrderEnumRequestStatus]
  | (string & {});

export const bulkHostedNumberOrderEnumRequestStatusSchema: EnumSchema<BulkHostedNumberOrderEnumRequestStatus> =
  s.enumOf<BulkHostedNumberOrderEnumRequestStatus>(BulkHostedNumberOrderEnumRequestStatus);
