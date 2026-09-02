import { s, type Schema } from "../core/index.js";
import {
  apiV2010AccountUsageUsageTriggerSchema,
  type ApiV2010AccountUsageUsageTrigger,
} from "./api-v2010-account-usage-usage-trigger.js";

export type ListUsageTriggerResponse = {
  end?: number;
  firstPageUri?: string;
  nextPageUri?: string | null;
  page?: number;
  pageSize?: number;
  previousPageUri?: string | null;
  start?: number;
  uri?: string;
  usageTriggers?: ApiV2010AccountUsageUsageTrigger[];
};

export const listUsageTriggerResponseSchema: Schema<ListUsageTriggerResponse> =
  s.object<ListUsageTriggerResponse>({
    end: s.optional(s.number()),
    firstPageUri: s.optional(s.string()),
    nextPageUri: s.optionalNullable(s.string()),
    page: s.optional(s.number()),
    pageSize: s.optional(s.number()),
    previousPageUri: s.optionalNullable(s.string()),
    start: s.optional(s.number()),
    uri: s.optional(s.string()),
    usageTriggers: s.optional(s.array(s.lazy(() => apiV2010AccountUsageUsageTriggerSchema))),
    _keysMap: {
      firstPageUri: "first_page_uri",
      nextPageUri: "next_page_uri",
      pageSize: "page_size",
      previousPageUri: "previous_page_uri",
      usageTriggers: "usage_triggers",
    },
  });
