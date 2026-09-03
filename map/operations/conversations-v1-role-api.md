<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1RoleApi — operations

Accessor: `client.conversationsV1RoleApi` · Source: `src/resources/conversations-v1-role-api.ts` · 10 operations · Request types: namespace `ConversationsV1RoleApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRole(request: ConversationsV1RoleApi.CreateRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1Role, ResponseError>`
- **Wire**: `POST /v1/Roles`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Role`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.CreateRoleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `RoleEnumRoleType` | yes |
| `permission` | `form` | `Permission` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoleEnumRoleType` | `roleEnumRoleTypeSchema` | `src/models/role-enum-role-type.ts` |
| `ConversationsV1Role` | `conversationsV1RoleSchema` | `src/models/conversations-v1-role.ts` |

### createServiceRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceRole(request: ConversationsV1RoleApi.CreateServiceRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Roles`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.CreateServiceRoleRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `type` | `form` | `Type` | `ServiceRoleEnumRoleType` | yes |
| `permission` | `form` | `Permission` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceRoleEnumRoleType` | `serviceRoleEnumRoleTypeSchema` | `src/models/service-role-enum-role-type.ts` |
| `ConversationsV1ServiceServiceRole` | `conversationsV1ServiceServiceRoleSchema` | `src/models/conversations-v1-service-service-role.ts` |

### deleteRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRole(request: ConversationsV1RoleApi.DeleteRoleRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.DeleteRoleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### deleteServiceRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceRole(request: ConversationsV1RoleApi.DeleteServiceRoleRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.DeleteServiceRoleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRole(request: ConversationsV1RoleApi.FetchRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1Role, ResponseError>`
- **Wire**: `GET /v1/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1Role`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.FetchRoleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Role` | `conversationsV1RoleSchema` | `src/models/conversations-v1-role.ts` |

### fetchServiceRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceRole(request: ConversationsV1RoleApi.FetchServiceRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.FetchServiceRoleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceRole` | `conversationsV1ServiceServiceRoleSchema` | `src/models/conversations-v1-service-service-role.ts` |

### listRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRole(request: ConversationsV1RoleApi.ListRoleRequest, options?: RequestOptions): ApiPromise<ListRoleResponse, ResponseError>`
- **Wire**: `GET /v1/Roles`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoleResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.ListRoleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRoleResponse` | `listRoleResponseSchema` | `src/models/list-role-response.ts` |

### listServiceRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceRole(request: ConversationsV1RoleApi.ListServiceRoleRequest, options?: RequestOptions): ApiPromise<ListServiceRoleResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Roles`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceRoleResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.ListServiceRoleRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceRoleResponse` | `listServiceRoleResponseSchema` | `src/models/list-service-role-response.ts` |

### updateRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRole(request: ConversationsV1RoleApi.UpdateRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1Role, ResponseError>`
- **Wire**: `POST /v1/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Role`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.UpdateRoleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `permission` | `form` | `Permission` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Role` | `conversationsV1RoleSchema` | `src/models/conversations-v1-role.ts` |

### updateServiceRole

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceRole(request: ConversationsV1RoleApi.UpdateServiceRoleRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Roles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceRole`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1RoleApi.UpdateServiceRoleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `permission` | `form` | `Permission` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceRole` | `conversationsV1ServiceServiceRoleSchema` | `src/models/conversations-v1-service-service-role.ts` |

