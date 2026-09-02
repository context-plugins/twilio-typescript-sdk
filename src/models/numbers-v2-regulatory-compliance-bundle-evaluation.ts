import { s, type Schema } from "../core/index.js";
import { evaluationEnumStatusSchema, type EvaluationEnumStatus } from "./evaluation-enum-status.js";

export type NumbersV2RegulatoryComplianceBundleEvaluation = {
  sid?: string | null;
  accountSid?: string | null;
  regulationSid?: string | null;
  bundleSid?: string | null;
  status?: EvaluationEnumStatus;
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
