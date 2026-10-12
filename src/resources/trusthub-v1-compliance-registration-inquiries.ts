import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  complianceRegistrationEnumBusinessIdentityTypeSchema,
  type ComplianceRegistrationEnumBusinessIdentityType,
} from "../models/compliance-registration-enum-business-identity-type.js";
import {
  complianceRegistrationEnumBusinessRegistrationAuthoritySchema,
  type ComplianceRegistrationEnumBusinessRegistrationAuthority,
} from "../models/compliance-registration-enum-business-registration-authority.js";
import {
  complianceRegistrationEnumPhoneNumberTypeSchema,
  type ComplianceRegistrationEnumPhoneNumberType,
} from "../models/compliance-registration-enum-phone-number-type.js";
import { customerTypeSchema, type CustomerType } from "../models/customer-type.js";
import {
  trusthubV1ComplianceRegistrationSchema,
  type TrusthubV1ComplianceRegistration,
} from "../models/trusthub-v1-compliance-registration.js";
import type { Servers } from "../servers.js";

export class TrusthubV1ComplianceRegistrationInquiries {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Compliance Registration Inquiry for the authenticated account. This is necessary
   * to start a new embedded session.
   *
   * @remarks
   * Create a new Compliance Registration Inquiry for the authenticated account. This is necessary
   * to start a new embedded session.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createComplianceRegistration(
    request: TrusthubV1ComplianceRegistrationInquiries.CreateComplianceRegistrationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceRegistration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/v1/ComplianceInquiries/Registration/RegulatoryCompliance/GB/Initialize",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "EndUserType", value: request.endUserType, schema: customerTypeSchema },
            {
              name: "PhoneNumberType",
              value: request.phoneNumberType,
              schema: complianceRegistrationEnumPhoneNumberTypeSchema,
            },
            {
              name: "BusinessIdentityType",
              value: request.businessIdentityType,
              schema: s.optional(s.lazy(() => complianceRegistrationEnumBusinessIdentityTypeSchema)),
            },
            {
              name: "BusinessRegistrationAuthority",
              value: request.businessRegistrationAuthority,
              schema: s.optional(s.lazy(() => complianceRegistrationEnumBusinessRegistrationAuthoritySchema)),
            },
            { name: "BusinessLegalName", value: request.businessLegalName, schema: s.optional(s.string()) },
            { name: "NotificationEmail", value: request.notificationEmail, schema: s.optional(s.string()) },
            {
              name: "AcceptedNotificationReceipt",
              value: request.acceptedNotificationReceipt,
              schema: s.optional(s.boolean()),
            },
            {
              name: "BusinessRegistrationNumber",
              value: request.businessRegistrationNumber,
              schema: s.optional(s.string()),
            },
            { name: "BusinessWebsiteUrl", value: request.businessWebsiteUrl, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "AuthorizedRepresentative1FirstName",
              value: request.authorizedRepresentative1FirstName,
              schema: s.optional(s.string()),
            },
            {
              name: "AuthorizedRepresentative1LastName",
              value: request.authorizedRepresentative1LastName,
              schema: s.optional(s.string()),
            },
            {
              name: "AuthorizedRepresentative1Phone",
              value: request.authorizedRepresentative1Phone,
              schema: s.optional(s.string()),
            },
            {
              name: "AuthorizedRepresentative1Email",
              value: request.authorizedRepresentative1Email,
              schema: s.optional(s.string()),
            },
            {
              name: "AuthorizedRepresentative1DateOfBirth",
              value: request.authorizedRepresentative1DateOfBirth,
              schema: s.optional(s.string()),
            },
            { name: "AddressStreet", value: request.addressStreet, schema: s.optional(s.string()) },
            {
              name: "AddressStreetSecondary",
              value: request.addressStreetSecondary,
              schema: s.optional(s.string()),
            },
            { name: "AddressCity", value: request.addressCity, schema: s.optional(s.string()) },
            { name: "AddressSubdivision", value: request.addressSubdivision, schema: s.optional(s.string()) },
            { name: "AddressPostalCode", value: request.addressPostalCode, schema: s.optional(s.string()) },
            { name: "AddressCountryCode", value: request.addressCountryCode, schema: s.optional(s.string()) },
            {
              name: "EmergencyAddressStreet",
              value: request.emergencyAddressStreet,
              schema: s.optional(s.string()),
            },
            {
              name: "EmergencyAddressStreetSecondary",
              value: request.emergencyAddressStreetSecondary,
              schema: s.optional(s.string()),
            },
            {
              name: "EmergencyAddressCity",
              value: request.emergencyAddressCity,
              schema: s.optional(s.string()),
            },
            {
              name: "EmergencyAddressSubdivision",
              value: request.emergencyAddressSubdivision,
              schema: s.optional(s.string()),
            },
            {
              name: "EmergencyAddressPostalCode",
              value: request.emergencyAddressPostalCode,
              schema: s.optional(s.string()),
            },
            {
              name: "EmergencyAddressCountryCode",
              value: request.emergencyAddressCountryCode,
              schema: s.optional(s.string()),
            },
            {
              name: "UseAddressAsEmergencyAddress",
              value: request.useAddressAsEmergencyAddress,
              schema: s.optional(s.boolean()),
            },
            { name: "FileName", value: request.fileName, schema: s.optional(s.string()) },
            { name: "File", value: request.file, schema: s.optional(s.string()) },
            { name: "FirstName", value: request.firstName, schema: s.optional(s.string()) },
            { name: "LastName", value: request.lastName, schema: s.optional(s.string()) },
            { name: "DateOfBirth", value: request.dateOfBirth, schema: s.optional(s.string()) },
            { name: "IndividualEmail", value: request.individualEmail, schema: s.optional(s.string()) },
            { name: "IndividualPhone", value: request.individualPhone, schema: s.optional(s.string()) },
            { name: "IsIsvEmbed", value: request.isIsvEmbed, schema: s.optional(s.boolean()) },
            {
              name: "IsvRegisteringForSelfOrTenant",
              value: request.isvRegisteringForSelfOrTenant,
              schema: s.optional(s.string()),
            },
            { name: "StatusCallbackUrl", value: request.statusCallbackUrl, schema: s.optional(s.string()) },
            { name: "ThemeSetId", value: request.themeSetId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1ComplianceRegistrationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Resume a specific Regulatory Compliance Inquiry that has expired, or re-open a rejected
   * Compliance Inquiry for editing.
   *
   * @remarks
   * Resume a specific Regulatory Compliance Inquiry that has expired, or re-open a rejected
   * Compliance Inquiry for editing.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateComplianceRegistration(
    request: TrusthubV1ComplianceRegistrationInquiries.UpdateComplianceRegistrationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceRegistration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/v1/ComplianceInquiries/Registration/{RegistrationId}/RegulatoryCompliance/GB/Initialize",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RegistrationId", value: request.registrationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "IsIsvEmbed", value: request.isIsvEmbed, schema: s.optional(s.boolean()) },
            { name: "ThemeSetId", value: request.themeSetId, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1ComplianceRegistrationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceRegistrationInquiries {
  export type CreateComplianceRegistrationRequest = {
    /** The type of End User the regulation requires - can be `Individual` or `Business`. */
    endUserType: CustomerType;
    /**
     * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`,
     * `national`, or `toll-free`.
     */
    phoneNumberType: ComplianceRegistrationEnumPhoneNumberType;
    /** The type of business identity. Can be `direct customer` or `ISV`. */
    businessIdentityType?: ComplianceRegistrationEnumBusinessIdentityType;
    /** The authority that registered the business */
    businessRegistrationAuthority?: ComplianceRegistrationEnumBusinessRegistrationAuthority;
    /** he name of the business or organization using the Tollfree number. */
    businessLegalName?: string;
    /** he email address to receive the notification about the verification result. */
    notificationEmail?: string;
    /** The email address to receive the notification about the verification result. */
    acceptedNotificationReceipt?: boolean;
    /** Business registration number of the business */
    businessRegistrationNumber?: string;
    /** The URL of the business website */
    businessWebsiteUrl?: string;
    /** Friendly name for your business information */
    friendlyName?: string;
    /** First name of the authorized representative */
    authorizedRepresentative1FirstName?: string;
    /** Last name of the authorized representative */
    authorizedRepresentative1LastName?: string;
    /** Phone number of the authorized representative */
    authorizedRepresentative1Phone?: string;
    /** Email address of the authorized representative */
    authorizedRepresentative1Email?: string;
    /** Birthdate of the authorized representative */
    authorizedRepresentative1DateOfBirth?: string;
    /** Street address of the business */
    addressStreet?: string;
    /** Street address of the business */
    addressStreetSecondary?: string;
    /** City of the business */
    addressCity?: string;
    /** State or province of the business */
    addressSubdivision?: string;
    /** Postal code of the business */
    addressPostalCode?: string;
    /** Country code of the business */
    addressCountryCode?: string;
    /** Street address of the business */
    emergencyAddressStreet?: string;
    /** Street address of the business */
    emergencyAddressStreetSecondary?: string;
    /** City of the business */
    emergencyAddressCity?: string;
    /** State or province of the business */
    emergencyAddressSubdivision?: string;
    /** Postal code of the business */
    emergencyAddressPostalCode?: string;
    /** Country code of the business */
    emergencyAddressCountryCode?: string;
    /** Use the business address as the emergency address */
    useAddressAsEmergencyAddress?: boolean;
    /** The name of the verification document to upload */
    fileName?: string;
    /** The verification document to upload */
    file?: string;
    /** The first name of the Individual User. */
    firstName?: string;
    /** The last name of the Individual User. */
    lastName?: string;
    /** The date of birth of the Individual User. */
    dateOfBirth?: string;
    /** The email address of the Individual User. */
    individualEmail?: string;
    /** The phone number of the Individual User. */
    individualPhone?: string;
    /** Indicates if the inquiry is being started from an ISV embedded component. */
    isIsvEmbed?: boolean;
    /** Indicates if the isv registering for self or tenant. */
    isvRegisteringForSelfOrTenant?: string;
    /** The url we call to inform you of bundle changes. */
    statusCallbackUrl?: string;
    /** Theme id for styling the inquiry form. */
    themeSetId?: string;
  };

  export type UpdateComplianceRegistrationRequest = {
    /**
     * The unique RegistrationId matching the Regulatory Compliance Inquiry that should be resumed
     * or resubmitted. This value will have been returned by the initial Regulatory Compliance
     * Inquiry creation call.
     */
    registrationId: string;
    /** Indicates if the inquiry is being started from an ISV embedded component. */
    isIsvEmbed?: boolean;
    /** Theme id for styling the inquiry form. */
    themeSetId?: string;
  };
}
