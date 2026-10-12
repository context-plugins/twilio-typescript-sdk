import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The codec used to encode the track. Can be: `VP8`, `H264`, `OPUS`, and `PCMU`. */
export const RecordingEnumCodec = {
  Vp8: "VP8",
  H264: "H264",
  Opus: "OPUS",
  Pcmu: "PCMU",
} as const;
export type RecordingEnumCodec = (typeof RecordingEnumCodec)[keyof typeof RecordingEnumCodec] | (string & {});

export const recordingEnumCodecSchema: EnumSchema<RecordingEnumCodec> =
  s.enumOf<RecordingEnumCodec>(RecordingEnumCodec);
