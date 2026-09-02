import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountUsageUsageRecordSchema,
  type ApiV2010AccountUsageUsageRecord,
} from "./api-v2010-account-usage-usage-record.js";

export type ListUsageRecordResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageRecords?: ApiV2010AccountUsageUsageRecord[];
};

export const listUsageRecordResponseSchema: Schema<ListUsageRecordResponse> =
  s.object<ListUsageRecordResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageRecords: s.optional(s.array(s.lazy(() => apiV2010AccountUsageUsageRecordSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageRecords: "usage_records",
    },
  });
