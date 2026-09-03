import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
