<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1AlphaSender — operations

Accessor: `client.messagingV1AlphaSender` · Source: `src/resources/messaging-v1-alpha-sender.ts` · 4 operations · Request types: namespace `MessagingV1AlphaSender`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createAlphaSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAlphaSender(request: MessagingV1AlphaSender.CreateAlphaSenderRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceAlphaSender, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/AlphaSenders`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1ServiceAlphaSender`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1AlphaSender.CreateAlphaSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `alphaSender` | `form` | `AlphaSender` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceAlphaSender` | `messagingV1ServiceAlphaSenderSchema` | `src/models/messaging-v1-service-alpha-sender.ts` |

### deleteAlphaSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAlphaSender(request: MessagingV1AlphaSender.DeleteAlphaSenderRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/AlphaSenders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1AlphaSender.DeleteAlphaSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchAlphaSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAlphaSender(request: MessagingV1AlphaSender.FetchAlphaSenderRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceAlphaSender, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/AlphaSenders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServiceAlphaSender`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1AlphaSender.FetchAlphaSenderRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceAlphaSender` | `messagingV1ServiceAlphaSenderSchema` | `src/models/messaging-v1-service-alpha-sender.ts` |

### listAlphaSender

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAlphaSender(request: MessagingV1AlphaSender.ListAlphaSenderRequest, options?: RequestOptions): ApiPromise<ListAlphaSenderResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/AlphaSenders`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAlphaSenderResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1AlphaSender.ListAlphaSenderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAlphaSenderResponse` | `listAlphaSenderResponseSchema` | `src/models/list-alpha-sender-response.ts` |

