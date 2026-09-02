import { s, type EnumSchema } from "../core/index.js";

export const ChallengeEnumListOrders = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type ChallengeEnumListOrders =
  | (typeof ChallengeEnumListOrders)[keyof typeof ChallengeEnumListOrders]
  | (string & {});

export const challengeEnumListOrdersSchema: EnumSchema<ChallengeEnumListOrders> =
  s.enumOf<ChallengeEnumListOrders>(ChallengeEnumListOrders);
