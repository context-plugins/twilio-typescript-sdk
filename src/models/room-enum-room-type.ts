import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RoomEnumRoomType = {
  Group: "group",
  Go: "go",
  PeerToPeer: "peer-to-peer",
  GroupSmall: "group-small",
} as const;
export type RoomEnumRoomType = (typeof RoomEnumRoomType)[keyof typeof RoomEnumRoomType] | (string & {});

export const roomEnumRoomTypeSchema: EnumSchema<RoomEnumRoomType> =
  s.enumOf<RoomEnumRoomType>(RoomEnumRoomType);
