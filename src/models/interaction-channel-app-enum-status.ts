import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelAppEnumStatus = {
  Adding: "adding",
  Active: "active",
  Pausing: "pausing",
  Paused: "paused",
  Resuming: "resuming",
  Removing: "removing",
  Removed: "removed",
  Errored: "errored",
} as const;
export type InteractionChannelAppEnumStatus =
  | (typeof InteractionChannelAppEnumStatus)[keyof typeof InteractionChannelAppEnumStatus]
  | (string & {});

export const interactionChannelAppEnumStatusSchema: EnumSchema<InteractionChannelAppEnumStatus> =
  s.enumOf<InteractionChannelAppEnumStatus>(InteractionChannelAppEnumStatus);
