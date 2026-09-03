import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
