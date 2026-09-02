import { s, type Schema } from "../core/index.js";
import {
  verificationCheckEnumChannelSchema,
  type VerificationCheckEnumChannel,
} from "./verification-check-enum-channel.js";

export type VerifyV2ServiceVerificationCheck = {
  sid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  to?: string | null;
  channel?: VerificationCheckEnumChannel;
  status?: string | null;
  valid?: boolean | null;
  amount?: string | null;
  payee?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  snaAttemptsErrorCodes?: Record<string, unknown>[] | null;
};

export const verifyV2ServiceVerificationCheckSchema: Schema<VerifyV2ServiceVerificationCheck> =
  s.object<VerifyV2ServiceVerificationCheck>({
    sid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    to: s.optionalNullable(s.string()),
    channel: s.optional(s.lazy(() => verificationCheckEnumChannelSchema)),
    status: s.optionalNullable(s.string()),
    valid: s.optionalNullable(s.boolean()),
    amount: s.optionalNullable(s.string()),
    payee: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    snaAttemptsErrorCodes: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    _keysMap: {
      serviceSid: "service_sid",
      accountSid: "account_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      snaAttemptsErrorCodes: "sna_attempts_error_codes",
    },
  });
