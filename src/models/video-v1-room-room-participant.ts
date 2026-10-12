import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  roomParticipantEnumStatusSchema,
  type RoomParticipantEnumStatus,
} from "./room-participant-enum-status.js";

export type VideoV1RoomRoomParticipant = {
  /** The unique string that we created to identify the RoomParticipant resource. */
  sid?: string | null;
  /** The SID of the participant's room. */
  roomSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * RoomParticipant resource.
   */
  accountSid?: string | null;
  /** The status of the Participant. Can be: `connected` or `disconnected`. */
  status?: RoomParticipantEnumStatus;
  /**
   * The application-defined string that uniquely identifies the resource's User within a Room. If a
   * client joins with an existing Identity, the existing client is disconnected. See [access
   * tokens](https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens) and
   * [limits](https://www.twilio.com/docs/video/programmable-video-limits) for more info.
   */
  identity?: string | null;
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
   * The time of participant connected to the room in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  startTime?: Date | null;
  /**
   * The time when the participant disconnected from the room in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
   */
  endTime?: Date | null;
  /**
   * The duration in seconds that the participant was `connected`. Populated only after the
   * participant is `disconnected`.
   */
  duration?: number | null;
  /** The absolute URL of the resource. */
  url?: string | null;
  /** The URLs of related resources. */
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
    duration: s.optionalNullable(s.int()),
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
