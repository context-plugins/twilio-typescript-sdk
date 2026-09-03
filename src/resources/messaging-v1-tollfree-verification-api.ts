import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.CreateTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ResponseError> {
    return this.#rawClient.execute<MessagingV1TollfreeVerification, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Tollfree/Verifications"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.DeleteTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.FetchTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ResponseError> {
    return this.#rawClient.execute<MessagingV1TollfreeVerification, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messagingV1TollfreeVerificationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.ListTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTollfreeVerificationResponse, ResponseError> {
    return this.#rawClient.execute<ListTollfreeVerificationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Tollfree/Verifications"),
        auth: this.#auth.accountSidAuthToken,
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
          {
            name: "TrustProductSid",
            value: request.trustProductSid,
            schema: s.optional(s.array(s.string())),
          },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTollfreeVerificationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTollfreeVerification(
    request: MessagingV1TollfreeVerificationApi.UpdateTollfreeVerificationRequest,
    options?: RequestOptions,
  ): ApiPromise<MessagingV1TollfreeVerification, ResponseError> {
    return this.#rawClient.execute<MessagingV1TollfreeVerification, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v1/Tollfree/Verifications/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV1TollfreeVerificationApi {
  export type CreateTollfreeVerificationRequest = {
    businessName: string;
    businessWebsite: string;
    notificationEmail: string;
    useCaseCategories: TollfreeVerificationEnumUseCaseCategory[] | null;
    useCaseSummary: string;
    productionMessageSample: string;
    optInImageUrls: string[];
    optInType: TollfreeVerificationEnumOptInType;
    messageVolume: string;
    tollfreePhoneNumberSid: string;
    customerProfileSid?: string;
    businessStreetAddress?: string;
    businessStreetAddress2?: string;
    businessCity?: string;
    businessStateProvinceRegion?: string;
    businessPostalCode?: string;
    businessCountry?: string;
    additionalInformation?: string;
    businessContactFirstName?: string;
    businessContactLastName?: string;
    businessContactEmail?: string;
    businessContactPhone?: string;
    externalReferenceId?: string;
    businessRegistrationNumber?: string;
    businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
    businessRegistrationCountry?: string;
    businessType?: TollfreeVerificationEnumBusinessType | null;
    businessRegistrationPhoneNumber?: string;
    doingBusinessAs?: string;
    optInConfirmationMessage?: string;
    helpMessageSample?: string;
    privacyPolicyUrl?: string;
    termsAndConditionsUrl?: string;
    ageGatedContent?: boolean;
    optInKeywords?: string[];
    vettingProvider?: TollfreeVerificationEnumVettingProvider | null;
    vettingId?: string;
  };

  export type DeleteTollfreeVerificationRequest = {
    sid: string;
  };

  export type FetchTollfreeVerificationRequest = {
    sid: string;
  };

  export type ListTollfreeVerificationRequest = {
    tollfreePhoneNumberSid?: string;
    status?: TollfreeVerificationEnumStatus;
    externalReferenceId?: string;
    includeSubAccounts?: boolean;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    trustProductSid?: string[];
  };

  export type UpdateTollfreeVerificationRequest = {
    sid: string;
    businessName?: string;
    businessWebsite?: string;
    notificationEmail?: string;
    useCaseCategories?: TollfreeVerificationEnumUseCaseCategory[] | null;
    useCaseSummary?: string;
    productionMessageSample?: string;
    optInImageUrls?: string[];
    optInType?: TollfreeVerificationEnumOptInType;
    messageVolume?: string;
    businessStreetAddress?: string;
    businessStreetAddress2?: string;
    businessCity?: string;
    businessStateProvinceRegion?: string;
    businessPostalCode?: string;
    businessCountry?: string;
    additionalInformation?: string;
    businessContactFirstName?: string;
    businessContactLastName?: string;
    businessContactEmail?: string;
    businessContactPhone?: string;
    editReason?: string;
    businessRegistrationNumber?: string;
    businessRegistrationAuthority?: TollfreeVerificationEnumBusinessRegistrationAuthority | null;
    businessRegistrationCountry?: string;
    businessType?: TollfreeVerificationEnumBusinessType | null;
    businessRegistrationPhoneNumber?: string;
    doingBusinessAs?: string;
    optInConfirmationMessage?: string;
    helpMessageSample?: string;
    privacyPolicyUrl?: string;
    termsAndConditionsUrl?: string;
    ageGatedContent?: boolean;
    optInKeywords?: string[];
    vettingProvider?: TollfreeVerificationEnumVettingProvider | null;
    vettingId?: string;
  };
}
