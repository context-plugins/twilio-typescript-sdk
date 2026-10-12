<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401SigningKey — operations

Accessor: `client.api20100401SigningKey` · Source: `src/resources/api20100401-signing-key.ts` · 4 operations · Request types: namespace `Api20100401SigningKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteSigningKey

- **Signature**: `deleteSigningKey(request: Api20100401SigningKey.DeleteSigningKeyRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SigningKey.DeleteSigningKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSigningKey

- **Signature**: `fetchSigningKey(request: Api20100401SigningKey.FetchSigningKeyRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSigningKey, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSigningKey`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SigningKey.FetchSigningKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSigningKey` | `apiV2010AccountSigningKeySchema` | `src/models/api-v2010-account-signing-key.ts` |

### listSigningKey

- **Signature**: `listSigningKey(request: Api20100401SigningKey.ListSigningKeyRequest, options?: RequestOptions): ApiPromise<ListSigningKeyResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SigningKeys.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSigningKeyResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SigningKey.ListSigningKeyRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSigningKeyResponse` | `listSigningKeyResponseSchema` | `src/models/list-signing-key-response.ts` |

### updateSigningKey

- **Signature**: `updateSigningKey(request: Api20100401SigningKey.UpdateSigningKeyRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSigningKey, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SigningKeys/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountSigningKey`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SigningKey.UpdateSigningKeyRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSigningKey` | `apiV2010AccountSigningKeySchema` | `src/models/api-v2010-account-signing-key.ts` |

