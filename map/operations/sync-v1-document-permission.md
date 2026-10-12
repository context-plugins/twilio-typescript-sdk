<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1DocumentPermission — operations

Accessor: `client.syncV1DocumentPermission` · Source: `src/resources/sync-v1-document-permission.ts` · 4 operations · Request types: namespace `SyncV1DocumentPermission`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDocumentPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDocumentPermission(request: SyncV1DocumentPermission.DeleteDocumentPermissionRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1DocumentPermission.DeleteDocumentPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `documentSid` | `path` | `DocumentSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

### fetchDocumentPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDocumentPermission(request: SyncV1DocumentPermission.FetchDocumentPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1DocumentPermission.FetchDocumentPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `documentSid` | `path` | `DocumentSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceDocumentDocumentPermission` | `syncV1ServiceDocumentDocumentPermissionSchema` | `src/models/sync-v1-service-document-document-permission.ts` |

### listDocumentPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listDocumentPermission(request: SyncV1DocumentPermission.ListDocumentPermissionRequest, options?: RequestOptions): ApiPromise<ListDocumentPermissionResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDocumentPermissionResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1DocumentPermission.ListDocumentPermissionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `documentSid` | `path` | `DocumentSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDocumentPermissionResponse` | `listDocumentPermissionResponseSchema` | `src/models/list-document-permission-response.ts` |

### updateDocumentPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDocumentPermission(request: SyncV1DocumentPermission.UpdateDocumentPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceDocumentDocumentPermission, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Documents/{DocumentSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceDocumentDocumentPermission`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1DocumentPermission.UpdateDocumentPermissionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `documentSid` | `path` | `DocumentSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `read` | `form` | `Read` | `boolean` | yes |
| `write` | `form` | `Write` | `boolean` | yes |
| `manage` | `form` | `Manage` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceDocumentDocumentPermission` | `syncV1ServiceDocumentDocumentPermissionSchema` | `src/models/sync-v1-service-document-document-permission.ts` |

