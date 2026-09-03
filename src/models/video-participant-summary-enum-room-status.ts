import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoParticipantSummaryEnumRoomStatus = {
  InProgress: "in_progress",
  Connected: "connected",
  Completed: "completed",
  Disconnected: "disconnected",
} as const;
export type VideoParticipantSummaryEnumRoomStatus =
  | (typeof VideoParticipantSummaryEnumRoomStatus)[keyof typeof VideoParticipantSummaryEnumRoomStatus]
  | (string & {});

export const videoParticipantSummaryEnumRoomStatusSchema: EnumSchema<VideoParticipantSummaryEnumRoomStatus> =
  s.enumOf<VideoParticipantSummaryEnumRoomStatus>(VideoParticipantSummaryEnumRoomStatus);
