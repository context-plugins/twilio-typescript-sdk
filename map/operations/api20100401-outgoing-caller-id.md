<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401OutgoingCallerId — operations

Accessor: `client.api20100401OutgoingCallerId` · Source: `src/resources/api20100401-outgoing-caller-id.ts` · 4 operations · Request types: namespace `Api20100401OutgoingCallerId`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteOutgoingCallerId

- **Signature**: `deleteOutgoingCallerId(request: Api20100401OutgoingCallerId.DeleteOutgoingCallerIdRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401OutgoingCallerId.DeleteOutgoingCallerIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchOutgoingCallerId

- **Signature**: `fetchOutgoingCallerId(request: Api20100401OutgoingCallerId.FetchOutgoingCallerIdRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountOutgoingCallerId, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401OutgoingCallerId.FetchOutgoingCallerIdRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountOutgoingCallerId` | `apiV2010AccountOutgoingCallerIdSchema` | `src/models/api-v2010-account-outgoing-caller-id.ts` |

### listOutgoingCallerId

- **Signature**: `listOutgoingCallerId(request: Api20100401OutgoingCallerId.ListOutgoingCallerIdRequest, options?: RequestOptions): ApiPromise<ListOutgoingCallerIdResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOutgoingCallerIdResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401OutgoingCallerId.ListOutgoingCallerIdRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `phoneNumber` | `query` | `PhoneNumber` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOutgoingCallerIdResponse` | `listOutgoingCallerIdResponseSchema` | `src/models/list-outgoing-caller-id-response.ts` |

### updateOutgoingCallerId

- **Signature**: `updateOutgoingCallerId(request: Api20100401OutgoingCallerId.UpdateOutgoingCallerIdRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountOutgoingCallerId, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountOutgoingCallerId`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401OutgoingCallerId.UpdateOutgoingCallerIdRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountOutgoingCallerId` | `apiV2010AccountOutgoingCallerIdSchema` | `src/models/api-v2010-account-outgoing-caller-id.ts` |

