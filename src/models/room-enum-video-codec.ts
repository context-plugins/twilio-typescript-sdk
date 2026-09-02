import { s, type EnumSchema } from "../core/index.js";

export const RoomEnumVideoCodec = {
  Vp8: "VP8",
  H264: "H264",
} as const;
export type RoomEnumVideoCodec = (typeof RoomEnumVideoCodec)[keyof typeof RoomEnumVideoCodec] | (string & {});

export const roomEnumVideoCodecSchema: EnumSchema<RoomEnumVideoCodec> =
  s.enumOf<RoomEnumVideoCodec>(RoomEnumVideoCodec);
