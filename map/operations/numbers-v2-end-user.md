<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2EndUser — operations

Accessor: `client.numbersV2EndUser` · Source: `src/resources/numbers-v2-end-user.ts` · 5 operations · Request types: namespace `NumbersV2EndUser`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createEndUser

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEndUser(request: NumbersV2EndUser.CreateEndUserRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError>`
- **Wire**: `POST /v2/RegulatoryCompliance/EndUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUser.CreateEndUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `EndUserEnumType` | yes |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EndUserEnumType` | `endUserEnumTypeSchema` | `src/models/end-user-enum-type.ts` |
| `NumbersV2RegulatoryComplianceEndUser` | `numbersV2RegulatoryComplianceEndUserSchema` | `src/models/numbers-v2-regulatory-compliance-end-user.ts` |

### deleteEndUser

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteEndUser(request: NumbersV2EndUser.DeleteEndUserRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/RegulatoryCompliance/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUser.DeleteEndUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchEndUser

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEndUser(request: NumbersV2EndUser.FetchEndUserRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUser.FetchEndUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceEndUser` | `numbersV2RegulatoryComplianceEndUserSchema` | `src/models/numbers-v2-regulatory-compliance-end-user.ts` |

### listEndUser

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEndUser(request: NumbersV2EndUser.ListEndUserRequest, options?: RequestOptions): ApiPromise<ListEndUserResponse, ResponseError>`
- **Wire**: `GET /v2/RegulatoryCompliance/EndUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEndUserResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUser.ListEndUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEndUserResponse` | `listEndUserResponseSchema` | `src/models/list-end-user-response.ts` |

### updateEndUser

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateEndUser(request: NumbersV2EndUser.UpdateEndUserRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError>`
- **Wire**: `POST /v2/RegulatoryCompliance/EndUsers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2RegulatoryComplianceEndUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2EndUser.UpdateEndUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceEndUser` | `numbersV2RegulatoryComplianceEndUserSchema` | `src/models/numbers-v2-regulatory-compliance-end-user.ts` |

