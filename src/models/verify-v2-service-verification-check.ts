import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  verificationCheckEnumChannelSchema,
  type VerificationCheckEnumChannel,
} from "./verification-check-enum-channel.js";

export type VerifyV2ServiceVerificationCheck = {
  /** The unique string that we created to identify the VerificationCheck resource. */
  sid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * VerificationCheck resource.
   */
  accountSid?: string | null;
  /**
   * The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone
   * numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
   */
  to?: string | null;
  /**
   * The verification method to use. One of: [`email`](https://www.twilio.com/docs/verify/email),
   * `sms`, `whatsapp`, `call`, or `sna`.
   */
  channel?: VerificationCheckEnumChannel;
  /**
   * The status of the verification. Can be: `pending`, `approved`, `canceled`,
   * `max_attempts_reached`, `deleted`, `failed` or `expired`.
   */
  status?: string | null;
  /** Use "status" instead. Legacy property indicating whether the verification was successful. */
  valid?: boolean | null;
  /**
   * The amount of the associated PSD2 compliant transaction. Requires the PSD2 Service flag
   * enabled.
   */
  amount?: string | null;
  /**
   * The payee of the associated PSD2 compliant transaction. Requires the PSD2 Service flag enabled.
   */
  payee?: string | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the
   * Verification Check resource was created.
   */
  dateCreated?: Date | null;
  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the
   * Verification Check resource was last updated.
   */
  dateUpdated?: Date | null;
  /**
   * List of error codes as a result of attempting a verification using the `sna` channel. The error
   * codes are chronologically ordered, from the first attempt to the latest attempt. This will be
   * an empty list if no errors occured or `null` if the last channel used wasn't `sna`.
   */
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
