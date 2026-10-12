import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";
import {
  dependentOrderEnumStatusSchema,
  type DependentOrderEnumStatus,
} from "./dependent-order-enum-status.js";
import {
  hostedNumberOrderEnumVerificationType1Schema,
  type HostedNumberOrderEnumVerificationType1,
} from "./hosted-number-order-enum-verification-type1.js";

export type NumbersV2HostedNumberOrder = {
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
  capabilities?: Capabilities | null;
  /** A 128 character string that is a human-readable text that describes this resource. */
  friendlyName?: string | null;
  /**
   * Status of this resource. It can hold one of the values: 1. Twilio Processing 2. Received, 3.
   * Pending LOA, 4. Carrier Processing, 5. Completed, 6. Action Required, 7. Failed. See the
   * [HostedNumberOrders Status
   * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/hosted-number-order-resource#status-values)
   * section for more information on each of these statuses.
   */
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
  /** Email of the owner of this phone number that is being hosted. */
  email?: string | null;
  /** A list of emails that LOA document for this HostedNumberOrder will be carbon copied to. */
  ccEmails?: string[] | null;
  /** The URL of this HostedNumberOrder. */
  url?: string | null;
  /**
   * The title of the person authorized to sign the Authorization Document for this phone number.
   */
  contactTitle?: string | null;
  /** The contact phone number of the person authorized to sign the Authorization Document. */
  contactPhoneNumber?: string | null;
  /**
   * A 34 character string that uniquely identifies the bulk hosting request associated with this
   * HostedNumberOrder.
   */
  bulkHostingRequestSid?: string | null;
  /**
   * The next step you need to take to complete the hosted number order and request it successfully.
   */
  nextStep?: string | null;
  /**
   * The number of attempts made to verify ownership via a call for the hosted phone number.
   *
   * @default 0
   */
  verificationAttempts?: number;
  /** The Call SIDs that identify the calls placed to verify ownership. */
  verificationCallSids?: string[] | null;
  /**
   * The number of seconds to wait before initiating the ownership verification call. Can be a value
   * between 0 and 60, inclusive.
   *
   * @default 0
   */
  verificationCallDelay?: number;
  /** The numerical extension to dial when making the ownership verification call. */
  verificationCallExtension?: string | null;
  /** The digits the user must pass in the ownership verification call. */
  verificationCode?: string | null;
  /**
   * The method used to verify ownership of the number to be hosted. Can be: `phone-call` or
   * `phone-bill` and the default is `phone-call`.
   */
  verificationType?: HostedNumberOrderEnumVerificationType1;
};

export const numbersV2HostedNumberOrderSchema: Schema<NumbersV2HostedNumberOrder> =
  s.object<NumbersV2HostedNumberOrder>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    incomingPhoneNumberSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    signingDocumentSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => dependentOrderEnumStatusSchema)),
    failureReason: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    email: s.optionalNullable(s.string()),
    ccEmails: s.optionalNullable(s.array(s.string())),
    url: s.optionalNullable(s.string()),
    contactTitle: s.optionalNullable(s.string()),
    contactPhoneNumber: s.optionalNullable(s.string()),
    bulkHostingRequestSid: s.optionalNullable(s.string()),
    nextStep: s.optionalNullable(s.string()),
    verificationAttempts: s.defaulted(s.int(), 0),
    verificationCallSids: s.optionalNullable(s.array(s.string())),
    verificationCallDelay: s.defaulted(s.int(), 0),
    verificationCallExtension: s.optionalNullable(s.string()),
    verificationCode: s.optionalNullable(s.string()),
    verificationType: s.optional(s.lazy(() => hostedNumberOrderEnumVerificationType1Schema)),
    _keysMap: {
      accountSid: "account_sid",
      incomingPhoneNumberSid: "incoming_phone_number_sid",
      addressSid: "address_sid",
      signingDocumentSid: "signing_document_sid",
      phoneNumber: "phone_number",
      friendlyName: "friendly_name",
      failureReason: "failure_reason",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      ccEmails: "cc_emails",
      contactTitle: "contact_title",
      contactPhoneNumber: "contact_phone_number",
      bulkHostingRequestSid: "bulk_hosting_request_sid",
      nextStep: "next_step",
      verificationAttempts: "verification_attempts",
      verificationCallSids: "verification_call_sids",
      verificationCallDelay: "verification_call_delay",
      verificationCallExtension: "verification_call_extension",
      verificationCode: "verification_code",
      verificationType: "verification_type",
    },
  });
