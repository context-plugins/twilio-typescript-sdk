import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NewFactorEnumFactorStatuses = {
  Unverified: "unverified",
  Verified: "verified",
} as const;
export type NewFactorEnumFactorStatuses =
  | (typeof NewFactorEnumFactorStatuses)[keyof typeof NewFactorEnumFactorStatuses]
  | (string & {});

export const newFactorEnumFactorStatusesSchema: EnumSchema<NewFactorEnumFactorStatuses> =
  s.enumOf<NewFactorEnumFactorStatuses>(NewFactorEnumFactorStatuses);
