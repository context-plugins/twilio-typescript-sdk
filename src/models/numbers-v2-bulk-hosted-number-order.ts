import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkHostedNumberOrderEnumRequestStatusSchema,
  type BulkHostedNumberOrderEnumRequestStatus,
} from "./bulk-hosted-number-order-enum-request-status.js";

export type NumbersV2BulkHostedNumberOrder = {
  bulkHostingSid?: string | null;
  requestStatus?: BulkHostedNumberOrderEnumRequestStatus;
  friendlyName?: string | null;
  notificationEmail?: string | null;
  dateCreated?: Date | null;
  dateCompleted?: Date | null;
  url?: string | null;
  totalCount?: number;
  results?: Record<string, unknown>[] | null;
};

export const numbersV2BulkHostedNumberOrderSchema: Schema<NumbersV2BulkHostedNumberOrder> =
  s.object<NumbersV2BulkHostedNumberOrder>({
    bulkHostingSid: s.optionalNullable(s.string()),
    requestStatus: s.optional(s.lazy(() => bulkHostedNumberOrderEnumRequestStatusSchema)),
    friendlyName: s.optionalNullable(s.string()),
    notificationEmail: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateCompleted: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    totalCount: s.optional(s.number()),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      bulkHostingSid: "bulk_hosting_sid",
      requestStatus: "request_status",
      friendlyName: "friendly_name",
      notificationEmail: "notification_email",
      dateCreated: "date_created",
      dateCompleted: "date_completed",
      totalCount: "total_count",
    },
  });
