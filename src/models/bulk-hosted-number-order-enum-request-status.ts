import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string that shows the status of the current Bulk Hosting request, it can vary between these
 * values: 'QUEUED','IN_PROGRESS','PROCESSED'
 */
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
