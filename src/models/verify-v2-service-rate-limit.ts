import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceRateLimit = {
  /** A 34 character string that uniquely identifies this Rate Limit. */
  sid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Rate
   * Limit resource.
   */
  accountSid?: string | null;
  /**
   * Provides a unique and addressable name to be assigned to this Rate Limit, assigned by the
   * developer, to be optionally used in addition to SID. **This value should not contain PII.**
   */
  uniqueName?: string | null;
  /** Description of this Rate Limit */
  description?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [RFC
   * 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /** The URL of this resource. */
  url?: string | null;
  /** The URLs of related resources. */
  links?: Record<string, unknown> | null;
};

export const verifyV2ServiceRateLimitSchema: Schema<VerifyV2ServiceRateLimit> =
  s.object<VerifyV2ServiceRateLimit>({
    sid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      serviceSid: "service_sid",
      accountSid: "account_sid",
      uniqueName: "unique_name",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
