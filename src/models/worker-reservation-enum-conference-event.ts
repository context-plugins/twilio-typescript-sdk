import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const WorkerReservationEnumConferenceEvent = {
  Start: "start",
  End: "end",
  Join: "join",
  Leave: "leave",
  Mute: "mute",
  Hold: "hold",
  Speaker: "speaker",
} as const;
export type WorkerReservationEnumConferenceEvent =
  | (typeof WorkerReservationEnumConferenceEvent)[keyof typeof WorkerReservationEnumConferenceEvent]
  | (string & {});

export const workerReservationEnumConferenceEventSchema: EnumSchema<WorkerReservationEnumConferenceEvent> =
  s.enumOf<WorkerReservationEnumConferenceEvent>(WorkerReservationEnumConferenceEvent);
