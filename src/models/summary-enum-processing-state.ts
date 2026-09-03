import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SummaryEnumProcessingState = {
  Complete: "complete",
  Partial: "partial",
} as const;
export type SummaryEnumProcessingState =
  | (typeof SummaryEnumProcessingState)[keyof typeof SummaryEnumProcessingState]
  | (string & {});

export const summaryEnumProcessingStateSchema: EnumSchema<SummaryEnumProcessingState> =
  s.enumOf<SummaryEnumProcessingState>(SummaryEnumProcessingState);
