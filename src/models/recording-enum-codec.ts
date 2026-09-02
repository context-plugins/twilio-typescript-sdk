import { s, type EnumSchema } from "../core/index.js";

export const RecordingEnumCodec = {
  Vp8: "VP8",
  H264: "H264",
  Opus: "OPUS",
  Pcmu: "PCMU",
} as const;
export type RecordingEnumCodec = (typeof RecordingEnumCodec)[keyof typeof RecordingEnumCodec] | (string & {});

export const recordingEnumCodecSchema: EnumSchema<RecordingEnumCodec> =
  s.enumOf<RecordingEnumCodec>(RecordingEnumCodec);
