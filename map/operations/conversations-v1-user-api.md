<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1UserApi — operations

Accessor: `client.conversationsV1UserApi` · Source: `src/resources/conversations-v1-user-api.ts` · 10 operations · Request types: namespace `ConversationsV1UserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createServiceUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceUser(request: ConversationsV1UserApi.CreateServiceUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Users`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.CreateServiceUserRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `identity` | `form` | `Identity` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceUser` | `conversationsV1ServiceServiceUserSchema` | `src/models/conversations-v1-service-service-user.ts` |

### createUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createUser(request: ConversationsV1UserApi.CreateUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1User, ResponseError>`
- **Wire**: `POST /v1/Users`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1User`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.CreateUserRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `identity` | `form` | `Identity` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1User` | `conversationsV1UserSchema` | `src/models/conversations-v1-user.ts` |

### deleteServiceUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceUser(request: ConversationsV1UserApi.DeleteServiceUserRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.DeleteServiceUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### deleteUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUser(request: ConversationsV1UserApi.DeleteUserRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.DeleteUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### fetchServiceUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceUser(request: ConversationsV1UserApi.FetchServiceUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.FetchServiceUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceUser` | `conversationsV1ServiceServiceUserSchema` | `src/models/conversations-v1-service-service-user.ts` |

### fetchUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchUser(request: ConversationsV1UserApi.FetchUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1User, ResponseError>`
- **Wire**: `GET /v1/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1User`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.FetchUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1User` | `conversationsV1UserSchema` | `src/models/conversations-v1-user.ts` |

### listServiceUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceUser(request: ConversationsV1UserApi.ListServiceUserRequest, options?: RequestOptions): ApiPromise<ListServiceUserResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Users`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceUserResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.ListServiceUserRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceUserResponse` | `listServiceUserResponseSchema` | `src/models/list-service-user-response.ts` |

### listUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUser(request: ConversationsV1UserApi.ListUserRequest, options?: RequestOptions): ApiPromise<ListUserResponse, ResponseError>`
- **Wire**: `GET /v1/Users`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUserResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.ListUserRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUserResponse` | `listUserResponseSchema` | `src/models/list-user-response.ts` |

### updateServiceUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceUser(request: ConversationsV1UserApi.UpdateServiceUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.UpdateServiceUserRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceUser` | `conversationsV1ServiceServiceUserSchema` | `src/models/conversations-v1-service-service-user.ts` |

### updateUser

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateUser(request: ConversationsV1UserApi.UpdateUserRequest, options?: RequestOptions): ApiPromise<ConversationsV1User, ResponseError>`
- **Wire**: `POST /v1/Users/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1User`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserApi.UpdateUserRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1User` | `conversationsV1UserSchema` | `src/models/conversations-v1-user.ts` |

