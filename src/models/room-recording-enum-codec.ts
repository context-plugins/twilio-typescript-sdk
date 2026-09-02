import { s, type EnumSchema } from "../core/index.js";

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
