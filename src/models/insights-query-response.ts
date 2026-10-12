import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paginationMeta1Schema, type PaginationMeta1 } from "./pagination-meta1.js";

export type InsightsQueryResponse = {
  /** Indicates the business domain the query was executed against */
  domain?: string;
  /**
   * Array of result objects containing the query results. Each object contains properties matching
   * the requested measures and dimensions.
   */
  items?: Record<string, unknown>[];
  /**
   * Pagination metadata containing navigation tokens and result information, this schema should
   * according to convention be added to the response payload's 'meta' attribute
   */
  meta?: PaginationMeta1;
};

export const insightsQueryResponseSchema: Schema<InsightsQueryResponse> = s.object<InsightsQueryResponse>({
  domain: s.optional(s.string()),
  items: s.optional(s.array(s.record(s.string(), s.unknown()))),
  meta: s.optional(s.lazy(() => paginationMeta1Schema)),
});
