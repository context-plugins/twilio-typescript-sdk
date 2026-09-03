<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1EndUserApi — operations

Accessor: `client.trusthubV1EndUserApi` · Source: `src/resources/trusthub-v1-end-user-api.ts` · 5 operations · Request types: namespace `TrusthubV1EndUserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createEndUser2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEndUser2(request: TrusthubV1EndUserApi.CreateEndUser2Request, options?: RequestOptions): ApiPromise<TrusthubV1EndUser, ResponseError>`
- **Wire**: `POST /v1/EndUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1EndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserApi.CreateEndUser2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `string` | yes |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1EndUser` | `trusthubV1EndUserSchema` | `src/models/trusthub-v1-end-user.ts` |

### deleteEndUser2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEndUser2(request: TrusthubV1EndUserApi.DeleteEndUser2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserApi.DeleteEndUser2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchEndUser2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEndUser2(request: TrusthubV1EndUserApi.FetchEndUser2Request, options?: RequestOptions): ApiPromise<TrusthubV1EndUser, ResponseError>`
- **Wire**: `GET /v1/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1EndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserApi.FetchEndUser2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1EndUser` | `trusthubV1EndUserSchema` | `src/models/trusthub-v1-end-user.ts` |

### listEndUser2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEndUser2(request: TrusthubV1EndUserApi.ListEndUser2Request, options?: RequestOptions): ApiPromise<ListEndUserResponse1, ResponseError>`
- **Wire**: `GET /v1/EndUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndUserResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserApi.ListEndUser2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndUserResponse1` | `listEndUserResponse1Schema` | `src/models/list-end-user-response1.ts` |

### updateEndUser2

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateEndUser2(request: TrusthubV1EndUserApi.UpdateEndUser2Request, options?: RequestOptions): ApiPromise<TrusthubV1EndUser, ResponseError>`
- **Wire**: `POST /v1/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1EndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1EndUserApi.UpdateEndUser2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1EndUser` | `trusthubV1EndUserSchema` | `src/models/trusthub-v1-end-user.ts` |

