<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1DeliveryReceipt — operations

Accessor: `client.conversationsV1DeliveryReceipt` · Source: `src/resources/conversations-v1-delivery-receipt.ts` · 4 operations · Request types: namespace `ConversationsV1DeliveryReceipt`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchConversationMessageReceipt

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversationMessageReceipt(request: ConversationsV1DeliveryReceipt.FetchConversationMessageReceiptRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationConversationMessageConversationMessageReceipt, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConversationConversationMessageConversationMessageReceipt`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1DeliveryReceipt.FetchConversationMessageReceiptRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConversationConversationMessageConversationMessageReceipt` | `conversationsV1ConversationConversationMessageConversationMessageReceiptSchema` | `src/models/conversations-v1-conversation-conversation-message-conversation-message-receipt.ts` |

### fetchServiceConversationMessageReceipt

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceConversationMessageReceipt(request: ConversationsV1DeliveryReceipt.FetchServiceConversationMessageReceiptRequest, options?: RequestOptions): ApiPromise<ServiceConversationMessageReceipt, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ServiceConversationMessageReceipt`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1DeliveryReceipt.FetchServiceConversationMessageReceiptRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceConversationMessageReceipt` | `serviceConversationMessageReceiptSchema` | `src/models/service-conversation-message-receipt.ts` |

### listConversationMessageReceipt

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversationMessageReceipt(request: ConversationsV1DeliveryReceipt.ListConversationMessageReceiptRequest, options?: RequestOptions): ApiPromise<ListConversationMessageReceiptResponse, ApiError>`
- **Wire**: `GET /v1/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConversationMessageReceiptResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1DeliveryReceipt.ListConversationMessageReceiptRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConversationMessageReceiptResponse` | `listConversationMessageReceiptResponseSchema` | `src/models/list-conversation-message-receipt-response.ts` |

### listServiceConversationMessageReceipt

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceConversationMessageReceipt(request: ConversationsV1DeliveryReceipt.ListServiceConversationMessageReceiptRequest, options?: RequestOptions): ApiPromise<ListServiceConversationMessageReceiptResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Messages/{MessageSid}/Receipts`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceConversationMessageReceiptResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1DeliveryReceipt.ListServiceConversationMessageReceiptRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `messageSid` | `path` | `MessageSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceConversationMessageReceiptResponse` | `listServiceConversationMessageReceiptResponseSchema` | `src/models/list-service-conversation-message-receipt-response.ts` |

