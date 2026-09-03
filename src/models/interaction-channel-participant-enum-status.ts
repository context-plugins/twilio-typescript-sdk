import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InteractionChannelParticipantEnumStatus = {
  Closed: "closed",
  Wrapup: "wrapup",
} as const;
export type InteractionChannelParticipantEnumStatus =
  | (typeof InteractionChannelParticipantEnumStatus)[keyof typeof InteractionChannelParticipantEnumStatus]
  | (string & {});

export const interactionChannelParticipantEnumStatusSchema: EnumSchema<InteractionChannelParticipantEnumStatus> =
  s.enumOf<InteractionChannelParticipantEnumStatus>(InteractionChannelParticipantEnumStatus);
