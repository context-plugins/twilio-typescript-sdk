<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1Session — operations

Accessor: `client.proxyV1Session` · Source: `src/resources/proxy-v1-session.ts` · 5 operations · Request types: namespace `ProxyV1Session`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSession

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSession(request: ProxyV1Session.CreateSessionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSession, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Sessions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Session.CreateSessionRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `dateExpiry` | `form` | `DateExpiry` | `Date` (date-time) | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `mode` | `form` | `Mode` | `SessionEnumMode` | no |
| `status` | `form` | `Status` | `SessionEnumStatus` | no |
| `participants` | `form` | `Participants` | `Record<string, unknown>[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionEnumMode` | `sessionEnumModeSchema` | `src/models/session-enum-mode.ts` |
| `SessionEnumStatus` | `sessionEnumStatusSchema` | `src/models/session-enum-status.ts` |
| `ProxyV1ServiceSession` | `proxyV1ServiceSessionSchema` | `src/models/proxy-v1-service-session.ts` |

### deleteSession

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSession(request: ProxyV1Session.DeleteSessionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/Sessions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Session.DeleteSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSession

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSession(request: ProxyV1Session.FetchSessionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSession, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Session.FetchSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServiceSession` | `proxyV1ServiceSessionSchema` | `src/models/proxy-v1-service-session.ts` |

### listSession

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listSession(request: ProxyV1Session.ListSessionRequest, options?: RequestOptions): ApiPromise<ListSessionResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/Sessions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSessionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Session.ListSessionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSessionResponse` | `listSessionResponseSchema` | `src/models/list-session-response.ts` |

### updateSession

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateSession(request: ProxyV1Session.UpdateSessionRequest, options?: RequestOptions): ApiPromise<ProxyV1ServiceSession, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Sessions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServiceSession`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1Session.UpdateSessionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `dateExpiry` | `form` | `DateExpiry` | `Date` (date-time) | no |
| `ttl` | `form` | `Ttl` | `number` | no |
| `status` | `form` | `Status` | `SessionEnumStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SessionEnumStatus` | `sessionEnumStatusSchema` | `src/models/session-enum-status.ts` |
| `ProxyV1ServiceSession` | `proxyV1ServiceSessionSchema` | `src/models/proxy-v1-service-session.ts` |

