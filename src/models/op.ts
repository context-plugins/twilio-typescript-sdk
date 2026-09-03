import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Op = {
  And: "AND",
  Or: "OR",
  Eq: "EQ",
  Ne: "NE",
  Gt: "GT",
  Lt: "LT",
  In: "IN",
} as const;
export type Op = (typeof Op)[keyof typeof Op] | (string & {});

export const opSchema: EnumSchema<Op> = s.enumOf<Op>(Op);
