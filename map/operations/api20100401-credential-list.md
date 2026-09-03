<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CredentialList — operations

Accessor: `client.api20100401CredentialList` · Source: `src/resources/api20100401-credential-list.ts` · 5 operations · Request types: namespace `Api20100401CredentialList`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipCredentialList

- **Signature**: `createSipCredentialList(request: Api20100401CredentialList.CreateSipCredentialListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialList.CreateSipCredentialListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `apiV2010AccountSipSipCredentialListSchema` | `src/models/api-v2010-account-sip-sip-credential-list.ts` |

### deleteSipCredentialList

- **Signature**: `deleteSipCredentialList(request: Api20100401CredentialList.DeleteSipCredentialListRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialList.DeleteSipCredentialListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipCredentialList

- **Signature**: `fetchSipCredentialList(request: Api20100401CredentialList.FetchSipCredentialListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialList.FetchSipCredentialListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `apiV2010AccountSipSipCredentialListSchema` | `src/models/api-v2010-account-sip-sip-credential-list.ts` |

### listSipCredentialList

- **Signature**: `listSipCredentialList(request: Api20100401CredentialList.ListSipCredentialListRequest, options?: RequestOptions): ApiPromise<ListSipCredentialListResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipCredentialListResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialList.ListSipCredentialListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipCredentialListResponse` | `listSipCredentialListResponseSchema` | `src/models/list-sip-credential-list-response.ts` |

### updateSipCredentialList

- **Signature**: `updateSipCredentialList(request: Api20100401CredentialList.UpdateSipCredentialListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialList, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipCredentialList`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialList.UpdateSipCredentialListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialList` | `apiV2010AccountSipSipCredentialListSchema` | `src/models/api-v2010-account-sip-sip-credential-list.ts` |

