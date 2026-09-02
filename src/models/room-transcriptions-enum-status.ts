import { s, type EnumSchema } from "../core/index.js";

export const RoomTranscriptionsEnumStatus = {
  Started: "started",
  Stopped: "stopped",
  Failed: "failed",
} as const;
export type RoomTranscriptionsEnumStatus =
  | (typeof RoomTranscriptionsEnumStatus)[keyof typeof RoomTranscriptionsEnumStatus]
  | (string & {});

export const roomTranscriptionsEnumStatusSchema: EnumSchema<RoomTranscriptionsEnumStatus> =
  s.enumOf<RoomTranscriptionsEnumStatus>(RoomTranscriptionsEnumStatus);
