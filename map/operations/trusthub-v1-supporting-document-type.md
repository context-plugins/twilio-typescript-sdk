<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1SupportingDocumentType — operations

Accessor: `client.trusthubV1SupportingDocumentType` · Source: `src/resources/trusthub-v1-supporting-document-type.ts` · 2 operations · Request types: namespace `TrusthubV1SupportingDocumentType`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchSupportingDocumentType2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSupportingDocumentType2(request: TrusthubV1SupportingDocumentType.FetchSupportingDocumentType2Request, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ResponseError>`
- **Wire**: `GET /v1/SupportingDocumentTypes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceEndUserType`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentType.FetchSupportingDocumentType2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceEndUserType` | `numbersV2RegulatoryComplianceEndUserTypeSchema` | `src/models/numbers-v2-regulatory-compliance-end-user-type.ts` |

### listSupportingDocumentType2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSupportingDocumentType2(request: TrusthubV1SupportingDocumentType.ListSupportingDocumentType2Request, options?: RequestOptions): ApiPromise<ListSupportingDocumentTypeResponse1, ResponseError>`
- **Wire**: `GET /v1/SupportingDocumentTypes`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSupportingDocumentTypeResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentType.ListSupportingDocumentType2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSupportingDocumentTypeResponse1` | `listSupportingDocumentTypeResponse1Schema` | `src/models/list-supporting-document-type-response1.ts` |

