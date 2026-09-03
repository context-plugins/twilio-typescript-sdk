import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  tollfreeVerificationEnumBusinessRegistrationAuthoritySchema,
  type TollfreeVerificationEnumBusinessRegistrationAuthority,
} from "./tollfree-verification-enum-business-registration-authority.js";
import {
  tollfreeVerificationEnumBusinessTypeSchema,
  type TollfreeVerificationEnumBusinessType,
} from "./tollfree-verification-enum-business-type.js";
import {
  tollfreeVerificationEnumOptInTypeSchema,
  type TollfreeVerificationEnumOptInType,
} from "./tollfree-verification-enum-opt-in-type.js";
import {
  tollfreeVerificationEnumStatusSchema,
  type TollfreeVerificationEnumStatus,
} from "./tollfree-verification-enum-status.js";
import {
  tollfreeVerificationEnumUseCaseCategorySchema,
  type TollfreeVerificationEnumUseCaseCategory,
} from "./tollfree-verification-enum-use-case-category.js";
import {
  tollfreeVerificationEnumVettingProviderSchema,
  type TollfreeVerificationEnumVettingProvider,
} from "./tollfree-verification-enum-vetting-provider.js";

export type MessagingV1TollfreeVerification = {
  sid?: string | null;
  accountSid?: string | null;
  customerProfileSid?: string | null;
  trustProductSid?: string | null;
  dateCreated?: Date | null;
  dateUpdated?: Date | null;
  regulatedItemSid?: string | null;
  businessName?: string | null;
  businessStreetAddress?: string | null;
  businessStreetAddress2?: string | null;
  businessCity?: string | null;
  businessStateProvinceRegion?: string | null;
  businessPostalCode?: string | null;
  businessCountry?: string | null;
  businessWebsite?: string | null;
  businessContactFirstName?: string | null;
  businessContactLastName?: string | null;
  businessContactEmail?: string | null;
  businessContactPhone?: string | null;
  notificationEmail?: string | null;
  useCaseCategories?: TollfreeVerificationEnumUseCaseCategory[] | null;
  useCaseSummary?: string | null;
  productionMessageSample?: string | null;
  optInImageUrls?: string[] | null;
  optInType?: TollfreeVerificationEnumOptInType;
  messageVolume?: string | null;
  additionalInformation?: string | null;
  tollfreePhoneNumberSid?: string | null;
  tollfreePhoneNumber?: string | null;
  status?: TollfreeVerificationEnumStatus;
  url?: string | null;
  rejectionReason?: string | null;
  errorCode?: number | null;
  editExpiration?: Date | null;
  editAllowed?: boolean | null;
  businessRegistrationNumber?: string | null;
  businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
  businessRegistrationCountry?: string | null;
  businessType?: TollfreeVerificationEnumBusinessType | null;
  businessRegistrationPhoneNumber?: string | null;
  doingBusinessAs?: string | null;
  optInConfirmationMessage?: string | null;
  helpMessageSample?: string | null;
  privacyPolicyUrl?: string | null;
  termsAndConditionsUrl?: string | null;
  ageGatedContent?: boolean | null;
  optInKeywords?: string[] | null;
  rejectionReasons?: Record<string, unknown>[] | null;
  resourceLinks?: Record<string, unknown> | null;
  externalReferenceId?: string | null;
  vettingId?: string | null;
  vettingProvider?: TollfreeVerificationEnumVettingProvider | null;
  vettingIdExpiration?: Date | null;
};

export const messagingV1TollfreeVerificationSchema: Schema<MessagingV1TollfreeVerification> =
  s.object<MessagingV1TollfreeVerification>({
    sid: s.optionalNullable(s.string()),
    accountSid: s.optionalNullable(s.string()),
    customerProfileSid: s.optionalNullable(s.string()),
    trustProductSid: s.optionalNullable(s.string()),
    dateCreated: s.optionalNullable(s.dateTime()),
    dateUpdated: s.optionalNullable(s.dateTime()),
    regulatedItemSid: s.optionalNullable(s.string()),
    businessName: s.optionalNullable(s.string()),
    businessStreetAddress: s.optionalNullable(s.string()),
    businessStreetAddress2: s.optionalNullable(s.string()),
    businessCity: s.optionalNullable(s.string()),
    businessStateProvinceRegion: s.optionalNullable(s.string()),
    businessPostalCode: s.optionalNullable(s.string()),
    businessCountry: s.optionalNullable(s.string()),
    businessWebsite: s.optionalNullable(s.string()),
    businessContactFirstName: s.optionalNullable(s.string()),
    businessContactLastName: s.optionalNullable(s.string()),
    businessContactEmail: s.optionalNullable(s.string()),
    businessContactPhone: s.optionalNullable(s.string()),
    notificationEmail: s.optionalNullable(s.string()),
    useCaseCategories: s.optionalNullable(
      s.array(s.lazy(() => tollfreeVerificationEnumUseCaseCategorySchema)),
    ),
    useCaseSummary: s.optionalNullable(s.string()),
    productionMessageSample: s.optionalNullable(s.string()),
    optInImageUrls: s.optionalNullable(s.array(s.string())),
    optInType: s.optional(s.lazy(() => tollfreeVerificationEnumOptInTypeSchema)),
    messageVolume: s.optionalNullable(s.string()),
    additionalInformation: s.optionalNullable(s.string()),
    tollfreePhoneNumberSid: s.optionalNullable(s.string()),
    tollfreePhoneNumber: s.optionalNullable(s.string()),
    status: s.optional(s.lazy(() => tollfreeVerificationEnumStatusSchema)),
    url: s.optionalNullable(s.string()),
    rejectionReason: s.optionalNullable(s.string()),
    errorCode: s.optionalNullable(s.number()),
    editExpiration: s.optionalNullable(s.dateTime()),
    editAllowed: s.optionalNullable(s.boolean()),
    businessRegistrationNumber: s.optionalNullable(s.string()),
    businessRegistrationAuthority: s.optionalNullable(
      s.lazy(() => tollfreeVerificationEnumBusinessRegistrationAuthoritySchema),
    ),
    businessRegistrationCountry: s.optionalNullable(s.string()),
    businessType: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumBusinessTypeSchema)),
    businessRegistrationPhoneNumber: s.optionalNullable(s.string()),
    doingBusinessAs: s.optionalNullable(s.string()),
    optInConfirmationMessage: s.optionalNullable(s.string()),
    helpMessageSample: s.optionalNullable(s.string()),
    privacyPolicyUrl: s.optionalNullable(s.string()),
    termsAndConditionsUrl: s.optionalNullable(s.string()),
    ageGatedContent: s.optionalNullable(s.boolean()),
    optInKeywords: s.optionalNullable(s.array(s.string())),
    rejectionReasons: s.optionalNullable(s.array(s.record(s.string(), s.unknown()))),
    resourceLinks: s.optionalNullable(s.record(s.string(), s.unknown())),
    externalReferenceId: s.optionalNullable(s.string()),
    vettingId: s.optionalNullable(s.string()),
    vettingProvider: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumVettingProviderSchema)),
    vettingIdExpiration: s.optionalNullable(s.dateTime()),
    _keysMap: {
      accountSid: "account_sid",
      customerProfileSid: "customer_profile_sid",
      trustProductSid: "trust_product_sid",
      dateCreated: "date_created",
      dateUpdated: "date_updated",
      regulatedItemSid: "regulated_item_sid",
      businessName: "business_name",
      businessStreetAddress: "business_street_address",
      businessStreetAddress2: "business_street_address2",
      businessCity: "business_city",
      businessStateProvinceRegion: "business_state_province_region",
      businessPostalCode: "business_postal_code",
      businessCountry: "business_country",
      businessWebsite: "business_website",
      businessContactFirstName: "business_contact_first_name",
      businessContactLastName: "business_contact_last_name",
      businessContactEmail: "business_contact_email",
      businessContactPhone: "business_contact_phone",
      notificationEmail: "notification_email",
      useCaseCategories: "use_case_categories",
      useCaseSummary: "use_case_summary",
      productionMessageSample: "production_message_sample",
      optInImageUrls: "opt_in_image_urls",
      optInType: "opt_in_type",
      messageVolume: "message_volume",
      additionalInformation: "additional_information",
      tollfreePhoneNumberSid: "tollfree_phone_number_sid",
      tollfreePhoneNumber: "tollfree_phone_number",
      rejectionReason: "rejection_reason",
      errorCode: "error_code",
      editExpiration: "edit_expiration",
      editAllowed: "edit_allowed",
      businessRegistrationNumber: "business_registration_number",
      businessRegistrationAuthority: "business_registration_authority",
      businessRegistrationCountry: "business_registration_country",
      businessType: "business_type",
      businessRegistrationPhoneNumber: "business_registration_phone_number",
      doingBusinessAs: "doing_business_as",
      optInConfirmationMessage: "opt_in_confirmation_message",
      helpMessageSample: "help_message_sample",
      privacyPolicyUrl: "privacy_policy_url",
      termsAndConditionsUrl: "terms_and_conditions_url",
      ageGatedContent: "age_gated_content",
      optInKeywords: "opt_in_keywords",
      rejectionReasons: "rejection_reasons",
      resourceLinks: "resource_links",
      externalReferenceId: "external_reference_id",
      vettingId: "vetting_id",
      vettingProvider: "vetting_provider",
      vettingIdExpiration: "vetting_id_expiration",
    },
  });
