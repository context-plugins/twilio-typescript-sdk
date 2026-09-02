import { s, type EnumSchema } from "../core/index.js";

export const CallSummaryCrelaySessionState = {
  Unknown: "unknown",
  Failure: "failure",
  Ended: "ended",
  HungUp: "hung_up",
} as const;
export type CallSummaryCrelaySessionState =
  | (typeof CallSummaryCrelaySessionState)[keyof typeof CallSummaryCrelaySessionState]
  | (string & {});

export const callSummaryCrelaySessionStateSchema: EnumSchema<CallSummaryCrelaySessionState> =
  s.enumOf<CallSummaryCrelaySessionState>(CallSummaryCrelaySessionState);
