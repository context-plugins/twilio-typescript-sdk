import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Type of this Factor. Currently `push` and `totp` are supported. */
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
