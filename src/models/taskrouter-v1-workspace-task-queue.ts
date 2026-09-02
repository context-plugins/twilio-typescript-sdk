import { s, type Schema } from "../core/index.js";
import { taskQueueEnumTaskOrderSchema, type TaskQueueEnumTaskOrder } from "./task-queue-enum-task-order.js";

export type TaskrouterV1WorkspaceTaskQueue = {
  accountSid?: string | null;
  assignmentActivitySid?: string | null;
  assignmentActivityName?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  friendlyName?: string | null;
  maxReservedWorkers?: number;
  reservationActivitySid?: string | null;
  reservationActivityName?: string | null;
  sid?: string | null;
  targetWorkers?: string | null;
  taskOrder?: TaskQueueEnumTaskOrder;
  url?: string | null;
  workspaceSid?: string | null;
  links?: Record<string, unknown> | null;
};

export const taskrouterV1WorkspaceTaskQueueSchema: Schema<TaskrouterV1WorkspaceTaskQueue> =
  s.object<TaskrouterV1WorkspaceTaskQueue>({
    accountSid: s.optionalNullable(s.string()),
    assignmentActivitySid: s.optionalNullable(s.string()),
    assignmentActivityName: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    friendlyName: s.optionalNullable(s.string()),
    maxReservedWorkers: s.optional(s.number()),
    reservationActivitySid: s.optionalNullable(s.string()),
    reservationActivityName: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    targetWorkers: s.optionalNullable(s.string()),
    taskOrder: s.optional(s.lazy(() => taskQueueEnumTaskOrderSchema)),
    url: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      accountSid: "account_sid",
      assignmentActivitySid: "assignment_activity_sid",
      assignmentActivityName: "assignment_activity_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      maxReservedWorkers: "max_reserved_workers",
      reservationActivitySid: "reservation_activity_sid",
      reservationActivityName: "reservation_activity_name",
      targetWorkers: "target_workers",
      taskOrder: "task_order",
      workspaceSid: "workspace_sid",
    },
  });
