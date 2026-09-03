<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401CredentialListMapping — operations

Accessor: `client.api20100401CredentialListMapping` · Source: `src/resources/api20100401-credential-list-mapping.ts` · 4 operations · Request types: namespace `Api20100401CredentialListMapping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipCredentialListMapping

- **Signature**: `createSipCredentialListMapping(request: Api20100401CredentialListMapping.CreateSipCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipDomainSipCredentialListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialListMapping.CreateSipCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `credentialListSid` | `form` | `CredentialListSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `apiV2010AccountSipSipDomainSipCredentialListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-credential-list-mapping.ts` |

### deleteSipCredentialListMapping

- **Signature**: `deleteSipCredentialListMapping(request: Api20100401CredentialListMapping.DeleteSipCredentialListMappingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialListMapping.DeleteSipCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipCredentialListMapping

- **Signature**: `fetchSipCredentialListMapping(request: Api20100401CredentialListMapping.FetchSipCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipCredentialListMapping, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipDomainSipCredentialListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialListMapping.FetchSipCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipCredentialListMapping` | `apiV2010AccountSipSipDomainSipCredentialListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-credential-list-mapping.ts` |

### listSipCredentialListMapping

- **Signature**: `listSipCredentialListMapping(request: Api20100401CredentialListMapping.ListSipCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ListSipCredentialListMappingResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipCredentialListMappingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401CredentialListMapping.ListSipCredentialListMappingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipCredentialListMappingResponse` | `listSipCredentialListMappingResponseSchema` | `src/models/list-sip-credential-list-mapping-response.ts` |

