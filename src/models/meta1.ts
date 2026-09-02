import { s, type Schema } from "../core/index.js";

export type Meta1 = {
  key: string;
  pageSize: number;
  previousToken?: string;
  nextToken?: string;
};

export const meta1Schema: Schema<Meta1> = s.object<Meta1>({
  key: s.string(),
  pageSize: s.number(),
  previousToken: s.optional(s.string()),
  nextToken: s.optional(s.string()),
});
