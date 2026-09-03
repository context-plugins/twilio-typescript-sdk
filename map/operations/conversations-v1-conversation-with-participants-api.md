<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1ConversationWithParticipantsApi — operations

Accessor: `client.conversationsV1ConversationWithParticipantsApi` · Source: `src/resources/conversations-v1-conversation-with-participants-api.ts` · 2 operations · Request types: namespace `ConversationsV1ConversationWithParticipantsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConversationWithParticipants

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConversationWithParticipants(request: ConversationsV1ConversationWithParticipantsApi.CreateConversationWithParticipantsRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConversationWithParticipants, ResponseError>`
- **Wire**: `POST /v1/ConversationWithParticipants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ConversationWithParticipants`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationWithParticipantsApi.CreateConversationWithParticipantsRequest` (13):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `state` | `form` | `State` | `ConversationWithParticipantsEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |
| `participant` | `form` | `Participant` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ConversationWithParticipantsEnumState` | `conversationWithParticipantsEnumStateSchema` | `src/models/conversation-with-participants-enum-state.ts` |
| `ConversationsV1ConversationWithParticipants` | `conversationsV1ConversationWithParticipantsSchema` | `src/models/conversations-v1-conversation-with-participants.ts` |

### createServiceConversationWithParticipants

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createServiceConversationWithParticipants(request: ConversationsV1ConversationWithParticipantsApi.CreateServiceConversationWithParticipantsRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceConversationWithParticipants, ResponseError>`
- **Wire**: `POST /v1/Services/{ChatServiceSid}/ConversationWithParticipants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ServiceServiceConversationWithParticipants`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1ConversationWithParticipantsApi.CreateServiceConversationWithParticipantsRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `xTwilioWebhookEnabled` | `header` | `X-Twilio-Webhook-Enabled` | `Confirmation` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `dateCreated` | `form` | `DateCreated` | `Date` (date-time) | no |
| `dateUpdated` | `form` | `DateUpdated` | `Date` (date-time) | no |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `state` | `form` | `State` | `ServiceConversationWithParticipantsEnumState` | no |
| `timersInactive` | `form` | `Timers.Inactive` | `string` | no |
| `timersClosed` | `form` | `Timers.Closed` | `string` | no |
| `bindingsEmailAddress` | `form` | `Bindings.Email.Address` | `string` | no |
| `bindingsEmailName` | `form` | `Bindings.Email.Name` | `string` | no |
| `participant` | `form` | `Participant` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ServiceConversationWithParticipantsEnumState` | `serviceConversationWithParticipantsEnumStateSchema` | `src/models/service-conversation-with-participants-enum-state.ts` |
| `ConversationsV1ServiceServiceConversationWithParticipants` | `conversationsV1ServiceServiceConversationWithParticipantsSchema` | `src/models/conversations-v1-service-service-conversation-with-participants.ts` |

