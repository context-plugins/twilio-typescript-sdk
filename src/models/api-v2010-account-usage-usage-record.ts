import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountUsageUsageRecord = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that accrued the usage.
   */
  accountSid?: string | null;
  /** The API version used to create the resource. */
  apiVersion?: string | null;
  /**
   * Usage records up to date as of this timestamp, formatted as YYYY-MM-DDTHH:MM:SS+00:00. All
   * timestamps are in GMT
   */
  asOf?: string | null;
  /**
   * The category of usage. For more information, see [Usage
   * Categories](https://www.twilio.com/docs/usage/api/usage-record#usage-categories).
   */
  category?: string | null;
  /** The number of usage events, such as the number of calls. */
  count?: string | null;
  /** The units in which `count` is measured, such as `calls` for calls or `messages` for SMS. */
  countUnit?: string | null;
  /** A plain-language description of the usage category. */
  description?: string | null;
  /**
   * The last date for which usage is included in the UsageRecord. The date is specified in GMT and
   * formatted as `YYYY-MM-DD`.
   */
  endDate?: string | null;
  /**
   * The total price of the usage in the currency specified in `price_unit` and associated with the
   * account.
   */
  price?: number | null;
  /**
   * The currency in which `price` is measured, in [ISO
   * 4127](https://www.iso.org/iso/home/standards/currency_codes.htm) format, such as `usd`, `eur`,
   * and `jpy`.
   */
  priceUnit?: string | null;
  /**
   * The first date for which usage is included in this UsageRecord. The date is specified in GMT
   * and formatted as `YYYY-MM-DD`.
   */
  startDate?: string | null;
  /**
   * A list of related resources identified by their URIs. For more information, see [List
   * Subresources](https://www.twilio.com/docs/usage/api/usage-record#list-subresources).
   */
  subresourceUris?: Record<string, unknown> | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
  /** The amount used to bill usage and measured in units described in `usage_unit`. */
  usage?: string | null;
  /** The units in which `usage` is measured, such as `minutes` for calls or `messages` for SMS. */
  usageUnit?: string | null;
};

export const apiV2010AccountUsageUsageRecordSchema: Schema<ApiV2010AccountUsageUsageRecord> =
  s.object<ApiV2010AccountUsageUsageRecord>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    asOf: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.string()),
    countUnit: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    endDate: s.optionalNullable(s.dateOnly()),
    price: s.optionalNullable(s.float64()),
    priceUnit: s.optionalNullable(s.string()),
    startDate: s.optionalNullable(s.dateOnly()),
    subresourceUris: s.optionalNullable(s.record(s.string(), s.unknown())),
    uri: s.optionalNullable(s.string()),
    usage: s.optionalNullable(s.string()),
    usageUnit: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      apiVersion: "api_version",
      asOf: "as_of",
      countUnit: "count_unit",
      endDate: "end_date",
      priceUnit: "price_unit",
      startDate: "start_date",
      subresourceUris: "subresource_uris",
      usageUnit: "usage_unit",
    },
  });
