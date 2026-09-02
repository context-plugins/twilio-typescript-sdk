<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncMapPermission — operations

Accessor: `client.syncV1SyncMapPermission` · Source: `src/resources/sync-v1-sync-map-permission.ts` · 4 operations · Request types: namespace `SyncV1SyncMapPermission`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteSyncMapPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncMapPermission(request: SyncV1SyncMapPermission.DeleteSyncMapPermissionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapPermission.DeleteSyncMapPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

### fetchSyncMapPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncMapPermission(request: SyncV1SyncMapPermission.FetchSyncMapPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapPermission.FetchSyncMapPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMapSyncMapPermission` | `syncV1ServiceSyncMapSyncMapPermissionSchema` | `src/models/sync-v1-service-sync-map-sync-map-permission.ts` |

### listSyncMapPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncMapPermission(request: SyncV1SyncMapPermission.ListSyncMapPermissionRequest, options?: RequestOptions): ApiPromise<ListSyncMapPermissionResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncMapPermissionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapPermission.ListSyncMapPermissionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSyncMapPermissionResponse` | `listSyncMapPermissionResponseSchema` | `src/models/list-sync-map-permission-response.ts` |

### updateSyncMapPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncMapPermission(request: SyncV1SyncMapPermission.UpdateSyncMapPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncMapSyncMapPermission, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Maps/{MapSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncMapSyncMapPermission`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncMapPermission.UpdateSyncMapPermissionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `mapSid` | `path` | `MapSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `read` | `form` | `Read` | `boolean` | yes |
| `write` | `form` | `Write` | `boolean` | yes |
| `manage` | `form` | `Manage` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncMapSyncMapPermission` | `syncV1ServiceSyncMapSyncMapPermissionSchema` | `src/models/sync-v1-service-sync-map-sync-map-permission.ts` |

