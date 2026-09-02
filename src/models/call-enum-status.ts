import { s, type EnumSchema } from "../core/index.js";

export const CallEnumStatus = {
  Queued: "queued",
  Ringing: "ringing",
  InProgress: "in-progress",
  Completed: "completed",
  Busy: "busy",
  Failed: "failed",
  NoAnswer: "no-answer",
  Canceled: "canceled",
} as const;
export type CallEnumStatus = (typeof CallEnumStatus)[keyof typeof CallEnumStatus] | (string & {});

export const callEnumStatusSchema: EnumSchema<CallEnumStatus> = s.enumOf<CallEnumStatus>(CallEnumStatus);
