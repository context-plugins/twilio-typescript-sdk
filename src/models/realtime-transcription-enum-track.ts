import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** One of `inbound_track`, `outbound_track`, `both_tracks`. */
export const RealtimeTranscriptionEnumTrack = {
  InboundTrack: "inbound_track",
  OutboundTrack: "outbound_track",
  BothTracks: "both_tracks",
} as const;
export type RealtimeTranscriptionEnumTrack =
  | (typeof RealtimeTranscriptionEnumTrack)[keyof typeof RealtimeTranscriptionEnumTrack]
  | (string & {});

export const realtimeTranscriptionEnumTrackSchema: EnumSchema<RealtimeTranscriptionEnumTrack> =
  s.enumOf<RealtimeTranscriptionEnumTrack>(RealtimeTranscriptionEnumTrack);
