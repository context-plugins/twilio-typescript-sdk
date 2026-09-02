import { s, type EnumSchema } from "../core/index.js";

export const VideoRoomSummaryEnumTwilioRealm = {
  Us1: "us1",
  Us2: "us2",
  Au1: "au1",
  Br1: "br1",
  Ie1: "ie1",
  Jp1: "jp1",
  Sg1: "sg1",
  In1: "in1",
  De1: "de1",
  Gll: "gll",
} as const;
export type VideoRoomSummaryEnumTwilioRealm =
  | (typeof VideoRoomSummaryEnumTwilioRealm)[keyof typeof VideoRoomSummaryEnumTwilioRealm]
  | (string & {});

export const videoRoomSummaryEnumTwilioRealmSchema: EnumSchema<VideoRoomSummaryEnumTwilioRealm> =
  s.enumOf<VideoRoomSummaryEnumTwilioRealm>(VideoRoomSummaryEnumTwilioRealm);
