import { s, type Schema } from "../core/index.js";

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
