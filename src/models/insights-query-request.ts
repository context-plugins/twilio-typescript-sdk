import { s, type Schema } from "../core/index.js";
import { queryDefinitionSchema, type QueryDefinition } from "./query-definition.js";

export type InsightsQueryRequest = {
  domain?: string;
  query: QueryDefinition;
};

export const insightsQueryRequestSchema: Schema<InsightsQueryRequest> = s.object<InsightsQueryRequest>({
  domain: s.optional(s.string()),
  query: queryDefinitionSchema,
});
