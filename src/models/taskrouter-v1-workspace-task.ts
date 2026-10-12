import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { taskEnumStatusSchema, type TaskEnumStatus } from "./task-enum-status.js";

export type TaskrouterV1WorkspaceTask = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Task
   * resource.
   */
  accountSid?: string | null;
  /** The number of seconds since the Task was created. @default 0 */
  age?: number;
  /**
   * The current status of the Task's assignment. Can be: `pending`, `reserved`, `assigned`,
   * `canceled`, `wrapping`, or `completed`.
   */
  assignmentStatus?: TaskEnumStatus;
  /**
   * The JSON string with custom attributes of the work. **Note** If this property has been assigned
   * a value, it will only be displayed in FETCH action that returns a single resource. Otherwise,
   * it will be null.
   */
  attributes?: string | null;
  /**
   * An object that contains the [Add-on](https://www.twilio.com/docs/add-ons) data for all
   * installed Add-ons.
   */
  addons?: string | null;
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
   * The date and time in GMT when the Task entered the TaskQueue, specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  taskQueueEnteredDate?: Date | null;
  /**
   * The current priority score of the Task as assigned to a Worker by the workflow. Tasks with
   * higher priority values will be assigned before Tasks with lower values.
   *
   * @default 0
   */
  priority?: number;
  /** The reason the Task was canceled or completed, if applicable. */
  reason?: string | null;
  /** The unique string that we created to identify the Task resource. */
  sid?: string | null;
  /** The SID of the TaskQueue. */
  taskQueueSid?: string | null;
  /** The friendly name of the TaskQueue. */
  taskQueueFriendlyName?: string | null;
  /** The SID of the TaskChannel. */
  taskChannelSid?: string | null;
  /** The unique name of the TaskChannel. */
  taskChannelUniqueName?: string | null;
  /** The amount of time in seconds that the Task can live before being assigned. @default 0 */
  timeout?: number;
  /** The SID of the Workflow that is controlling the Task. */
  workflowSid?: string | null;
  /** The friendly name of the Workflow that is controlling the Task. */
  workflowFriendlyName?: string | null;
  /** The SID of the Workspace that contains the Task. */
  workspaceSid?: string | null;
  /** The absolute URL of the Task resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
  /**
   * The date and time in GMT indicating the ordering for routing of the Task specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  virtualStartTime?: Date | null;
  /**
   * A boolean that indicates if the Task should respect a Worker's capacity and availability during
   * assignment. This field can only be used when the `RoutingTarget` field is set to a Worker SID.
   * By setting `IgnoreCapacity` to a value of `true`, `1`, or `yes`, the Task will be routed to the
   * Worker without respecting their capacity and availability. Any other value will enforce the
   * Worker's capacity and availability. The default value of `IgnoreCapacity` is `true` when the
   * `RoutingTarget` is set to a Worker SID.
   */
  ignoreCapacity?: boolean | null;
  /** A SID of a Worker, Queue, or Workflow to route a Task to */
  routingTarget?: string | null;
};

export const taskrouterV1WorkspaceTaskSchema: Schema<TaskrouterV1WorkspaceTask> =
  s.object<TaskrouterV1WorkspaceTask>({
    accountSid: s.optionalNullable(s.string()),
    age: s.defaulted(s.int(), 0),
    assignmentStatus: s.optional(s.lazy(() => taskEnumStatusSchema)),
    attributes: s.optionalNullable(s.string()),
    addons: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    taskQueueEnteredDate: s.optionalNullable(s.dateTime()),
    priority: s.defaulted(s.int(), 0),
    reason: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    taskQueueSid: s.optionalNullable(s.string()),
    taskQueueFriendlyName: s.optionalNullable(s.string()),
    taskChannelSid: s.optionalNullable(s.string()),
    taskChannelUniqueName: s.optionalNullable(s.string()),
    timeout: s.defaulted(s.int(), 0),
    workflowSid: s.optionalNullable(s.string()),
    workflowFriendlyName: s.optionalNullable(s.string()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    virtualStartTime: s.optionalNullable(s.dateTime()),
    ignoreCapacity: s.optionalNullable(s.boolean()),
    routingTarget: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      assignmentStatus: "assignment_status",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      taskQueueEnteredDate: "task_queue_entered_date",
      taskQueueSid: "task_queue_sid",
      taskQueueFriendlyName: "task_queue_friendly_name",
      taskChannelSid: "task_channel_sid",
      taskChannelUniqueName: "task_channel_unique_name",
      workflowSid: "workflow_sid",
      workflowFriendlyName: "workflow_friendly_name",
      workspaceSid: "workspace_sid",
      virtualStartTime: "virtual_start_time",
      ignoreCapacity: "ignore_capacity",
      routingTarget: "routing_target",
    },
  });
