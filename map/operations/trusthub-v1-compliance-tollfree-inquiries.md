<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceTollfreeInquiries — operations

Accessor: `client.trusthubV1ComplianceTollfreeInquiries` · Source: `src/resources/trusthub-v1-compliance-tollfree-inquiries.ts` · 1 operation · Request types: namespace `TrusthubV1ComplianceTollfreeInquiries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createComplianceTollfreeInquiry

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createComplianceTollfreeInquiry(request: TrusthubV1ComplianceTollfreeInquiries.CreateComplianceTollfreeInquiryRequest, options?: RequestOptions): ApiPromise<TrusthubV1ComplianceTollfreeInquiry, ResponseError>`
- **Wire**: `POST /v1/ComplianceInquiries/Tollfree/Initialize`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1ComplianceTollfreeInquiry`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1ComplianceTollfreeInquiries.CreateComplianceTollfreeInquiryRequest` (38):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `tollfreePhoneNumber` | `form` | `TollfreePhoneNumber` | `string` | yes |
| `notificationEmail` | `form` | `NotificationEmail` | `string` | yes |
| `customerProfileSid` | `form` | `CustomerProfileSid` | `string` | no |
| `businessName` | `form` | `BusinessName` | `string` | no |
| `businessWebsite` | `form` | `BusinessWebsite` | `string` | no |
| `useCaseCategories` | `form` | `UseCaseCategories` | `string[]` | no |
| `useCaseSummary` | `form` | `UseCaseSummary` | `string` | no |
| `productionMessageSample` | `form` | `ProductionMessageSample` | `string` | no |
| `optInImageUrls` | `form` | `OptInImageUrls` | `string[]` | no |
| `optInType` | `form` | `OptInType` | `ComplianceTollfreeInquiryEnumOptInType` | no |
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
| `themeSetId` | `form` | `ThemeSetId` | `string` | no |
| `skipMessagingUseCase` | `form` | `SkipMessagingUseCase` | `boolean` | no |
| `businessRegistrationNumber` | `form` | `BusinessRegistrationNumber` | `string` | no |
| `businessRegistrationAuthority` | `form` | `BusinessRegistrationAuthority` | `string` | no |
| `businessRegistrationCountry` | `form` | `BusinessRegistrationCountry` | `string` | no |
| `businessType` | `form` | `BusinessType` | `TollfreeVerificationEnumBusinessType` | no |
| `doingBusinessAs` | `form` | `DoingBusinessAs` | `string` | no |
| `optInConfirmationMessage` | `form` | `OptInConfirmationMessage` | `string` | no |
| `helpMessageSample` | `form` | `HelpMessageSample` | `string` | no |
| `privacyPolicyUrl` | `form` | `PrivacyPolicyUrl` | `string` | no |
| `termsAndConditionsUrl` | `form` | `TermsAndConditionsUrl` | `string` | no |
| `ageGatedContent` | `form` | `AgeGatedContent` | `boolean` | no |
| `externalReferenceId` | `form` | `ExternalReferenceId` | `string` | no |
| `optInKeywords` | `form` | `OptInKeywords` | `string[]` | no |
| `vettingId` | `form` | `VettingId` | `string` | no |
| `vettingProvider` | `form` | `VettingProvider` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ComplianceTollfreeInquiryEnumOptInType` | `complianceTollfreeInquiryEnumOptInTypeSchema` | `src/models/compliance-tollfree-inquiry-enum-opt-in-type.ts` |
| `TollfreeVerificationEnumBusinessType` | `tollfreeVerificationEnumBusinessTypeSchema` | `src/models/tollfree-verification-enum-business-type.ts` |
| `TrusthubV1ComplianceTollfreeInquiry` | `trusthubV1ComplianceTollfreeInquirySchema` | `src/models/trusthub-v1-compliance-tollfree-inquiry.ts` |

