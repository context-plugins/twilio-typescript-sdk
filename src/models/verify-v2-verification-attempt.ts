import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  verificationAttemptEnumChannelsSchema,
  type VerificationAttemptEnumChannels,
} from "./verification-attempt-enum-channels.js";
import {
  verificationAttemptEnumConversionStatusSchema,
  type VerificationAttemptEnumConversionStatus,
} from "./verification-attempt-enum-conversion-status.js";

export type VerifyV2VerificationAttempt = {
  /** The SID that uniquely identifies the verification attempt resource. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
   * Verification resource.
   */
  accountSid?: string | null;
  /**
   * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) used to generate the
   * attempt.
   */
  serviceSid?: string | null;
  /**
   * The SID of the [Verification](https://www.twilio.com/docs/verify/api/verification) that
   * generated the attempt.
   */
  verificationSid?: string | null;
  /**
   * The date that this Attempt was created, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this Attempt was updated, given in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /**
   * A string specifying the conversion status of the verification. A conversion happens when the
   * user is able to provide the correct code. Possible values are `CONVERTED` and `UNCONVERTED`.
   */
  conversionStatus?: VerificationAttemptEnumConversionStatus;
  /** A string specifying the communication channel used for the verification attempt. */
  channel?: VerificationAttemptEnumChannels;
  /**
   * An object containing the charge for this verification attempt related to the channel costs and
   * the currency used. The costs related to the succeeded verifications are not included. May not
   * be immediately available. More information on pricing is available
   * [here](https://www.twilio.com/en-us/verify/pricing).
   */
  price?: Record<string, unknown> | null;
  /** An object containing the channel specific information for an attempt. */
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
