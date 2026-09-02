import { s, type Schema } from "../core/index.js";

export type AnsweringMachineDetection1 = {
  totalCalls?: number;
  answeredByHumanPercentage?: number;
  answeredByMachinePercentage?: number;
};

export const answeringMachineDetection1Schema: Schema<AnsweringMachineDetection1> =
  s.object<AnsweringMachineDetection1>({
    totalCalls: s.optional(s.number()),
    answeredByHumanPercentage: s.optional(s.number()),
    answeredByMachinePercentage: s.optional(s.number()),
    _keysMap: {
      totalCalls: "total_calls",
      answeredByHumanPercentage: "answered_by_human_percentage",
      answeredByMachinePercentage: "answered_by_machine_percentage",
    },
  });
