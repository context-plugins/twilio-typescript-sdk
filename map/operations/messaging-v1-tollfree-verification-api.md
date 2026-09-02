<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1TollfreeVerificationApi — operations

Accessor: `client.messagingV1TollfreeVerificationApi` · Source: `src/resources/messaging-v1-tollfree-verification-api.ts` · 5 operations · Request types: namespace `MessagingV1TollfreeVerificationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTollfreeVerification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTollfreeVerification(request: MessagingV1TollfreeVerificationApi.CreateTollfreeVerificationRequest, options?: RequestOptions): ApiPromise<MessagingV1TollfreeVerification, ResponseError>`
- **Wire**: `POST /v1/Tollfree/Verifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1TollfreeVerificationApi.CreateTollfreeVerificationRequest` (37):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `businessName` | `form` | `BusinessName` | `string` | yes |
| `businessWebsite` | `form` | `BusinessWebsite` | `string` | yes |
| `notificationEmail` | `form` | `NotificationEmail` | `string` | yes |
| `useCaseCategories` | `form` | `UseCaseCategories` | `TollfreeVerificationEnumUseCaseCategory[]` | yes |
| `useCaseSummary` | `form` | `UseCaseSummary` | `string` | yes |
| `productionMessageSample` | `form` | `ProductionMessageSample` | `string` | yes |
| `optInImageUrls` | `form` | `OptInImageUrls` | `string[]` | yes |
| `optInType` | `form` | `OptInType` | `TollfreeVerificationEnumOptInType` | yes |
| `messageVolume` | `form` | `MessageVolume` | `string` | yes |
| `tollfreePhoneNumberSid` | `form` | `TollfreePhoneNumberSid` | `string` | yes |
| `customerProfileSid` | `form` | `CustomerProfileSid` | `string` | no |
| `businessStreetAddress` | `form` | `BusinessStreetAddress` | `string` | no |
| `businessStreetAddress2` | `form` | `BusinessStreetAddress2` | `string` | no |
| `businessCity` | `form` | `BusinessCity` | `string` | no |
| `businessStateProvinceRegion` | `form` | `BusinessStateProvinceRegion` | `string` | no |
| `businessPostalCode` | `form` | `BusinessPostalCode` | `string` | no |
| `businessCountry` | `form` | `BusinessCountry` | `string` | no |
| `additionalInformation` | `form` | `AdditionalInformation` | `string` | no |
| `businessContactFirstName` | `form` | `BusinessContactFirstName` | `string` | no |
| `businessContactLastName` | `form` | `BusinessContactLastName` | `string` | no |
| `businessContactEmail` | `form` | `BusinessContactEmail` | `string` | no |
| `businessContactPhone` | `form` | `BusinessContactPhone` | `string` | no |
| `externalReferenceId` | `form` | `ExternalReferenceId` | `string` | no |
| `businessRegistrationNumber` | `form` | `BusinessRegistrationNumber` | `string` | no |
| `businessRegistrationAuthority` | `form` | `BusinessRegistrationAuthority` | `TollfreeVerificationEnumBusinessRegistrationAuthority` | no |
| `businessRegistrationCountry` | `form` | `BusinessRegistrationCountry` | `string` | no |
| `businessType` | `form` | `BusinessType` | `TollfreeVerificationEnumBusinessType` | no |
| `businessRegistrationPhoneNumber` | `form` | `BusinessRegistrationPhoneNumber` | `string` | no |
| `doingBusinessAs` | `form` | `DoingBusinessAs` | `string` | no |
| `optInConfirmationMessage` | `form` | `OptInConfirmationMessage` | `string` | no |
| `helpMessageSample` | `form` | `HelpMessageSample` | `string` | no |
| `privacyPolicyUrl` | `form` | `PrivacyPolicyUrl` | `string` | no |
| `termsAndConditionsUrl` | `form` | `TermsAndConditionsUrl` | `string` | no |
| `ageGatedContent` | `form` | `AgeGatedContent` | `boolean` | no |
| `optInKeywords` | `form` | `OptInKeywords` | `string[]` | no |
| `vettingProvider` | `form` | `VettingProvider` | `TollfreeVerificationEnumVettingProvider` | no |
| `vettingId` | `form` | `VettingId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TollfreeVerificationEnumUseCaseCategory` | `tollfreeVerificationEnumUseCaseCategorySchema` | `src/models/tollfree-verification-enum-use-case-category.ts` |
| `TollfreeVerificationEnumOptInType` | `tollfreeVerificationEnumOptInTypeSchema` | `src/models/tollfree-verification-enum-opt-in-type.ts` |
| `TollfreeVerificationEnumBusinessRegistrationAuthority` | `tollfreeVerificationEnumBusinessRegistrationAuthoritySchema` | `src/models/tollfree-verification-enum-business-registration-authority.ts` |
| `TollfreeVerificationEnumBusinessType` | `tollfreeVerificationEnumBusinessTypeSchema` | `src/models/tollfree-verification-enum-business-type.ts` |
| `TollfreeVerificationEnumVettingProvider` | `tollfreeVerificationEnumVettingProviderSchema` | `src/models/tollfree-verification-enum-vetting-provider.ts` |
| `MessagingV1TollfreeVerification` | `messagingV1TollfreeVerificationSchema` | `src/models/messaging-v1-tollfree-verification.ts` |

### deleteTollfreeVerification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTollfreeVerification(request: MessagingV1TollfreeVerificationApi.DeleteTollfreeVerificationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Tollfree/Verifications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1TollfreeVerificationApi.DeleteTollfreeVerificationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTollfreeVerification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTollfreeVerification(request: MessagingV1TollfreeVerificationApi.FetchTollfreeVerificationRequest, options?: RequestOptions): ApiPromise<MessagingV1TollfreeVerification, ResponseError>`
- **Wire**: `GET /v1/Tollfree/Verifications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1TollfreeVerificationApi.FetchTollfreeVerificationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1TollfreeVerification` | `messagingV1TollfreeVerificationSchema` | `src/models/messaging-v1-tollfree-verification.ts` |

### listTollfreeVerification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTollfreeVerification(request: MessagingV1TollfreeVerificationApi.ListTollfreeVerificationRequest, options?: RequestOptions): ApiPromise<ListTollfreeVerificationResponse, ResponseError>`
- **Wire**: `GET /v1/Tollfree/Verifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTollfreeVerificationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1TollfreeVerificationApi.ListTollfreeVerificationRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tollfreePhoneNumberSid` | `query` | `TollfreePhoneNumberSid` | `string` | no |
| `status` | `query` | `Status` | `TollfreeVerificationEnumStatus` | no |
| `externalReferenceId` | `query` | `ExternalReferenceId` | `string` | no |
| `includeSubAccounts` | `query` | `IncludeSubAccounts` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `trustProductSid` | `query` | `TrustProductSid` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TollfreeVerificationEnumStatus` | `tollfreeVerificationEnumStatusSchema` | `src/models/tollfree-verification-enum-status.ts` |
| `ListTollfreeVerificationResponse` | `listTollfreeVerificationResponseSchema` | `src/models/list-tollfree-verification-response.ts` |

### updateTollfreeVerification

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTollfreeVerification(request: MessagingV1TollfreeVerificationApi.UpdateTollfreeVerificationRequest, options?: RequestOptions): ApiPromise<MessagingV1TollfreeVerification, ResponseError>`
- **Wire**: `POST /v1/Tollfree/Verifications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1TollfreeVerification`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1TollfreeVerificationApi.UpdateTollfreeVerificationRequest` (36):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `businessName` | `form` | `BusinessName` | `string` | no |
| `businessWebsite` | `form` | `BusinessWebsite` | `string` | no |
| `notificationEmail` | `form` | `NotificationEmail` | `string` | no |
| `useCaseCategories` | `form` | `UseCaseCategories` | `TollfreeVerificationEnumUseCaseCategory[]` | no |
| `useCaseSummary` | `form` | `UseCaseSummary` | `string` | no |
| `productionMessageSample` | `form` | `ProductionMessageSample` | `string` | no |
| `optInImageUrls` | `form` | `OptInImageUrls` | `string[]` | no |
| `optInType` | `form` | `OptInType` | `TollfreeVerificationEnumOptInType` | no |
| `messageVolume` | `form` | `MessageVolume` | `string` | no |
| `businessStreetAddress` | `form` | `BusinessStreetAddress` | `string` | no |
| `businessStreetAddress2` | `form` | `BusinessStreetAddress2` | `string` | no |
| `businessCity` | `form` | `BusinessCity` | `string` | no |
| `businessStateProvinceRegion` | `form` | `BusinessStateProvinceRegion` | `string` | no |
| `businessPostalCode` | `form` | `BusinessPostalCode` | `string` | no |
| `businessCountry` | `form` | `BusinessCountry` | `string` | no |
| `additionalInformation` | `form` | `AdditionalInformation` | `string` | no |
| `businessContactFirstName` | `form` | `BusinessContactFirstName` | `string` | no |
| `businessContactLastName` | `form` | `BusinessContactLastName` | `string` | no |
| `businessContactEmail` | `form` | `BusinessContactEmail` | `string` | no |
| `businessContactPhone` | `form` | `BusinessContactPhone` | `string` | no |
| `editReason` | `form` | `EditReason` | `string` | no |
| `businessRegistrationNumber` | `form` | `BusinessRegistrationNumber` | `string` | no |
| `businessRegistrationAuthority` | `form` | `BusinessRegistrationAuthority` | `TollfreeVerificationEnumBusinessRegistrationAuthority` | no |
| `businessRegistrationCountry` | `form` | `BusinessRegistrationCountry` | `string` | no |
| `businessType` | `form` | `BusinessType` | `TollfreeVerificationEnumBusinessType` | no |
| `businessRegistrationPhoneNumber` | `form` | `BusinessRegistrationPhoneNumber` | `string` | no |
| `doingBusinessAs` | `form` | `DoingBusinessAs` | `string` | no |
| `optInConfirmationMessage` | `form` | `OptInConfirmationMessage` | `string` | no |
| `helpMessageSample` | `form` | `HelpMessageSample` | `string` | no |
| `privacyPolicyUrl` | `form` | `PrivacyPolicyUrl` | `string` | no |
| `termsAndConditionsUrl` | `form` | `TermsAndConditionsUrl` | `string` | no |
| `ageGatedContent` | `form` | `AgeGatedContent` | `boolean` | no |
| `optInKeywords` | `form` | `OptInKeywords` | `string[]` | no |
| `vettingProvider` | `form` | `VettingProvider` | `TollfreeVerificationEnumVettingProvider` | no |
| `vettingId` | `form` | `VettingId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TollfreeVerificationEnumUseCaseCategory` | `tollfreeVerificationEnumUseCaseCategorySchema` | `src/models/tollfree-verification-enum-use-case-category.ts` |
| `TollfreeVerificationEnumOptInType` | `tollfreeVerificationEnumOptInTypeSchema` | `src/models/tollfree-verification-enum-opt-in-type.ts` |
| `TollfreeVerificationEnumBusinessRegistrationAuthority` | `tollfreeVerificationEnumBusinessRegistrationAuthoritySchema` | `src/models/tollfree-verification-enum-business-registration-authority.ts` |
| `TollfreeVerificationEnumBusinessType` | `tollfreeVerificationEnumBusinessTypeSchema` | `src/models/tollfree-verification-enum-business-type.ts` |
| `TollfreeVerificationEnumVettingProvider` | `tollfreeVerificationEnumVettingProviderSchema` | `src/models/tollfree-verification-enum-vetting-provider.ts` |
| `MessagingV1TollfreeVerification` | `messagingV1TollfreeVerificationSchema` | `src/models/messaging-v1-tollfree-verification.ts` |

