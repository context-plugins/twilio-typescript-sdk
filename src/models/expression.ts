import { s, type Schema } from "../core/index.js";
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
