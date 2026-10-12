import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Pagination metadata containing navigation tokens and result information, this schema should
 * according to convention be added to the response payload's 'meta' attribute
 */
export type PaginationMeta1 = {
  /**
   * The key of the list property contains the actual data items. This enables programmatic
   * iteration over paginated results.
   */
  key: string;
  /**
   * The actual number of items returned in this response. May be less than the requested pageSize
   * for the last page.
   */
  pageSize: number;
  /**
   * Token to fetch the previous page of results. Only included if there is a previous page,
   * otherwise omitted.
   */
  previousToken?: string | null;
  /**
   * Token to fetch the next page of results. Only included if there is a next page, otherwise
   * omitted.
   */
  nextToken?: string | null;
};

export const paginationMeta1Schema: Schema<PaginationMeta1> = s.object<PaginationMeta1>({
  key: s.string(),
  pageSize: s.int(),
  previousToken: s.optionalNullable(s.string()),
  nextToken: s.optionalNullable(s.string()),
});
