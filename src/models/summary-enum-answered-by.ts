import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SummaryEnumAnsweredBy = {
  Unknown: "unknown",
  MachineStart: "machine_start",
  MachineEndBeep: "machine_end_beep",
  MachineEndSilence: "machine_end_silence",
  MachineEndOther: "machine_end_other",
  Human: "human",
  Fax: "fax",
} as const;
export type SummaryEnumAnsweredBy =
  | (typeof SummaryEnumAnsweredBy)[keyof typeof SummaryEnumAnsweredBy]
  | (string & {});

export const summaryEnumAnsweredBySchema: EnumSchema<SummaryEnumAnsweredBy> =
  s.enumOf<SummaryEnumAnsweredBy>(SummaryEnumAnsweredBy);
