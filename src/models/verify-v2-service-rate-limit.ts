import { s, type Schema } from "../core/index.js";

export type VerifyV2ServiceRateLimit = {
  sid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  uniqueName?: string | null;
  description?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  url?: string | null;
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
