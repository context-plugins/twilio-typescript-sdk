import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumProcessingState = {
  Complete: "complete",
  Partial: "partial",
} as const;
export type CallSummariesEnumProcessingState =
  | (typeof CallSummariesEnumProcessingState)[keyof typeof CallSummariesEnumProcessingState]
  | (string & {});

export const callSummariesEnumProcessingStateSchema: EnumSchema<CallSummariesEnumProcessingState> =
  s.enumOf<CallSummariesEnumProcessingState>(CallSummariesEnumProcessingState);
