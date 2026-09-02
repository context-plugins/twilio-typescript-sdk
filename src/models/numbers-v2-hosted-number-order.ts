import { s, type Schema } from "../core/index.js";
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
  sid?: string | null;
  accountSid?: string | null;
  incomingPhoneNumberSid?: string | null;
  addressSid?: string | null;
  signingDocumentSid?: string | null;
  phoneNumber?: string | null;
  capabilities?: Capabilities | null;
  friendlyName?: string | null;
  status?: DependentOrderEnumStatus;
  failureReason?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  email?: string | null;
  ccEmails?: string[] | null;
  url?: string | null;
  contactTitle?: string | null;
  contactPhoneNumber?: string | null;
  bulkHostingRequestSid?: string | null;
  nextStep?: string | null;
  verificationAttempts?: number;
  verificationCallSids?: string[] | null;
  verificationCallDelay?: number;
  verificationCallExtension?: string | null;
  verificationCode?: string | null;
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
    verificationAttempts: s.optional(s.number()),
    verificationCallSids: s.optionalNullable(s.array(s.string())),
    verificationCallDelay: s.optional(s.number()),
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
