import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StreamEnumTrack = {
  InboundTrack: "inbound_track",
  OutboundTrack: "outbound_track",
  BothTracks: "both_tracks",
} as const;
export type StreamEnumTrack = (typeof StreamEnumTrack)[keyof typeof StreamEnumTrack] | (string & {});

export const streamEnumTrackSchema: EnumSchema<StreamEnumTrack> = s.enumOf<StreamEnumTrack>(StreamEnumTrack);
