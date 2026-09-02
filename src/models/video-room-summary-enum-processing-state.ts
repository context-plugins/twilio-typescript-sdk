import { s, type EnumSchema } from "../core/index.js";

export const VideoRoomSummaryEnumProcessingState = {
  Complete: "complete",
  InProgress: "in_progress",
  Timeout: "timeout",
  NotStarted: "not_started",
} as const;
export type VideoRoomSummaryEnumProcessingState =
  | (typeof VideoRoomSummaryEnumProcessingState)[keyof typeof VideoRoomSummaryEnumProcessingState]
  | (string & {});

export const videoRoomSummaryEnumProcessingStateSchema: EnumSchema<VideoRoomSummaryEnumProcessingState> =
  s.enumOf<VideoRoomSummaryEnumProcessingState>(VideoRoomSummaryEnumProcessingState);
