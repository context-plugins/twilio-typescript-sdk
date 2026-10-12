import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the reservation. Can be: `pending`, `accepted`, `rejected`, `timeout`,
 * `canceled`, or `rescinded`.
 */
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
