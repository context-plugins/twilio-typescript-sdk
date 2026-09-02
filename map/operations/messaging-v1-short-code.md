<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ShortCode — operations

Accessor: `client.messagingV1ShortCode` · Source: `src/resources/messaging-v1-short-code.ts` · 4 operations · Request types: namespace `MessagingV1ShortCode`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createShortCode

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createShortCode(request: MessagingV1ShortCode.CreateShortCodeRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceShortCode, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/ShortCodes`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1ServiceShortCode`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ShortCode.CreateShortCodeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `shortCodeSid` | `form` | `ShortCodeSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceShortCode` | `messagingV1ServiceShortCodeSchema` | `src/models/messaging-v1-service-short-code.ts` |

### deleteShortCode

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteShortCode(request: MessagingV1ShortCode.DeleteShortCodeRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/ShortCodes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ShortCode.DeleteShortCodeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchShortCode2

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchShortCode2(request: MessagingV1ShortCode.FetchShortCode2Request, options?: RequestOptions): ApiPromise<MessagingV1ServiceShortCode, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/ShortCodes/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServiceShortCode`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ShortCode.FetchShortCode2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceShortCode` | `messagingV1ServiceShortCodeSchema` | `src/models/messaging-v1-service-short-code.ts` |

### listShortCode2

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listShortCode2(request: MessagingV1ShortCode.ListShortCode2Request, options?: RequestOptions): ApiPromise<ListShortCodeResponse1, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/ShortCodes`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListShortCodeResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ShortCode.ListShortCode2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListShortCodeResponse1` | `listShortCodeResponse1Schema` | `src/models/list-short-code-response1.ts` |

