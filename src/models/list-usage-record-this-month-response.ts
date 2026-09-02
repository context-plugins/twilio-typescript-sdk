import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountUsageUsageRecordUsageRecordThisMonthSchema,
  type ApiV2010AccountUsageUsageRecordUsageRecordThisMonth,
} from "./api-v2010-account-usage-usage-record-usage-record-this-month.js";

export type ListUsageRecordThisMonthResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageRecords?: ApiV2010AccountUsageUsageRecordUsageRecordThisMonth[];
};

export const listUsageRecordThisMonthResponseSchema: Schema<ListUsageRecordThisMonthResponse> =
  s.object<ListUsageRecordThisMonthResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageRecords: s.optional(
      s.array(s.lazy(() => apiV2010AccountUsageUsageRecordUsageRecordThisMonthSchema)),
    ),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageRecords: "usage_records",
    },
  });
