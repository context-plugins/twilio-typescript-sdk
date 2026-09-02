import { s, type EnumSchema } from "../core/index.js";

export const ConferenceEnumRegion = {
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
export type ConferenceEnumRegion =
  | (typeof ConferenceEnumRegion)[keyof typeof ConferenceEnumRegion]
  | (string & {});

export const conferenceEnumRegionSchema: EnumSchema<ConferenceEnumRegion> =
  s.enumOf<ConferenceEnumRegion>(ConferenceEnumRegion);
