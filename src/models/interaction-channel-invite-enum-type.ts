import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelInviteEnumType = {
  Taskrouter: "taskrouter",
} as const;
export type InteractionChannelInviteEnumType =
  | (typeof InteractionChannelInviteEnumType)[keyof typeof InteractionChannelInviteEnumType]
  | (string & {});

export const interactionChannelInviteEnumTypeSchema: EnumSchema<InteractionChannelInviteEnumType> =
  s.enumOf<InteractionChannelInviteEnumType>(InteractionChannelInviteEnumType);
