import { s, type Schema } from "../core/index.js";

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
