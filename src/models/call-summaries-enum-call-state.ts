import { s, type EnumSchema } from "../core/index.js";

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
