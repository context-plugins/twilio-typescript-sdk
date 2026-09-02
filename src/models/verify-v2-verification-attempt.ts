import { s, type Schema } from "../core/index.js";
import {
  verificationAttemptEnumChannelsSchema,
  type VerificationAttemptEnumChannels,
} from "./verification-attempt-enum-channels.js";
import {
  verificationAttemptEnumConversionStatusSchema,
  type VerificationAttemptEnumConversionStatus,
} from "./verification-attempt-enum-conversion-status.js";

export type VerifyV2VerificationAttempt = {
  sid?: string | null;
  accountSid?: string | null;
  serviceSid?: string | null;
  verificationSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  conversionStatus?: VerificationAttemptEnumConversionStatus;
  channel?: VerificationAttemptEnumChannels;
  price?: Record<string, unknown> | null;
  channelData?: Record<string, unknown> | null;
  url?: string | null;
};

export const verifyV2VerificationAttemptSchema: Schema<VerifyV2VerificationAttempt> =
  s.object<VerifyV2VerificationAttempt>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    verificationSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    conversionStatus: s.optional(s.lazy(() => verificationAttemptEnumConversionStatusSchema)),
    channel: s.optional(s.lazy(() => verificationAttemptEnumChannelsSchema)),
    price: s.optionalNullable(s.record(s.string(), s.unknown())),
    channelData: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      accountSid: "account_sid",
      serviceSid: "service_sid",
      verificationSid: "verification_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      conversionStatus: "conversion_status",
      channelData: "channel_data",
    },
  });
