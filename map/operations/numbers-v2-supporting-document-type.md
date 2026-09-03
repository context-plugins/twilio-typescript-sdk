<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2SupportingDocumentType — operations

Accessor: `client.numbersV2SupportingDocumentType` · Source: `src/resources/numbers-v2-supporting-document-type.ts` · 2 operations · Request types: namespace `NumbersV2SupportingDocumentType`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchSupportingDocumentType

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSupportingDocumentType(request: NumbersV2SupportingDocumentType.FetchSupportingDocumentTypeRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocumentType, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceSupportingDocumentType`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocumentType.FetchSupportingDocumentTypeRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceSupportingDocumentType` | `numbersV2RegulatoryComplianceSupportingDocumentTypeSchema` | `src/models/numbers-v2-regulatory-compliance-supporting-document-type.ts` |

### listSupportingDocumentType

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSupportingDocumentType(request: NumbersV2SupportingDocumentType.ListSupportingDocumentTypeRequest, options?: RequestOptions): ApiPromise<ListSupportingDocumentTypeResponse, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/SupportingDocumentTypes`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSupportingDocumentTypeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2SupportingDocumentType.ListSupportingDocumentTypeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSupportingDocumentTypeResponse` | `listSupportingDocumentTypeResponseSchema` | `src/models/list-supporting-document-type-response.ts` |

