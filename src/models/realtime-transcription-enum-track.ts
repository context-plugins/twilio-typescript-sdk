import { s, type EnumSchema } from "../core/index.js";

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
