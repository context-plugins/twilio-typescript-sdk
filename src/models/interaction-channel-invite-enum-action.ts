import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelInviteEnumAction = {
  Accept: "accept",
  Decline: "decline",
} as const;
export type InteractionChannelInviteEnumAction =
  | (typeof InteractionChannelInviteEnumAction)[keyof typeof InteractionChannelInviteEnumAction]
  | (string & {});

export const interactionChannelInviteEnumActionSchema: EnumSchema<InteractionChannelInviteEnumAction> =
  s.enumOf<InteractionChannelInviteEnumAction>(InteractionChannelInviteEnumAction);
