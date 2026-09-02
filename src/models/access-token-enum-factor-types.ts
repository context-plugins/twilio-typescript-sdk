import { s, type EnumSchema } from "../core/index.js";

export const AccessTokenEnumFactorTypes = {
  Push: "push",
} as const;
export type AccessTokenEnumFactorTypes =
  | (typeof AccessTokenEnumFactorTypes)[keyof typeof AccessTokenEnumFactorTypes]
  | (string & {});

export const accessTokenEnumFactorTypesSchema: EnumSchema<AccessTokenEnumFactorTypes> =
  s.enumOf<AccessTokenEnumFactorTypes>(AccessTokenEnumFactorTypes);
