<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2AuthorizationDocumentApi — operations

Accessor: `client.numbersV2AuthorizationDocumentApi` · Source: `src/resources/numbers-v2-authorization-document-api.ts` · 4 operations · Request types: namespace `NumbersV2AuthorizationDocumentApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAuthorizationDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAuthorizationDocument(request: NumbersV2AuthorizationDocumentApi.CreateAuthorizationDocumentRequest, options?: RequestOptions): ApiPromise<NumbersV2AuthorizationDocument, ResponseError>`
- **Wire**: `POST /v2/HostedNumber/AuthorizationDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2AuthorizationDocumentApi.CreateAuthorizationDocumentRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `addressSid` | `form` | `AddressSid` | `string` | yes |
| `email` | `form` | `Email` | `string` | yes |
| `contactPhoneNumber` | `form` | `ContactPhoneNumber` | `string` | yes |
| `hostedNumberOrderSids` | `form` | `HostedNumberOrderSids` | `string[]` | yes |
| `contactTitle` | `form` | `ContactTitle` | `string` | no |
| `ccEmails` | `form` | `CcEmails` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2AuthorizationDocument` | `numbersV2AuthorizationDocumentSchema` | `src/models/numbers-v2-authorization-document.ts` |

### deleteAuthorizationDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteAuthorizationDocument(request: NumbersV2AuthorizationDocumentApi.DeleteAuthorizationDocumentRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/HostedNumber/AuthorizationDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2AuthorizationDocumentApi.DeleteAuthorizationDocumentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchAuthorizationDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAuthorizationDocument(request: NumbersV2AuthorizationDocumentApi.FetchAuthorizationDocumentRequest, options?: RequestOptions): ApiPromise<NumbersV2AuthorizationDocument, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/AuthorizationDocuments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2AuthorizationDocument`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2AuthorizationDocumentApi.FetchAuthorizationDocumentRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2AuthorizationDocument` | `numbersV2AuthorizationDocumentSchema` | `src/models/numbers-v2-authorization-document.ts` |

### listAuthorizationDocument

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listAuthorizationDocument(request: NumbersV2AuthorizationDocumentApi.ListAuthorizationDocumentRequest, options?: RequestOptions): ApiPromise<ListAuthorizationDocumentResponse, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/AuthorizationDocuments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAuthorizationDocumentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2AuthorizationDocumentApi.ListAuthorizationDocumentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `email` | `query` | `Email` | `string` | no |
| `status` | `query` | `Status` | `AuthorizationDocumentEnumStatus` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AuthorizationDocumentEnumStatus` | `authorizationDocumentEnumStatusSchema` | `src/models/authorization-document-enum-status.ts` |
| `ListAuthorizationDocumentResponse` | `listAuthorizationDocumentResponseSchema` | `src/models/list-authorization-document-response.ts` |

