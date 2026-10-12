import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";
import {
  dependentHostedNumberOrderEnumStatusSchema,
  type DependentHostedNumberOrderEnumStatus,
} from "./dependent-hosted-number-order-enum-status.js";

export type NumbersV2AuthorizationDocumentDependentHostedNumberOrder = {
  /** A 34 character string that uniquely identifies this Authorization Document */
  sid?: string | null;
  /**
   * A 34 character string that uniquely identifies the bulk hosting request associated with this
   * HostedNumberOrder.
   */
  bulkHostingRequestSid?: string | null;
  /**
   * The next step you need to take to complete the hosted number order and request it successfully.
   */
  nextStep?: string | null;
  /** The unique SID identifier of the Account. */
  accountSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the IncomingPhoneNumber resource created by this
   * HostedNumberOrder.
   */
  incomingPhoneNumberSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the Address resource that represents the address
   * of the owner of this phone number.
   */
  addressSid?: string | null;
  /**
   * A 34 character string that uniquely identifies the LOA document associated with this
   * HostedNumberOrder.
   */
  signingDocumentSid?: string | null;
  /** An E164 formatted phone number hosted by this HostedNumberOrder. */
  phoneNumber?: string | null;
  /** A mapping of capabilities this hosted phone number will have enabled on Twilio's platform. */
  capabilities?: Capabilities | null;
  /** A human readable description of this resource, up to 128 characters. */
  friendlyName?: string | null;
  /**
   * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed
   * LOA, 4. canceled, 5. failed. See the section entitled [Status
   * Values](https://www.twilio.com/docs/phone-numbers/hosted-numbers/hosted-numbers-api/authorization-document-resource#status-values)
   * for more information on each of these statuses.
   */
  status?: DependentHostedNumberOrderEnumStatus;
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
  /**
   * Email recipients who will be informed when an Authorization Document has been sent and signed
   */
  ccEmails?: string[] | null;
  /**
   * The title of the person authorized to sign the Authorization Document for this phone number.
   */
  contactTitle?: string | null;
  /** The contact phone number of the person authorized to sign the Authorization Document. */
  contactPhoneNumber?: string | null;
};

export const numbersV2AuthorizationDocumentDependentHostedNumberOrderSchema: Schema<NumbersV2AuthorizationDocumentDependentHostedNumberOrder> =
  s.object<NumbersV2AuthorizationDocumentDependentHostedNumberOrder>({
    sid: s.optionalNullable(s.string()),
    bulkHostingRequestSid: s.optionalNullable(s.string()),
    nextStep: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    incomingPhoneNumberSid: s.optionalNullable(s.string()),
    addressSid: s.optionalNullable(s.string()),
    signingDocumentSid: s.optionalNullable(s.string()),
    phoneNumber: s.optionalNullable(s.string()),
    capabilities: s.optionalNullable(s.lazy(() => capabilitiesSchema)),
    friendlyName: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => dependentHostedNumberOrderEnumStatusSchema)),
    failureReason: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    email: s.optionalNullable(s.string()),
    ccEmails: s.optionalNullable(s.array(s.string())),
    contactTitle: s.optionalNullable(s.string()),
    contactPhoneNumber: s.optionalNullable(s.string()),
    _keysMap: {
      bulkHostingRequestSid: "bulk_hosting_request_sid",
      nextStep: "next_step",
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
    },
  });
