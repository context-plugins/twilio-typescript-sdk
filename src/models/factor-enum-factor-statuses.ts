import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Status of this Factor. One of `unverified` or `verified`. */
export const FactorEnumFactorStatuses = {
  Unverified: "unverified",
  Verified: "verified",
} as const;
export type FactorEnumFactorStatuses =
  | (typeof FactorEnumFactorStatuses)[keyof typeof FactorEnumFactorStatuses]
  | (string & {});

export const factorEnumFactorStatusesSchema: EnumSchema<FactorEnumFactorStatuses> =
  s.enumOf<FactorEnumFactorStatuses>(FactorEnumFactorStatuses);
