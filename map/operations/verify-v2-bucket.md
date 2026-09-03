<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Bucket — operations

Accessor: `client.verifyV2Bucket` · Source: `src/resources/verify-v2-bucket.ts` · 5 operations · Request types: namespace `VerifyV2Bucket`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBucket

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBucket(request: VerifyV2Bucket.CreateBucketRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Bucket.CreateBucketRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `rateLimitSid` | `path` | `RateLimitSid` | `string` | yes |
| `max` | `form` | `Max` | `number` | yes |
| `interval` | `form` | `Interval` | `number` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `verifyV2ServiceRateLimitBucketSchema` | `src/models/verify-v2-service-rate-limit-bucket.ts` |

### deleteBucket

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteBucket(request: VerifyV2Bucket.DeleteBucketRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Bucket.DeleteBucketRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `rateLimitSid` | `path` | `RateLimitSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchBucket

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBucket(request: VerifyV2Bucket.FetchBucketRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Bucket.FetchBucketRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `rateLimitSid` | `path` | `RateLimitSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `verifyV2ServiceRateLimitBucketSchema` | `src/models/verify-v2-service-rate-limit-bucket.ts` |

### listBucket

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBucket(request: VerifyV2Bucket.ListBucketRequest, options?: RequestOptions): ApiPromise<ListBucketResponse, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBucketResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Bucket.ListBucketRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `rateLimitSid` | `path` | `RateLimitSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBucketResponse` | `listBucketResponseSchema` | `src/models/list-bucket-response.ts` |

### updateBucket

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBucket(request: VerifyV2Bucket.UpdateBucketRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceRateLimitBucket, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/RateLimits/{RateLimitSid}/Buckets/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceRateLimitBucket`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Bucket.UpdateBucketRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `rateLimitSid` | `path` | `RateLimitSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `max` | `form` | `Max` | `number` | no |
| `interval` | `form` | `Interval` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceRateLimitBucket` | `verifyV2ServiceRateLimitBucketSchema` | `src/models/verify-v2-service-rate-limit-bucket.ts` |

