import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccessTokenEnumFactorTypes = {
  Push: "push",
} as const;
export type AccessTokenEnumFactorTypes =
  | (typeof AccessTokenEnumFactorTypes)[keyof typeof AccessTokenEnumFactorTypes]
  | (string & {});

export const accessTokenEnumFactorTypesSchema: EnumSchema<AccessTokenEnumFactorTypes> =
  s.enumOf<AccessTokenEnumFactorTypes>(AccessTokenEnumFactorTypes);
