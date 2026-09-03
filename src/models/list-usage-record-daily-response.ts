import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  apiV2010AccountUsageUsageRecordUsageRecordDailySchema,
  type ApiV2010AccountUsageUsageRecordUsageRecordDaily,
} from "./api-v2010-account-usage-usage-record-usage-record-daily.js";

export type ListUsageRecordDailyResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageRecords?: ApiV2010AccountUsageUsageRecordUsageRecordDaily[];
};

export const listUsageRecordDailyResponseSchema: Schema<ListUsageRecordDailyResponse> =
  s.object<ListUsageRecordDailyResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageRecords: s.optional(s.array(s.lazy(() => apiV2010AccountUsageUsageRecordUsageRecordDailySchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageRecords: "usage_records",
    },
  });
