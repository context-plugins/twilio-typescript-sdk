<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ParticipantApi — operations

Accessor: `client.conversationsV2ParticipantApi` · Source: `src/resources/conversations-v2-participant-api.ts` · 4 operations · Request and error types: namespace `ConversationsV2ParticipantApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createParticipantInConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createParticipantInConversation(request: ConversationsV2ParticipantApi.CreateParticipantInConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV2Participant, ConversationsV2ParticipantApi.CreateParticipantInConversationError>`
- **Wire**: `POST /v2/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConversationsV2Participant`
- **Error**: `ConversationsV2ParticipantApi.CreateParticipantInConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error16"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ParticipantApi.CreateParticipantInConversationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `body` | `body` | — | `V2ConversationsParticipantsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsParticipantsRequest` | `v2ConversationsParticipantsRequestSchema` | `src/models/v2-conversations-participants-request.ts` |
| `ConversationsV2Participant` | `conversationsV2ParticipantSchema` | `src/models/conversations-v2-participant.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchParticipant2

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchParticipant2(request: ConversationsV2ParticipantApi.FetchParticipant2Request, options?: RequestOptions): ApiPromise<ConversationsV2Participant, ConversationsV2ParticipantApi.FetchParticipant2Error>`
- **Wire**: `GET /v2/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2Participant`
- **Error**: `ConversationsV2ParticipantApi.FetchParticipant2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ParticipantApi.FetchParticipant2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2Participant` | `conversationsV2ParticipantSchema` | `src/models/conversations-v2-participant.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### listParticipantByConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listParticipantByConversation(request: ConversationsV2ParticipantApi.ListParticipantByConversationRequest, options?: RequestOptions): ApiPromise<V2ConversationsParticipantsResponse, ConversationsV2ParticipantApi.ListParticipantByConversationError>`
- **Wire**: `GET /v2/Conversations/{ConversationSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ConversationsParticipantsResponse`
- **Error**: `ConversationsV2ParticipantApi.ListParticipantByConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ParticipantApi.ListParticipantByConversationRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes | — |
| `pageSize` | `query` | — | `number` | no | `50` |
| `pageToken` | `query` | — | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsParticipantsResponse` | `v2ConversationsParticipantsResponseSchema` | `src/models/v2-conversations-participants-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updateParticipantInConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateParticipantInConversation(request: ConversationsV2ParticipantApi.UpdateParticipantInConversationRequest, options?: RequestOptions): ApiPromise<ConversationsV2Participant, ConversationsV2ParticipantApi.UpdateParticipantInConversationError>`
- **Wire**: `PUT /v2/Conversations/{ConversationSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConversationsV2Participant`
- **Error**: `ConversationsV2ParticipantApi.UpdateParticipantInConversationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ParticipantApi.UpdateParticipantInConversationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `conversationSid` | `path` | `ConversationSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `V2ConversationsParticipantsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ConversationsParticipantsRequest1` | `v2ConversationsParticipantsRequest1Schema` | `src/models/v2-conversations-participants-request1.ts` |
| `ConversationsV2Participant` | `conversationsV2ParticipantSchema` | `src/models/conversations-v2-participant.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

