import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { siprecEnumStatusSchema, type SiprecEnumStatus } from "./siprec-enum-status.js";

export type ApiV2010AccountCallSiprec = {
  /** The SID of the Siprec resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this Siprec
   * resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec resource
   * is associated with.
   */
  callSid?: string | null;
  /**
   * The user-specified name of this Siprec, if one was given when the Siprec was created. This may
   * be used to stop the Siprec.
   */
  name?: string | null;
  /** The status - one of `stopped`, `in-progress` */
  status?: SiprecEnumStatus;
  /**
   * The date and time in GMT that this resource was last updated, specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
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
