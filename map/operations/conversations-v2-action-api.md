<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ActionApi — operations

Accessor: `client.conversationsV2ActionApi` · Source: `src/resources/conversations-v2-action-api.ts` · 2 operations · Request and error types: namespace `ConversationsV2ActionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConversationAction

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationAction(request: ConversationsV2ActionApi.CreateConversationActionRequest, options?: RequestOptions): ApiPromise<ConversationsV2Action, ConversationsV2ActionApi.CreateConversationActionError>`
- **Wire**: `POST /v2/Conversations/{ConversationId}/Actions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConversationsV2Action`
- **Error**: `ConversationsV2ActionApi.CreateConversationActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ActionApi.CreateConversationActionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationId` | `path` | `ConversationId` | `string` | yes |
| `body` | `body` | — | `ConversationsV2SendMessageActionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2SendMessageActionRequest` | `conversationsV2SendMessageActionRequestSchema` | `src/models/conversations-v2-send-message-action-request.ts` |
| `ConversationsV2Action` | `conversationsV2ActionSchema` | `src/models/conversations-v2-action.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchConversationAction

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConversationAction(request: ConversationsV2ActionApi.FetchConversationActionRequest, options?: RequestOptions): ApiPromise<ConversationsV2Action, ConversationsV2ActionApi.FetchConversationActionError>`
- **Wire**: `GET /v2/Conversations/{ConversationId}/Actions/{ActionId}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2Action`
- **Error**: `ConversationsV2ActionApi.FetchConversationActionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ActionApi.FetchConversationActionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationId` | `path` | `ConversationId` | `string` | yes |
| `actionId` | `path` | `ActionId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2Action` | `conversationsV2ActionSchema` | `src/models/conversations-v2-action.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

