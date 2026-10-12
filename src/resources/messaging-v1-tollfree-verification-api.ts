import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listTollfreeVerificationResponseSchema,
  type ListTollfreeVerificationResponse,
} from "../models/list-tollfree-verification-response.js";
import {
  messagingV1TollfreeVerificationSchema,
  type MessagingV1TollfreeVerification,
} from "../models/messaging-v1-tollfree-verification.js";
import {
  tollfreeVerificationEnumBusinessRegistrationAuthoritySchema,
  type TollfreeVerificationEnumBusinessRegistrationAuthority,
} from "../models/tollfree-verification-enum-business-registration-authority.js";
import {
  tollfreeVerificationEnumBusinessTypeSchema,
  type TollfreeVerificationEnumBusinessType,
} from "../models/tollfree-verification-enum-business-type.js";
import {
  tollfreeVerificationEnumOptInTypeSchema,
  type TollfreeVerificationEnumOptInType,
} from "../models/tollfree-verification-enum-opt-in-type.js";
import {
  tollfreeVerificationEnumStatusSchema,
  type TollfreeVerificationEnumStatus,
} from "../models/tollfree-verification-enum-status.js";
import {
  tollfreeVerificationEnumUseCaseCategorySchema,
  type TollfreeVerificationEnumUseCaseCategory,
} from "../models/tollfree-verification-enum-use-case-category.js";
import {
  tollfreeVerificationEnumVettingProviderSchema,
  type TollfreeVerificationEnumVettingProvider,
} from "../models/tollfree-verification-enum-vetting-provider.js";
import type { Servers } from "../servers.js";

export class MessagingV1TollfreeVerificationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a tollfree verification
   *
   * @remarks
   * Create a tollfree verification
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.CreateTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Tollfree/Verifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "BusinessName", value: request.businessName, schema: s.string() },
            { name: "BusinessWebsite", value: request.businessWebsite, schema: s.string() },
            { name: "NotificationEmail", value: request.notificationEmail, schema: s.string() },
            {
              name: "UseCaseCategories",
              value: request.useCaseCategories,
              schema: s.nullable(s.array(s.lazy(() => tollfreeVerificationEnumUseCaseCategorySchema))),
            },
            { name: "UseCaseSummary", value: request.useCaseSummary, schema: s.string() },
            { name: "ProductionMessageSample", value: request.productionMessageSample, schema: s.string() },
            { name: "OptInImageUrls", value: request.optInImageUrls, schema: s.array(s.string()) },
            { name: "OptInType", value: request.optInType, schema: tollfreeVerificationEnumOptInTypeSchema },
            { name: "MessageVolume", value: request.messageVolume, schema: s.string() },
            { name: "TollfreePhoneNumberSid", value: request.tollfreePhoneNumberSid, schema: s.string() },
            { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.optional(s.string()) },
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
            {
              name: "ExternalReferenceId",
              value: request.externalReferenceId,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessRegistrationNumber",
              value: request.businessRegistrationNumber,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessRegistrationAuthority",
              value: request.businessRegistrationAuthority,
              schema: s.optionalNullable(
                s.lazy(() => tollfreeVerificationEnumBusinessRegistrationAuthoritySchema),
              ),
            },
            {
              name: "BusinessRegistrationCountry",
              value: request.businessRegistrationCountry,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessType",
              value: request.businessType,
              schema: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumBusinessTypeSchema)),
            },
            {
              name: "BusinessRegistrationPhoneNumber",
              value: request.businessRegistrationPhoneNumber,
              schema: s.optional(s.string()),
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
            { name: "OptInKeywords", value: request.optInKeywords, schema: s.optional(s.array(s.string())) },
            {
              name: "VettingProvider",
              value: request.vettingProvider,
              schema: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumVettingProviderSchema)),
            },
            { name: "VettingId", value: request.vettingId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1TollfreeVerificationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a tollfree verification
   *
   * @remarks
   * Delete a tollfree verification
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.DeleteTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a tollfree verification
   *
   * @remarks
   * Retrieve a tollfree verification
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.FetchTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1TollfreeVerificationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List tollfree verifications
   *
   * @remarks
   * List tollfree verifications
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.ListTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTollfreeVerificationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Tollfree/Verifications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "TollfreePhoneNumberSid",
            value: request.tollfreePhoneNumberSid,
            schema: s.optional(s.string()),
          },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => tollfreeVerificationEnumStatusSchema)),
          },
          { name: "ExternalReferenceId", value: request.externalReferenceId, schema: s.optional(s.string()) },
          { name: "IncludeSubAccounts", value: request.includeSubAccounts, schema: s.optional(s.boolean()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "TrustProductSid",
            value: request.trustProductSid,
            schema: s.optional(s.array(s.string())),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTollfreeVerificationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Edit a tollfree verification
   *
   * @remarks
   * Edit a tollfree verification
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.UpdateTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "BusinessName", value: request.businessName, schema: s.optional(s.string()) },
            { name: "BusinessWebsite", value: request.businessWebsite, schema: s.optional(s.string()) },
            { name: "NotificationEmail", value: request.notificationEmail, schema: s.optional(s.string()) },
            {
              name: "UseCaseCategories",
              value: request.useCaseCategories,
              schema: s.optionalNullable(
                s.array(s.lazy(() => tollfreeVerificationEnumUseCaseCategorySchema)),
              ),
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
              schema: s.optional(s.lazy(() => tollfreeVerificationEnumOptInTypeSchema)),
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
            { name: "EditReason", value: request.editReason, schema: s.optional(s.string()) },
            {
              name: "BusinessRegistrationNumber",
              value: request.businessRegistrationNumber,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessRegistrationAuthority",
              value: request.businessRegistrationAuthority,
              schema: s.optionalNullable(
                s.lazy(() => tollfreeVerificationEnumBusinessRegistrationAuthoritySchema),
              ),
            },
            {
              name: "BusinessRegistrationCountry",
              value: request.businessRegistrationCountry,
              schema: s.optional(s.string()),
            },
            {
              name: "BusinessType",
              value: request.businessType,
              schema: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumBusinessTypeSchema)),
            },
            {
              name: "BusinessRegistrationPhoneNumber",
              value: request.businessRegistrationPhoneNumber,
              schema: s.optional(s.string()),
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
            { name: "OptInKeywords", value: request.optInKeywords, schema: s.optional(s.array(s.string())) },
            {
              name: "VettingProvider",
              value: request.vettingProvider,
              schema: s.optionalNullable(s.lazy(() => tollfreeVerificationEnumVettingProviderSchema)),
            },
            { name: "VettingId", value: request.vettingId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: messagingV1TollfreeVerificationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV1TollfreeVerificationApi {
  export type CreateTollfreeVerificationRequest = {
    /** The name of the business or organization using the Tollfree number. */
    businessName: string;
    /** The website of the business or organization using the Tollfree number. */
    businessWebsite: string;
    /** The email address to receive the notification about the verification result. . */
    notificationEmail: string;
    /** The category of the use case for the Tollfree Number. List as many as are applicable. */
    useCaseCategories: TollfreeVerificationEnumUseCaseCategory[] | null;
    /** Use this to further explain how messaging is used by the business or organization. */
    useCaseSummary: string;
    /** An example of message content, i.e. a sample message. */
    productionMessageSample: string;
    /**
     * Link to an image that shows the opt-in workflow. Multiple images allowed and must be a
     * publicly hosted URL.
     */
    optInImageUrls: string[];
    /** Describe how a user opts-in to text messages. */
    optInType: TollfreeVerificationEnumOptInType;
    /** Estimate monthly volume of messages from the Tollfree Number. */
    messageVolume: string;
    /** The SID of the Phone Number associated with the Tollfree Verification. */
    tollfreePhoneNumberSid: string;
    /** Customer's Profile Bundle BundleSid. */
    customerProfileSid?: string;
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
     * The E.164 formatted phone number of the contact for the business or organization using the
     * Tollfree number.
     */
    businessContactPhone?: string;
    /**
     * An optional external reference ID supplied by customer and echoed back on status retrieval.
     */
    externalReferenceId?: string;
    /**
     * A legally recognized business registration number. Required for all business types except
     * SOLE_PROPRIETOR.
     */
    businessRegistrationNumber?: string;
    /**
     * The organizational authority for business registrations. Required for all business types
     * except SOLE_PROPRIETOR.
     */
    businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
    /**
     * The country where the business is registered. Required for all business types except
     * SOLE_PROPRIETOR.
     */
    businessRegistrationCountry?: string;
    /**
     * The type of business, valid values are PRIVATE_PROFIT, PUBLIC_PROFIT, NON_PROFIT,
     * SOLE_PROPRIETOR, GOVERNMENT. Required field.
     */
    businessType?: TollfreeVerificationEnumBusinessType | null;
    /** The E.164 formatted number associated with the business. */
    businessRegistrationPhoneNumber?: string;
    /**
     * Trade name, sub entity, or downstream business name of business being submitted for
     * verification
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
    /** List of keywords that users can text in to opt in to receive messages. */
    optInKeywords?: string[];
    /** The third-party political vetting provider. */
    vettingProvider?: TollfreeVerificationEnumVettingProvider | null;
    /** The unique ID of the vetting */
    vettingId?: string;
  };

  export type DeleteTollfreeVerificationRequest = {
    /** The unique string to identify Tollfree Verification. */
    sid: string;
  };

  export type FetchTollfreeVerificationRequest = {
    /** A unique string identifying a Tollfree Verification. */
    sid: string;
  };

  export type ListTollfreeVerificationRequest = {
    /** The SID of the Phone Number associated with the Tollfree Verification. */
    tollfreePhoneNumberSid?: string;
    /** The compliance status of the Tollfree Verification record. */
    status?: TollfreeVerificationEnumStatus;
    /** Customer supplied reference id for the Tollfree Verification record. */
    externalReferenceId?: string;
    /** Whether to include Tollfree Verifications from sub accounts in list response. */
    includeSubAccounts?: boolean;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
    /** The trust product sids / tollfree bundle sids of tollfree verifications */
    trustProductSid?: string[];
  };

  export type UpdateTollfreeVerificationRequest = {
    /** The unique string to identify Tollfree Verification. */
    sid: string;
    /** The name of the business or organization using the Tollfree number. */
    businessName?: string;
    /** The website of the business or organization using the Tollfree number. */
    businessWebsite?: string;
    /** The email address to receive the notification about the verification result. . */
    notificationEmail?: string;
    /** The category of the use case for the Tollfree Number. List as many as are applicable. */
    useCaseCategories?: TollfreeVerificationEnumUseCaseCategory[] | null;
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
    optInType?: TollfreeVerificationEnumOptInType;
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
     * The E.164 formatted phone number of the contact for the business or organization using the
     * Tollfree number.
     */
    businessContactPhone?: string;
    /**
     * Describe why the verification is being edited. If the verification was rejected because of a
     * technical issue, such as the website being down, and the issue has been resolved this
     * parameter should be set to something similar to 'Website fixed'.
     */
    editReason?: string;
    /** A legally recognized business registration number */
    businessRegistrationNumber?: string;
    /**
     * The organizational authority for business registrations. Required for all business types
     * except SOLE_PROPRIETOR.
     */
    businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
    /** Country business is registered in */
    businessRegistrationCountry?: string;
    /**
     * The type of business, valid values are PRIVATE_PROFIT, PUBLIC_PROFIT, NON_PROFIT,
     * SOLE_PROPRIETOR, GOVERNMENT. Required field.
     */
    businessType?: TollfreeVerificationEnumBusinessType | null;
    /** The E.164 formatted number associated with the business. */
    businessRegistrationPhoneNumber?: string;
    /**
     * Trade name, sub entity, or downstream business name of business being submitted for
     * verification
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
    /** List of keywords that users can text in to opt in to receive messages. */
    optInKeywords?: string[];
    /** The third-party political vetting provider. */
    vettingProvider?: TollfreeVerificationEnumVettingProvider | null;
    /** The unique ID of the vetting */
    vettingId?: string;
  };
}
