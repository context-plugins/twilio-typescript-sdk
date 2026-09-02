import { s, type Schema } from "../core/index.js";
import {
  workerReservationEnumStatusSchema,
  type WorkerReservationEnumStatus,
} from "./worker-reservation-enum-status.js";

export type TaskrouterV1WorkspaceWorkerWorkerReservation = {
  accountSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  reservationStatus?: WorkerReservationEnumStatus;
  sid?: string | null;
  taskSid?: string | null;
  workerName?: string | null;
  workerSid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceWorkerWorkerReservationSchema: Schema<TaskrouterV1WorkspaceWorkerWorkerReservation> =
  s.object<TaskrouterV1WorkspaceWorkerWorkerReservation>({
    accountSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    reservationStatus: s.optional(s.lazy(() => workerReservationEnumStatusSchema)),
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
