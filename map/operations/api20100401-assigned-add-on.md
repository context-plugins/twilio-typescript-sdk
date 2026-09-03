<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AssignedAddOn — operations

Accessor: `client.api20100401AssignedAddOn` · Source: `src/resources/api20100401-assigned-add-on.ts` · 4 operations · Request types: namespace `Api20100401AssignedAddOn`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createIncomingPhoneNumberAssignedAddOn

- **Signature**: `createIncomingPhoneNumberAssignedAddOn(request: Api20100401AssignedAddOn.CreateIncomingPhoneNumberAssignedAddOnRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOn.CreateIncomingPhoneNumberAssignedAddOnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `installedAddOnSid` | `form` | `InstalledAddOnSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema` | `src/models/api-v2010-account-incoming-phone-number-incoming-phone-number-assigned-add-on.ts` |

### deleteIncomingPhoneNumberAssignedAddOn

- **Signature**: `deleteIncomingPhoneNumberAssignedAddOn(request: Api20100401AssignedAddOn.DeleteIncomingPhoneNumberAssignedAddOnRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOn.DeleteIncomingPhoneNumberAssignedAddOnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchIncomingPhoneNumberAssignedAddOn

- **Signature**: `fetchIncomingPhoneNumberAssignedAddOn(request: Api20100401AssignedAddOn.FetchIncomingPhoneNumberAssignedAddOnRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOn.FetchIncomingPhoneNumberAssignedAddOnRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn` | `apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema` | `src/models/api-v2010-account-incoming-phone-number-incoming-phone-number-assigned-add-on.ts` |

### listIncomingPhoneNumberAssignedAddOn

- **Signature**: `listIncomingPhoneNumberAssignedAddOn(request: Api20100401AssignedAddOn.ListIncomingPhoneNumberAssignedAddOnRequest, options?: RequestOptions): ApiPromise<ListIncomingPhoneNumberAssignedAddOnResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIncomingPhoneNumberAssignedAddOnResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AssignedAddOn.ListIncomingPhoneNumberAssignedAddOnRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `resourceSid` | `path` | `ResourceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIncomingPhoneNumberAssignedAddOnResponse` | `listIncomingPhoneNumberAssignedAddOnResponseSchema` | `src/models/list-incoming-phone-number-assigned-add-on-response.ts` |

