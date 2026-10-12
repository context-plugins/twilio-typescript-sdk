import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of room. Use `group` for new implementations. `go`, `peer-to-peer`, and `group-small` are
 * deprecated.
 */
export const RoomEnumRoomType = {
  Group: "group",
  Go: "go",
  PeerToPeer: "peer-to-peer",
  GroupSmall: "group-small",
} as const;
export type RoomEnumRoomType = (typeof RoomEnumRoomType)[keyof typeof RoomEnumRoomType] | (string & {});

export const roomEnumRoomTypeSchema: EnumSchema<RoomEnumRoomType> =
  s.enumOf<RoomEnumRoomType>(RoomEnumRoomType);
