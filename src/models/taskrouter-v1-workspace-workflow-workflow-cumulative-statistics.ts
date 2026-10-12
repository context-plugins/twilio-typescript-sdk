import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Workflow
   * resource.
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
  /** The total number of Reservations that were created for Workers. @default 0 */
  reservationsCreated?: number;
  /** The total number of Reservations accepted by Workers. @default 0 */
  reservationsAccepted?: number;
  /** The total number of Reservations that were rejected. @default 0 */
  reservationsRejected?: number;
  /** The total number of Reservations that were timed out. @default 0 */
  reservationsTimedOut?: number;
  /** The total number of Reservations that were canceled. @default 0 */
  reservationsCanceled?: number;
  /** The total number of Reservations that were rescinded. @default 0 */
  reservationsRescinded?: number;
  /**
   * A list of objects that describe the number of Tasks canceled and reservations accepted above
   * and below the thresholds specified in seconds.
   */
  splitByWaitTime?: Record<string, unknown> | null;
  /** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were accepted. */
  waitDurationUntilAccepted?: Record<string, unknown> | null;
  /** The wait duration statistics (`avg`, `min`, `max`, `total`) for Tasks that were canceled. */
  waitDurationUntilCanceled?: Record<string, unknown> | null;
  /** The total number of Tasks that were canceled. @default 0 */
  tasksCanceled?: number;
  /** The total number of Tasks that were completed. @default 0 */
  tasksCompleted?: number;
  /** The total number of Tasks that entered the Workflow. @default 0 */
  tasksEntered?: number;
  /** The total number of Tasks that were deleted. @default 0 */
  tasksDeleted?: number;
  /** The total number of Tasks that were moved from one queue to another. @default 0 */
  tasksMoved?: number;
  /** The total number of Tasks that were timed out of their Workflows (and deleted). @default 0 */
  tasksTimedOutInWorkflow?: number;
  /**
   * Returns the list of Tasks that are being controlled by the Workflow with the specified Sid
   * value.
   */
  workflowSid?: string | null;
  /** The SID of the Workspace that contains the Workflow. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workflow statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics>({
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
    waitDurationUntilAccepted: s.optionalNullable(s.record(s.string(), s.unknown())),
    waitDurationUntilCanceled: s.optionalNullable(s.record(s.string(), s.unknown())),
    tasksCanceled: s.defaulted(s.int(), 0),
    tasksCompleted: s.defaulted(s.int(), 0),
    tasksEntered: s.defaulted(s.int(), 0),
    tasksDeleted: s.defaulted(s.int(), 0),
    tasksMoved: s.defaulted(s.int(), 0),
    tasksTimedOutInWorkflow: s.defaulted(s.int(), 0),
    workflowSid: s.optionalNullable(s.string()),
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
      tasksEntered: "tasks_entered",
      tasksDeleted: "tasks_deleted",
      tasksMoved: "tasks_moved",
      tasksTimedOutInWorkflow: "tasks_timed_out_in_workflow",
      workflowSid: "workflow_sid",
      workspaceSid: "workspace_sid",
    },
  });
