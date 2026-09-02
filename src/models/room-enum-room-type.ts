import { s, type EnumSchema } from "../core/index.js";

export const RoomEnumRoomType = {
  Group: "group",
  Go: "go",
  PeerToPeer: "peer-to-peer",
  GroupSmall: "group-small",
} as const;
export type RoomEnumRoomType = (typeof RoomEnumRoomType)[keyof typeof RoomEnumRoomType] | (string & {});

export const roomEnumRoomTypeSchema: EnumSchema<RoomEnumRoomType> =
  s.enumOf<RoomEnumRoomType>(RoomEnumRoomType);
