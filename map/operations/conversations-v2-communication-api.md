<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2CommunicationApi — operations

Accessor: `client.conversationsV2CommunicationApi` · Source: `src/resources/conversations-v2-communication-api.ts` · 3 operations · Request and error types: namespace `ConversationsV2CommunicationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createCommunicationInConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCommunicationInConversation(request: ConversationsV2CommunicationApi.CreateCommunicationInConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV2Communication, ConversationsV2CommunicationApi.CreateCommunicationInConversationError>`
- **Wire**: `POST /v2/Conversations/{ConversationSid}/Communications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ConversationsV2Communication`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2CommunicationApi.CreateCommunicationInConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2CommunicationApi.CreateCommunicationInConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `body` | `body` | — | `V2ConversationsCommunicationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsCommunicationsRequest` | `v2ConversationsCommunicationsRequestSchema` | `src/models/v2-conversations-communications-request.ts` |
| `ConversationsV2Communication` | `conversationsV2CommunicationSchema` | `src/models/conversations-v2-communication.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchCommunication

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCommunication(request: ConversationsV2CommunicationApi.FetchCommunicationRequest, options?: RequestOptions): ApiPromise<ConversationsV2Communication, ConversationsV2CommunicationApi.FetchCommunicationError>`
- **Wire**: `GET /v2/Conversations/{ConversationSid}/Communications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2Communication`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2CommunicationApi.FetchCommunicationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2CommunicationApi.FetchCommunicationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2Communication` | `conversationsV2CommunicationSchema` | `src/models/conversations-v2-communication.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### listCommunicationByConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCommunicationByConversation(request: ConversationsV2CommunicationApi.ListCommunicationByConversationRequest, options?: RequestOptions): ApiPromise<V2ConversationsCommunicationsResponse, ConversationsV2CommunicationApi.ListCommunicationByConversationError>`
- **Wire**: `GET /v2/Conversations/{ConversationSid}/Communications`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ConversationsCommunicationsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2CommunicationApi.ListCommunicationByConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2CommunicationApi.ListCommunicationByConversationRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes | — |
| `channelId` | `query` | — | `string` | no | — |
| `pageSize` | `query` | — | `number` | no | `50` |
| `pageToken` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsCommunicationsResponse` | `v2ConversationsCommunicationsResponseSchema` | `src/models/v2-conversations-communications-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

