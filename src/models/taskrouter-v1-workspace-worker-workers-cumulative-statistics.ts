import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Worker
   * resource.
   */
  accountSid?: string | null;
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
  /**
   * The minimum, average, maximum, and total time (in seconds) that Workers spent in each Activity.
   */
  activityDurations?: Record<string, unknown>[] | null;
  /** The total number of Reservations that were created. @default 0 */
  reservationsCreated?: number;
  /** The total number of Reservations that were accepted. @default 0 */
  reservationsAccepted?: number;
  /** The total number of Reservations that were rejected. @default 0 */
  reservationsRejected?: number;
  /** The total number of Reservations that were timed out. @default 0 */
  reservationsTimedOut?: number;
  /** The total number of Reservations that were canceled. @default 0 */
  reservationsCanceled?: number;
  /** The total number of Reservations that were rescinded. @default 0 */
  reservationsRescinded?: number;
  /** The SID of the Workspace that contains the Workers. */
  workspaceSid?: string | null;
  /** The absolute URL of the Workers statistics resource. */
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    activityDurations: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    reservationsCreated: s.defaulted(s.int(), 0),
    reservationsAccepted: s.defaulted(s.int(), 0),
    reservationsRejected: s.defaulted(s.int(), 0),
    reservationsTimedOut: s.defaulted(s.int(), 0),
    reservationsCanceled: s.defaulted(s.int(), 0),
    reservationsRescinded: s.defaulted(s.int(), 0),
    workspaceSid: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      startTime: "start_time",
      endTime: "end_time",
      activityDurations: "activity_durations",
      reservationsCreated: "reservations_created",
      reservationsAccepted: "reservations_accepted",
      reservationsRejected: "reservations_rejected",
      reservationsTimedOut: "reservations_timed_out",
      reservationsCanceled: "reservations_canceled",
      reservationsRescinded: "reservations_rescinded",
      workspaceSid: "workspace_sid",
    },
  });
