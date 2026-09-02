<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthRegistrationsCredentialListMapping — operations

Accessor: `client.api20100401AuthRegistrationsCredentialListMapping` · Source: `src/resources/api20100401-auth-registrations-credential-list-mapping.ts` · 4 operations · Request types: namespace `Api20100401AuthRegistrationsCredentialListMapping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipAuthRegistrationsCredentialListMapping

- **Signature**: `createSipAuthRegistrationsCredentialListMapping(request: Api20100401AuthRegistrationsCredentialListMapping.CreateSipAuthRegistrationsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<SipAuthRegistrationsCredentialListMapping, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SipAuthRegistrationsCredentialListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthRegistrationsCredentialListMapping.CreateSipAuthRegistrationsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `credentialListSid` | `form` | `CredentialListSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipAuthRegistrationsCredentialListMapping` | `sipAuthRegistrationsCredentialListMappingSchema` | `src/models/sip-auth-registrations-credential-list-mapping.ts` |

### deleteSipAuthRegistrationsCredentialListMapping

- **Signature**: `deleteSipAuthRegistrationsCredentialListMapping(request: Api20100401AuthRegistrationsCredentialListMapping.DeleteSipAuthRegistrationsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthRegistrationsCredentialListMapping.DeleteSipAuthRegistrationsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipAuthRegistrationsCredentialListMapping

- **Signature**: `fetchSipAuthRegistrationsCredentialListMapping(request: Api20100401AuthRegistrationsCredentialListMapping.FetchSipAuthRegistrationsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<SipAuthRegistrationsCredentialListMapping, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SipAuthRegistrationsCredentialListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthRegistrationsCredentialListMapping.FetchSipAuthRegistrationsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipAuthRegistrationsCredentialListMapping` | `sipAuthRegistrationsCredentialListMappingSchema` | `src/models/sip-auth-registrations-credential-list-mapping.ts` |

### listSipAuthRegistrationsCredentialListMapping

- **Signature**: `listSipAuthRegistrationsCredentialListMapping(request: Api20100401AuthRegistrationsCredentialListMapping.ListSipAuthRegistrationsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ListSipAuthRegistrationsCredentialListMappingResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Registrations/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipAuthRegistrationsCredentialListMappingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthRegistrationsCredentialListMapping.ListSipAuthRegistrationsCredentialListMappingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipAuthRegistrationsCredentialListMappingResponse` | `listSipAuthRegistrationsCredentialListMappingResponseSchema` | `src/models/list-sip-auth-registrations-credential-list-mapping-response.ts` |

