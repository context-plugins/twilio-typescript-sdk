import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the Engagement. Can be: `active` or `ended`., The status of the Execution. Can be:
 * `active` or `ended`.
 */
export const EngagementEnumStatus = {
  Active: "active",
  Ended: "ended",
} as const;
export type EngagementEnumStatus =
  | (typeof EngagementEnumStatus)[keyof typeof EngagementEnumStatus]
  | (string & {});

export const engagementEnumStatusSchema: EnumSchema<EngagementEnumStatus> =
  s.enumOf<EngagementEnumStatus>(EngagementEnumStatus);
