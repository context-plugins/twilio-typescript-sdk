import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilities2Schema, type Capabilities2 } from "./capabilities2.js";
import {
  dependentOrderEnumStatusSchema,
  type DependentOrderEnumStatus,
} from "./dependent-order-enum-status.js";
import {
  dependentOrderEnumVerificationTypeSchema,
  type DependentOrderEnumVerificationType,
} from "./dependent-order-enum-verification-type.js";

export type NumbersV3HostedNumbersHostedNumberOrder = {
  /** A 34 character string that uniquely identifies this HostedNumberOrder. */
  sid?: string | null;
  /** A 34 character string that uniquely identifies the account. */
  accountSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the
   * [IncomingPhoneNumber](https://www.twilio.com/docs/phone-numbers/api/incomingphonenumber-resource)
   * resource that represents the phone number being hosted.
   */
  incomingPhoneNumberSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address
   * of the owner of this phone number.
   */
  addressSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the [Authorization
   * Document](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource)
   * the user needs to sign.
   */
  signingDocumentSid?: string | null;
  /**
   * Phone number to be hosted. This must be in [E.164](https://en.wikipedia.org/wiki/E.164) format,
   * e.g., +16175551212
   */
  phoneNumber?: string | null;
  /**
   * Set of booleans describing the capabilities hosted on Twilio's platform. SMS is currently only
   * supported.
   */
  capabilities?: Capabilities2 | null;
  /** A 64 character string that is a human-readable text that describes this resource. */
  friendlyName?: string | null;
  /**
   * Provides a unique and addressable name to be assigned to this HostedNumberOrder, assigned by
   * the developer, to be optionally used in addition to SID.
   */
  uniqueName?: string | null;
  status?: DependentOrderEnumStatus;
  /** A message that explains why a hosted_number_order went to status "action-required" */
  failureReason?: string | null;
  /**
   * The date this resource was created, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateCreated?: Date | null;
  /**
   * The date that this resource was updated, given as [GMT RFC
   * 2822](http://www.ietf.org/rfc/rfc2822.txt) format.
   */
  dateUpdated?: Date | null;
  /**
   * The number of attempts made to verify ownership of the phone number that is being hosted.
   *
   * @default 0
   */
  verificationAttempts?: number;
  /** Email of the owner of this phone number that is being hosted. */
  email?: string | null;
  /** A list of emails that LOA document for this HostedNumberOrder will be carbon copied to. */
  ccEmails?: string[] | null;
  /** The URL of this HostedNumberOrder. */
  url?: string | null;
  verificationType?: DependentOrderEnumVerificationType;
  /**
   * A 34 character string that uniquely identifies the Identity Document resource that represents
   * the document for verifying ownership of the number to be hosted.
   */
  verificationDocumentSid?: string | null;
  /** A numerical extension to be used when making the ownership verification call. */
  extension?: string | null;
  /**
   * A value between 0-30 specifying the number of seconds to delay initiating the ownership
   * verification call.
   *
   * @default 0
   */
  callDelay?: number;
  /**
   * A verification code provided in the response for a user to enter when they pick up the phone
   * call.
   */
  verificationCode?: string | null;
  /**
   * A list of 34 character strings that are unique identifiers for the calls placed as part of
   * ownership verification.
   */
  verificationCallSids?: string[] | null;
};

export const numbersV3HostedNumbersHostedNumberOrderSchema: Schema<NumbersV3HostedNumbersHostedNumberOrder> =
  s.object<NumbersV3HostedNumbersHostedNumberOrder>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    incomingPhoneNumberSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    signingDocumentSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilities2Schema)),
    friendlyName: s.optionalNullable(s.string()),
    uniqueName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => dependentOrderEnumStatusSchema)),
    failureReason: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    verificationAttempts: s.defaulted(s.int(), 0),
    email: s.optionalNullable(s.string()),
    ccEmails: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    verificationType: s.optional(s.lazy(() => dependentOrderEnumVerificationTypeSchema)),
    verificationDocumentSid: s.optionalNullable(s.string()),
    extension: s.optionalNullable(s.string()),
    callDelay: s.defaulted(s.int(), 0),
    verificationCode: s.optionalNullable(s.string()),
    verificationCallSids: s.optionalNullable(s.array(s.string())),
  });
