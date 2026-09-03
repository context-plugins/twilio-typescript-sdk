import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskReservationEnumConferenceEvent = {
  Start: "start",
  End: "end",
  Join: "join",
  Leave: "leave",
  Mute: "mute",
  Hold: "hold",
  Speaker: "speaker",
} as const;
export type TaskReservationEnumConferenceEvent =
  | (typeof TaskReservationEnumConferenceEvent)[keyof typeof TaskReservationEnumConferenceEvent]
  | (string & {});

export const taskReservationEnumConferenceEventSchema: EnumSchema<TaskReservationEnumConferenceEvent> =
  s.enumOf<TaskReservationEnumConferenceEvent>(TaskReservationEnumConferenceEvent);
