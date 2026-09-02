import { s, type EnumSchema } from "../core/index.js";

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
