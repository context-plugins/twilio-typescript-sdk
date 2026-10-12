<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ChannelApi — operations

Accessor: `client.flexV1ChannelApi` · Source: `src/resources/flex-v1-channel-api.ts` · 4 operations · Request types: namespace `FlexV1ChannelApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createChannel(request: FlexV1ChannelApi.CreateChannelRequest, options?: RequestOptions): ApiPromise<FlexV1Channel, ApiError>`
- **Wire**: `POST /v1/Channels`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1Channel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ChannelApi.CreateChannelRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flexFlowSid` | `form` | `FlexFlowSid` | `string` | yes |
| `identity` | `form` | `Identity` | `string` | yes |
| `chatUserFriendlyName` | `form` | `ChatUserFriendlyName` | `string` | yes |
| `chatFriendlyName` | `form` | `ChatFriendlyName` | `string` | yes |
| `target` | `form` | `Target` | `string` | no |
| `chatUniqueName` | `form` | `ChatUniqueName` | `string` | no |
| `preEngagementData` | `form` | `PreEngagementData` | `string` | no |
| `taskSid` | `form` | `TaskSid` | `string` | no |
| `taskAttributes` | `form` | `TaskAttributes` | `string` | no |
| `longLived` | `form` | `LongLived` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Channel` | `flexV1ChannelSchema` | `src/models/flex-v1-channel.ts` |

### deleteChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteChannel(request: FlexV1ChannelApi.DeleteChannelRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ChannelApi.DeleteChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchChannel(request: FlexV1ChannelApi.FetchChannelRequest, options?: RequestOptions): ApiPromise<FlexV1Channel, ApiError>`
- **Wire**: `GET /v1/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1Channel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ChannelApi.FetchChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Channel` | `flexV1ChannelSchema` | `src/models/flex-v1-channel.ts` |

### listChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listChannel(request: FlexV1ChannelApi.ListChannelRequest, options?: RequestOptions): ApiPromise<ListChannelResponse, ApiError>`
- **Wire**: `GET /v1/Channels`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ChannelApi.ListChannelRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelResponse` | `listChannelResponseSchema` | `src/models/list-channel-response.ts` |

