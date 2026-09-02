<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ShortCode — operations

Accessor: `client.api20100401ShortCode` · Source: `src/resources/api20100401-short-code.ts` · 3 operations · Request types: namespace `Api20100401ShortCode`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchShortCode

- **Signature**: `fetchShortCode(request: Api20100401ShortCode.FetchShortCodeRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountShortCode, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ShortCode.FetchShortCodeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountShortCode` | `apiV2010AccountShortCodeSchema` | `src/models/api-v2010-account-short-code.ts` |

### listShortCode

- **Signature**: `listShortCode(request: Api20100401ShortCode.ListShortCodeRequest, options?: RequestOptions): ApiPromise<ListShortCodeResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListShortCodeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ShortCode.ListShortCodeRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `shortCode` | `query` | `ShortCode` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListShortCodeResponse` | `listShortCodeResponseSchema` | `src/models/list-short-code-response.ts` |

### updateShortCode

- **Signature**: `updateShortCode(request: Api20100401ShortCode.UpdateShortCodeRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountShortCode, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SMS/ShortCodes/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountShortCode`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ShortCode.UpdateShortCodeRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `apiVersion` | `form` | `ApiVersion` | `string` | no |
| `smsUrl` | `form` | `SmsUrl` | `string` | no |
| `smsMethod` | `form` | `SmsMethod` | `SmsMethod14` | no |
| `smsFallbackUrl` | `form` | `SmsFallbackUrl` | `string` | no |
| `smsFallbackMethod` | `form` | `SmsFallbackMethod` | `SmsFallbackMethod14` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsMethod14` | `smsMethod14Schema` | `src/models/sms-method14.ts` |
| `SmsFallbackMethod14` | `smsFallbackMethod14Schema` | `src/models/sms-fallback-method14.ts` |
| `ApiV2010AccountShortCode` | `apiV2010AccountShortCodeSchema` | `src/models/api-v2010-account-short-code.ts` |

