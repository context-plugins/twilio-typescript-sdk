import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PaginationMeta1 = {
  key: string;
  pageSize: number;
  previousToken?: string | null;
  nextToken?: string | null;
};

export const paginationMeta1Schema: Schema<PaginationMeta1> = s.object<PaginationMeta1>({
  key: s.string(),
  pageSize: s.number(),
  previousToken: s.optionalNullable(s.string()),
  nextToken: s.optionalNullable(s.string()),
});
