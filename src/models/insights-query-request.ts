import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { queryDefinitionSchema, type QueryDefinition } from "./query-definition.js";

export type InsightsQueryRequest = {
  /** The business domain to execute the query against */
  domain?: string;
  /**
   * Structured query definition that specifies what data to retrieve and how to filter, group, and
   * order it
   */
  query: QueryDefinition;
};

export const insightsQueryRequestSchema: Schema<InsightsQueryRequest> = s.object<InsightsQueryRequest>({
  domain: s.optional(s.string()),
  query: queryDefinitionSchema,
});
