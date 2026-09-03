import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomParticipantEnumStatusSchema,
  type RoomParticipantEnumStatus,
} from "./room-participant-enum-status.js";

export type VideoV1RoomRoomParticipant = {
  sid?: string | null;
  roomSid?: string | null;
  accountSid?: string | null;
  status?: RoomParticipantEnumStatus;
  identity?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  duration?: number | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const videoV1RoomRoomParticipantSchema: Schema<VideoV1RoomRoomParticipant> =
  s.object<VideoV1RoomRoomParticipant>({
    sid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => roomParticipantEnumStatusSchema)),
    identity: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    duration: s.optionalNullable(s.number()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      roomSid: "room_sid",
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      startTime: "start_time",
      endTime: "end_time",
    },
  });
