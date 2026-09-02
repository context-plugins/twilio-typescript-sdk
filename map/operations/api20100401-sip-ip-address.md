<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401SipIpAddress — operations

Accessor: `client.api20100401SipIpAddress` · Source: `src/resources/api20100401-sip-ip-address.ts` · 5 operations · Request types: namespace `Api20100401SipIpAddress`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipIpAddress

- **Signature**: `createSipIpAddress(request: Api20100401SipIpAddress.CreateSipIpAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SipIpAddress.CreateSipIpAddressRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `ipAccessControlListSid` | `path` | `IpAccessControlListSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `ipAddress` | `form` | `IpAddress` | `string` | yes |
| `cidrPrefixLength` | `form` | `CidrPrefixLength` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list-sip-ip-address.ts` |

### deleteSipIpAddress

- **Signature**: `deleteSipIpAddress(request: Api20100401SipIpAddress.DeleteSipIpAddressRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SipIpAddress.DeleteSipIpAddressRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `ipAccessControlListSid` | `path` | `IpAccessControlListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipIpAddress

- **Signature**: `fetchSipIpAddress(request: Api20100401SipIpAddress.FetchSipIpAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SipIpAddress.FetchSipIpAddressRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `ipAccessControlListSid` | `path` | `IpAccessControlListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list-sip-ip-address.ts` |

### listSipIpAddress

- **Signature**: `listSipIpAddress(request: Api20100401SipIpAddress.ListSipIpAddressRequest, options?: RequestOptions): ApiPromise<ListSipIpAddressResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipIpAddressResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SipIpAddress.ListSipIpAddressRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `ipAccessControlListSid` | `path` | `IpAccessControlListSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipIpAddressResponse` | `listSipIpAddressResponseSchema` | `src/models/list-sip-ip-address-response.ts` |

### updateSipIpAddress

- **Signature**: `updateSipIpAddress(request: Api20100401SipIpAddress.UpdateSipIpAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlListSipIpAddress, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{IpAccessControlListSid}/IpAddresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipIpAccessControlListSipIpAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SipIpAddress.UpdateSipIpAddressRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `ipAccessControlListSid` | `path` | `IpAccessControlListSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ipAddress` | `form` | `IpAddress` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `cidrPrefixLength` | `form` | `CidrPrefixLength` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlListSipIpAddress` | `apiV2010AccountSipSipIpAccessControlListSipIpAddressSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list-sip-ip-address.ts` |

