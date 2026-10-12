import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { verificationEnumChannelSchema, type VerificationEnumChannel } from "./verification-enum-channel.js";

export type VerifyV2ServiceVerification = {
  /** The unique string that we created to identify the Verification resource. */
  sid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) the resource is
   * associated with.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Verification resource.
   */
  accountSid?: string | null;
  /**
   * The phone number or [email](https://www.twilio.com/docs/verify/email) being verified. Phone
   * numbers must be in [E.164 format](https://www.twilio.com/docs/glossary/what-e164).
   */
  to?: string | null;
  /**
   * The verification method used. One of: [`email`](https://www.twilio.com/docs/verify/email),
   * `sms`, `whatsapp`, `call`, `sna`, or `rcs`.
   */
  channel?: VerificationEnumChannel;
  /**
   * The status of the verification. Can be: `pending`, `approved`, `canceled`,
   * `max_attempts_reached`, `deleted`, `failed` or `expired`.
   */
  status?: string | null;
  /** Use "status" instead. Legacy property indicating whether the verification was successful. */
  valid?: boolean | null;
  /** Information about the phone number being verified. */
  lookup?: Record<string, unknown> | null;
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
   * An array of verification attempt objects containing the channel attempted and the
   * channel-specific transaction SID.
   */
  sendCodeAttempts?: Record<string, unknown>[] | null;
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
  /**
   * The set of fields used for a silent network auth (`sna`) verification. Contains a single field
   * with the URL to be invoked to verify the phone number.
   */
  sna?: Record<string, unknown> | null;
  /** The absolute URL of the Verification resource. */
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
