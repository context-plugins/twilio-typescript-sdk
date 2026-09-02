<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ChannelSender — operations

Accessor: `client.messagingV1ChannelSender` · Source: `src/resources/messaging-v1-channel-sender.ts` · 4 operations · Request types: namespace `MessagingV1ChannelSender`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createChannelSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createChannelSender(request: MessagingV1ChannelSender.CreateChannelSenderRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceChannelSender, ResponseError>`
- **Wire**: `POST /v1/Services/{MessagingServiceSid}/ChannelSenders`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1ServiceChannelSender`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ChannelSender.CreateChannelSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `form` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceChannelSender` | `messagingV1ServiceChannelSenderSchema` | `src/models/messaging-v1-service-channel-sender.ts` |

### deleteChannelSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteChannelSender(request: MessagingV1ChannelSender.DeleteChannelSenderRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ChannelSender.DeleteChannelSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchChannelSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchChannelSender(request: MessagingV1ChannelSender.FetchChannelSenderRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceChannelSender, ResponseError>`
- **Wire**: `GET /v1/Services/{MessagingServiceSid}/ChannelSenders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServiceChannelSender`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ChannelSender.FetchChannelSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceChannelSender` | `messagingV1ServiceChannelSenderSchema` | `src/models/messaging-v1-service-channel-sender.ts` |

### listChannelSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listChannelSender(request: MessagingV1ChannelSender.ListChannelSenderRequest, options?: RequestOptions): ApiPromise<ListChannelSenderResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{MessagingServiceSid}/ChannelSenders`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChannelSenderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ChannelSender.ListChannelSenderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListChannelSenderResponse` | `listChannelSenderResponseSchema` | `src/models/list-channel-sender-response.ts` |

