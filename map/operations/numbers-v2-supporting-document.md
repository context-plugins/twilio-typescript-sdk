<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2SupportingDocument — operations

Accessor: `client.numbersV2SupportingDocument` · Source: `src/resources/numbers-v2-supporting-document.ts` · 5 operations · Request types: namespace `NumbersV2SupportingDocument`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSupportingDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSupportingDocument(request: NumbersV2SupportingDocument.CreateSupportingDocumentRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/SupportingDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocument.CreateSupportingDocumentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `string` | yes |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `numbersV2RegulatoryComplianceSupportingDocumentSchema` | `src/models/numbers-v2-regulatory-compliance-supporting-document.ts` |

### deleteSupportingDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSupportingDocument(request: NumbersV2SupportingDocument.DeleteSupportingDocumentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/RegulatoryCompliance/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocument.DeleteSupportingDocumentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSupportingDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSupportingDocument(request: NumbersV2SupportingDocument.FetchSupportingDocumentRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocument.FetchSupportingDocumentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `numbersV2RegulatoryComplianceSupportingDocumentSchema` | `src/models/numbers-v2-regulatory-compliance-supporting-document.ts` |

### listSupportingDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSupportingDocument(request: NumbersV2SupportingDocument.ListSupportingDocumentRequest, options?: RequestOptions): ApiPromise<ListSupportingDocumentResponse, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/SupportingDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSupportingDocumentResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocument.ListSupportingDocumentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSupportingDocumentResponse` | `listSupportingDocumentResponseSchema` | `src/models/list-supporting-document-response.ts` |

### updateSupportingDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSupportingDocument(request: NumbersV2SupportingDocument.UpdateSupportingDocumentRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocument.UpdateSupportingDocumentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocument` | `numbersV2RegulatoryComplianceSupportingDocumentSchema` | `src/models/numbers-v2-regulatory-compliance-supporting-document.ts` |

