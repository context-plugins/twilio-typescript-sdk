import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics = {
  accountSid?: string | null;
  startTime?: Date | null;
  endTime?: Date | null;
  activityDurations?: Record<string, unknown>[] | null;
  reservationsCreated?: number;
  reservationsAccepted?: number;
  reservationsRejected?: number;
  reservationsTimedOut?: number;
  reservationsCanceled?: number;
  reservationsRescinded?: number;
  workspaceSid?: string | null;
  url?: string | null;
};

export const taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema: Schema<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics> =
  s.object<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics>({
    accountSid: s.optionalNullable(s.string()),
    startTime: s.optionalNullable(s.dateTime()),
    endTime: s.optionalNullable(s.dateTime()),
    activityDurations: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    reservationsCreated: s.optional(s.number()),
    reservationsAccepted: s.optional(s.number()),
    reservationsRejected: s.optional(s.number()),
    reservationsTimedOut: s.optional(s.number()),
    reservationsCanceled: s.optional(s.number()),
    reservationsRescinded: s.optional(s.number()),
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
