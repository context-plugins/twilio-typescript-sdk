import { s, type EnumSchema } from "../core/index.js";

export const JobStatus = {
  Created: "CREATED",
  FileReceived: "FILE_RECEIVED",
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
  Failed: "FAILED",
  Stopped: "STOPPED",
  StopRequested: "STOP_REQUESTED",
} as const;
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus] | (string & {});

export const jobStatusSchema: EnumSchema<JobStatus> = s.enumOf<JobStatus>(JobStatus);
