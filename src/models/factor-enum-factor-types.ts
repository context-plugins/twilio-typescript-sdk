import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Type of this Factor. Currently `push` and `totp` are supported. */
export const FactorEnumFactorTypes = {
  Push: "push",
  Totp: "totp",
  Passkeys: "passkeys",
} as const;
export type FactorEnumFactorTypes =
  | (typeof FactorEnumFactorTypes)[keyof typeof FactorEnumFactorTypes]
  | (string & {});

export const factorEnumFactorTypesSchema: EnumSchema<FactorEnumFactorTypes> =
  s.enumOf<FactorEnumFactorTypes>(FactorEnumFactorTypes);
