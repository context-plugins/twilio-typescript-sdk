<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannelParticipant — operations

Accessor: `client.flexV1InteractionChannelParticipant` · Source: `src/resources/flex-v1-interaction-channel-participant.ts` · 3 operations · Request types: namespace `FlexV1InteractionChannelParticipant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInteractionChannelParticipant

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInteractionChannelParticipant(request: FlexV1InteractionChannelParticipant.CreateInteractionChannelParticipantRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannelParticipant.CreateInteractionChannelParticipantRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `type` | `form` | `Type` | `InteractionChannelParticipantEnumType` | yes |
| `mediaProperties` | `form` | `MediaProperties` | `Record<string, unknown>` | yes |
| `routingProperties` | `form` | `RoutingProperties` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InteractionChannelParticipantEnumType` | `interactionChannelParticipantEnumTypeSchema` | `src/models/interaction-channel-participant-enum-type.ts` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `flexV1InteractionInteractionChannelInteractionChannelParticipantSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-channel-participant.ts` |

### listInteractionChannelParticipant

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInteractionChannelParticipant(request: FlexV1InteractionChannelParticipant.ListInteractionChannelParticipantRequest, options?: RequestOptions): ApiPromise<ListInteractionChannelParticipantResponse, ResponseError>`
- **Wire**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInteractionChannelParticipantResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannelParticipant.ListInteractionChannelParticipantRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInteractionChannelParticipantResponse` | `listInteractionChannelParticipantResponseSchema` | `src/models/list-interaction-channel-participant-response.ts` |

### updateInteractionChannelParticipant

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInteractionChannelParticipant(request: FlexV1InteractionChannelParticipant.UpdateInteractionChannelParticipantRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelParticipant, ResponseError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannelParticipant.UpdateInteractionChannelParticipantRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `InteractionChannelParticipantEnumStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InteractionChannelParticipantEnumStatus` | `interactionChannelParticipantEnumStatusSchema` | `src/models/interaction-channel-participant-enum-status.ts` |
| `FlexV1InteractionInteractionChannelInteractionChannelParticipant` | `flexV1InteractionInteractionChannelInteractionChannelParticipantSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-channel-participant.ts` |

