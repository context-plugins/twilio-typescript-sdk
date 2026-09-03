import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskReservationEnumSupervisorMode = {
  Monitor: "monitor",
  Whisper: "whisper",
  Barge: "barge",
} as const;
export type TaskReservationEnumSupervisorMode =
  | (typeof TaskReservationEnumSupervisorMode)[keyof typeof TaskReservationEnumSupervisorMode]
  | (string & {});

export const taskReservationEnumSupervisorModeSchema: EnumSchema<TaskReservationEnumSupervisorMode> =
  s.enumOf<TaskReservationEnumSupervisorMode>(TaskReservationEnumSupervisorMode);
