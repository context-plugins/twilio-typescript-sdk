<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncList — operations

Accessor: `client.syncV1SyncList` · Source: `src/resources/sync-v1-sync-list.ts` · 5 operations · Request types: namespace `SyncV1SyncList`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSyncList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSyncList(request: SyncV1SyncList.CreateSyncListRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncList, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Lists`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncList.CreateSyncListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncList` | `syncV1ServiceSyncListSchema` | `src/models/sync-v1-service-sync-list.ts` |

### deleteSyncList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncList(request: SyncV1SyncList.DeleteSyncListRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Lists/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncList.DeleteSyncListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSyncList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncList(request: SyncV1SyncList.FetchSyncListRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncList, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncList.FetchSyncListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncList` | `syncV1ServiceSyncListSchema` | `src/models/sync-v1-service-sync-list.ts` |

### listSyncList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncList(request: SyncV1SyncList.ListSyncListRequest, options?: RequestOptions): ApiPromise<ListSyncListResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncListResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncList.ListSyncListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSyncListResponse` | `listSyncListResponseSchema` | `src/models/list-sync-list-response.ts` |

### updateSyncList

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncList(request: SyncV1SyncList.UpdateSyncListRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncList, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Lists/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncList.UpdateSyncListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncList` | `syncV1ServiceSyncListSchema` | `src/models/sync-v1-service-sync-list.ts` |

