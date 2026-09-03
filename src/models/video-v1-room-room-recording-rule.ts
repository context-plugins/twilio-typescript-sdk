import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rule1Schema, type Rule1 } from "./rule1.js";

export type VideoV1RoomRoomRecordingRule = {
  roomSid?: string | null;
  rules?: Rule1[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
};

export const videoV1RoomRoomRecordingRuleSchema: Schema<VideoV1RoomRoomRecordingRule> =
  s.object<VideoV1RoomRoomRecordingRule>({
    roomSid: s.optionalNullable(s.string()),
    rules: s.optionalNullable(s.array(s.lazy(() => rule1Schema))),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    _keysMap: {
      roomSid: "room_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
