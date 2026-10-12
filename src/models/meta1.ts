import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta1 = {
  /** The key of the list property contains the actual data items */
  key: string;
  /** The actual number of items returned in this response */
  pageSize: number;
  /** Token to fetch the previous page of results */
  previousToken?: string;
  /** Token to fetch the next page of results */
  nextToken?: string;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>({
  key: s.string(),
  pageSize: s.int(),
  previousToken: s.optional(s.string()),
  nextToken: s.optional(s.string()),
});
