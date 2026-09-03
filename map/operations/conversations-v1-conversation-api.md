<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConversationApi — operations

Accessor: `client.conversationsV1ConversationApi` · Source: `src/resources/conversations-v1-conversation-api.ts` · 10 operations · Request types: namespace `ConversationsV1ConversationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversation(request: ConversationsV1ConversationApi.CreateConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1Conversation, ResponseError>`
- **Wire**: `POST /v1/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Conversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.CreateConversationRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `state` | `form` | `State` | `ConversationEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationEnumState` | `conversationEnumStateSchema` | `src/models/conversation-enum-state.ts` |
| `ConversationsV1Conversation` | `conversationsV1ConversationSchema` | `src/models/conversations-v1-conversation.ts` |

### createServiceConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceConversation(request: ConversationsV1ConversationApi.CreateServiceConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.CreateServiceConversationRequest` (13):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `state` | `form` | `State` | `ServiceConversationEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ServiceConversationEnumState` | `serviceConversationEnumStateSchema` | `src/models/service-conversation-enum-state.ts` |
| `ConversationsV1ServiceServiceConversation` | `conversationsV1ServiceServiceConversationSchema` | `src/models/conversations-v1-service-service-conversation.ts` |

### deleteConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConversation(request: ConversationsV1ConversationApi.DeleteConversationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.DeleteConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### deleteServiceConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceConversation(request: ConversationsV1ConversationApi.DeleteServiceConversationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.DeleteServiceConversationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### fetchConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversation(request: ConversationsV1ConversationApi.FetchConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1Conversation, ResponseError>`
- **Wire**: `GET /v1/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1Conversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.FetchConversationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Conversation` | `conversationsV1ConversationSchema` | `src/models/conversations-v1-conversation.ts` |

### fetchServiceConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConversation(request: ConversationsV1ConversationApi.FetchServiceConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.FetchServiceConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConversation` | `conversationsV1ServiceServiceConversationSchema` | `src/models/conversations-v1-service-service-conversation.ts` |

### listConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversation(request: ConversationsV1ConversationApi.ListConversationRequest, options?: RequestOptions): ApiPromise<ListConversationResponse, ResponseError>`
- **Wire**: `GET /v1/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConversationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.ListConversationRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `startDate` | `query` | `StartDate` | `string` | no |
| `endDate` | `query` | `EndDate` | `string` | no |
| `state` | `query` | `State` | `ConversationEnumState` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationEnumState` | `conversationEnumStateSchema` | `src/models/conversation-enum-state.ts` |
| `ListConversationResponse` | `listConversationResponseSchema` | `src/models/list-conversation-response.ts` |

### listServiceConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceConversation(request: ConversationsV1ConversationApi.ListServiceConversationRequest, options?: RequestOptions): ApiPromise<ListServiceConversationResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceConversationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.ListServiceConversationRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `startDate` | `query` | `StartDate` | `string` | no |
| `endDate` | `query` | `EndDate` | `string` | no |
| `state` | `query` | `State` | `ServiceConversationEnumState` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceConversationEnumState` | `serviceConversationEnumStateSchema` | `src/models/service-conversation-enum-state.ts` |
| `ListServiceConversationResponse` | `listServiceConversationResponseSchema` | `src/models/list-service-conversation-response.ts` |

### updateConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConversation(request: ConversationsV1ConversationApi.UpdateConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1Conversation, ResponseError>`
- **Wire**: `POST /v1/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Conversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.UpdateConversationRequest` (13):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `state` | `form` | `State` | `ConversationEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationEnumState` | `conversationEnumStateSchema` | `src/models/conversation-enum-state.ts` |
| `ConversationsV1Conversation` | `conversationsV1ConversationSchema` | `src/models/conversations-v1-conversation.ts` |

### updateServiceConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceConversation(request: ConversationsV1ConversationApi.UpdateServiceConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversation, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceConversation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationApi.UpdateServiceConversationRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `state` | `form` | `State` | `ServiceConversationEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ServiceConversationEnumState` | `serviceConversationEnumStateSchema` | `src/models/service-conversation-enum-state.ts` |
| `ConversationsV1ServiceServiceConversation` | `conversationsV1ServiceServiceConversationSchema` | `src/models/conversations-v1-service-service-conversation.ts` |

