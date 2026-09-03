import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConferenceParticipantEnumRegion = {
  Us1: "us1",
  Us2: "us2",
  Au1: "au1",
  Br1: "br1",
  Ie1: "ie1",
  Jp1: "jp1",
  Sg1: "sg1",
  De1: "de1",
  In1: "in1",
} as const;
export type ConferenceParticipantEnumRegion =
  | (typeof ConferenceParticipantEnumRegion)[keyof typeof ConferenceParticipantEnumRegion]
  | (string & {});

export const conferenceParticipantEnumRegionSchema: EnumSchema<ConferenceParticipantEnumRegion> =
  s.enumOf<ConferenceParticipantEnumRegion>(ConferenceParticipantEnumRegion);
