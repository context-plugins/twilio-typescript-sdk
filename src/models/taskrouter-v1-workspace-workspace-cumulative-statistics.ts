import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkspaceCumulativeStatistics = {
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
  waitDurationUntilAccepted?: Record<string, unknown> | null;
  waitDurationUntilCanceled?: Record<string, unknown> | null;
  tasksCanceled?: number;
  tasksCompleted?: number;
  tasksCreated?: number;
  tasksDeleted?: number;
  tasksMoved?: number;
  tasksTimedOutInWorkflow?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkspaceCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkspaceCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkspaceCumulativeStatistics>({
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
    waitDurationUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationUntilCanceled: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksCanceled: s.optional(s.number()),
    tasksCompleted: s.optional(s.number()),
    tasksCreated: s.optional(s.number()),
    tasksDeleted: s.optional(s.number()),
    tasksMoved: s.optional(s.number()),
    tasksTimedOutInWorkflow: s.optional(s.number()),
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
      waitDurationUntilAccepted: "wait_duration_until_accepted",
      waitDurationUntilCanceled: "wait_duration_until_canceled",
      tasksCanceled: "tasks_canceled",
      tasksCompleted: "tasks_completed",
      tasksCreated: "tasks_created",
      tasksDeleted: "tasks_deleted",
      tasksMoved: "tasks_moved",
      tasksTimedOutInWorkflow: "tasks_timed_out_in_workflow",
      workspaceSid: "workspace_sid",
    },
  });
