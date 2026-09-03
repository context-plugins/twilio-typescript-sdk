import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoParticipantSummaryEnumTwilioRealm = {
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
export type VideoParticipantSummaryEnumTwilioRealm =
  | (typeof VideoParticipantSummaryEnumTwilioRealm)[keyof typeof VideoParticipantSummaryEnumTwilioRealm]
  | (string & {});

export const videoParticipantSummaryEnumTwilioRealmSchema: EnumSchema<VideoParticipantSummaryEnumTwilioRealm> =
  s.enumOf<VideoParticipantSummaryEnumTwilioRealm>(VideoParticipantSummaryEnumTwilioRealm);
