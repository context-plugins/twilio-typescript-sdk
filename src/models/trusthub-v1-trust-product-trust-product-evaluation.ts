import { s, type Schema } from "../core/index.js";
import { evaluationEnumStatusSchema, type EvaluationEnumStatus } from "./evaluation-enum-status.js";

export type TrusthubV1TrustProductTrustProductEvaluation = {
  sid?: string | null;
  accountSid?: string | null;
  policySid?: string | null;
  trustProductSid?: string | null;
  status?: EvaluationEnumStatus;
  results?: Record<string, unknown>[] | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const trusthubV1TrustProductTrustProductEvaluationSchema: Schema<TrusthubV1TrustProductTrustProductEvaluation> =
  s.object<TrusthubV1TrustProductTrustProductEvaluation>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    policySid: s.optionalNullable(s.string()),
    trustProductSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => evaluationEnumStatusSchema)),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      policySid: "policy_sid",
      trustProductSid: "trust_product_sid",
      dateCreated: "date_created",
    },
  });
