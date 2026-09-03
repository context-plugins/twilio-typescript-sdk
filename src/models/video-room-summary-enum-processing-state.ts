import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
