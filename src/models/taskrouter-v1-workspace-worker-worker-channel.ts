import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkerWorkerChannel = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker
   * resource.
   */
  accountSid?: string | null;
  /** The total number of Tasks assigned to Worker for the TaskChannel type. @default 0 */
  assignedTasks?: number;
  /** Whether the Worker should receive Tasks of the TaskChannel type. */
  available?: boolean | null;
  /**
   * The current percentage of capacity the TaskChannel has available. Can be a number between `0`
   * and `100`. A value of `0` indicates that TaskChannel has no capacity available and a value of
   * `100` means the Worker is available to receive any Tasks of this TaskChannel type.
   *
   * @default 0
   */
  availableCapacityPercentage?: number;
  /**
   * The current configured capacity for the WorkerChannel. TaskRouter will not create any
   * reservations after the assigned Tasks for the Worker reaches the value.
   *
   * @default 0
   */
  configuredCapacity?: number;
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
  /** The unique string that we created to identify the WorkerChannel resource. */
  sid?: string | null;
  /** The SID of the TaskChannel. */
  taskChannelSid?: string | null;
  /** The unique name of the TaskChannel, such as `voice` or `sms`. */
  taskChannelUniqueName?: string | null;
  /** The SID of the Worker that contains the WorkerChannel. */
  workerSid?: string | null;
  /** The SID of the Workspace that contains the WorkerChannel. */
  workspaceSid?: string | null;
  /** The absolute URL of the WorkerChannel resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkerChannelSchema: Schema<TaskrouterV1WorkspaceWorkerWorkerChannel> =
  s.object<TaskrouterV1WorkspaceWorkerWorkerChannel>({
    accountSid: s.optionalNullable(s.string()),
    assignedTasks: s.defaulted(s.int(), 0),
    available: s.optionalNullable(s.boolean()),
    availableCapacityPercentage: s.defaulted(s.int(), 0),
    configuredCapacity: s.defaulted(s.int(), 0),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    sid: s.optionalNullable(s.string()),
    taskChannelSid: s.optionalNullable(s.string()),
    taskChannelUniqueName: s.optionalNullable(s.string()),
    workerSid: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      assignedTasks: "assigned_tasks",
      availableCapacityPercentage: "available_capacity_percentage",
      configuredCapacity: "configured_capacity",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      taskChannelSid: "task_channel_sid",
      taskChannelUniqueName: "task_channel_unique_name",
      workerSid: "worker_sid",
      workspaceSid: "workspace_sid",
    },
  });
