import { s, type Schema } from "../core/index.js";
import { taskEnumStatusSchema, type TaskEnumStatus } from "./task-enum-status.js";

export type TaskrouterV1WorkspaceTask = {
  accountSid?: string | null;
  age?: number;
  assignmentStatus?: TaskEnumStatus;
  attributes?: string | null;
  addons?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  taskQueueEnteredDate?: Date | null;
  priority?: number;
  reason?: string | null;
  sid?: string | null;
  taskQueueSid?: string | null;
  taskQueueFriendlyName?: string | null;
  taskChannelSid?: string | null;
  taskChannelUniqueName?: string | null;
  timeout?: number;
  workflowSid?: string | null;
  workflowFriendlyName?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
  links?: Record<string, unknown> | null;
  virtualStartTime?: Date | null;
  ignoreCapacity?: boolean | null;
  routingTarget?: string | null;
};

export const taskrouterV1WorkspaceTaskSchema: Schema<TaskrouterV1WorkspaceTask> =
  s.object<TaskrouterV1WorkspaceTask>({
    accountSid: s.optionalNullable(s.string()),
    age: s.optional(s.number()),
    assignmentStatus: s.optional(s.lazy(() => taskEnumStatusSchema)),
    attributes: s.optionalNullable(s.string()),
    addons: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    taskQueueEnteredDate: s.optionalNullable(s.dateTime()),
    priority: s.optional(s.number()),
    reason: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    taskQueueSid: s.optionalNullable(s.string()),
    taskQueueFriendlyName: s.optionalNullable(s.string()),
    taskChannelSid: s.optionalNullable(s.string()),
    taskChannelUniqueName: s.optionalNullable(s.string()),
    timeout: s.optional(s.number()),
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
