<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Account — operations

Accessor: `client.api20100401Account` · Source: `src/resources/api20100401-account.ts` · 4 operations · Request types: namespace `Api20100401Account`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAccount

- **Signature**: `createAccount(request: Api20100401Account.CreateAccountRequest, options?: RequestOptions): ApiPromise<ApiV2010Account, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010Account`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Account.CreateAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010Account` | `apiV2010AccountSchema` | `src/models/api-v2010-account.ts` |

### fetchAccount

- **Signature**: `fetchAccount(request: Api20100401Account.FetchAccountRequest, options?: RequestOptions): ApiPromise<ApiV2010Account, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010Account`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Account.FetchAccountRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010Account` | `apiV2010AccountSchema` | `src/models/api-v2010-account.ts` |

### listAccount

- **Signature**: `listAccount(request: Api20100401Account.ListAccountRequest, options?: RequestOptions): ApiPromise<ListAccountResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAccountResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Account.ListAccountRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `status` | `query` | `Status` | `AccountEnumStatus` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountEnumStatus` | `accountEnumStatusSchema` | `src/models/account-enum-status.ts` |
| `ListAccountResponse` | `listAccountResponseSchema` | `src/models/list-account-response.ts` |

### updateAccount

- **Signature**: `updateAccount(request: Api20100401Account.UpdateAccountRequest, options?: RequestOptions): ApiPromise<ApiV2010Account, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010Account`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Account.UpdateAccountRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `status` | `form` | `Status` | `AccountEnumStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountEnumStatus` | `accountEnumStatusSchema` | `src/models/account-enum-status.ts` |
| `ApiV2010Account` | `apiV2010AccountSchema` | `src/models/api-v2010-account.ts` |

