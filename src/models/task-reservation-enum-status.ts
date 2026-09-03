import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TaskReservationEnumStatus = {
  Pending: "pending",
  Accepted: "accepted",
  Rejected: "rejected",
  Timeout: "timeout",
  Canceled: "canceled",
  Rescinded: "rescinded",
  Wrapping: "wrapping",
  Completed: "completed",
} as const;
export type TaskReservationEnumStatus =
  | (typeof TaskReservationEnumStatus)[keyof typeof TaskReservationEnumStatus]
  | (string & {});

export const taskReservationEnumStatusSchema: EnumSchema<TaskReservationEnumStatus> =
  s.enumOf<TaskReservationEnumStatus>(TaskReservationEnumStatus);
