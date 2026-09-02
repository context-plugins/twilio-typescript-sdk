import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createComplianceTollfreeInquiry(
    request: TrusthubV1ComplianceTollfreeInquiries.CreateComplianceTollfreeInquiryRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceTollfreeInquiry, ResponseError> {
    return this.#rawClient.execute<TrusthubV1ComplianceTollfreeInquiry, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/ComplianceInquiries/Tollfree/Initialize"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceTollfreeInquiries {
  export type CreateComplianceTollfreeInquiryRequest = {
    tollfreePhoneNumber: string;
    notificationEmail: string;
    customerProfileSid?: string;
    businessName?: string;
    businessWebsite?: string;
    useCaseCategories?: string[];
    useCaseSummary?: string;
    productionMessageSample?: string;
    optInImageUrls?: string[];
    optInType?: ComplianceTollfreeInquiryEnumOptInType;
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
    themeSetId?: string;
    skipMessagingUseCase?: boolean;
    businessRegistrationNumber?: string;
    businessRegistrationAuthority?: string;
    businessRegistrationCountry?: string;
    businessType?: TollfreeVerificationEnumBusinessType;
    doingBusinessAs?: string;
    optInConfirmationMessage?: string;
    helpMessageSample?: string;
    privacyPolicyUrl?: string;
    termsAndConditionsUrl?: string;
    ageGatedContent?: boolean;
    externalReferenceId?: string;
    optInKeywords?: string[];
    vettingId?: string;
    vettingProvider?: string;
  };
}
