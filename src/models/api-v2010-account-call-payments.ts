import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountCallPayments = {
  accountSid?: string | null;
  callSid?: string | null;
  sid?: string | null;
  dateCreated?: string | null;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountCallPaymentsSchema: Schema<ApiV2010AccountCallPayments> =
  s.object<ApiV2010AccountCallPayments>({
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
