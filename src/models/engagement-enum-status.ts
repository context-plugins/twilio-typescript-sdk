import { s, type EnumSchema } from "../core/index.js";

export const EngagementEnumStatus = {
  Active: "active",
  Ended: "ended",
} as const;
export type EngagementEnumStatus =
  | (typeof EngagementEnumStatus)[keyof typeof EngagementEnumStatus]
  | (string & {});

export const engagementEnumStatusSchema: EnumSchema<EngagementEnumStatus> =
  s.enumOf<EngagementEnumStatus>(EngagementEnumStatus);
