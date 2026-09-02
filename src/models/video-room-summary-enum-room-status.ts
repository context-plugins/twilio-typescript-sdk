import { s, type EnumSchema } from "../core/index.js";

export const VideoRoomSummaryEnumRoomStatus = {
  InProgress: "in_progress",
  Completed: "completed",
} as const;
export type VideoRoomSummaryEnumRoomStatus =
  | (typeof VideoRoomSummaryEnumRoomStatus)[keyof typeof VideoRoomSummaryEnumRoomStatus]
  | (string & {});

export const videoRoomSummaryEnumRoomStatusSchema: EnumSchema<VideoRoomSummaryEnumRoomStatus> =
  s.enumOf<VideoRoomSummaryEnumRoomStatus>(VideoRoomSummaryEnumRoomStatus);
