import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { rule1Schema, type Rule1 } from "./rule1.js";

export type VideoV1RoomRoomRecordingRule = {
  /** The SID of the Room resource for the Recording Rules */
  roomSid?: string | null;
  /**
   * A collection of Recording Rules that describe how to include or exclude matching tracks for
   * recording
   */
  rules?: Rule1[] | null;
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
