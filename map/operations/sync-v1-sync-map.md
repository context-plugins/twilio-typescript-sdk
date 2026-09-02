<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMap — operations

Accessor: `client.syncV1SyncMap` · Source: `src/resources/sync-v1-sync-map.ts` · 5 operations · Request types: namespace `SyncV1SyncMap`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSyncMap

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSyncMap(request: SyncV1SyncMap.CreateSyncMapRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMap, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Maps`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMap.CreateSyncMapRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMap` | `syncV1ServiceSyncMapSchema` | `src/models/sync-v1-service-sync-map.ts` |

### deleteSyncMap

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncMap(request: SyncV1SyncMap.DeleteSyncMapRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Maps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMap.DeleteSyncMapRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSyncMap

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncMap(request: SyncV1SyncMap.FetchSyncMapRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMap, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMap.FetchSyncMapRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMap` | `syncV1ServiceSyncMapSchema` | `src/models/sync-v1-service-sync-map.ts` |

### listSyncMap

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncMap(request: SyncV1SyncMap.ListSyncMapRequest, options?: RequestOptions): ApiPromise<ListSyncMapResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncMapResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMap.ListSyncMapRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSyncMapResponse` | `listSyncMapResponseSchema` | `src/models/list-sync-map-response.ts` |

### updateSyncMap

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncMap(request: SyncV1SyncMap.UpdateSyncMapRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMap, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Maps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncMap`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMap.UpdateSyncMapRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMap` | `syncV1ServiceSyncMapSchema` | `src/models/sync-v1-service-sync-map.ts` |

