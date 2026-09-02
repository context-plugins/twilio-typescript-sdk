<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1ServiceApi — operations

Accessor: `client.proxyV1ServiceApi` · Source: `src/resources/proxy-v1-service-api.ts` · 5 operations · Request types: namespace `ProxyV1ServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createService4

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createService4(request: ProxyV1ServiceApi.CreateService4Request, options?: RequestOptions): ApiPromise<ProxyV1Service, ResponseError>`
- **Wire**: `POST /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1ServiceApi.CreateService4Request` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uniqueName` | `form` | `UniqueName` | `string` | yes |
| `defaultTtl` | `form` | `DefaultTtl` | `number` | no |
| `callbackUrl` | `form` | `CallbackUrl` | `string` | no |
| `geoMatchLevel` | `form` | `GeoMatchLevel` | `ServiceEnumGeoMatchLevel` | no |
| `numberSelectionBehavior` | `form` | `NumberSelectionBehavior` | `ServiceEnumNumberSelectionBehavior` | no |
| `interceptCallbackUrl` | `form` | `InterceptCallbackUrl` | `string` | no |
| `outOfSessionCallbackUrl` | `form` | `OutOfSessionCallbackUrl` | `string` | no |
| `chatInstanceSid` | `form` | `ChatInstanceSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceEnumGeoMatchLevel` | `serviceEnumGeoMatchLevelSchema` | `src/models/service-enum-geo-match-level.ts` |
| `ServiceEnumNumberSelectionBehavior` | `serviceEnumNumberSelectionBehaviorSchema` | `src/models/service-enum-number-selection-behavior.ts` |
| `ProxyV1Service` | `proxyV1ServiceSchema` | `src/models/proxy-v1-service.ts` |

### deleteService4

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteService4(request: ProxyV1ServiceApi.DeleteService4Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1ServiceApi.DeleteService4Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchService4

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchService4(request: ProxyV1ServiceApi.FetchService4Request, options?: RequestOptions): ApiPromise<ProxyV1Service, ResponseError>`
- **Wire**: `GET /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1ServiceApi.FetchService4Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1Service` | `proxyV1ServiceSchema` | `src/models/proxy-v1-service.ts` |

### listService4

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listService4(request: ProxyV1ServiceApi.ListService4Request, options?: RequestOptions): ApiPromise<ListServiceResponse3, ResponseError>`
- **Wire**: `GET /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceResponse3`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1ServiceApi.ListService4Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceResponse3` | `listServiceResponse3Schema` | `src/models/list-service-response3.ts` |

### updateService3

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateService3(request: ProxyV1ServiceApi.UpdateService3Request, options?: RequestOptions): ApiPromise<ProxyV1Service, ResponseError>`
- **Wire**: `POST /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1ServiceApi.UpdateService3Request` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `defaultTtl` | `form` | `DefaultTtl` | `number` | no |
| `callbackUrl` | `form` | `CallbackUrl` | `string` | no |
| `geoMatchLevel` | `form` | `GeoMatchLevel` | `ServiceEnumGeoMatchLevel` | no |
| `numberSelectionBehavior` | `form` | `NumberSelectionBehavior` | `ServiceEnumNumberSelectionBehavior` | no |
| `interceptCallbackUrl` | `form` | `InterceptCallbackUrl` | `string` | no |
| `outOfSessionCallbackUrl` | `form` | `OutOfSessionCallbackUrl` | `string` | no |
| `chatInstanceSid` | `form` | `ChatInstanceSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceEnumGeoMatchLevel` | `serviceEnumGeoMatchLevelSchema` | `src/models/service-enum-geo-match-level.ts` |
| `ServiceEnumNumberSelectionBehavior` | `serviceEnumNumberSelectionBehaviorSchema` | `src/models/service-enum-number-selection-behavior.ts` |
| `ProxyV1Service` | `proxyV1ServiceSchema` | `src/models/proxy-v1-service.ts` |

