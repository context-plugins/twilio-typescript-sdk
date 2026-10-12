import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The codec used for the recording. Can be: `VP8` or `H264`. */
export const RoomRecordingEnumCodec = {
  Vp8: "VP8",
  H264: "H264",
  Opus: "OPUS",
  Pcmu: "PCMU",
} as const;
export type RoomRecordingEnumCodec =
  | (typeof RoomRecordingEnumCodec)[keyof typeof RoomRecordingEnumCodec]
  | (string & {});

export const roomRecordingEnumCodecSchema: EnumSchema<RoomRecordingEnumCodec> =
  s.enumOf<RoomRecordingEnumCodec>(RoomRecordingEnumCodec);
