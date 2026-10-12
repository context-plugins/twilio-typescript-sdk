import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amdStatusCallbackMethodSchema, type AmdStatusCallbackMethod } from "./amd-status-callback-method.js";
import {
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "./dependent-order-enum-verification-type.js";

export type CreateHostedNumbersHostedNumberOrderRequest = {
  /** The number to host in [+E.164](https://en.wikipedia.org/wiki/E.164) format */
  phoneNumber: string;
  /** Used to specify that the SMS capability will be hosted on Twilio's platform. */
  smsCapability: boolean;
  /**
   * This defaults to the AccountSid of the authorization the user is using. This can be provided to
   * specify a subaccount to add the HostedNumberOrder to.
   */
  accountSid?: string;
  /** A 64 character string that is a human readable text that describes this resource. */
  friendlyName?: string;
  /**
   * Optional. Provides a unique and addressable name to be assigned to this HostedNumberOrder,
   * assigned by the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string;
  /**
   * Optional. A list of emails that the LOA document for this HostedNumberOrder will be carbon
   * copied to.
   */
  ccEmails?: string[];
  /**
   * The URL that Twilio should request when somebody sends an SMS to the phone number. This will be
   * copied onto the IncomingPhoneNumber resource.
   */
  smsUrl?: string;
  /**
   * The HTTP method that should be used to request the SmsUrl. Must be either `GET` or `POST`. This
   * will be copied onto the IncomingPhoneNumber resource.
   */
  smsMethod?: AmdStatusCallbackMethod;
  /**
   * A URL that Twilio will request if an error occurs requesting or executing the TwiML defined by
   * SmsUrl. This will be copied onto the IncomingPhoneNumber resource.
   */
  smsFallbackUrl?: string;
  /**
   * The HTTP method that should be used to request the SmsFallbackUrl. Must be either `GET` or
   * `POST`. This will be copied onto the IncomingPhoneNumber resource.
   */
  smsFallbackMethod?: AmdStatusCallbackMethod;
  /** Optional. The Status Callback URL attached to the IncomingPhoneNumber resource. */
  statusCallbackUrl?: string;
  /** Optional. The Status Callback Method attached to the IncomingPhoneNumber resource. */
  statusCallbackMethod?: AmdStatusCallbackMethod;
  /**
   * Optional. The 34 character sid of the application Twilio should use to handle SMS messages sent
   * to this number. If a `SmsApplicationSid` is present, Twilio will ignore all of the SMS urls
   * above and use those set on the application.
   */
  smsApplicationSid?: string;
  /**
   * Optional. A 34 character string that uniquely identifies the Address resource that represents
   * the address of the owner of this phone number.
   */
  addressSid?: string;
  /** Optional. Email of the owner of this phone number that is being hosted. */
  email?: string;
  verificationType?: DependentOrderEnumVerificationType;
  /**
   * Optional. The unique sid identifier of the Identity Document that represents the document for
   * verifying ownership of the number to be hosted. Required when VerificationType is phone-bill.
   */
  verificationDocumentSid?: string;
};

export const createHostedNumbersHostedNumberOrderRequestSchema: Schema<CreateHostedNumbersHostedNumberOrderRequest> =
  s.object<CreateHostedNumbersHostedNumberOrderRequest>({
    phoneNumber: s.string(),
    smsCapability: s.boolean(),
    accountSid: s.optional(s.string()),
    friendlyName: s.optional(s.string()),
    uniqueName: s.optional(s.string()),
    ccEmails: s.optional(s.array(s.string())),
    smsUrl: s.optional(s.string()),
    smsMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    smsFallbackUrl: s.optional(s.string()),
    smsFallbackMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    statusCallbackUrl: s.optional(s.string()),
    statusCallbackMethod: s.optional(s.lazy(() => amdStatusCallbackMethodSchema)),
    smsApplicationSid: s.optional(s.string()),
    addressSid: s.optional(s.string()),
    email: s.optional(s.string()),
    verificationType: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
    verificationDocumentSid: s.optional(s.string()),
  });
