import { s, type EnumSchema } from "../core/index.js";

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
