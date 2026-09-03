import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CallSummariesEnumSortBy = {
  StartTime: "start_time",
  EndTime: "end_time",
} as const;
export type CallSummariesEnumSortBy =
  | (typeof CallSummariesEnumSortBy)[keyof typeof CallSummariesEnumSortBy]
  | (string & {});

export const callSummariesEnumSortBySchema: EnumSchema<CallSummariesEnumSortBy> =
  s.enumOf<CallSummariesEnumSortBy>(CallSummariesEnumSortBy);
