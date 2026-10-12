<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannelInvite — operations

Accessor: `client.flexV1InteractionChannelInvite` · Source: `src/resources/flex-v1-interaction-channel-invite.ts` · 2 operations · Request types: namespace `FlexV1InteractionChannelInvite`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInteractionChannelInvite

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInteractionChannelInvite(request: FlexV1InteractionChannelInvite.CreateInteractionChannelInviteRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionChannelInvite, ApiError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1InteractionInteractionChannelInteractionChannelInvite`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannelInvite.CreateInteractionChannelInviteRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `routing` | `form` | `Routing` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InteractionInteractionChannelInteractionChannelInvite` | `flexV1InteractionInteractionChannelInteractionChannelInviteSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-channel-invite.ts` |

### listInteractionChannelInvite

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInteractionChannelInvite(request: FlexV1InteractionChannelInvite.ListInteractionChannelInviteRequest, options?: RequestOptions): ApiPromise<ListInteractionChannelInviteResponse, ApiError>`
- **Wire**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Invites`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInteractionChannelInviteResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannelInvite.ListInteractionChannelInviteRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInteractionChannelInviteResponse` | `listInteractionChannelInviteResponseSchema` | `src/models/list-interaction-channel-invite-response.ts` |

