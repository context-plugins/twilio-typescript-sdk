<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1CredentialApi — operations

Accessor: `client.conversationsV1CredentialApi` · Source: `src/resources/conversations-v1-credential-api.ts` · 5 operations · Request types: namespace `ConversationsV1CredentialApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCredential

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCredential(request: ConversationsV1CredentialApi.CreateCredentialRequest, options?: RequestOptions): ApiPromise<ConversationsV1Credential, ResponseError>`
- **Wire**: `POST /v1/Credentials`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Credential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1CredentialApi.CreateCredentialRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `type` | `form` | `Type` | `CredentialEnumPushType` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `certificate` | `form` | `Certificate` | `string` | no |
| `privateKey` | `form` | `PrivateKey` | `string` | no |
| `sandbox` | `form` | `Sandbox` | `boolean` | no |
| `apiKey` | `form` | `ApiKey` | `string` | no |
| `secret` | `form` | `Secret` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialEnumPushType` | `credentialEnumPushTypeSchema` | `src/models/credential-enum-push-type.ts` |
| `ConversationsV1Credential` | `conversationsV1CredentialSchema` | `src/models/conversations-v1-credential.ts` |

### deleteCredential

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCredential(request: ConversationsV1CredentialApi.DeleteCredentialRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Credentials/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1CredentialApi.DeleteCredentialRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCredential

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCredential(request: ConversationsV1CredentialApi.FetchCredentialRequest, options?: RequestOptions): ApiPromise<ConversationsV1Credential, ResponseError>`
- **Wire**: `GET /v1/Credentials/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1Credential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1CredentialApi.FetchCredentialRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1Credential` | `conversationsV1CredentialSchema` | `src/models/conversations-v1-credential.ts` |

### listCredential

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCredential(request: ConversationsV1CredentialApi.ListCredentialRequest, options?: RequestOptions): ApiPromise<ListCredentialResponse, ResponseError>`
- **Wire**: `GET /v1/Credentials`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCredentialResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1CredentialApi.ListCredentialRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCredentialResponse` | `listCredentialResponseSchema` | `src/models/list-credential-response.ts` |

### updateCredential

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCredential(request: ConversationsV1CredentialApi.UpdateCredentialRequest, options?: RequestOptions): ApiPromise<ConversationsV1Credential, ResponseError>`
- **Wire**: `POST /v1/Credentials/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1Credential`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1CredentialApi.UpdateCredentialRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `type` | `form` | `Type` | `CredentialEnumPushType` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `certificate` | `form` | `Certificate` | `string` | no |
| `privateKey` | `form` | `PrivateKey` | `string` | no |
| `sandbox` | `form` | `Sandbox` | `boolean` | no |
| `apiKey` | `form` | `ApiKey` | `string` | no |
| `secret` | `form` | `Secret` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CredentialEnumPushType` | `credentialEnumPushTypeSchema` | `src/models/credential-enum-push-type.ts` |
| `ConversationsV1Credential` | `conversationsV1CredentialSchema` | `src/models/conversations-v1-credential.ts` |

