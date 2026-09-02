import { s, type Schema } from "../core/index.js";
import {
  roomTranscriptionsEnumStatusSchema,
  type RoomTranscriptionsEnumStatus,
} from "./room-transcriptions-enum-status.js";

export type VideoV1RoomRoomTranscriptions = {
  ttid?: string | null;
  accountSid?: string | null;
  roomSid?: string | null;
  sourceSid?: string | null;
  status?: RoomTranscriptionsEnumStatus;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  duration?: number | null;
  url?: string | null;
  configuration?: Record<string, unknown> | null;
};

export const videoV1RoomRoomTranscriptionsSchema: Schema<VideoV1RoomRoomTranscriptions> =
  s.object<VideoV1RoomRoomTranscriptions>({
    ttid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    sourceSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => roomTranscriptionsEnumStatusSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    duration: s.optionalNullable(s.number()),
    url: s.optionalNullable(s.string()),
    configuration: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      roomSid: "room_sid",
      sourceSid: "source_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      startTime: "start_time",
      endTime: "end_time",
    },
  });
