import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ApiV2010AccountOutgoingCallerId = {
  /** The unique string that that we created to identify the OutgoingCallerId resource. */
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
  /** The string that you assigned to describe the resource. */
  friendlyName?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * OutgoingCallerId resource.
   */
  accountSid?: string | null;
  /**
   * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which
   * consists of a + followed by the country code and subscriber number.
   */
  phoneNumber?: string | null;
  /** The URI of the resource, relative to `https://api.twilio.com`. */
  uri?: string | null;
};

export const apiV2010AccountOutgoingCallerIdSchema: Schema<ApiV2010AccountOutgoingCallerId> =
  s.object<ApiV2010AccountOutgoingCallerId>({
    sid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.string()),
    dateUpdated: s.optionalNullable(s.string()),
    friendlyName: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    uri: s.optionalNullable(s.string()),
    _keysMap: {
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      friendlyName: "friendly_name",
      accountSid: "account_sid",
      phoneNumber: "phone_number",
    },
  });
