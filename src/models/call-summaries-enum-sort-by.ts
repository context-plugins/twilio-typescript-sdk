import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumSortBy = {
  StartTime: "start_time",
  EndTime: "end_time",
} as const;
export type CallSummariesEnumSortBy =
  | (typeof CallSummariesEnumSortBy)[keyof typeof CallSummariesEnumSortBy]
  | (string & {});

export const callSummariesEnumSortBySchema: EnumSchema<CallSummariesEnumSortBy> =
  s.enumOf<CallSummariesEnumSortBy>(CallSummariesEnumSortBy);
