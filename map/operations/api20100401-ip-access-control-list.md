<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IpAccessControlList — operations

Accessor: `client.api20100401IpAccessControlList` · Source: `src/resources/api20100401-ip-access-control-list.ts` · 5 operations · Request types: namespace `Api20100401IpAccessControlList`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSipIpAccessControlList

- **Signature**: `createSipIpAccessControlList(request: Api20100401IpAccessControlList.CreateSipIpAccessControlListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlList.CreateSipIpAccessControlListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `apiV2010AccountSipSipIpAccessControlListSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list.ts` |

### deleteSipIpAccessControlList

- **Signature**: `deleteSipIpAccessControlList(request: Api20100401IpAccessControlList.DeleteSipIpAccessControlListRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlList.DeleteSipIpAccessControlListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipIpAccessControlList

- **Signature**: `fetchSipIpAccessControlList(request: Api20100401IpAccessControlList.FetchSipIpAccessControlListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlList.FetchSipIpAccessControlListRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `apiV2010AccountSipSipIpAccessControlListSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list.ts` |

### listSipIpAccessControlList

- **Signature**: `listSipIpAccessControlList(request: Api20100401IpAccessControlList.ListSipIpAccessControlListRequest, options?: RequestOptions): ApiPromise<ListSipIpAccessControlListResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipIpAccessControlListResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlList.ListSipIpAccessControlListRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipIpAccessControlListResponse` | `listSipIpAccessControlListResponseSchema` | `src/models/list-sip-ip-access-control-list-response.ts` |

### updateSipIpAccessControlList

- **Signature**: `updateSipIpAccessControlList(request: Api20100401IpAccessControlList.UpdateSipIpAccessControlListRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipIpAccessControlList, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/IpAccessControlLists/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountSipSipIpAccessControlList`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IpAccessControlList.UpdateSipIpAccessControlListRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipIpAccessControlList` | `apiV2010AccountSipSipIpAccessControlListSchema` | `src/models/api-v2010-account-sip-sip-ip-access-control-list.ts` |

