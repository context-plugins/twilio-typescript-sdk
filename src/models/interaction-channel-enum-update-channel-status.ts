import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelEnumUpdateChannelStatus = {
  Closed: "closed",
  Inactive: "inactive",
} as const;
export type InteractionChannelEnumUpdateChannelStatus =
  | (typeof InteractionChannelEnumUpdateChannelStatus)[keyof typeof InteractionChannelEnumUpdateChannelStatus]
  | (string & {});

export const interactionChannelEnumUpdateChannelStatusSchema: EnumSchema<InteractionChannelEnumUpdateChannelStatus> =
  s.enumOf<InteractionChannelEnumUpdateChannelStatus>(InteractionChannelEnumUpdateChannelStatus);
