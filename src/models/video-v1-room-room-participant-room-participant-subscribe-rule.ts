import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { ruleSchema, type Rule } from "./rule.js";

export type VideoV1RoomRoomParticipantRoomParticipantSubscribeRule = {
  participantSid?: string | null;
  roomSid?: string | null;
  rules?: Rule[] | null;
  dateCreated?: Date | null;
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
