import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChallengeEnumChallengeStatuses = {
  Pending: "pending",
  Expired: "expired",
  Approved: "approved",
  Denied: "denied",
} as const;
export type ChallengeEnumChallengeStatuses =
  | (typeof ChallengeEnumChallengeStatuses)[keyof typeof ChallengeEnumChallengeStatuses]
  | (string & {});

export const challengeEnumChallengeStatusesSchema: EnumSchema<ChallengeEnumChallengeStatuses> =
  s.enumOf<ChallengeEnumChallengeStatuses>(ChallengeEnumChallengeStatuses);
