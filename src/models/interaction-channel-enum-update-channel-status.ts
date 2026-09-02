import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelEnumUpdateChannelStatus = {
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type InteractionChannelEnumUpdateChannelStatus =
  | (typeof InteractionChannelEnumUpdateChannelStatus)[keyof typeof InteractionChannelEnumUpdateChannelStatus]
  | (string & {});

export const interactionChannelEnumUpdateChannelStatusSchema: EnumSchema<InteractionChannelEnumUpdateChannelStatus> =
  s.enumOf<InteractionChannelEnumUpdateChannelStatus>(InteractionChannelEnumUpdateChannelStatus);
