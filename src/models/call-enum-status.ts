import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of this call. Can be: `queued`, `ringing`, `in-progress`, `canceled`, `completed`,
 * `failed`, `busy` or `no-answer`. See [Call Status
 * Values](https://www.twilio.com/docs/voice/api/call-resource#call-status-values) below for more
 * information.
 */
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
