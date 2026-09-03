import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { siprecEnumStatusSchema, type SiprecEnumStatus } from "./siprec-enum-status.js";

export type ApiV2010AccountCallSiprec = {
  sid?: string | null;
  accountSid?: string | null;
  callSid?: string | null;
  name?: string | null;
  status?: SiprecEnumStatus;
  dateUpdated?: string | null;
  uri?: string | null;
};

export const apiV2010AccountCallSiprecSchema: Schema<ApiV2010AccountCallSiprec> =
  s.object<ApiV2010AccountCallSiprec>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    callSid: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => siprecEnumStatusSchema)),
    dateUpdated: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      callSid: "call_sid",
      dateUpdated: "date_updated",
    },
  });
