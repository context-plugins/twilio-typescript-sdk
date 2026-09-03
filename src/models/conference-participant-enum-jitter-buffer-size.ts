import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceParticipantEnumJitterBufferSize = {
  Large: "large",
  Small: "small",
  Medium: "medium",
  Off: "off",
} as const;
export type ConferenceParticipantEnumJitterBufferSize =
  | (typeof ConferenceParticipantEnumJitterBufferSize)[keyof typeof ConferenceParticipantEnumJitterBufferSize]
  | (string & {});

export const conferenceParticipantEnumJitterBufferSizeSchema: EnumSchema<ConferenceParticipantEnumJitterBufferSize> =
  s.enumOf<ConferenceParticipantEnumJitterBufferSize>(ConferenceParticipantEnumJitterBufferSize);
