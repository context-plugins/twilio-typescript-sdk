import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumCodec = {
  Vp8: "VP8",
  H264: "H264",
  Vp9: "VP9",
  Opus: "opus",
} as const;
export type VideoRoomSummaryEnumCodec =
  | (typeof VideoRoomSummaryEnumCodec)[keyof typeof VideoRoomSummaryEnumCodec]
  | (string & {});

export const videoRoomSummaryEnumCodecSchema: EnumSchema<VideoRoomSummaryEnumCodec> =
  s.enumOf<VideoRoomSummaryEnumCodec>(VideoRoomSummaryEnumCodec);
