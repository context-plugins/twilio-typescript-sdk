import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SiprecEnumTrack = {
  InboundTrack: "inbound_track",
  OutboundTrack: "outbound_track",
  BothTracks: "both_tracks",
} as const;
export type SiprecEnumTrack = (typeof SiprecEnumTrack)[keyof typeof SiprecEnumTrack] | (string & {});

export const siprecEnumTrackSchema: EnumSchema<SiprecEnumTrack> = s.enumOf<SiprecEnumTrack>(SiprecEnumTrack);
