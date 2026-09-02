import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceWorkerWorkerChannel = {
  accountSid?: string | null;
  assignedTasks?: number;
  available?: boolean | null;
  availableCapacityPercentage?: number;
  configuredCapacity?: number;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sid?: string | null;
  taskChannelSid?: string | null;
  taskChannelUniqueName?: string | null;
  workerSid?: string | null;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkerChannelSchema: Schema<TaskrouterV1WorkspaceWorkerWorkerChannel> =
  s.object<TaskrouterV1WorkspaceWorkerWorkerChannel>({
    accountSid: s.optionalNullable(s.string()),
    assignedTasks: s.optional(s.number()),
    available: s.optionalNullable(s.boolean()),
    availableCapacityPercentage: s.optional(s.number()),
    configuredCapacity: s.optional(s.number()),
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
