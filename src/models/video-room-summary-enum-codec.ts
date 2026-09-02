import { s, type EnumSchema } from "../core/index.js";

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
