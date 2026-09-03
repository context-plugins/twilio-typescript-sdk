import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { queryDefinitionSchema, type QueryDefinition } from "./query-definition.js";

export type InsightsQueryRequest = {
  domain?: string;
  query: QueryDefinition;
};

export const insightsQueryRequestSchema: Schema<InsightsQueryRequest> = s.object<InsightsQueryRequest>({
  domain: s.optional(s.string()),
  query: queryDefinitionSchema,
});
