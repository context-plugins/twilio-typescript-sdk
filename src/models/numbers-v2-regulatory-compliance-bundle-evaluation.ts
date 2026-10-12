import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { evaluationEnumStatusSchema, type EvaluationEnumStatus } from "./evaluation-enum-status.js";

export type NumbersV2RegulatoryComplianceBundleEvaluation = {
  /** The unique string that identifies the Evaluation resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Bundle
   * resource.
   */
  accountSid?: string | null;
  /** The unique string of a regulation that is associated to the Bundle resource. */
  regulationSid?: string | null;
  /** The unique string that we created to identify the Bundle resource. */
  bundleSid?: string | null;
  /** The compliance status of the Evaluation resource. */
  status?: EvaluationEnumStatus;
  /** The results of the Evaluation which includes the valid and invalid attributes. */
  results?: Record<string, unknown>[] | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const numbersV2RegulatoryComplianceBundleEvaluationSchema: Schema<NumbersV2RegulatoryComplianceBundleEvaluation> =
  s.object<NumbersV2RegulatoryComplianceBundleEvaluation>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    regulationSid: s.optionalNullable(s.string()),
    bundleSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => evaluationEnumStatusSchema)),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      regulationSid: "regulation_sid",
      bundleSid: "bundle_sid",
      dateCreated: "date_created",
    },
  });
