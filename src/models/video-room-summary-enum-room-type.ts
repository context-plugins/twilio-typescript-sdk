import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumRoomType = {
  Go: "go",
  PeerToPeer: "peer_to_peer",
  Group: "group",
  GroupSmall: "group_small",
} as const;
export type VideoRoomSummaryEnumRoomType =
  | (typeof VideoRoomSummaryEnumRoomType)[keyof typeof VideoRoomSummaryEnumRoomType]
  | (string & {});

export const videoRoomSummaryEnumRoomTypeSchema: EnumSchema<VideoRoomSummaryEnumRoomType> =
  s.enumOf<VideoRoomSummaryEnumRoomType>(VideoRoomSummaryEnumRoomType);
