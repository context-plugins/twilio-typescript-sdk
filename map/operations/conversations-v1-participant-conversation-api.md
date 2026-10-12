<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ParticipantConversationApi — operations

Accessor: `client.conversationsV1ParticipantConversationApi` · Source: `src/resources/conversations-v1-participant-conversation-api.ts` · 2 operations · Request types: namespace `ConversationsV1ParticipantConversationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listParticipantConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listParticipantConversation(request: ConversationsV1ParticipantConversationApi.ListParticipantConversationRequest, options?: RequestOptions): ApiPromise<ListParticipantConversationResponse, ApiError>`
- **Wire**: `GET /v1/ParticipantConversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListParticipantConversationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ParticipantConversationApi.ListParticipantConversationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `identity` | `query` | `Identity` | `string` | no |
| `address` | `query` | `Address` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListParticipantConversationResponse` | `listParticipantConversationResponseSchema` | `src/models/list-participant-conversation-response.ts` |

### listServiceParticipantConversation

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceParticipantConversation(request: ConversationsV1ParticipantConversationApi.ListServiceParticipantConversationRequest, options?: RequestOptions): ApiPromise<ListServiceParticipantConversationResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/ParticipantConversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceParticipantConversationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ParticipantConversationApi.ListServiceParticipantConversationRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `identity` | `query` | `Identity` | `string` | no |
| `address` | `query` | `Address` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceParticipantConversationResponse` | `listServiceParticipantConversationResponseSchema` | `src/models/list-service-participant-conversation-response.ts` |

