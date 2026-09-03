import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallSummariesEnumCallState = {
  Ringing: "ringing",
  Completed: "completed",
  Busy: "busy",
  Fail: "fail",
  Noanswer: "noanswer",
  Canceled: "canceled",
  Answered: "answered",
  Undialed: "undialed",
} as const;
export type CallSummariesEnumCallState =
  | (typeof CallSummariesEnumCallState)[keyof typeof CallSummariesEnumCallState]
  | (string & {});

export const callSummariesEnumCallStateSchema: EnumSchema<CallSummariesEnumCallState> =
  s.enumOf<CallSummariesEnumCallState>(CallSummariesEnumCallState);
