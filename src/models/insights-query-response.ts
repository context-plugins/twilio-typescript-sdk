import { s, type Schema } from "../core/index.js";
import { paginationMeta1Schema, type PaginationMeta1 } from "./pagination-meta1.js";

export type InsightsQueryResponse = {
  domain?: string;
  items?: Record<string, unknown>[];
  meta?: PaginationMeta1;
};

export const insightsQueryResponseSchema: Schema<InsightsQueryResponse> = s.object<InsightsQueryResponse>({
  domain: s.optional(s.string()),
  items: s.optional(s.array(s.record(s.string(), s.unknown()))),
  meta: s.optional(s.lazy(() => paginationMeta1Schema)),
});
