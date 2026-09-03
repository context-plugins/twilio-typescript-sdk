<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ServiceApi — operations

Accessor: `client.conversationsV1ServiceApi` · Source: `src/resources/conversations-v1-service-api.ts` · 4 operations · Request types: namespace `ConversationsV1ServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createService3

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createService3(request: ConversationsV1ServiceApi.CreateService3Request, options?: RequestOptions): ApiPromise<ConversationsV1Service, ResponseError>`
- **Wire**: `POST /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ServiceApi.CreateService3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Service` | `conversationsV1ServiceSchema` | `src/models/conversations-v1-service.ts` |

### deleteService3

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteService3(request: ConversationsV1ServiceApi.DeleteService3Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ServiceApi.DeleteService3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchService3

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchService3(request: ConversationsV1ServiceApi.FetchService3Request, options?: RequestOptions): ApiPromise<ConversationsV1Service, ResponseError>`
- **Wire**: `GET /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ServiceApi.FetchService3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Service` | `conversationsV1ServiceSchema` | `src/models/conversations-v1-service.ts` |

### listService3

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listService3(request: ConversationsV1ServiceApi.ListService3Request, options?: RequestOptions): ApiPromise<ListServiceResponse2, ResponseError>`
- **Wire**: `GET /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceResponse2`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ServiceApi.ListService3Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceResponse2` | `listServiceResponse2Schema` | `src/models/list-service-response2.ts` |

