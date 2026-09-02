import { s, type Schema } from "../core/index.js";
import {
  roomParticipantAnonymizeEnumStatusSchema,
  type RoomParticipantAnonymizeEnumStatus,
} from "./room-participant-anonymize-enum-status.js";

export type VideoV1RoomRoomParticipantRoomParticipantAnonymize = {
  sid?: string | null;
  roomSid?: string | null;
  accountSid?: string | null;
  status?: RoomParticipantAnonymizeEnumStatus;
  identity?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  startTime?: Date | null;
  endTime?: Date | null;
  duration?: number | null;
  url?: string | null;
};

export const videoV1RoomRoomParticipantRoomParticipantAnonymizeSchema: Schema<VideoV1RoomRoomParticipantRoomParticipantAnonymize> =
  s.object<VideoV1RoomRoomParticipantRoomParticipantAnonymize>({
    sid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => roomParticipantAnonymizeEnumStatusSchema)),
    identity: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    duration: s.optionalNullable(s.number()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      roomSid: "room_sid",
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      startTime: "start_time",
      endTime: "end_time",
    },
  });
