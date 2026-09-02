import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelEnumStatus = {
  Closed: "closed",
  Wrapup: "wrapup",
} as const;
export type InteractionChannelEnumStatus =
  | (typeof InteractionChannelEnumStatus)[keyof typeof InteractionChannelEnumStatus]
  | (string & {});

export const interactionChannelEnumStatusSchema: EnumSchema<InteractionChannelEnumStatus> =
  s.enumOf<InteractionChannelEnumStatus>(InteractionChannelEnumStatus);
