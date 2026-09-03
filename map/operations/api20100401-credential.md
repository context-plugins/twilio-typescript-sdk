<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Credential — operations

Accessor: `client.api20100401Credential` · Source: `src/resources/api20100401-credential.ts` · 5 operations · Request types: namespace `Api20100401Credential`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipCredential

- **Signature**: `createSipCredential(request: Api20100401Credential.CreateSipCredentialRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Credential.CreateSipCredentialRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `credentialListSid` | `path` | `CredentialListSid` | `string` | yes |
| `username` | `form` | `Username` | `string` | yes |
| `password` | `form` | `Password` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `apiV2010AccountSipSipCredentialListSipCredentialSchema` | `src/models/api-v2010-account-sip-sip-credential-list-sip-credential.ts` |

### deleteSipCredential

- **Signature**: `deleteSipCredential(request: Api20100401Credential.DeleteSipCredentialRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Credential.DeleteSipCredentialRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `credentialListSid` | `path` | `CredentialListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipCredential

- **Signature**: `fetchSipCredential(request: Api20100401Credential.FetchSipCredentialRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Credential.FetchSipCredentialRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `credentialListSid` | `path` | `CredentialListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `apiV2010AccountSipSipCredentialListSipCredentialSchema` | `src/models/api-v2010-account-sip-sip-credential-list-sip-credential.ts` |

### listSipCredential

- **Signature**: `listSipCredential(request: Api20100401Credential.ListSipCredentialRequest, options?: RequestOptions): ApiPromise<ListSipCredentialResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipCredentialResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Credential.ListSipCredentialRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `credentialListSid` | `path` | `CredentialListSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipCredentialResponse` | `listSipCredentialResponseSchema` | `src/models/list-sip-credential-response.ts` |

### updateSipCredential

- **Signature**: `updateSipCredential(request: Api20100401Credential.UpdateSipCredentialRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipCredentialListSipCredential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Credential.UpdateSipCredentialRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `credentialListSid` | `path` | `CredentialListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `password` | `form` | `Password` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipCredentialListSipCredential` | `apiV2010AccountSipSipCredentialListSipCredentialSchema` | `src/models/api-v2010-account-sip-sip-credential-list-sip-credential.ts` |

