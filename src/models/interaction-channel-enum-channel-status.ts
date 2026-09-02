import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelEnumChannelStatus = {
  Setup: "setup",
  Active: "active",
  Failed: "failed",
  Closed: "closed",
  Inactive: "inactive",
  Pause: "pause",
  Transfer: "transfer",
} as const;
export type InteractionChannelEnumChannelStatus =
  | (typeof InteractionChannelEnumChannelStatus)[keyof typeof InteractionChannelEnumChannelStatus]
  | (string & {});

export const interactionChannelEnumChannelStatusSchema: EnumSchema<InteractionChannelEnumChannelStatus> =
  s.enumOf<InteractionChannelEnumChannelStatus>(InteractionChannelEnumChannelStatus);
