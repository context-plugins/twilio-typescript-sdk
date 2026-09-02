import { s, type Schema } from "../core/index.js";
import { filterSchema, type Filter } from "./filter.js";
import { orderBySchema, type OrderBy } from "./order-by.js";

export type QueryDefinition = {
  measures?: string[];
  dimensions?: string[];
  filters?: Filter[];
  orderBy?: OrderBy[];
};

export const queryDefinitionSchema: Schema<QueryDefinition> = s.object<QueryDefinition>({
  measures: s.optional(s.array(s.string())),
  dimensions: s.optional(s.array(s.string())),
  filters: s.optional(s.array(s.lazy(() => filterSchema))),
  orderBy: s.optional(s.array(s.lazy(() => orderBySchema))),
});
