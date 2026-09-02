import { s, type Schema } from "../core/index.js";
import { capabilitiesSchema, type Capabilities } from "./capabilities.js";
import {
  dependentHostedNumberOrderEnumStatusSchema,
  type DependentHostedNumberOrderEnumStatus,
} from "./dependent-hosted-number-order-enum-status.js";

export type NumbersV2AuthorizationDocumentDependentHostedNumberOrder = {
  sid?: string | null;
  bulkHostingRequestSid?: string | null;
  nextStep?: string | null;
  accountSid?: string | null;
  incomingPhoneNumberSid?: string | null;
  addressSid?: string | null;
  signingDocumentSid?: string | null;
  phoneNumber?: string | null;
  capabilities?: Capabilities | null;
  friendlyName?: string | null;
  status?: DependentHostedNumberOrderEnumStatus;
  failureReason?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  email?: string | null;
  ccEmails?: string[] | null;
  contactTitle?: string | null;
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
