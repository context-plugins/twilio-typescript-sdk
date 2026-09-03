<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1SupportingDocumentApi — operations

Accessor: `client.trusthubV1SupportingDocumentApi` · Source: `src/resources/trusthub-v1-supporting-document-api.ts` · 5 operations · Request types: namespace `TrusthubV1SupportingDocumentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSupportingDocument2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSupportingDocument2(request: TrusthubV1SupportingDocumentApi.CreateSupportingDocument2Request, options?: RequestOptions): ApiPromise<TrusthubV1SupportingDocument, ResponseError>`
- **Wire**: `POST /v1/SupportingDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentApi.CreateSupportingDocument2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `string` | yes |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1SupportingDocument` | `trusthubV1SupportingDocumentSchema` | `src/models/trusthub-v1-supporting-document.ts` |

### deleteSupportingDocument2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSupportingDocument2(request: TrusthubV1SupportingDocumentApi.DeleteSupportingDocument2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentApi.DeleteSupportingDocument2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSupportingDocument2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSupportingDocument2(request: TrusthubV1SupportingDocumentApi.FetchSupportingDocument2Request, options?: RequestOptions): ApiPromise<TrusthubV1SupportingDocument, ResponseError>`
- **Wire**: `GET /v1/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentApi.FetchSupportingDocument2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1SupportingDocument` | `trusthubV1SupportingDocumentSchema` | `src/models/trusthub-v1-supporting-document.ts` |

### listSupportingDocument2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSupportingDocument2(request: TrusthubV1SupportingDocumentApi.ListSupportingDocument2Request, options?: RequestOptions): ApiPromise<ListSupportingDocumentResponse1, ResponseError>`
- **Wire**: `GET /v1/SupportingDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSupportingDocumentResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentApi.ListSupportingDocument2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSupportingDocumentResponse1` | `listSupportingDocumentResponse1Schema` | `src/models/list-supporting-document-response1.ts` |

### updateSupportingDocument2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSupportingDocument2(request: TrusthubV1SupportingDocumentApi.UpdateSupportingDocument2Request, options?: RequestOptions): ApiPromise<TrusthubV1SupportingDocument, ResponseError>`
- **Wire**: `POST /v1/SupportingDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1SupportingDocument`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1SupportingDocumentApi.UpdateSupportingDocument2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1SupportingDocument` | `trusthubV1SupportingDocumentSchema` | `src/models/trusthub-v1-supporting-document.ts` |

