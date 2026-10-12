import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bulkHostedNumberOrderEnumRequestStatusSchema,
  type BulkHostedNumberOrderEnumRequestStatus,
} from "./bulk-hosted-number-order-enum-request-status.js";

export type NumbersV2BulkHostedNumberOrder = {
  /** A 34 character string that uniquely identifies this BulkHostedNumberOrder. */
  bulkHostingSid?: string | null;
  /**
   * A string that shows the status of the current Bulk Hosting request, it can vary between these
   * values: 'QUEUED','IN_PROGRESS','PROCESSED'
   */
  requestStatus?: BulkHostedNumberOrderEnumRequestStatus;
  /** A 128 character string that is a human-readable text that describes this resource. */
  friendlyName?: string | null;
  /** Email address used for send notifications about this Bulk hosted number request. */
  notificationEmail?: string | null;
  /**
   * The date this resource was created, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was completed, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCompleted?: Date | null;
  /** The URL of this BulkHostedNumberOrder resource. */
  url?: string | null;
  /** The total count of phone numbers in this Bulk hosting request. @default 0 */
  totalCount?: number;
  /**
   * Contains a list of all the individual hosting orders and their information, for this Bulk
   * request. Each result object is grouped by its order status. To see a complete list of order
   * status, please check
   * 'https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values'.
   */
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
    totalCount: s.defaulted(s.int(), 0),
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
