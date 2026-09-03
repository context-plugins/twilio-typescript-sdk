import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelInviteEnumType = {
  Taskrouter: "taskrouter",
} as const;
export type InteractionChannelInviteEnumType =
  | (typeof InteractionChannelInviteEnumType)[keyof typeof InteractionChannelInviteEnumType]
  | (string & {});

export const interactionChannelInviteEnumTypeSchema: EnumSchema<InteractionChannelInviteEnumType> =
  s.enumOf<InteractionChannelInviteEnumType>(InteractionChannelInviteEnumType);
