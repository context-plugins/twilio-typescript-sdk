import { s, type EnumSchema } from "../core/index.js";

export const SummaryEnumProcessingState = {
  Complete: "complete",
  Partial: "partial",
} as const;
export type SummaryEnumProcessingState =
  | (typeof SummaryEnumProcessingState)[keyof typeof SummaryEnumProcessingState]
  | (string & {});

export const summaryEnumProcessingStateSchema: EnumSchema<SummaryEnumProcessingState> =
  s.enumOf<SummaryEnumProcessingState>(SummaryEnumProcessingState);
