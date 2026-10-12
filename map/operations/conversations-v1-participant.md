<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Participant — operations

Accessor: `client.conversationsV1Participant` · Source: `src/resources/conversations-v1-participant.ts` · 10 operations · Request types: namespace `ConversationsV1Participant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationParticipant(request: ConversationsV1Participant.CreateConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.CreateConversationParticipantRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `identity` | `form` | `Identity` | `string` | no |
| `messagingBindingAddress` | `form` | `MessagingBinding.Address` | `string` | no |
| `messagingBindingProxyAddress` | `form` | `MessagingBinding.ProxyAddress` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `messagingBindingProjectedAddress` | `form` | `MessagingBinding.ProjectedAddress` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ConversationConversationParticipant` | `conversationsV1ConversationConversationParticipantSchema` | `src/models/conversations-v1-conversation-conversation-participant.ts` |

### createServiceConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceConversationParticipant(request: ConversationsV1Participant.CreateServiceConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.CreateServiceConversationParticipantRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `identity` | `form` | `Identity` | `string` | no |
| `messagingBindingAddress` | `form` | `MessagingBinding.Address` | `string` | no |
| `messagingBindingProxyAddress` | `form` | `MessagingBinding.ProxyAddress` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `messagingBindingProjectedAddress` | `form` | `MessagingBinding.ProjectedAddress` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `conversationsV1ServiceServiceConversationServiceConversationParticipantSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-participant.ts` |

### deleteConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConversationParticipant(request: ConversationsV1Participant.DeleteConversationParticipantRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.DeleteConversationParticipantRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### deleteServiceConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceConversationParticipant(request: ConversationsV1Participant.DeleteServiceConversationParticipantRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.DeleteServiceConversationParticipantRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |

### fetchConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversationParticipant(request: ConversationsV1Participant.FetchConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.FetchConversationParticipantRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConversationConversationParticipant` | `conversationsV1ConversationConversationParticipantSchema` | `src/models/conversations-v1-conversation-conversation-participant.ts` |

### fetchServiceConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConversationParticipant(request: ConversationsV1Participant.FetchServiceConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.FetchServiceConversationParticipantRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `conversationsV1ServiceServiceConversationServiceConversationParticipantSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-participant.ts` |

### listConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversationParticipant(request: ConversationsV1Participant.ListConversationParticipantRequest, options?: RequestOptions): ApiPromise<ListConversationParticipantResponse, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConversationParticipantResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.ListConversationParticipantRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConversationParticipantResponse` | `listConversationParticipantResponseSchema` | `src/models/list-conversation-participant-response.ts` |

### listServiceConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceConversationParticipant(request: ConversationsV1Participant.ListServiceConversationParticipantRequest, options?: RequestOptions): ApiPromise<ListServiceConversationParticipantResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceConversationParticipantResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.ListServiceConversationParticipantRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceConversationParticipantResponse` | `listServiceConversationParticipantResponseSchema` | `src/models/list-service-conversation-participant-response.ts` |

### updateConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConversationParticipant(request: ConversationsV1Participant.UpdateConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationParticipant, ApiError>`
- **Wire**: `POST /v1/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ConversationConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.UpdateConversationParticipantRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |
| `messagingBindingProxyAddress` | `form` | `MessagingBinding.ProxyAddress` | `string` | no |
| `messagingBindingProjectedAddress` | `form` | `MessagingBinding.ProjectedAddress` | `string` | no |
| `identity` | `form` | `Identity` | `string` | no |
| `lastReadMessageIndex` | `form` | `LastReadMessageIndex` | `number` | no |
| `lastReadTimestamp` | `form` | `LastReadTimestamp` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ConversationConversationParticipant` | `conversationsV1ConversationConversationParticipantSchema` | `src/models/conversations-v1-conversation-conversation-participant.ts` |

### updateServiceConversationParticipant

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateServiceConversationParticipant(request: ConversationsV1Participant.UpdateServiceConversationParticipantRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationParticipant, ApiError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV1ServiceServiceConversationServiceConversationParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Participant.UpdateServiceConversationParticipantRequest` (13):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `identity` | `form` | `Identity` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `roleSid` | `form` | `RoleSid` | `string` | no |
| `messagingBindingProxyAddress` | `form` | `MessagingBinding.ProxyAddress` | `string` | no |
| `messagingBindingProjectedAddress` | `form` | `MessagingBinding.ProjectedAddress` | `string` | no |
| `lastReadMessageIndex` | `form` | `LastReadMessageIndex` | `number` | no |
| `lastReadTimestamp` | `form` | `LastReadTimestamp` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationsV1ServiceServiceConversationServiceConversationParticipant` | `conversationsV1ServiceServiceConversationServiceConversationParticipantSchema` | `src/models/conversations-v1-service-service-conversation-service-conversation-participant.ts` |

