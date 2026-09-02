<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1SyncListPermission — operations

Accessor: `client.syncV1SyncListPermission` · Source: `src/resources/sync-v1-sync-list-permission.ts` · 4 operations · Request types: namespace `SyncV1SyncListPermission`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteSyncListPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSyncListPermission(request: SyncV1SyncListPermission.DeleteSyncListPermissionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListPermission.DeleteSyncListPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

### fetchSyncListPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSyncListPermission(request: SyncV1SyncListPermission.FetchSyncListPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListPermission.FetchSyncListPermissionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncListSyncListPermission` | `syncV1ServiceSyncListSyncListPermissionSchema` | `src/models/sync-v1-service-sync-list-sync-list-permission.ts` |

### listSyncListPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSyncListPermission(request: SyncV1SyncListPermission.ListSyncListPermissionRequest, options?: RequestOptions): ApiPromise<ListSyncListPermissionResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSyncListPermissionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListPermission.ListSyncListPermissionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSyncListPermissionResponse` | `listSyncListPermissionResponseSchema` | `src/models/list-sync-list-permission-response.ts` |

### updateSyncListPermission

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSyncListPermission(request: SyncV1SyncListPermission.UpdateSyncListPermissionRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncListSyncListPermission, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Lists/{ListSid}/Permissions/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncListSyncListPermission`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1SyncListPermission.UpdateSyncListPermissionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `listSid` | `path` | `ListSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `read` | `form` | `Read` | `boolean` | yes |
| `write` | `form` | `Write` | `boolean` | yes |
| `manage` | `form` | `Manage` | `boolean` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncListSyncListPermission` | `syncV1ServiceSyncListSyncListPermissionSchema` | `src/models/sync-v1-service-sync-list-sync-list-permission.ts` |

