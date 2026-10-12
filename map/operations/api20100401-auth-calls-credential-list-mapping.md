<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthCallsCredentialListMapping — operations

Accessor: `client.api20100401AuthCallsCredentialListMapping` · Source: `src/resources/api20100401-auth-calls-credential-list-mapping.ts` · 4 operations · Request types: namespace `Api20100401AuthCallsCredentialListMapping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSipAuthCallsCredentialListMapping

- **Signature**: `createSipAuthCallsCredentialListMapping(request: Api20100401AuthCallsCredentialListMapping.CreateSipAuthCallsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsCredentialListMapping.CreateSipAuthCallsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `credentialListSid` | `form` | `CredentialListSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-auth-sip-auth-calls-sip-auth-calls-credential-list-mapping.ts` |

### deleteSipAuthCallsCredentialListMapping

- **Signature**: `deleteSipAuthCallsCredentialListMapping(request: Api20100401AuthCallsCredentialListMapping.DeleteSipAuthCallsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsCredentialListMapping.DeleteSipAuthCallsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipAuthCallsCredentialListMapping

- **Signature**: `fetchSipAuthCallsCredentialListMapping(request: Api20100401AuthCallsCredentialListMapping.FetchSipAuthCallsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsCredentialListMapping.FetchSipAuthCallsCredentialListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMapping` | `apiV2010AccountSipSipDomainSipAuthSipAuthCallsSipAuthCallsCredentialListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-auth-sip-auth-calls-sip-auth-calls-credential-list-mapping.ts` |

### listSipAuthCallsCredentialListMapping

- **Signature**: `listSipAuthCallsCredentialListMapping(request: Api20100401AuthCallsCredentialListMapping.ListSipAuthCallsCredentialListMappingRequest, options?: RequestOptions): ApiPromise<ListSipAuthCallsCredentialListMappingResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/CredentialListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipAuthCallsCredentialListMappingResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsCredentialListMapping.ListSipAuthCallsCredentialListMappingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipAuthCallsCredentialListMappingResponse` | `listSipAuthCallsCredentialListMappingResponseSchema` | `src/models/list-sip-auth-calls-credential-list-mapping-response.ts` |

