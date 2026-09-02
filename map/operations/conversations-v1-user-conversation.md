<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1UserConversation — operations

Accessor: `client.conversationsV1UserConversation` · Source: `src/resources/conversations-v1-user-conversation.ts` · 8 operations · Request types: namespace `ConversationsV1UserConversation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteServiceUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceUserConversation(request: ConversationsV1UserConversation.DeleteServiceUserConversationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.DeleteServiceUserConversationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |

### deleteUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteUserConversation(request: ConversationsV1UserConversation.DeleteUserConversationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.DeleteUserConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |

### fetchServiceUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceUserConversation(request: ConversationsV1UserConversation.FetchServiceUserConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.FetchServiceUserConversationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `conversationsV1ServiceServiceUserServiceUserConversationSchema` | `src/models/conversations-v1-service-service-user-service-user-conversation.ts` |

### fetchUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchUserConversation(request: ConversationsV1UserConversation.FetchUserConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1UserUserConversation, ResponseError>`
- **Wire**: `GET /v1/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.FetchUserConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1UserUserConversation` | `conversationsV1UserUserConversationSchema` | `src/models/conversations-v1-user-user-conversation.ts` |

### listServiceUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceUserConversation(request: ConversationsV1UserConversation.ListServiceUserConversationRequest, options?: RequestOptions): ApiPromise<ListServiceUserConversationResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceUserConversationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.ListServiceUserConversationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceUserConversationResponse` | `listServiceUserConversationResponseSchema` | `src/models/list-service-user-conversation-response.ts` |

### listUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listUserConversation(request: ConversationsV1UserConversation.ListUserConversationRequest, options?: RequestOptions): ApiPromise<ListUserConversationResponse, ResponseError>`
- **Wire**: `GET /v1/Users/{UserSid}/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUserConversationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.ListUserConversationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUserConversationResponse` | `listUserConversationResponseSchema` | `src/models/list-user-conversation-response.ts` |

### updateServiceUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceUserConversation(request: ConversationsV1UserConversation.UpdateServiceUserConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceUserServiceUserConversation, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceUserServiceUserConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.UpdateServiceUserConversationRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `notificationLevel` | `form` | `NotificationLevel` | `ServiceUserConversationEnumNotificationLevel` | no |
| `lastReadTimestamp` | `form` | `LastReadTimestamp` | `Date` (date-time) | no |
| `lastReadMessageIndex` | `form` | `LastReadMessageIndex` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceUserConversationEnumNotificationLevel` | `serviceUserConversationEnumNotificationLevelSchema` | `src/models/service-user-conversation-enum-notification-level.ts` |
| `ConversationsV1ServiceServiceUserServiceUserConversation` | `conversationsV1ServiceServiceUserServiceUserConversationSchema` | `src/models/conversations-v1-service-service-user-service-user-conversation.ts` |

### updateUserConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateUserConversation(request: ConversationsV1UserConversation.UpdateUserConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1UserUserConversation, ResponseError>`
- **Wire**: `POST /v1/Users/{UserSid}/Conversations/{ConversationSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1UserUserConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1UserConversation.UpdateUserConversationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `userSid` | `path` | `UserSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `notificationLevel` | `form` | `NotificationLevel` | `UserConversationEnumNotificationLevel` | no |
| `lastReadTimestamp` | `form` | `LastReadTimestamp` | `Date` (date-time) | no |
| `lastReadMessageIndex` | `form` | `LastReadMessageIndex` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `UserConversationEnumNotificationLevel` | `userConversationEnumNotificationLevelSchema` | `src/models/user-conversation-enum-notification-level.ts` |
| `ConversationsV1UserUserConversation` | `conversationsV1UserUserConversationSchema` | `src/models/conversations-v1-user-user-conversation.ts` |

