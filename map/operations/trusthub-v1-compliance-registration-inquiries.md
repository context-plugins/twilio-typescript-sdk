<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceRegistrationInquiries — operations

Accessor: `client.trusthubV1ComplianceRegistrationInquiries` · Source: `src/resources/trusthub-v1-compliance-registration-inquiries.ts` · 2 operations · Request types: namespace `TrusthubV1ComplianceRegistrationInquiries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComplianceRegistration

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createComplianceRegistration(request: TrusthubV1ComplianceRegistrationInquiries.CreateComplianceRegistrationRequest, options?: RequestOptions): ApiPromise<TrusthubV1ComplianceRegistration, ApiError>`
- **Wire**: `POST /v1/ComplianceInquiries/Registration/RegulatoryCompliance/GB/Initialize`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1ComplianceRegistrationInquiries.CreateComplianceRegistrationRequest` (39):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `endUserType` | `form` | `EndUserType` | `CustomerType` | yes |
| `phoneNumberType` | `form` | `PhoneNumberType` | `ComplianceRegistrationEnumPhoneNumberType` | yes |
| `businessIdentityType` | `form` | `BusinessIdentityType` | `ComplianceRegistrationEnumBusinessIdentityType` | no |
| `businessRegistrationAuthority` | `form` | `BusinessRegistrationAuthority` | `ComplianceRegistrationEnumBusinessRegistrationAuthority` | no |
| `businessLegalName` | `form` | `BusinessLegalName` | `string` | no |
| `notificationEmail` | `form` | `NotificationEmail` | `string` | no |
| `acceptedNotificationReceipt` | `form` | `AcceptedNotificationReceipt` | `boolean` | no |
| `businessRegistrationNumber` | `form` | `BusinessRegistrationNumber` | `string` | no |
| `businessWebsiteUrl` | `form` | `BusinessWebsiteUrl` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `authorizedRepresentative1FirstName` | `form` | `AuthorizedRepresentative1FirstName` | `string` | no |
| `authorizedRepresentative1LastName` | `form` | `AuthorizedRepresentative1LastName` | `string` | no |
| `authorizedRepresentative1Phone` | `form` | `AuthorizedRepresentative1Phone` | `string` | no |
| `authorizedRepresentative1Email` | `form` | `AuthorizedRepresentative1Email` | `string` | no |
| `authorizedRepresentative1DateOfBirth` | `form` | `AuthorizedRepresentative1DateOfBirth` | `string` | no |
| `addressStreet` | `form` | `AddressStreet` | `string` | no |
| `addressStreetSecondary` | `form` | `AddressStreetSecondary` | `string` | no |
| `addressCity` | `form` | `AddressCity` | `string` | no |
| `addressSubdivision` | `form` | `AddressSubdivision` | `string` | no |
| `addressPostalCode` | `form` | `AddressPostalCode` | `string` | no |
| `addressCountryCode` | `form` | `AddressCountryCode` | `string` | no |
| `emergencyAddressStreet` | `form` | `EmergencyAddressStreet` | `string` | no |
| `emergencyAddressStreetSecondary` | `form` | `EmergencyAddressStreetSecondary` | `string` | no |
| `emergencyAddressCity` | `form` | `EmergencyAddressCity` | `string` | no |
| `emergencyAddressSubdivision` | `form` | `EmergencyAddressSubdivision` | `string` | no |
| `emergencyAddressPostalCode` | `form` | `EmergencyAddressPostalCode` | `string` | no |
| `emergencyAddressCountryCode` | `form` | `EmergencyAddressCountryCode` | `string` | no |
| `useAddressAsEmergencyAddress` | `form` | `UseAddressAsEmergencyAddress` | `boolean` | no |
| `fileName` | `form` | `FileName` | `string` | no |
| `file` | `form` | `File` | `string` | no |
| `firstName` | `form` | `FirstName` | `string` | no |
| `lastName` | `form` | `LastName` | `string` | no |
| `dateOfBirth` | `form` | `DateOfBirth` | `string` | no |
| `individualEmail` | `form` | `IndividualEmail` | `string` | no |
| `individualPhone` | `form` | `IndividualPhone` | `string` | no |
| `isIsvEmbed` | `form` | `IsIsvEmbed` | `boolean` | no |
| `isvRegisteringForSelfOrTenant` | `form` | `IsvRegisteringForSelfOrTenant` | `string` | no |
| `statusCallbackUrl` | `form` | `StatusCallbackUrl` | `string` | no |
| `themeSetId` | `form` | `ThemeSetId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerType` | `customerTypeSchema` | `src/models/customer-type.ts` |
| `ComplianceRegistrationEnumPhoneNumberType` | `complianceRegistrationEnumPhoneNumberTypeSchema` | `src/models/compliance-registration-enum-phone-number-type.ts` |
| `ComplianceRegistrationEnumBusinessIdentityType` | `complianceRegistrationEnumBusinessIdentityTypeSchema` | `src/models/compliance-registration-enum-business-identity-type.ts` |
| `ComplianceRegistrationEnumBusinessRegistrationAuthority` | `complianceRegistrationEnumBusinessRegistrationAuthoritySchema` | `src/models/compliance-registration-enum-business-registration-authority.ts` |
| `TrusthubV1ComplianceRegistration` | `trusthubV1ComplianceRegistrationSchema` | `src/models/trusthub-v1-compliance-registration.ts` |

### updateComplianceRegistration

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateComplianceRegistration(request: TrusthubV1ComplianceRegistrationInquiries.UpdateComplianceRegistrationRequest, options?: RequestOptions): ApiPromise<TrusthubV1ComplianceRegistration, ApiError>`
- **Wire**: `POST /v1/ComplianceInquiries/Registration/{RegistrationId}/RegulatoryCompliance/GB/Initialize`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrusthubV1ComplianceRegistration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1ComplianceRegistrationInquiries.UpdateComplianceRegistrationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `registrationId` | `path` | `RegistrationId` | `string` | yes |
| `isIsvEmbed` | `form` | `IsIsvEmbed` | `boolean` | no |
| `themeSetId` | `form` | `ThemeSetId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1ComplianceRegistration` | `trusthubV1ComplianceRegistrationSchema` | `src/models/trusthub-v1-compliance-registration.ts` |

