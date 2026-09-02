import { s, type EnumSchema } from "../core/index.js";

export const WorkerReservationEnumStatus = {
  Pending: "pending",
  Accepted: "accepted",
  Rejected: "rejected",
  Timeout: "timeout",
  Canceled: "canceled",
  Rescinded: "rescinded",
  Wrapping: "wrapping",
  Completed: "completed",
} as const;
export type WorkerReservationEnumStatus =
  | (typeof WorkerReservationEnumStatus)[keyof typeof WorkerReservationEnumStatus]
  | (string & {});

export const workerReservationEnumStatusSchema: EnumSchema<WorkerReservationEnumStatus> =
  s.enumOf<WorkerReservationEnumStatus>(WorkerReservationEnumStatus);
