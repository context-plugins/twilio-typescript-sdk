import { s, type EnumSchema } from "../core/index.js";

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
