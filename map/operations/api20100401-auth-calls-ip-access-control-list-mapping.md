<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AuthCallsIpAccessControlListMapping — operations

Accessor: `client.api20100401AuthCallsIpAccessControlListMapping` · Source: `src/resources/api20100401-auth-calls-ip-access-control-list-mapping.ts` · 4 operations · Request types: namespace `Api20100401AuthCallsIpAccessControlListMapping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSipAuthCallsIpAccessControlListMapping

- **Signature**: `createSipAuthCallsIpAccessControlListMapping(request: Api20100401AuthCallsIpAccessControlListMapping.CreateSipAuthCallsIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<SipAuthCallsIpAccessControlListMapping, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `SipAuthCallsIpAccessControlListMapping`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsIpAccessControlListMapping.CreateSipAuthCallsIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `ipAccessControlListSid` | `form` | `IpAccessControlListSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipAuthCallsIpAccessControlListMapping` | `sipAuthCallsIpAccessControlListMappingSchema` | `src/models/sip-auth-calls-ip-access-control-list-mapping.ts` |

### deleteSipAuthCallsIpAccessControlListMapping

- **Signature**: `deleteSipAuthCallsIpAccessControlListMapping(request: Api20100401AuthCallsIpAccessControlListMapping.DeleteSipAuthCallsIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsIpAccessControlListMapping.DeleteSipAuthCallsIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipAuthCallsIpAccessControlListMapping

- **Signature**: `fetchSipAuthCallsIpAccessControlListMapping(request: Api20100401AuthCallsIpAccessControlListMapping.FetchSipAuthCallsIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<SipAuthCallsIpAccessControlListMapping, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SipAuthCallsIpAccessControlListMapping`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsIpAccessControlListMapping.FetchSipAuthCallsIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SipAuthCallsIpAccessControlListMapping` | `sipAuthCallsIpAccessControlListMappingSchema` | `src/models/sip-auth-calls-ip-access-control-list-mapping.ts` |

### listSipAuthCallsIpAccessControlListMapping

- **Signature**: `listSipAuthCallsIpAccessControlListMapping(request: Api20100401AuthCallsIpAccessControlListMapping.ListSipAuthCallsIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<ListSipAuthCallsIpAccessControlListMappingResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/Auth/Calls/IpAccessControlListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipAuthCallsIpAccessControlListMappingResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AuthCallsIpAccessControlListMapping.ListSipAuthCallsIpAccessControlListMappingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipAuthCallsIpAccessControlListMappingResponse` | `listSipAuthCallsIpAccessControlListMappingResponseSchema` | `src/models/list-sip-auth-calls-ip-access-control-list-mapping-response.ts` |

