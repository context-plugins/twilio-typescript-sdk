import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NewFactorEnumFactorTypes = {
  Push: "push",
  Totp: "totp",
  Passkeys: "passkeys",
} as const;
export type NewFactorEnumFactorTypes =
  | (typeof NewFactorEnumFactorTypes)[keyof typeof NewFactorEnumFactorTypes]
  | (string & {});

export const newFactorEnumFactorTypesSchema: EnumSchema<NewFactorEnumFactorTypes> =
  s.enumOf<NewFactorEnumFactorTypes>(NewFactorEnumFactorTypes);
