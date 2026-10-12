import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceRateLimitBucket = {
  /** A 34 character string that uniquely identifies this Bucket. */
  sid?: string | null;
  /** The Twilio-provided string that uniquely identifies the Rate Limit resource. */
  rateLimitSid?: string | null;
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
  /** Maximum number of requests permitted in during the interval. @default 0 */
  max?: number;
  /** Number of seconds that the rate limit will be enforced over. @default 0 */
  interval?: number;
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
};

export const verifyV2ServiceRateLimitBucketSchema: Schema<VerifyV2ServiceRateLimitBucket> =
  s.object<VerifyV2ServiceRateLimitBucket>({
    sid: s.optionalNullable(s.string()),
    rateLimitSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    max: s.defaulted(s.int(), 0),
    interval: s.defaulted(s.int(), 0),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      rateLimitSid: "rate_limit_sid",
      serviceSid: "service_sid",
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
