<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionTransfer — operations

Accessor: `client.flexV1InteractionTransfer` · Source: `src/resources/flex-v1-interaction-transfer.ts` · 3 operations · Request types: namespace `FlexV1InteractionTransfer`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInteractionTransfer

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInteractionTransfer(request: FlexV1InteractionTransfer.CreateInteractionTransferRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionTransfer.CreateInteractionTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `flexV1InteractionInteractionChannelInteractionTransferSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-transfer.ts` |

### fetchInteractionTransfer

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInteractionTransfer(request: FlexV1InteractionTransfer.FetchInteractionTransferRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError>`
- **Wire**: `GET /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionTransfer.FetchInteractionTransferRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `flexV1InteractionInteractionChannelInteractionTransferSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-transfer.ts` |

### updateInteractionTransfer

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInteractionTransfer(request: FlexV1InteractionTransfer.UpdateInteractionTransferRequest, options?: RequestOptions): ApiPromise<FlexV1InteractionInteractionChannelInteractionTransfer, ApiError>`
- **Wire**: `POST /v1/Interactions/{InteractionSid}/Channels/{ChannelSid}/Transfers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1InteractionInteractionChannelInteractionTransfer`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionTransfer.UpdateInteractionTransferRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `interactionSid` | `path` | `InteractionSid` | `string` | yes |
| `channelSid` | `path` | `ChannelSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InteractionInteractionChannelInteractionTransfer` | `flexV1InteractionInteractionChannelInteractionTransferSchema` | `src/models/flex-v1-interaction-interaction-channel-interaction-transfer.ts` |

