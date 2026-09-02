import { s, type EnumSchema } from "../core/index.js";

export const FactorEnumFactorStatuses = {
  Unverified: "unverified",
  Verified: "verified",
} as const;
export type FactorEnumFactorStatuses =
  | (typeof FactorEnumFactorStatuses)[keyof typeof FactorEnumFactorStatuses]
  | (string & {});

export const factorEnumFactorStatusesSchema: EnumSchema<FactorEnumFactorStatuses> =
  s.enumOf<FactorEnumFactorStatuses>(FactorEnumFactorStatuses);
