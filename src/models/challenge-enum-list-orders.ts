import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChallengeEnumListOrders = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type ChallengeEnumListOrders =
  | (typeof ChallengeEnumListOrders)[keyof typeof ChallengeEnumListOrders]
  | (string & {});

export const challengeEnumListOrdersSchema: EnumSchema<ChallengeEnumListOrders> =
  s.enumOf<ChallengeEnumListOrders>(ChallengeEnumListOrders);
