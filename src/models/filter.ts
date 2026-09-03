import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expressionSchema, type Expression } from "./expression.js";
import { opSchema, type Op } from "./op.js";

export type Filter = {
  op?: Op;
  expressions: Expression[];
};

export const filterSchema: Schema<Filter> = s.object<Filter>({
  op: s.optional(s.lazy(() => opSchema)),
  expressions: s.array(s.lazy(() => expressionSchema)),
});
