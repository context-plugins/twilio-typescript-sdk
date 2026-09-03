import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaginationMeta = {
  previousToken?: string;
  nextToken?: string;
};

export const paginationMetaSchema: Schema<PaginationMeta> = s.object<PaginationMeta>({
  previousToken: s.optional(s.string()),
  nextToken: s.optional(s.string()),
  _keysMap: {
    previousToken: "previous_token",
    nextToken: "next_token",
  },
});
