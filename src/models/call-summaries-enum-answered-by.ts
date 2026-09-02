import { s, type EnumSchema } from "../core/index.js";

export const CallSummariesEnumAnsweredBy = {
  Unknown: "unknown",
  MachineStart: "machine_start",
  MachineEndBeep: "machine_end_beep",
  MachineEndSilence: "machine_end_silence",
  MachineEndOther: "machine_end_other",
  Human: "human",
  Fax: "fax",
} as const;
export type CallSummariesEnumAnsweredBy =
  | (typeof CallSummariesEnumAnsweredBy)[keyof typeof CallSummariesEnumAnsweredBy]
  | (string & {});

export const callSummariesEnumAnsweredBySchema: EnumSchema<CallSummariesEnumAnsweredBy> =
  s.enumOf<CallSummariesEnumAnsweredBy>(CallSummariesEnumAnsweredBy);
