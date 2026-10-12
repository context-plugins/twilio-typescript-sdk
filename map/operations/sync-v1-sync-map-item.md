<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMapItem — operations

Accessor: `client.syncV1SyncMapItem` · Source: `src/resources/sync-v1-sync-map-item.ts` · 5 operations · Request types: namespace `SyncV1SyncMapItem`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSyncMapItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSyncMapItem(request: SyncV1SyncMapItem.CreateSyncMapItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Items`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapItem.CreateSyncMapItemRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `key` | `form` | `Key` | `string` | yes |
| `data` | `form` | `Data` | `Record<string, unknown>` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |
| `itemTtl` | `form` | `ItemTtl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `syncV1ServiceSyncMapSyncMapItemSchema` | `src/models/sync-v1-service-sync-map-sync-map-item.ts` |

### deleteSyncMapItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncMapItem(request: SyncV1SyncMapItem.DeleteSyncMapItemRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapItem.DeleteSyncMapItemRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `key` | `path` | `Key` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |

### fetchSyncMapItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncMapItem(request: SyncV1SyncMapItem.FetchSyncMapItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapItem.FetchSyncMapItemRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `key` | `path` | `Key` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `syncV1ServiceSyncMapSyncMapItemSchema` | `src/models/sync-v1-service-sync-map-sync-map-item.ts` |

### listSyncMapItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncMapItem(request: SyncV1SyncMapItem.ListSyncMapItemRequest, options?: RequestOptions): ApiPromise<ListSyncMapItemResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Items`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncMapItemResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapItem.ListSyncMapItemRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `order` | `query` | `Order` | `ChallengeEnumListOrders` | no |
| `from` | `query` | `From` | `string` | no |
| `bounds` | `query` | `Bounds` | `SyncMapItemEnumQueryFromBoundType` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeEnumListOrders` | `challengeEnumListOrdersSchema` | `src/models/challenge-enum-list-orders.ts` |
| `SyncMapItemEnumQueryFromBoundType` | `syncMapItemEnumQueryFromBoundTypeSchema` | `src/models/sync-map-item-enum-query-from-bound-type.ts` |
| `ListSyncMapItemResponse` | `listSyncMapItemResponseSchema` | `src/models/list-sync-map-item-response.ts` |

### updateSyncMapItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncMapItem(request: SyncV1SyncMapItem.UpdateSyncMapItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMapSyncMapItem, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Items/{Key}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SyncV1ServiceSyncMapSyncMapItem`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapItem.UpdateSyncMapItemRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `key` | `path` | `Key` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `data` | `form` | `Data` | `Record<string, unknown>` | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `itemTtl` | `form` | `ItemTtl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMapSyncMapItem` | `syncV1ServiceSyncMapSyncMapItemSchema` | `src/models/sync-v1-service-sync-map-sync-map-item.ts` |

