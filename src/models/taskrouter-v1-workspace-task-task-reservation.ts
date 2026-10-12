import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  taskReservationEnumStatusSchema,
  type TaskReservationEnumStatus,
} from "./task-reservation-enum-status.js";

export type TaskrouterV1WorkspaceTaskTaskReservation = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskReservation resource.
   */
  accountSid?: string | null;
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
  /**
   * The current status of the reservation. Can be: `pending`, `accepted`, `rejected`, or `timeout`.
   */
  reservationStatus?: TaskReservationEnumStatus;
  /** The unique string that we created to identify the TaskReservation resource. */
  sid?: string | null;
  /** The SID of the reserved Task resource. */
  taskSid?: string | null;
  /** The `friendly_name` of the Worker that is reserved. */
  workerName?: string | null;
  /** The SID of the reserved Worker resource. */
  workerSid?: string | null;
  /** The SID of the Workspace that this task is contained within. */
  workspaceSid?: string | null;
  /** The absolute URL of the TaskReservation reservation. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceTaskTaskReservationSchema: Schema<TaskrouterV1WorkspaceTaskTaskReservation> =
  s.object<TaskrouterV1WorkspaceTaskTaskReservation>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    reservationStatus: s.optional(s.lazy(() => taskReservationEnumStatusSchema)),
    sid: s.optionalNullable(s.string()),
    taskSid: s.optionalNullable(s.string()),
    workerName: s.optionalNullable(s.string()),
    workerSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      reservationStatus: "reservation_status",
      taskSid: "task_sid",
      workerName: "worker_name",
      workerSid: "worker_sid",
      workspaceSid: "workspace_sid",
    },
  });
