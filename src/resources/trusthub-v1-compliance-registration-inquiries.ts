import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createComplianceRegistration(
    request: TrusthubV1ComplianceRegistrationInquiries.CreateComplianceRegistrationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceRegistration, ResponseError> {
    return this.#rawClient.execute<TrusthubV1ComplianceRegistration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9(
          "/v1/ComplianceInquiries/Registration/RegulatoryCompliance/GB/Initialize",
        ),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateComplianceRegistration(
    request: TrusthubV1ComplianceRegistrationInquiries.UpdateComplianceRegistrationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1ComplianceRegistration, ResponseError> {
    return this.#rawClient.execute<TrusthubV1ComplianceRegistration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9(
          "/v1/ComplianceInquiries/Registration/{RegistrationId}/RegulatoryCompliance/GB/Initialize",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "RegistrationId", value: request.registrationId, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1ComplianceRegistrationInquiries {
  export type CreateComplianceRegistrationRequest = {
    endUserType: CustomerType;
    phoneNumberType: ComplianceRegistrationEnumPhoneNumberType;
    businessIdentityType?: ComplianceRegistrationEnumBusinessIdentityType;
    businessRegistrationAuthority?: ComplianceRegistrationEnumBusinessRegistrationAuthority;
    businessLegalName?: string;
    notificationEmail?: string;
    acceptedNotificationReceipt?: boolean;
    businessRegistrationNumber?: string;
    businessWebsiteUrl?: string;
    friendlyName?: string;
    authorizedRepresentative1FirstName?: string;
    authorizedRepresentative1LastName?: string;
    authorizedRepresentative1Phone?: string;
    authorizedRepresentative1Email?: string;
    authorizedRepresentative1DateOfBirth?: string;
    addressStreet?: string;
    addressStreetSecondary?: string;
    addressCity?: string;
    addressSubdivision?: string;
    addressPostalCode?: string;
    addressCountryCode?: string;
    emergencyAddressStreet?: string;
    emergencyAddressStreetSecondary?: string;
    emergencyAddressCity?: string;
    emergencyAddressSubdivision?: string;
    emergencyAddressPostalCode?: string;
    emergencyAddressCountryCode?: string;
    useAddressAsEmergencyAddress?: boolean;
    fileName?: string;
    file?: string;
    firstName?: string;
    lastName?: string;
    dateOfBirth?: string;
    individualEmail?: string;
    individualPhone?: string;
    isIsvEmbed?: boolean;
    isvRegisteringForSelfOrTenant?: string;
    statusCallbackUrl?: string;
    themeSetId?: string;
  };

  export type UpdateComplianceRegistrationRequest = {
    registrationId: string;
    isIsvEmbed?: boolean;
    themeSetId?: string;
  };
}
