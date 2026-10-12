import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The tracks to be included in the Stream. Possible values are `inbound_track`, `outbound_track`,
 * `both_tracks`. Default value is `inbound_track`.
 */
export const StreamEnumTrack = {
  InboundTrack: "inbound_track",
  OutboundTrack: "outbound_track",
  BothTracks: "both_tracks",
} as const;
export type StreamEnumTrack = (typeof StreamEnumTrack)[keyof typeof StreamEnumTrack] | (string & {});

export const streamEnumTrackSchema: EnumSchema<StreamEnumTrack> = s.enumOf<StreamEnumTrack>(StreamEnumTrack);
