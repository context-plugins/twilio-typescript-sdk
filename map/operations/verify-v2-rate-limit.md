<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2RateLimit — operations

Accessor: `client.verifyV2RateLimit` · Source: `src/resources/verify-v2-rate-limit.ts` · 5 operations · Request types: namespace `VerifyV2RateLimit`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createRateLimit

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRateLimit(request: VerifyV2RateLimit.CreateRateLimitRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimit, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/RateLimits`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2RateLimit.CreateRateLimitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | yes |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimit` | `verifyV2ServiceRateLimitSchema` | `src/models/verify-v2-service-rate-limit.ts` |

### deleteRateLimit

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRateLimit(request: VerifyV2RateLimit.DeleteRateLimitRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/RateLimits/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2RateLimit.DeleteRateLimitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRateLimit

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRateLimit(request: VerifyV2RateLimit.FetchRateLimitRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimit, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/RateLimits/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2RateLimit.FetchRateLimitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimit` | `verifyV2ServiceRateLimitSchema` | `src/models/verify-v2-service-rate-limit.ts` |

### listRateLimit

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRateLimit(request: VerifyV2RateLimit.ListRateLimitRequest, options?: RequestOptions): ApiPromise<ListRateLimitResponse, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/RateLimits`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRateLimitResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2RateLimit.ListRateLimitRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRateLimitResponse` | `listRateLimitResponseSchema` | `src/models/list-rate-limit-response.ts` |

### updateRateLimit

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRateLimit(request: VerifyV2RateLimit.UpdateRateLimitRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimit, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/RateLimits/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceRateLimit`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2RateLimit.UpdateRateLimitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimit` | `verifyV2ServiceRateLimitSchema` | `src/models/verify-v2-service-rate-limit.ts` |

