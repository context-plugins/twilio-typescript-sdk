<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncListItem — operations

Accessor: `client.syncV1SyncListItem` · Source: `src/resources/sync-v1-sync-list-item.ts` · 5 operations · Request types: namespace `SyncV1SyncListItem`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSyncListItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSyncListItem(request: SyncV1SyncListItem.CreateSyncListItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Items`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListItem.CreateSyncListItemRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `data` | `form` | `Data` | `Record<string, unknown>` | yes |
| `ttl` | `form` | `Ttl` | `number` | no |
| `itemTtl` | `form` | `ItemTtl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `syncV1ServiceSyncListSyncListItemSchema` | `src/models/sync-v1-service-sync-list-sync-list-item.ts` |

### deleteSyncListItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncListItem(request: SyncV1SyncListItem.DeleteSyncListItemRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListItem.DeleteSyncListItemRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `index` | `path` | `Index` | `number` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |

### fetchSyncListItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncListItem(request: SyncV1SyncListItem.FetchSyncListItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListItem.FetchSyncListItemRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `index` | `path` | `Index` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `syncV1ServiceSyncListSyncListItemSchema` | `src/models/sync-v1-service-sync-list-sync-list-item.ts` |

### listSyncListItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncListItem(request: SyncV1SyncListItem.ListSyncListItemRequest, options?: RequestOptions): ApiPromise<ListSyncListItemResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Items`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncListItemResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListItem.ListSyncListItemRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `order` | `query` | `Order` | `ChallengeEnumListOrders` | no |
| `from` | `query` | `From` | `string` | no |
| `bounds` | `query` | `Bounds` | `SyncListItemEnumQueryFromBoundType` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeEnumListOrders` | `challengeEnumListOrdersSchema` | `src/models/challenge-enum-list-orders.ts` |
| `SyncListItemEnumQueryFromBoundType` | `syncListItemEnumQueryFromBoundTypeSchema` | `src/models/sync-list-item-enum-query-from-bound-type.ts` |
| `ListSyncListItemResponse` | `listSyncListItemResponseSchema` | `src/models/list-sync-list-item-response.ts` |

### updateSyncListItem

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncListItem(request: SyncV1SyncListItem.UpdateSyncListItemRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncListSyncListItem, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Items/{Index}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncListSyncListItem`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListItem.UpdateSyncListItemRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `index` | `path` | `Index` | `number` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `data` | `form` | `Data` | `Record<string, unknown>` | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `itemTtl` | `form` | `ItemTtl` | `number` | no |
| `collectionTtl` | `form` | `CollectionTtl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncListSyncListItem` | `syncV1ServiceSyncListSyncListItemSchema` | `src/models/sync-v1-service-sync-list-sync-list-item.ts` |

