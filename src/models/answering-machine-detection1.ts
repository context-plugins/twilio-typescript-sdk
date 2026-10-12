import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of calls made in answering machine detection (AMD) enabled. */
export type AnsweringMachineDetection1 = {
  /** Total number of calls with answering machine detection (AMD) enabled. */
  totalCalls?: number;
  /** Percentage of calls marked as answered by human. */
  answeredByHumanPercentage?: number;
  /**
   * Percentage of calls marked as answered by machined related like the following: `machine_start`,
   * `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `fax`
   */
  answeredByMachinePercentage?: number;
};

export const answeringMachineDetection1Schema: Schema<AnsweringMachineDetection1> =
  s.object<AnsweringMachineDetection1>({
    totalCalls: s.optional(s.int()),
    answeredByHumanPercentage: s.optional(s.float64()),
    answeredByMachinePercentage: s.optional(s.float64()),
    _keysMap: {
      totalCalls: "total_calls",
      answeredByHumanPercentage: "answered_by_human_percentage",
      answeredByMachinePercentage: "answered_by_machine_percentage",
    },
  });
