import { s, type Schema } from "../core/index.js";
import { roomRecordingEnumCodecSchema, type RoomRecordingEnumCodec } from "./room-recording-enum-codec.js";
import { roomRecordingEnumFormatSchema, type RoomRecordingEnumFormat } from "./room-recording-enum-format.js";
import { roomRecordingEnumStatusSchema, type RoomRecordingEnumStatus } from "./room-recording-enum-status.js";
import { roomRecordingEnumTypeSchema, type RoomRecordingEnumType } from "./room-recording-enum-type.js";

export type VideoV1RoomRoomRecording = {
  accountSid?: string | null;
  status?: RoomRecordingEnumStatus;
  dateCreated?: Date | null;
  sid?: string | null;
  sourceSid?: string | null;
  size?: number | null;
  url?: string | null;
  type?: RoomRecordingEnumType;
  duration?: number | null;
  containerFormat?: RoomRecordingEnumFormat;
  codec?: RoomRecordingEnumCodec;
  groupingSids?: Record<string, unknown> | null;
  trackName?: string | null;
  offset?: number | null;
  mediaExternalLocation?: string | null;
  roomSid?: string | null;
  links?: Record<string, unknown> | null;
};

export const videoV1RoomRoomRecordingSchema: Schema<VideoV1RoomRoomRecording> =
  s.object<VideoV1RoomRoomRecording>({
    accountSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => roomRecordingEnumStatusSchema)),
    dateCreated: s.optionalNullable(s.dateTime()),
    sid: s.optionalNullable(s.string()),
    sourceSid: s.optionalNullable(s.string()),
    size: s.optionalNullable(s.number()),
    url: s.optionalNullable(s.string()),
    type: s.optional(s.lazy(() => roomRecordingEnumTypeSchema)),
    duration: s.optionalNullable(s.number()),
    containerFormat: s.optional(s.lazy(() => roomRecordingEnumFormatSchema)),
    codec: s.optional(s.lazy(() => roomRecordingEnumCodecSchema)),
    groupingSids: s.optionalNullable(s.record(s.string(), s.unknown())),
    trackName: s.optionalNullable(s.string()),
    offset: s.optionalNullable(s.number()),
    mediaExternalLocation: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      sourceSid: "source_sid",
      containerFormat: "container_format",
      groupingSids: "grouping_sids",
      trackName: "track_name",
      mediaExternalLocation: "media_external_location",
      roomSid: "room_sid",
    },
  });
