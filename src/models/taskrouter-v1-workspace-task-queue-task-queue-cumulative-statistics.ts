import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * TaskQueue resource.
   */
  accountSid?: string | null;
  /** The average time in seconds between Task creation and acceptance. @default 0 */
  avgTaskAcceptanceTime?: number;
  /**
   * The beginning of the interval during which these statistics were calculated, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  startTime?: Date | null;
  /**
   * The end of the interval during which these statistics were calculated, in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  endTime?: Date | null;
  /** The total number of Reservations created for Tasks in the TaskQueue. @default 0 */
  reservationsCreated?: number;
  /** The total number of Reservations accepted for Tasks in the TaskQueue. @default 0 */
  reservationsAccepted?: number;
  /** The total number of Reservations rejected for Tasks in the TaskQueue. @default 0 */
  reservationsRejected?: number;
  /** The total number of Reservations that timed out for Tasks in the TaskQueue. @default 0 */
  reservationsTimedOut?: number;
  /** The total number of Reservations canceled for Tasks in the TaskQueue. @default 0 */
  reservationsCanceled?: number;
  /** The total number of Reservations rescinded. @default 0 */
  reservationsRescinded?: number;
  /**
   * A list of objects that describe the number of Tasks canceled and reservations accepted above
   * and below the thresholds specified in seconds.
   */
  splitByWaitTime?: Record<string, unknown> | null;
  /** The SID of the TaskQueue from which these statistics were calculated. */
  taskQueueSid?: string | null;
  /**
   * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while in the
   * TaskQueue. Calculation is based on the time when the Tasks were created. For transfers, the
   * wait duration is counted from the moment ***the Task was created***, and not from when the
   * transfer was initiated.
   */
  waitDurationUntilAccepted?: Record<string, unknown> | null;
  /**
   * The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks canceled while in the
   * TaskQueue.
   */
  waitDurationUntilCanceled?: Record<string, unknown> | null;
  /**
   * The relative wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks accepted while
   * in the TaskQueue. Calculation is based on the time when the Tasks entered the TaskQueue.
   */
  waitDurationInQueueUntilAccepted?: Record<string, unknown> | null;
  /** The total number of Tasks canceled in the TaskQueue. @default 0 */
  tasksCanceled?: number;
  /** The total number of Tasks completed in the TaskQueue. @default 0 */
  tasksCompleted?: number;
  /** The total number of Tasks deleted in the TaskQueue. @default 0 */
  tasksDeleted?: number;
  /** The total number of Tasks entered into the TaskQueue. @default 0 */
  tasksEntered?: number;
  /** The total number of Tasks that were moved from one queue to another. @default 0 */
  tasksMoved?: number;
  /** The SID of the Workspace that contains the TaskQueue. */
  workspaceSid?: string | null;
  /** The absolute URL of the TaskQueue statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    avgTaskAcceptanceTime: s.defaulted(s.int(), 0),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    reservationsCreated: s.defaulted(s.int(), 0),
    reservationsAccepted: s.defaulted(s.int(), 0),
    reservationsRejected: s.defaulted(s.int(), 0),
    reservationsTimedOut: s.defaulted(s.int(), 0),
    reservationsCanceled: s.defaulted(s.int(), 0),
    reservationsRescinded: s.defaulted(s.int(), 0),
    splitByWaitTime: s.optionalNullable(s.record(s.string(), s.unknown())),
    taskQueueSid: s.optionalNullable(s.string()),
    waitDurationUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationUntilCanceled: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationInQueueUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksCanceled: s.defaulted(s.int(), 0),
    tasksCompleted: s.defaulted(s.int(), 0),
    tasksDeleted: s.defaulted(s.int(), 0),
    tasksEntered: s.defaulted(s.int(), 0),
    tasksMoved: s.defaulted(s.int(), 0),
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
