<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1Document — operations

Accessor: `client.syncV1Document` · Source: `src/resources/sync-v1-document.ts` · 5 operations · Request types: namespace `SyncV1Document`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createDocument

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createDocument(request: SyncV1Document.CreateDocumentRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceDocument, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Documents`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1Document.CreateDocumentRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `data` | `form` | `Data` | `Record<string, unknown>` | no |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceDocument` | `syncV1ServiceDocumentSchema` | `src/models/sync-v1-service-document.ts` |

### deleteDocument

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDocument(request: SyncV1Document.DeleteDocumentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Documents/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1Document.DeleteDocumentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchDocument

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDocument(request: SyncV1Document.FetchDocumentRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceDocument, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Documents/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1Document.FetchDocumentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceDocument` | `syncV1ServiceDocumentSchema` | `src/models/sync-v1-service-document.ts` |

### listDocument

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listDocument(request: SyncV1Document.ListDocumentRequest, options?: RequestOptions): ApiPromise<ListDocumentResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Documents`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDocumentResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1Document.ListDocumentRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDocumentResponse` | `listDocumentResponseSchema` | `src/models/list-document-response.ts` |

### updateDocument

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDocument(request: SyncV1Document.UpdateDocumentRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceDocument, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Documents/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceDocument`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1Document.UpdateDocumentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `data` | `form` | `Data` | `Record<string, unknown>` | no |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceDocument` | `syncV1ServiceDocumentSchema` | `src/models/sync-v1-service-document.ts` |

