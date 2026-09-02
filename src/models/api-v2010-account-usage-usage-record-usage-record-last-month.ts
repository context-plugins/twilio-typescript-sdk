import { s, type Schema } from "../core/index.js";

export type ApiV2010AccountUsageUsageRecordUsageRecordLastMonth = {
  accountSid?: string | null;
  apiVersion?: string | null;
  asOf?: string | null;
  category?: string | null;
  count?: string | null;
  countUnit?: string | null;
  description?: string | null;
  endDate?: string | null;
  price?: number | null;
  priceUnit?: string | null;
  startDate?: string | null;
  subresourceUris?: Record<string, unknown> | null;
  uri?: string | null;
  usage?: string | null;
  usageUnit?: string | null;
};

export const apiV2010AccountUsageUsageRecordUsageRecordLastMonthSchema: Schema<ApiV2010AccountUsageUsageRecordUsageRecordLastMonth> =
  s.object<ApiV2010AccountUsageUsageRecordUsageRecordLastMonth>({
    accountSid: s.optionalNullable(s.string()),
    apiVersion: s.optionalNullable(s.string()),
    asOf: s.optionalNullable(s.string()),
    category: s.optionalNullable(s.string()),
    count: s.optionalNullable(s.string()),
    countUnit: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    endDate: s.optionalNullable(s.dateOnly()),
    price: s.optionalNullable(s.number()),
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
