<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Entity — operations

Accessor: `client.verifyV2Entity` · Source: `src/resources/verify-v2-entity.ts` · 4 operations · Request types: namespace `VerifyV2Entity`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createEntity

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEntity(request: VerifyV2Entity.CreateEntityRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntity, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Entity.CreateEntityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `form` | `Identity` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntity` | `verifyV2ServiceEntitySchema` | `src/models/verify-v2-service-entity.ts` |

### deleteEntity

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEntity(request: VerifyV2Entity.DeleteEntityRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/Entities/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Entity.DeleteEntityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

### fetchEntity

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEntity(request: VerifyV2Entity.FetchEntityRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntity, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceEntity`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Entity.FetchEntityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntity` | `verifyV2ServiceEntitySchema` | `src/models/verify-v2-service-entity.ts` |

### listEntity

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEntity(request: VerifyV2Entity.ListEntityRequest, options?: RequestOptions): ApiPromise<ListEntityResponse, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEntityResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Entity.ListEntityRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEntityResponse` | `listEntityResponseSchema` | `src/models/list-entity-response.ts` |

