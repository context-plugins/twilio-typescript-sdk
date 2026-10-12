<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncStream — operations

Accessor: `client.syncV1SyncStream` · Source: `src/resources/sync-v1-sync-stream.ts` · 5 operations · Request types: namespace `SyncV1SyncStream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSyncStream

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSyncStream(request: SyncV1SyncStream.CreateSyncStreamRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncStream, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Streams`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncStream.CreateSyncStreamRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncStream` | `syncV1ServiceSyncStreamSchema` | `src/models/sync-v1-service-sync-stream.ts` |

### deleteSyncStream

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncStream(request: SyncV1SyncStream.DeleteSyncStreamRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Streams/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncStream.DeleteSyncStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSyncStream

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncStream(request: SyncV1SyncStream.FetchSyncStreamRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncStream, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Streams/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncStream.FetchSyncStreamRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncStream` | `syncV1ServiceSyncStreamSchema` | `src/models/sync-v1-service-sync-stream.ts` |

### listSyncStream

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncStream(request: SyncV1SyncStream.ListSyncStreamRequest, options?: RequestOptions): ApiPromise<ListSyncStreamResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Streams`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncStreamResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncStream.ListSyncStreamRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSyncStreamResponse` | `listSyncStreamResponseSchema` | `src/models/list-sync-stream-response.ts` |

### updateSyncStream

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncStream(request: SyncV1SyncStream.UpdateSyncStreamRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncStream, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Streams/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceSyncStream`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncStream.UpdateSyncStreamRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncStream` | `syncV1ServiceSyncStreamSchema` | `src/models/sync-v1-service-sync-stream.ts` |

