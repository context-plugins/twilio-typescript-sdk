<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV2ChannelsSender — operations

Accessor: `client.messagingV2ChannelsSender` · Source: `src/resources/messaging-v2-channels-sender.ts` · 5 operations · Request types: namespace `MessagingV2ChannelsSender`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createChannelsSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createChannelsSender(request: MessagingV2ChannelsSender.CreateChannelsSenderRequest, options?: RequestOptions): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError>`
- **Wire**: `POST /v2/Channels/Senders`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2ChannelsSender.CreateChannelsSenderRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `MessagingV2ChannelsSenderRequestsCreate` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV2ChannelsSenderRequestsCreate` | `messagingV2ChannelsSenderRequestsCreateSchema` | `src/models/messaging-v2-channels-sender-requests-create.ts` |
| `MessagingV2ChannelsSenderResponse` | `messagingV2ChannelsSenderResponseSchema` | `src/models/messaging-v2-channels-sender-response.ts` |

### deleteChannelsSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteChannelsSender(request: MessagingV2ChannelsSender.DeleteChannelsSenderRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/Channels/Senders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2ChannelsSender.DeleteChannelsSenderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchChannelsSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchChannelsSender(request: MessagingV2ChannelsSender.FetchChannelsSenderRequest, options?: RequestOptions): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError>`
- **Wire**: `GET /v2/Channels/Senders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2ChannelsSender.FetchChannelsSenderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV2ChannelsSenderResponse` | `messagingV2ChannelsSenderResponseSchema` | `src/models/messaging-v2-channels-sender-response.ts` |

### listChannelsSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listChannelsSender(request: MessagingV2ChannelsSender.ListChannelsSenderRequest, options?: RequestOptions): ApiPromise<ListChannelsSenderResponse, ApiError>`
- **Wire**: `GET /v2/Channels/Senders`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelsSenderResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2ChannelsSender.ListChannelsSenderRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `channel` | `query` | `Channel` | `string` | yes | — |
| `pageSize` | `query` | `PageSize` | `number` | no | `50` |
| `page` | `query` | `Page` | `number` | no | — |
| `pageToken` | `query` | `PageToken` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelsSenderResponse` | `listChannelsSenderResponseSchema` | `src/models/list-channels-sender-response.ts` |

### updateChannelsSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateChannelsSender(request: MessagingV2ChannelsSender.UpdateChannelsSenderRequest, options?: RequestOptions): ApiPromise<MessagingV2ChannelsSenderResponse, ApiError>`
- **Wire**: `POST /v2/Channels/Senders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV2ChannelsSenderResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2ChannelsSender.UpdateChannelsSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `body` | `body` | — | `MessagingV2ChannelsSenderRequestsUpdate` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV2ChannelsSenderRequestsUpdate` | `messagingV2ChannelsSenderRequestsUpdateSchema` | `src/models/messaging-v2-channels-sender-requests-update.ts` |
| `MessagingV2ChannelsSenderResponse` | `messagingV2ChannelsSenderResponseSchema` | `src/models/messaging-v2-channels-sender-response.ts` |

