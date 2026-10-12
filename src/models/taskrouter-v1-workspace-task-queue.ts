import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskQueueEnumTaskOrderSchema, type TaskQueueEnumTaskOrder } from "./task-queue-enum-task-order.js";

export type TaskrouterV1WorkspaceTaskQueue = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskQueue resource.
   */
  accountSid?: string | null;
  /** The SID of the Activity to assign Workers when a task is assigned for them. */
  assignmentActivitySid?: string | null;
  /** The name of the Activity to assign Workers when a task is assigned for them. */
  assignmentActivityName?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The maximum number of Workers to reserve for the assignment of a task in the queue. Can be an
   * integer between 1 and 50, inclusive and defaults to 1.
   *
   * @default 0
   */
  maxReservedWorkers?: number;
  /** The SID of the Activity to assign Workers once a task is reserved for them. */
  reservationActivitySid?: string | null;
  /** The name of the Activity to assign Workers once a task is reserved for them. */
  reservationActivityName?: string | null;
  /** The unique string that we created to identify the TaskQueue resource. */
  sid?: string | null;
  /**
   * A string describing the Worker selection criteria for any Tasks that enter the TaskQueue. For
   * example `'"language" == "spanish"'` If no TargetWorkers parameter is provided, Tasks will wait
   * in the TaskQueue until they are either deleted or moved to another TaskQueue. Additional
   * examples on how to describing Worker selection criteria below. Defaults to 1==1.
   */
  targetWorkers?: string | null;
  /**
   * How Tasks will be assigned to Workers. Set this parameter to `LIFO` to assign most recently
   * created Task first or `FIFO` to assign the oldest Task. Default is FIFO. [Click
   * here](https://www.twilio.com/docs/taskrouter/queue-ordering-last-first-out-lifo) to learn more.
   */
  taskOrder?: TaskQueueEnumTaskOrder;
  /** The absolute URL of the TaskQueue resource. */
  url?: string | null;
  /** The SID of the Workspace that contains the TaskQueue. */
  workspaceSid?: string | null;
  /** The URLs of related resources. */
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
    maxReservedWorkers: s.defaulted(s.int(), 0),
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
