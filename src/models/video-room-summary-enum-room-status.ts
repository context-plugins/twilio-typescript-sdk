import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumRoomStatus = {
  InProgress: "in_progress",
  Completed: "completed",
} as const;
export type VideoRoomSummaryEnumRoomStatus =
  | (typeof VideoRoomSummaryEnumRoomStatus)[keyof typeof VideoRoomSummaryEnumRoomStatus]
  | (string & {});

export const videoRoomSummaryEnumRoomStatusSchema: EnumSchema<VideoRoomSummaryEnumRoomStatus> =
  s.enumOf<VideoRoomSummaryEnumRoomStatus>(VideoRoomSummaryEnumRoomStatus);
