import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filterSchema, type Filter } from "./filter.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

/**
 * Structured query definition that specifies what data to retrieve and how to filter, group, and
 * order it
 */
export type QueryDefinition = {
  /** Array of measures to retrieve, representing quantitative values or metrics to be calculated */
  measures?: string[];
  /**
   * Array of dimensions to retrieve, representing categorical attributes for grouping and
   * organizing data
   */
  dimensions?: string[];
  /** Nested filter conditions. Always use `op` and `expressions`. */
  filters?: Filter[];
  /**
   * Specifications for sorting the query results by specific fields in ascending or descending
   * order
   */
  orderBy?: OrderBy[];
};

export const queryDefinitionSchema: Schema<QueryDefinition> = s.object<QueryDefinition>({
  measures: s.optional(s.array(s.string())),
  dimensions: s.optional(s.array(s.string())),
  filters: s.optional(s.array(s.lazy(() => filterSchema))),
  orderBy: s.optional(s.array(s.lazy(() => orderBySchema))),
});
