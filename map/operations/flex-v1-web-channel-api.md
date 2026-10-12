<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1WebChannelApi — operations

Accessor: `client.flexV1WebChannelApi` · Source: `src/resources/flex-v1-web-channel-api.ts` · 5 operations · Request types: namespace `FlexV1WebChannelApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWebChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWebChannel(request: FlexV1WebChannelApi.CreateWebChannelRequest, options?: RequestOptions): ApiPromise<FlexV1WebChannel, ApiError>`
- **Wire**: `POST /v1/WebChannels`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1WebChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1WebChannelApi.CreateWebChannelRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flexFlowSid` | `form` | `FlexFlowSid` | `string` | yes |
| `identity` | `form` | `Identity` | `string` | yes |
| `customerFriendlyName` | `form` | `CustomerFriendlyName` | `string` | yes |
| `chatFriendlyName` | `form` | `ChatFriendlyName` | `string` | yes |
| `chatUniqueName` | `form` | `ChatUniqueName` | `string` | no |
| `preEngagementData` | `form` | `PreEngagementData` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1WebChannel` | `flexV1WebChannelSchema` | `src/models/flex-v1-web-channel.ts` |

### deleteWebChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWebChannel(request: FlexV1WebChannelApi.DeleteWebChannelRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/WebChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1WebChannelApi.DeleteWebChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchWebChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWebChannel(request: FlexV1WebChannelApi.FetchWebChannelRequest, options?: RequestOptions): ApiPromise<FlexV1WebChannel, ApiError>`
- **Wire**: `GET /v1/WebChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1WebChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1WebChannelApi.FetchWebChannelRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1WebChannel` | `flexV1WebChannelSchema` | `src/models/flex-v1-web-channel.ts` |

### listWebChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWebChannel(request: FlexV1WebChannelApi.ListWebChannelRequest, options?: RequestOptions): ApiPromise<ListWebChannelResponse, ApiError>`
- **Wire**: `GET /v1/WebChannels`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWebChannelResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1WebChannelApi.ListWebChannelRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWebChannelResponse` | `listWebChannelResponseSchema` | `src/models/list-web-channel-response.ts` |

### updateWebChannel

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWebChannel(request: FlexV1WebChannelApi.UpdateWebChannelRequest, options?: RequestOptions): ApiPromise<FlexV1WebChannel, ApiError>`
- **Wire**: `POST /v1/WebChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1WebChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1WebChannelApi.UpdateWebChannelRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `chatStatus` | `form` | `ChatStatus` | `WebChannelEnumChatStatus` | no |
| `postEngagementData` | `form` | `PostEngagementData` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WebChannelEnumChatStatus` | `webChannelEnumChatStatusSchema` | `src/models/web-channel-enum-chat-status.ts` |
| `FlexV1WebChannel` | `flexV1WebChannelSchema` | `src/models/flex-v1-web-channel.ts` |

