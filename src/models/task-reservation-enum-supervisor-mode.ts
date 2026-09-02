import { s, type EnumSchema } from "../core/index.js";

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
