import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

export type VideoV1RoomRoomParticipantRoomParticipantSubscribeRule = {
  /** The SID of the Participant resource for the Subscribe Rules. */
  participantSid?: string | null;
  /** The SID of the Room resource for the Subscribe Rules */
  roomSid?: string | null;
  /**
   * A collection of Subscribe Rules that describe how to include or exclude matching tracks. See
   * the [Specifying Subscribe
   * Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for
   * further information.
   */
  rules?: Rule[] | null;
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
};

export const videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema: Schema<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule> =
  s.object<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule>({
    participantSid: s.optionalNullable(s.string()),
    roomSid: s.optionalNullable(s.string()),
    rules: s.optionalNullable(s.array(s.lazy(() => ruleSchema))),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      participantSid: "participant_sid",
      roomSid: "room_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
