import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluationEnumStatusSchema, type EvaluationEnumStatus } from "./evaluation-enum-status.js";

export type TrusthubV1TrustProductTrustProductEvaluation = {
  /** The unique string that identifies the Evaluation resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * trust_product resource.
   */
  accountSid?: string | null;
  /** The unique string of a policy that is associated to the trust_product resource. */
  policySid?: string | null;
  /** The unique string that we created to identify the trust_product resource. */
  trustProductSid?: string | null;
  /** The compliance status of the Evaluation resource. */
  status?: EvaluationEnumStatus;
  /** The results of the Evaluation which includes the valid and invalid attributes. */
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
