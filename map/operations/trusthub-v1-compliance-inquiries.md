<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1ComplianceInquiries — operations

Accessor: `client.trusthubV1ComplianceInquiries` · Source: `src/resources/trusthub-v1-compliance-inquiries.ts` · 2 operations · Request types: namespace `TrusthubV1ComplianceInquiries`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createComplianceInquiry

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createComplianceInquiry(request: TrusthubV1ComplianceInquiries.CreateComplianceInquiryRequest, options?: RequestOptions): ApiPromise<TrusthubV1ComplianceInquiry, ApiError>`
- **Wire**: `POST /v1/ComplianceInquiries/Customers/Initialize`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1ComplianceInquiries.CreateComplianceInquiryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `notificationEmail` | `form` | `NotificationEmail` | `string` | no |
| `themeSetId` | `form` | `ThemeSetId` | `string` | no |
| `primaryProfileSid` | `form` | `PrimaryProfileSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1ComplianceInquiry` | `trusthubV1ComplianceInquirySchema` | `src/models/trusthub-v1-compliance-inquiry.ts` |

### updateComplianceInquiry

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateComplianceInquiry(request: TrusthubV1ComplianceInquiries.UpdateComplianceInquiryRequest, options?: RequestOptions): ApiPromise<TrusthubV1ComplianceInquiry, ApiError>`
- **Wire**: `POST /v1/ComplianceInquiries/Customers/{CustomerId}/Initialize`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrusthubV1ComplianceInquiry`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1ComplianceInquiries.UpdateComplianceInquiryRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerId` | `path` | `CustomerId` | `string` | yes |
| `primaryProfileSid` | `form` | `PrimaryProfileSid` | `string` | yes |
| `themeSetId` | `form` | `ThemeSetId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1ComplianceInquiry` | `trusthubV1ComplianceInquirySchema` | `src/models/trusthub-v1-compliance-inquiry.ts` |

