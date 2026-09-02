import { s, type EnumSchema } from "../core/index.js";

export const InteractionChannelParticipantEnumStatus = {
  Closed: "closed",
  Wrapup: "wrapup",
} as const;
export type InteractionChannelParticipantEnumStatus =
  | (typeof InteractionChannelParticipantEnumStatus)[keyof typeof InteractionChannelParticipantEnumStatus]
  | (string & {});

export const interactionChannelParticipantEnumStatusSchema: EnumSchema<InteractionChannelParticipantEnumStatus> =
  s.enumOf<InteractionChannelParticipantEnumStatus>(InteractionChannelParticipantEnumStatus);
