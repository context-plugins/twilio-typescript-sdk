import { s, type EnumSchema } from "../core/index.js";

export const EvaluationEnumStatus = {
  Compliant: "compliant",
  Noncompliant: "noncompliant",
} as const;
export type EvaluationEnumStatus =
  | (typeof EvaluationEnumStatus)[keyof typeof EvaluationEnumStatus]
  | (string & {});

export const evaluationEnumStatusSchema: EnumSchema<EvaluationEnumStatus> =
  s.enumOf<EvaluationEnumStatus>(EvaluationEnumStatus);
