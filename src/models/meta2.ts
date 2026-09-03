import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Meta2 = {
  key?: string;
  pageSize?: number;
  previousToken?: string;
  nextToken?: string;
};

export const meta2Schema: Schema<Meta2> = s.object<Meta2>({
  key: s.optional(s.string()),
  pageSize: s.optional(s.number()),
  previousToken: s.optional(s.string()),
  nextToken: s.optional(s.string()),
});
