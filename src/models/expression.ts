import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { opSchema, type Op } from "./op.js";

export type Expression = {
  op: Op;
  field: string;
  values?: string[];
};

export const expressionSchema: Schema<Expression> = s.object<Expression>({
  op: opSchema,
  field: s.string(),
  values: s.optional(s.array(s.string())),
});
