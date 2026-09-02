import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountUsageUsageRecordUsageRecordTodaySchema,
  type ApiV2010AccountUsageUsageRecordUsageRecordToday,
} from "./api-v2010-account-usage-usage-record-usage-record-today.js";

export type ListUsageRecordTodayResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageRecords?: ApiV2010AccountUsageUsageRecordUsageRecordToday[];
};

export const listUsageRecordTodayResponseSchema: Schema<ListUsageRecordTodayResponse> =
  s.object<ListUsageRecordTodayResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageRecords: s.optional(s.array(s.lazy(() => apiV2010AccountUsageUsageRecordUsageRecordTodaySchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageRecords: "usage_records",
    },
  });
