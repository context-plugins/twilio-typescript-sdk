import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagingV1ServiceAlphaSender = {
  /** The unique string that we created to identify the AlphaSender resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * AlphaSender resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource
   * is associated with.
   */
  serviceSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The Alphanumeric Sender ID string. */
  alphaSender?: string | null;
  /**
   * An array of values that describe whether the number can receive calls or messages. Can be:
   * `SMS`.
   */
  capabilities?: string[] | null;
  /** The absolute URL of the AlphaSender resource. */
  url?: string | null;
};

export const messagingV1ServiceAlphaSenderSchema: Schema<MessagingV1ServiceAlphaSender> =
  s.object<MessagingV1ServiceAlphaSender>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    alphaSender: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      alphaSender: "alpha_sender",
    },
  });
