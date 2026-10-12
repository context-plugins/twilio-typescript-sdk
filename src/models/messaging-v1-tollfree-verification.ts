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
  /** The unique string to identify Tollfree Verification. */
  sid?: string | null;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Tollfree
   * Verification resource.
   */
  accountSid?: string | null;
  /** Customer's Profile Bundle BundleSid. */
  customerProfileSid?: string | null;
  /** Tollfree TrustProduct Bundle BundleSid. */
  trustProductSid?: string | null;
  /**
   * The date and time in GMT when the resource was created specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated?: Date | null;
  /**
   * The date and time in GMT when the resource was last updated specified in [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated?: Date | null;
  /** The SID of the Regulated Item. */
  regulatedItemSid?: string | null;
  /** The name of the business or organization using the Tollfree number. */
  businessName?: string | null;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress?: string | null;
  /** The address of the business or organization using the Tollfree number. */
  businessStreetAddress2?: string | null;
  /** The city of the business or organization using the Tollfree number. */
  businessCity?: string | null;
  /** The state/province/region of the business or organization using the Tollfree number. */
  businessStateProvinceRegion?: string | null;
  /** The postal code of the business or organization using the Tollfree number. */
  businessPostalCode?: string | null;
  /** The country of the business or organization using the Tollfree number. */
  businessCountry?: string | null;
  /** The website of the business or organization using the Tollfree number. */
  businessWebsite?: string | null;
  /** The first name of the contact for the business or organization using the Tollfree number. */
  businessContactFirstName?: string | null;
  /** The last name of the contact for the business or organization using the Tollfree number. */
  businessContactLastName?: string | null;
  /**
   * The email address of the contact for the business or organization using the Tollfree number.
   */
  businessContactEmail?: string | null;
  /**
   * The E.164 formatted phone number of the contact for the business or organization using the
   * Tollfree number.
   */
  businessContactPhone?: string | null;
  /** The email address to receive the notification about the verification result. . */
  notificationEmail?: string | null;
  /** The category of the use case for the Tollfree Number. List as many as are applicable. */
  useCaseCategories?: TollfreeVerificationEnumUseCaseCategory[] | null;
  /** Use this to further explain how messaging is used by the business or organization. */
  useCaseSummary?: string | null;
  /** An example of message content, i.e. a sample message. */
  productionMessageSample?: string | null;
  /**
   * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a publicly
   * hosted URL.
   */
  optInImageUrls?: string[] | null;
  /** Describe how a user opts-in to text messages. */
  optInType?: TollfreeVerificationEnumOptInType;
  /** Estimate monthly volume of messages from the Tollfree Number. */
  messageVolume?: string | null;
  /** Additional information to be provided for verification. */
  additionalInformation?: string | null;
  /** The SID of the Phone Number associated with the Tollfree Verification. */
  tollfreePhoneNumberSid?: string | null;
  /** The E.164 formatted toll-free phone number associated with the verification. */
  tollfreePhoneNumber?: string | null;
  /** The compliance status of the Tollfree Verification record. */
  status?: TollfreeVerificationEnumStatus;
  /** The absolute URL of the Tollfree Verification resource. */
  url?: string | null;
  /** The rejection reason given when a Tollfree Verification has been rejected. */
  rejectionReason?: string | null;
  /** The error code given when a Tollfree Verification has been rejected. */
  errorCode?: number | null;
  /** The date and time when the ability to edit a rejected verification expires. */
  editExpiration?: Date | null;
  /**
   * If a rejected verification is allowed to be edited/resubmitted. Some rejection reasons allow
   * editing and some do not.
   */
  editAllowed?: boolean | null;
  /** A legally recognized business registration number */
  businessRegistrationNumber?: string | null;
  /**
   * The organizational authority for business registrations. Required for all business types except
   * SOLE_PROPRIETOR.
   */
  businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
  /** Country business is registered in */
  businessRegistrationCountry?: string | null;
  /**
   * The type of business, valid values are PRIVATE_PROFIT, PUBLIC_PROFIT, NON_PROFIT,
   * SOLE_PROPRIETOR, GOVERNMENT. Required field.
   */
  businessType?: TollfreeVerificationEnumBusinessType | null;
  /** The E.164 formatted number associated with the business. */
  businessRegistrationPhoneNumber?: string | null;
  /**
   * Trade name, sub entity, or downstream business name of business being submitted for
   * verification
   */
  doingBusinessAs?: string | null;
  /** The confirmation message sent to users when they opt in to receive messages. */
  optInConfirmationMessage?: string | null;
  /** A sample help message provided to users. */
  helpMessageSample?: string | null;
  /** The URL to the privacy policy for the business or organization. */
  privacyPolicyUrl?: string | null;
  /** The URL of the terms and conditions for the business or organization. */
  termsAndConditionsUrl?: string | null;
  /** Indicates if the content is age gated. */
  ageGatedContent?: boolean | null;
  /** List of keywords that users can send to opt in or out of messages. */
  optInKeywords?: string[] | null;
  /**
   * A list of rejection reasons and codes describing why a Tollfree Verification has been rejected.
   */
  rejectionReasons?: Record<string, unknown>[] | null;
  /** The URLs of the documents associated with the Tollfree Verification resource. */
  resourceLinks?: Record<string, unknown> | null;
  /** An optional external reference ID supplied by customer and echoed back on status retrieval. */
  externalReferenceId?: string | null;
  vettingId?: string | null;
  /** The third-party political vetting provider. */
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
    errorCode: s.optionalNullable(s.int()),
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
