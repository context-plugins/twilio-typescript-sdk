import { s, type EnumSchema } from "../core/index.js";

export const ChallengeEnumChallengeReasons = {
  None: "none",
  NotNeeded: "not_needed",
  NotRequested: "not_requested",
} as const;
export type ChallengeEnumChallengeReasons =
  | (typeof ChallengeEnumChallengeReasons)[keyof typeof ChallengeEnumChallengeReasons]
  | (string & {});

export const challengeEnumChallengeReasonsSchema: EnumSchema<ChallengeEnumChallengeReasons> =
  s.enumOf<ChallengeEnumChallengeReasons>(ChallengeEnumChallengeReasons);
