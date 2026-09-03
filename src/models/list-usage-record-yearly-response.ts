import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountUsageUsageRecordUsageRecordYearlySchema,
  type ApiV2010AccountUsageUsageRecordUsageRecordYearly,
} from "./api-v2010-account-usage-usage-record-usage-record-yearly.js";

export type ListUsageRecordYearlyResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageRecords?: ApiV2010AccountUsageUsageRecordUsageRecordYearly[];
};

export const listUsageRecordYearlyResponseSchema: Schema<ListUsageRecordYearlyResponse> =
  s.object<ListUsageRecordYearlyResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageRecords: s.optional(s.array(s.lazy(() => apiV2010AccountUsageUsageRecordUsageRecordYearlySchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageRecords: "usage_records",
    },
  });
