<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ConversationApi — operations

Accessor: `client.conversationsV2ConversationApi` · Source: `src/resources/conversations-v2-conversation-api.ts` · 6 operations · Request and error types: namespace `ConversationsV2ConversationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createConversationWithConfig

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationWithConfig(request: ConversationsV2ConversationApi.CreateConversationWithConfigRequest, options?: RequestOptions): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.CreateConversationWithConfigError>`
- **Wire**: `POST /v2/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV2Conversation`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.CreateConversationWithConfigError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error16"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.CreateConversationWithConfigRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `V2ConversationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsRequest` | `v2ConversationsRequestSchema` | `src/models/v2-conversations-request.ts` |
| `ConversationsV2Conversation` | `conversationsV2ConversationSchema` | `src/models/conversations-v2-conversation.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### deleteConversationAsync

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConversationAsync(request: ConversationsV2ConversationApi.DeleteConversationAsyncRequest, options?: RequestOptions): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConversationApi.DeleteConversationAsyncError>`
- **Wire**: `DELETE /v2/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.DeleteConversationAsyncError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error16"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.DeleteConversationAsyncRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2OperationAccepted` | `conversationsV2OperationAcceptedSchema` | `src/models/conversations-v2-operation-accepted.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchConversation2

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversation2(request: ConversationsV2ConversationApi.FetchConversation2Request, options?: RequestOptions): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.FetchConversation2Error>`
- **Wire**: `GET /v2/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2Conversation`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.FetchConversation2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.FetchConversation2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2Conversation` | `conversationsV2ConversationSchema` | `src/models/conversations-v2-conversation.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### listConversationByAccount

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConversationByAccount(request: ConversationsV2ConversationApi.ListConversationByAccountRequest, options?: RequestOptions): ApiPromise<V2ConversationsResponse, ConversationsV2ConversationApi.ListConversationByAccountError>`
- **Wire**: `GET /v2/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ConversationsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.ListConversationByAccountError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.ListConversationByAccountRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status31[]` | no | — |
| `channelId` | `query` | `string` | no | — |
| `pageSize` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Status31` | `status31Schema` | `src/models/status31.ts` |
| `V2ConversationsResponse` | `v2ConversationsResponseSchema` | `src/models/v2-conversations-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### patchConversationById

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `patchConversationById(request: ConversationsV2ConversationApi.PatchConversationByIdRequest, options?: RequestOptions): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.PatchConversationByIdError>`
- **Wire**: `PATCH /v2/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV2Conversation`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.PatchConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.PatchConversationByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `V2ConversationsRequest2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsRequest2` | `v2ConversationsRequest2Schema` | `src/models/v2-conversations-request2.ts` |
| `ConversationsV2Conversation` | `conversationsV2ConversationSchema` | `src/models/conversations-v2-conversation.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updateConversationById

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConversationById(request: ConversationsV2ConversationApi.UpdateConversationByIdRequest, options?: RequestOptions): ApiPromise<ConversationsV2Conversation, ConversationsV2ConversationApi.UpdateConversationByIdError>`
- **Wire**: `PUT /v2/Conversations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV2Conversation`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2ConversationApi.UpdateConversationByIdError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConversationApi.UpdateConversationByIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `V2ConversationsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsRequest1` | `v2ConversationsRequest1Schema` | `src/models/v2-conversations-request1.ts` |
| `ConversationsV2Conversation` | `conversationsV2ConversationSchema` | `src/models/conversations-v2-conversation.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

