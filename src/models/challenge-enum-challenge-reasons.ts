import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Reason for the Challenge to be in certain `status`. One of `none`, `not_needed` or
 * `not_requested`.
 */
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
