import { s, type Schema } from "../core/index.js";

export type AnsweringMachineDetection = {
  totalCalls?: number;
  answeredByHumanPercentage?: number;
  answeredByMachinePercentage?: number;
};

export const answeringMachineDetectionSchema: Schema<AnsweringMachineDetection> =
  s.object<AnsweringMachineDetection>({
    totalCalls: s.optional(s.number()),
    answeredByHumanPercentage: s.optional(s.number()),
    answeredByMachinePercentage: s.optional(s.number()),
    _keysMap: {
      totalCalls: "total_calls",
      answeredByHumanPercentage: "answered_by_human_percentage",
      answeredByMachinePercentage: "answered_by_machine_percentage",
    },
  });
