import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EvaluationEnumStatus = {
  Compliant: "compliant",
  Noncompliant: "noncompliant",
} as const;
export type EvaluationEnumStatus =
  | (typeof EvaluationEnumStatus)[keyof typeof EvaluationEnumStatus]
  | (string & {});

export const evaluationEnumStatusSchema: EnumSchema<EvaluationEnumStatus> =
  s.enumOf<EvaluationEnumStatus>(EvaluationEnumStatus);
