import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelInviteEnumAction = {
  Accept: "accept",
  Decline: "decline",
} as const;
export type InteractionChannelInviteEnumAction =
  | (typeof InteractionChannelInviteEnumAction)[keyof typeof InteractionChannelInviteEnumAction]
  | (string & {});

export const interactionChannelInviteEnumActionSchema: EnumSchema<InteractionChannelInviteEnumAction> =
  s.enumOf<InteractionChannelInviteEnumAction>(InteractionChannelInviteEnumAction);
