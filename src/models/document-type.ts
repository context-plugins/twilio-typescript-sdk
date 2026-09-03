import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DocumentType = {
  ScLetterOfAuthorization: "SC_LETTER_OF_AUTHORIZATION",
  CallToActionOrOptInMockup: "CALL_TO_ACTION_OR_OPT_IN_MOCKUP",
  SmsCampaignTermsOfService: "SMS_CAMPAIGN_TERMS_OF_SERVICE",
  SmsPrivacyPolicy: "SMS_PRIVACY_POLICY",
  MigrationRequestLetter: "MIGRATION_REQUEST_LETTER",
  ShortCodeLeaseReceipt: "SHORT_CODE_LEASE_RECEIPT",
  AdditionalSupportingDocuments1: "ADDITIONAL_SUPPORTING_DOCUMENTS_1",
  AdditionalSupportingDocuments2: "ADDITIONAL_SUPPORTING_DOCUMENTS_2",
  AdditionalSupportingDocuments3: "ADDITIONAL_SUPPORTING_DOCUMENTS_3",
  AdditionalSupportingDocuments4: "ADDITIONAL_SUPPORTING_DOCUMENTS_4",
  AdditionalSupportingDocuments5: "ADDITIONAL_SUPPORTING_DOCUMENTS_5",
  AdditionalSupportingDocuments6: "ADDITIONAL_SUPPORTING_DOCUMENTS_6",
  AdditionalSupportingDocuments7: "ADDITIONAL_SUPPORTING_DOCUMENTS_7",
  AdditionalSupportingDocuments8: "ADDITIONAL_SUPPORTING_DOCUMENTS_8",
  AdditionalSupportingDocuments9: "ADDITIONAL_SUPPORTING_DOCUMENTS_9",
  AdditionalSupportingDocuments10: "ADDITIONAL_SUPPORTING_DOCUMENTS_10",
} as const;
export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType] | (string & {});

export const documentTypeSchema: EnumSchema<DocumentType> = s.enumOf<DocumentType>(DocumentType);
