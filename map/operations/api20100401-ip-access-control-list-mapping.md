<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IpAccessControlListMapping — operations

Accessor: `client.api20100401IpAccessControlListMapping` · Source: `src/resources/api20100401-ip-access-control-list-mapping.ts` · 4 operations · Request types: namespace `Api20100401IpAccessControlListMapping`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipIpAccessControlListMapping

- **Signature**: `createSipIpAccessControlListMapping(request: Api20100401IpAccessControlListMapping.CreateSipIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlListMapping.CreateSipIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `ipAccessControlListSid` | `form` | `IpAccessControlListSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-ip-access-control-list-mapping.ts` |

### deleteSipIpAccessControlListMapping

- **Signature**: `deleteSipIpAccessControlListMapping(request: Api20100401IpAccessControlListMapping.DeleteSipIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlListMapping.DeleteSipIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipIpAccessControlListMapping

- **Signature**: `fetchSipIpAccessControlListMapping(request: Api20100401IpAccessControlListMapping.FetchSipIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomainSipIpAccessControlListMapping, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlListMapping.FetchSipIpAccessControlListMappingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomainSipIpAccessControlListMapping` | `apiV2010AccountSipSipDomainSipIpAccessControlListMappingSchema` | `src/models/api-v2010-account-sip-sip-domain-sip-ip-access-control-list-mapping.ts` |

### listSipIpAccessControlListMapping

- **Signature**: `listSipIpAccessControlListMapping(request: Api20100401IpAccessControlListMapping.ListSipIpAccessControlListMappingRequest, options?: RequestOptions): ApiPromise<ListSipIpAccessControlListMappingResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{DomainSid}/IpAccessControlListMappings.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipIpAccessControlListMappingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlListMapping.ListSipIpAccessControlListMappingRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipIpAccessControlListMappingResponse` | `listSipIpAccessControlListMappingResponseSchema` | `src/models/list-sip-ip-access-control-list-mapping-response.ts` |

