import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumProcessingStateRequest = {
  Completed: "completed",
  Started: "started",
  Partial: "partial",
  All: "all",
} as const;
export type CallSummariesEnumProcessingStateRequest =
  | (typeof CallSummariesEnumProcessingStateRequest)[keyof typeof CallSummariesEnumProcessingStateRequest]
  | (string & {});

export const callSummariesEnumProcessingStateRequestSchema: EnumSchema<CallSummariesEnumProcessingStateRequest> =
  s.enumOf<CallSummariesEnumProcessingStateRequest>(CallSummariesEnumProcessingStateRequest);
