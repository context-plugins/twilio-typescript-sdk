import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Number of calls made in each answering machine detection. */
export type AnsweringMachineDetection = {
  /** Total number of calls with answering machine detection enabled (AMD). */
  totalCalls?: number;
  /** Percentage of calls marked as answered by human. */
  answeredByHumanPercentage?: number;
  /**
   * Percentage of calls marked as answered by machined related like the following: `machine_start`,
   * `machine_end_beep`, `machine_end_silence`, `machine_end_other`, `fax`
   */
  answeredByMachinePercentage?: number;
};

export const answeringMachineDetectionSchema: Schema<AnsweringMachineDetection> =
  s.object<AnsweringMachineDetection>({
    totalCalls: s.optional(s.int()),
    answeredByHumanPercentage: s.optional(s.float64()),
    answeredByMachinePercentage: s.optional(s.float64()),
    _keysMap: {
      totalCalls: "total_calls",
      answeredByHumanPercentage: "answered_by_human_percentage",
      answeredByMachinePercentage: "answered_by_machine_percentage",
    },
  });
