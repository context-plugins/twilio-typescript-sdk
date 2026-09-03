import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type VerifyV2ServiceRateLimitBucket = {
  sid?: string | null;
  rateLimitSid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  max?: number;
  interval?: number;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
};

export const verifyV2ServiceRateLimitBucketSchema: Schema<VerifyV2ServiceRateLimitBucket> =
  s.object<VerifyV2ServiceRateLimitBucket>({
    sid: s.optionalNullable(s.string()),
    rateLimitSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    max: s.optional(s.number()),
    interval: s.optional(s.number()),
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
