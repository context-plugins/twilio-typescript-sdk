import { s, type Schema } from "../core/index.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = {
  accountSid?: string | null;
  avgTaskAcceptanceTime?: number;
  startTime?: Date | null;
  endTime?: Date | null;
  reservationsCreated?: number;
  reservationsAccepted?: number;
  reservationsRejected?: number;
  reservationsTimedOut?: number;
  reservationsCanceled?: number;
  reservationsRescinded?: number;
  splitByWaitTime?: Record<string, unknown> | null;
  taskQueueSid?: string | null;
  waitDurationUntilAccepted?: Record<string, unknown> | null;
  waitDurationUntilCanceled?: Record<string, unknown> | null;
  waitDurationInQueueUntilAccepted?: Record<string, unknown> | null;
  tasksCanceled?: number;
  tasksCompleted?: number;
  tasksDeleted?: number;
  tasksEntered?: number;
  tasksMoved?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    avgTaskAcceptanceTime: s.optional(s.number()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    reservationsCreated: s.optional(s.number()),
    reservationsAccepted: s.optional(s.number()),
    reservationsRejected: s.optional(s.number()),
    reservationsTimedOut: s.optional(s.number()),
    reservationsCanceled: s.optional(s.number()),
    reservationsRescinded: s.optional(s.number()),
    splitByWaitTime: s.optionalNullable(s.record(s.string(), s.unknown())),
    taskQueueSid: s.optionalNullable(s.string()),
    waitDurationUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationUntilCanceled: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationInQueueUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksCanceled: s.optional(s.number()),
    tasksCompleted: s.optional(s.number()),
    tasksDeleted: s.optional(s.number()),
    tasksEntered: s.optional(s.number()),
    tasksMoved: s.optional(s.number()),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      avgTaskAcceptanceTime: "avg_task_acceptance_time",
      startTime: "start_time",
      endTime: "end_time",
      reservationsCreated: "reservations_created",
      reservationsAccepted: "reservations_accepted",
      reservationsRejected: "reservations_rejected",
      reservationsTimedOut: "reservations_timed_out",
      reservationsCanceled: "reservations_canceled",
      reservationsRescinded: "reservations_rescinded",
      splitByWaitTime: "split_by_wait_time",
      taskQueueSid: "task_queue_sid",
      waitDurationUntilAccepted: "wait_duration_until_accepted",
      waitDurationUntilCanceled: "wait_duration_until_canceled",
      waitDurationInQueueUntilAccepted: "wait_duration_in_queue_until_accepted",
      tasksCanceled: "tasks_canceled",
      tasksCompleted: "tasks_completed",
      tasksDeleted: "tasks_deleted",
      tasksEntered: "tasks_entered",
      tasksMoved: "tasks_moved",
      workspaceSid: "workspace_sid",
    },
  });
