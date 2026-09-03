import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationEnumChannelSchema, type VerificationEnumChannel } from "./verification-enum-channel.js";

export type VerifyV2ServiceVerification = {
  sid?: string | null;
  serviceSid?: string | null;
  accountSid?: string | null;
  to?: string | null;
  channel?: VerificationEnumChannel;
  status?: string | null;
  valid?: boolean | null;
  lookup?: Record<string, unknown> | null;
  amount?: string | null;
  payee?: string | null;
  sendCodeAttempts?: Record<string, unknown>[] | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  sna?: Record<string, unknown> | null;
  url?: string | null;
};

export const verifyV2ServiceVerificationSchema: Schema<VerifyV2ServiceVerification> =
  s.object<VerifyV2ServiceVerification>({
    sid: s.optionalNullable(s.string()),
    serviceSid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    to: s.optionalNullable(s.string()),
    channel: s.optional(s.lazy(() => verificationEnumChannelSchema)),
    status: s.optionalNullable(s.string()),
    valid: s.optionalNullable(s.boolean()),
    lookup: s.optionalNullable(s.record(s.string(), s.unknown())),
    amount: s.optionalNullable(s.string()),
    payee: s.optionalNullable(s.string()),
    sendCodeAttempts: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    sna: s.optionalNullable(s.record(s.string(), s.unknown())),
    url: s.optionalNullable(s.string()),
    _keysMap: {
      serviceSid: "service_sid",
      accountSid: "account_sid",
      sendCodeAttempts: "send_code_attempts",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
    },
  });
