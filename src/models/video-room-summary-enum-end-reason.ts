import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VideoRoomSummaryEnumEndReason = {
  RoomEndedViaApi: "room_ended_via_api",
  Timeout: "timeout",
} as const;
export type VideoRoomSummaryEnumEndReason =
  | (typeof VideoRoomSummaryEnumEndReason)[keyof typeof VideoRoomSummaryEnumEndReason]
  | (string & {});

export const videoRoomSummaryEnumEndReasonSchema: EnumSchema<VideoRoomSummaryEnumEndReason> =
  s.enumOf<VideoRoomSummaryEnumEndReason>(VideoRoomSummaryEnumEndReason);
