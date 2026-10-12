import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Factor Type of this Challenge. Currently `push` and `totp` are supported. */
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
