import { s, type EnumSchema } from "../core/index.js";

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
