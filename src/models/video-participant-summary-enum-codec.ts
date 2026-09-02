import { s, type EnumSchema } from "../core/index.js";

export const VideoParticipantSummaryEnumCodec = {
  Vp8: "VP8",
  H264: "H264",
  Vp9: "VP9",
  Opus: "opus",
} as const;
export type VideoParticipantSummaryEnumCodec =
  | (typeof VideoParticipantSummaryEnumCodec)[keyof typeof VideoParticipantSummaryEnumCodec]
  | (string & {});

export const videoParticipantSummaryEnumCodecSchema: EnumSchema<VideoParticipantSummaryEnumCodec> =
  s.enumOf<VideoParticipantSummaryEnumCodec>(VideoParticipantSummaryEnumCodec);
