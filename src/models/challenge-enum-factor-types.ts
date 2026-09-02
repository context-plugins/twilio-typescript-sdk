import { s, type EnumSchema } from "../core/index.js";

export const ChallengeEnumFactorTypes = {
  Push: "push",
  Totp: "totp",
  Passkeys: "passkeys",
} as const;
export type ChallengeEnumFactorTypes =
  | (typeof ChallengeEnumFactorTypes)[keyof typeof ChallengeEnumFactorTypes]
  | (string & {});

export const challengeEnumFactorTypesSchema: EnumSchema<ChallengeEnumFactorTypes> =
  s.enumOf<ChallengeEnumFactorTypes>(ChallengeEnumFactorTypes);
