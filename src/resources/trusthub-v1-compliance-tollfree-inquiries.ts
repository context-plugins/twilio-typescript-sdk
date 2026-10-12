import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  complianceTollfreeInquiryEnumOptInTypeSchema,
  type ComplianceTollfreeInquiryEnumOptInType,
} from "../models/compliance-tollfree-inquiry-enum-opt-in-type.js";
import {
  tollfreeVerificationEnumBusinessTypeSchema,
  type TollfreeVerificationEnumBusinessType,
} from "../models/tollfree-verification-enum-business-type.js";
import {
  trusthubV1ComplianceTollfreeInquirySchema,
  type TrusthubV1ComplianceTollfreeInquiry,
} from "../models/trusthub-v1-compliance-tollfree-inquiry.js";
import type { Servers } from "../servers.js";

export class TrusthubV1ComplianceTollfreeInquiries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Compliance Tollfree Verification Inquiry for the authenticated account. This is
   * necessary to start a new embedded session.
   *
   * @remarks
   * Create a new Compliance Tollfree Verification Inquiry for the authenticated account. This is
   * necessary to start a new embedded session.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComplianceTollfreeInquiry(
    request: TrusthubV1ComplianceTollfreeInquiries.CreateComplianceTollfreeInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceTollfreeInquiry, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/ComplianceInquiries/Tollfree/Initialize"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "TollfreePhoneNumber", value: request.tollfreePhoneNumber, schema: s.string() },
            { name: "NotificationEmail", value: request.notificationEmail, schema: s.string() },
            { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.optional(s.string()) },
            { name: "BusinessName", value: request.businessName, schema: s.optional(s.string()) },
            { name: "BusinessWebsite", value: request.businessWebsite, schema: s.optional(s.string()) },
            {
              name: "UseCaseCategories",
              value: request.useCaseCategories,
              schema: s.optional(s.array(s.string())),
            },
            { name: "UseCaseSummary", value: request.useCaseSummary, schema: s.optional(s.string()) },
            {
              name: "ProductionMessageSample",
              value: request.productionMessageSample,
              schema: s.optional(s.string()),
            },
            {
              name: "OptInImageUrls",
              value: request.optInImageUrls,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "OptInType",
              value: request.optInType,
              schema: s.optional(s.lazy(() => complianceTollfreeInquiryEnumOptInTypeSchema)),
            },
            { name: "MessageVolume", value: request.messageVolume, schema: s.optional(s.string()) },
            {
              name: "BusinessStreetAddress",
              value: request.businessStreetAddress,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessStreetAddress2",
              value: request.businessStreetAddress2,
              schema: s.optional(s.string()),
            },
            { name: "BusinessCity", value: request.businessCity, schema: s.optional(s.string()) },
            {
              name: "BusinessStateProvinceRegion",
              value: request.businessStateProvinceRegion,
              schema: s.optional(s.string()),
            },
            { name: "BusinessPostalCode", value: request.businessPostalCode, schema: s.optional(s.string()) },
            { name: "BusinessCountry", value: request.businessCountry, schema: s.optional(s.string()) },
            {
              name: "AdditionalInformation",
              value: request.additionalInformation,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessContactFirstName",
              value: request.businessContactFirstName,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessContactLastName",
              value: request.businessContactLastName,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessContactEmail",
              value: request.businessContactEmail,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessContactPhone",
              value: request.businessContactPhone,
              schema: s.optional(s.string()),
            },
            { name: "ThemeSetId", value: request.themeSetId, schema: s.optional(s.string()) },
            {
              name: "SkipMessagingUseCase",
              value: request.skipMessagingUseCase,
              schema: s.optional(s.boolean()),
            },
            {
              name: "BusinessRegistrationNumber",
              value: request.businessRegistrationNumber,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessRegistrationAuthority",
              value: request.businessRegistrationAuthority,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessRegistrationCountry",
              value: request.businessRegistrationCountry,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessType",
              value: request.businessType,
              schema: s.optional(s.lazy(() => tollfreeVerificationEnumBusinessTypeSchema)),
            },
            { name: "DoingBusinessAs", value: request.doingBusinessAs, schema: s.optional(s.string()) },
            {
              name: "OptInConfirmationMessage",
              value: request.optInConfirmationMessage,
              schema: s.optional(s.string()),
            },
            { name: "HelpMessageSample", value: request.helpMessageSample, schema: s.optional(s.string()) },
            { name: "PrivacyPolicyUrl", value: request.privacyPolicyUrl, schema: s.optional(s.string()) },
            {
              name: "TermsAndConditionsUrl",
              value: request.termsAndConditionsUrl,
              schema: s.optional(s.string()),
            },
            { name: "AgeGatedContent", value: request.ageGatedContent, schema: s.optional(s.boolean()) },
            {
              name: "ExternalReferenceId",
              value: request.externalReferenceId,
              schema: s.optional(s.string()),
            },
            { name: "OptInKeywords", value: request.optInKeywords, schema: s.optional(s.array(s.string())) },
            { name: "VettingId", value: request.vettingId, schema: s.optional(s.string()) },
            { name: "VettingProvider", value: request.vettingProvider, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1ComplianceTollfreeInquirySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceTollfreeInquiries {
  export type CreateComplianceTollfreeInquiryRequest = {
    /** The Tollfree phone number to be verified */
    tollfreePhoneNumber: string;
    /** The email address to receive the notification about the verification result. */
    notificationEmail: string;
    /** The Customer Profile Sid associated with the Account. */
    customerProfileSid?: string;
    /** The name of the business or organization using the Tollfree number. */
    businessName?: string;
    /** The website of the business or organization using the Tollfree number. */
    businessWebsite?: string;
    /** The category of the use case for the Tollfree Number. List as many are applicable.. */
    useCaseCategories?: string[];
    /** Use this to further explain how messaging is used by the business or organization. */
    useCaseSummary?: string;
    /** An example of message content, i.e. a sample message. */
    productionMessageSample?: string;
    /**
     * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a
     * publicly hosted URL.
     */
    optInImageUrls?: string[];
    /** Describe how a user opts-in to text messages. */
    optInType?: ComplianceTollfreeInquiryEnumOptInType;
    /** Estimate monthly volume of messages from the Tollfree Number. */
    messageVolume?: string;
    /** The address of the business or organization using the Tollfree number. */
    businessStreetAddress?: string;
    /** The address of the business or organization using the Tollfree number. */
    businessStreetAddress2?: string;
    /** The city of the business or organization using the Tollfree number. */
    businessCity?: string;
    /** The state/province/region of the business or organization using the Tollfree number. */
    businessStateProvinceRegion?: string;
    /** The postal code of the business or organization using the Tollfree number. */
    businessPostalCode?: string;
    /** The country of the business or organization using the Tollfree number. */
    businessCountry?: string;
    /** Additional information to be provided for verification. */
    additionalInformation?: string;
    /** The first name of the contact for the business or organization using the Tollfree number. */
    businessContactFirstName?: string;
    /** The last name of the contact for the business or organization using the Tollfree number. */
    businessContactLastName?: string;
    /**
     * The email address of the contact for the business or organization using the Tollfree number.
     */
    businessContactEmail?: string;
    /**
     * The phone number of the contact for the business or organization using the Tollfree number.
     */
    businessContactPhone?: string;
    /** Theme id for styling the inquiry form. */
    themeSetId?: string;
    /** Skip the messaging use case screen of the inquiry form. */
    skipMessagingUseCase?: boolean;
    /** The Business Registration Number of the business or organization. */
    businessRegistrationNumber?: string;
    /** The Business Registration Authority of the business or organization. */
    businessRegistrationAuthority?: string;
    /** The Business Registration Country of the business or organization. */
    businessRegistrationCountry?: string;
    /** Type of Business. */
    businessType?: TollfreeVerificationEnumBusinessType;
    /**
     * Trade name, sub entity, or downstream business name of business being submitted for
     * verification.
     */
    doingBusinessAs?: string;
    /** The confirmation message sent to users when they opt in to receive messages. */
    optInConfirmationMessage?: string;
    /** A sample help message provided to users. */
    helpMessageSample?: string;
    /** The URL to the privacy policy for the business or organization. */
    privacyPolicyUrl?: string;
    /** The URL to the terms and conditions for the business or organization. */
    termsAndConditionsUrl?: string;
    /** Indicates if the content is age gated. */
    ageGatedContent?: boolean;
    /** A legally recognized business registration number. */
    externalReferenceId?: string;
    /** List of keywords that users can text in to opt in to receive messages. */
    optInKeywords?: string[];
    /** Unique identifier for the created Vetting . */
    vettingId?: string;
    /** Name of the vetting provider. */
    vettingProvider?: string;
  };
}
