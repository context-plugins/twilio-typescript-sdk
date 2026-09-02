import { s, type EnumSchema } from "../core/index.js";

export const SummaryEnumCallState = {
  Ringing: "ringing",
  Completed: "completed",
  Busy: "busy",
  Fail: "fail",
  Noanswer: "noanswer",
  Canceled: "canceled",
  Answered: "answered",
  Undialed: "undialed",
} as const;
export type SummaryEnumCallState =
  | (typeof SummaryEnumCallState)[keyof typeof SummaryEnumCallState]
  | (string & {});

export const summaryEnumCallStateSchema: EnumSchema<SummaryEnumCallState> =
  s.enumOf<SummaryEnumCallState>(SummaryEnumCallState);
