import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountCallPayments = {
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Payments
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Payments
   * resource is associated with. This will refer to the call sid that is producing the payment card
   * (credit/ACH) information thru DTMF.
   */
  callSid?: string | null;
  /** The SID of the Payments resource. */
  sid?: string | null;
  /**
   * The date and time in GMT that the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: string | null;
  /**
   * The date and time in GMT that the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
