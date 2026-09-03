<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionChannel — operations

Accessor: `client.flexV1InteractionChannel` · Source: `src/resources/flex-v1-interaction-channel.ts` · 3 operations · Request types: namespace `FlexV1InteractionChannel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchInteractionChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInteractionChannel(request: FlexV1InteractionChannel.FetchInteractionChannelRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannel, ResponseError>`
- **Wire**: `GET /v1/Interactions/{InteractionSid}/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannel.FetchInteractionChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InteractionInteractionChannel` | `flexV1InteractionInteractionChannelSchema` | `src/models/flex-v1-interaction-interaction-channel.ts` |

### listInteractionChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInteractionChannel(request: FlexV1InteractionChannel.ListInteractionChannelRequest, options?: RequestOptions): ApiPromise<ListInteractionChannelResponse, ResponseError>`
- **Wire**: `GET /v1/Interactions/{InteractionSid}/Channels`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInteractionChannelResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannel.ListInteractionChannelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInteractionChannelResponse` | `listInteractionChannelResponseSchema` | `src/models/list-interaction-channel-response.ts` |

### updateInteractionChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInteractionChannel(request: FlexV1InteractionChannel.UpdateInteractionChannelRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannel, ResponseError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1InteractionInteractionChannel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionChannel.UpdateInteractionChannelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `InteractionChannelEnumUpdateChannelStatus` | yes |
| `routing` | `form` | `Routing` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InteractionChannelEnumUpdateChannelStatus` | `interactionChannelEnumUpdateChannelStatusSchema` | `src/models/interaction-channel-enum-update-channel-status.ts` |
| `FlexV1InteractionInteractionChannel` | `flexV1InteractionInteractionChannelSchema` | `src/models/flex-v1-interaction-interaction-channel.ts` |

