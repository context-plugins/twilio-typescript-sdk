import { s, type Schema } from "../core/index.js";
import { evaluationEnumStatusSchema, type EvaluationEnumStatus } from "./evaluation-enum-status.js";

export type TrusthubV1CustomerProfileCustomerProfileEvaluation = {
  sid?: string | null;
  accountSid?: string | null;
  policySid?: string | null;
  customerProfileSid?: string | null;
  status?: EvaluationEnumStatus;
  results?: Record<string, unknown>[] | null;
  dateCreated?: Date | null;
  url?: string | null;
};

export const trusthubV1CustomerProfileCustomerProfileEvaluationSchema: Schema<TrusthubV1CustomerProfileCustomerProfileEvaluation> =
  s.object<TrusthubV1CustomerProfileCustomerProfileEvaluation>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    policySid: s.optionalNullable(s.string()),
    customerProfileSid: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => evaluationEnumStatusSchema)),
    results: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    dateCreated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      policySid: "policy_sid",
      customerProfileSid: "customer_profile_sid",
      dateCreated: "date_created",
    },
  });
