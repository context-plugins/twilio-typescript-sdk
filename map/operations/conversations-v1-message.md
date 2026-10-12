<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Message — operations

Accessor: `client.conversationsV1Message` · Source: `src/resources/conversations-v1-message.ts` · 10 operations · Request types: namespace `ConversationsV1Message`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationMessage(request: ConversationsV1Message.CreateConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Messages`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.CreateConversationMessageRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `author` | `form` | `Author` | `string` | no |
| `body2` | `form` | `Body` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `mediaSid` | `form` | `MediaSid` | `string` | no |
| `contentSid` | `form` | `ContentSid` | `string` | no |
| `contentVariables` | `form` | `ContentVariables` | `string` | no |
| `subject` | `form` | `Subject` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ConversationConversationMessage` | `conversationsV1ConversationConversationMessageSchema` | `src/models/conversations-v1-conversation-conversation-message.ts` |

### createServiceConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceConversationMessage(request: ConversationsV1Message.CreateServiceConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.CreateServiceConversationMessageRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `author` | `form` | `Author` | `string` | no |
| `body2` | `form` | `Body` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `mediaSid` | `form` | `MediaSid` | `string` | no |
| `contentSid` | `form` | `ContentSid` | `string` | no |
| `contentVariables` | `form` | `ContentVariables` | `string` | no |
| `subject` | `form` | `Subject` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `conversationsV1ServiceServiceConversationServiceConversationMessageSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-message.ts` |

### deleteConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConversationMessage(request: ConversationsV1Message.DeleteConversationMessageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.DeleteConversationMessageRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### deleteServiceConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceConversationMessage(request: ConversationsV1Message.DeleteServiceConversationMessageRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.DeleteServiceConversationMessageRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### fetchConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversationMessage(request: ConversationsV1Message.FetchConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.FetchConversationMessageRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConversationConversationMessage` | `conversationsV1ConversationConversationMessageSchema` | `src/models/conversations-v1-conversation-conversation-message.ts` |

### fetchServiceConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConversationMessage(request: ConversationsV1Message.FetchServiceConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.FetchServiceConversationMessageRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `conversationsV1ServiceServiceConversationServiceConversationMessageSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-message.ts` |

### listConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversationMessage(request: ConversationsV1Message.ListConversationMessageRequest, options?: RequestOptions): ApiPromise<ListConversationMessageResponse, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Messages`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConversationMessageResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.ListConversationMessageRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `order` | `query` | `Order` | `ChallengeEnumListOrders` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeEnumListOrders` | `challengeEnumListOrdersSchema` | `src/models/challenge-enum-list-orders.ts` |
| `ListConversationMessageResponse` | `listConversationMessageResponseSchema` | `src/models/list-conversation-message-response.ts` |

### listServiceConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceConversationMessage(request: ConversationsV1Message.ListServiceConversationMessageRequest, options?: RequestOptions): ApiPromise<ListServiceConversationMessageResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceConversationMessageResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.ListServiceConversationMessageRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `order` | `query` | `Order` | `ChallengeEnumListOrders` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeEnumListOrders` | `challengeEnumListOrdersSchema` | `src/models/challenge-enum-list-orders.ts` |
| `ListServiceConversationMessageResponse` | `listServiceConversationMessageResponseSchema` | `src/models/list-service-conversation-message-response.ts` |

### updateConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConversationMessage(request: ConversationsV1Message.UpdateConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationMessage, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.UpdateConversationMessageRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `author` | `form` | `Author` | `string` | no |
| `body2` | `form` | `Body` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `subject` | `form` | `Subject` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ConversationConversationMessage` | `conversationsV1ConversationConversationMessageSchema` | `src/models/conversations-v1-conversation-conversation-message.ts` |

### updateServiceConversationMessage

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceConversationMessage(request: ConversationsV1Message.UpdateServiceConversationMessageRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationMessage, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationMessage`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Message.UpdateServiceConversationMessageRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `author` | `form` | `Author` | `string` | no |
| `body2` | `form` | `Body` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `subject` | `form` | `Subject` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationMessage` | `conversationsV1ServiceServiceConversationServiceConversationMessageSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-message.ts` |

