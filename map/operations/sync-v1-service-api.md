<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1ServiceApi — operations

Accessor: `client.syncV1ServiceApi` · Source: `src/resources/sync-v1-service-api.ts` · 5 operations · Request types: namespace `SyncV1ServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createService5

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createService5(request: SyncV1ServiceApi.CreateService5Request, options?: RequestOptions): ApiPromise<SyncV1Service, ResponseError>`
- **Wire**: `POST /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1ServiceApi.CreateService5Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `webhookUrl` | `form` | `WebhookUrl` | `string` | no |
| `reachabilityWebhooksEnabled` | `form` | `ReachabilityWebhooksEnabled` | `boolean` | no |
| `aclEnabled` | `form` | `AclEnabled` | `boolean` | no |
| `reachabilityDebouncingEnabled` | `form` | `ReachabilityDebouncingEnabled` | `boolean` | no |
| `reachabilityDebouncingWindow` | `form` | `ReachabilityDebouncingWindow` | `number` | no |
| `webhooksFromRestEnabled` | `form` | `WebhooksFromRestEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1Service` | `syncV1ServiceSchema` | `src/models/sync-v1-service.ts` |

### deleteService5

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteService5(request: SyncV1ServiceApi.DeleteService5Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1ServiceApi.DeleteService5Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchService5

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchService5(request: SyncV1ServiceApi.FetchService5Request, options?: RequestOptions): ApiPromise<SyncV1Service, ResponseError>`
- **Wire**: `GET /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SyncV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1ServiceApi.FetchService5Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1Service` | `syncV1ServiceSchema` | `src/models/sync-v1-service.ts` |

### listService5

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listService5(request: SyncV1ServiceApi.ListService5Request, options?: RequestOptions): ApiPromise<ListServiceResponse4, ResponseError>`
- **Wire**: `GET /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceResponse4`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1ServiceApi.ListService5Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceResponse4` | `listServiceResponse4Schema` | `src/models/list-service-response4.ts` |

### updateService4

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateService4(request: SyncV1ServiceApi.UpdateService4Request, options?: RequestOptions): ApiPromise<SyncV1Service, ResponseError>`
- **Wire**: `POST /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1ServiceApi.UpdateService4Request` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `webhookUrl` | `form` | `WebhookUrl` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `reachabilityWebhooksEnabled` | `form` | `ReachabilityWebhooksEnabled` | `boolean` | no |
| `aclEnabled` | `form` | `AclEnabled` | `boolean` | no |
| `reachabilityDebouncingEnabled` | `form` | `ReachabilityDebouncingEnabled` | `boolean` | no |
| `reachabilityDebouncingWindow` | `form` | `ReachabilityDebouncingWindow` | `number` | no |
| `webhooksFromRestEnabled` | `form` | `WebhooksFromRestEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1Service` | `syncV1ServiceSchema` | `src/models/sync-v1-service.ts` |

