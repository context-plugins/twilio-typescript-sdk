import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomTranscriptionsEnumStatusSchema,
  type RoomTranscriptionsEnumStatus,
} from "./room-transcriptions-enum-status.js";

export type VideoV1RoomRoomTranscriptions = {
  /** The unique string that we created to identify the transcriptions resource. */
  ttid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Room
   * resource.
   */
  accountSid?: string | null;
  /** The SID of the transcriptions's room. */
  roomSid?: string | null;
  /** The SID of the transcriptions's associated call. */
  sourceSid?: string | null;
  /** The status of the transcriptions resource. */
  status?: RoomTranscriptionsEnumStatus;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * The time of transcriptions connected to the room in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  startTime?: Date | null;
  /**
   * The time when the transcriptions disconnected from the room in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  endTime?: Date | null;
  /**
   * The duration in seconds that the transcriptions were `connected`. Populated only after the
   * transcriptions is `stopped`.
   */
  duration?: number | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /**
   * An JSON object that describes the video layout of the composition in terms of regions. See
   * [Specifying Video
   * Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts)
   * for more info.
   */
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
    duration: s.optionalNullable(s.int()),
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
