<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfiles — operations

Accessor: `client.trusthubV1CustomerProfiles` · Source: `src/resources/trusthub-v1-customer-profiles.ts` · 5 operations · Request types: namespace `TrusthubV1CustomerProfiles`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCustomerProfile

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerProfile(request: TrusthubV1CustomerProfiles.CreateCustomerProfileRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfile, ResponseError>`
- **Wire**: `POST /v1/CustomerProfiles`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfiles.CreateCustomerProfileRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `email` | `form` | `Email` | `string` | yes |
| `policySid` | `form` | `PolicySid` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfile` | `trusthubV1CustomerProfileSchema` | `src/models/trusthub-v1-customer-profile.ts` |

### deleteCustomerProfile

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCustomerProfile(request: TrusthubV1CustomerProfiles.DeleteCustomerProfileRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/CustomerProfiles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfiles.DeleteCustomerProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCustomerProfile

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCustomerProfile(request: TrusthubV1CustomerProfiles.FetchCustomerProfileRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfile, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfiles.FetchCustomerProfileRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfile` | `trusthubV1CustomerProfileSchema` | `src/models/trusthub-v1-customer-profile.ts` |

### listCustomerProfile

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomerProfile(request: TrusthubV1CustomerProfiles.ListCustomerProfileRequest, options?: RequestOptions): ApiPromise<ListCustomerProfileResponse, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerProfileResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfiles.ListCustomerProfileRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `CustomerProfileEnumStatus` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `policySid` | `query` | `PolicySid` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerProfileEnumStatus` | `customerProfileEnumStatusSchema` | `src/models/customer-profile-enum-status.ts` |
| `ListCustomerProfileResponse` | `listCustomerProfileResponseSchema` | `src/models/list-customer-profile-response.ts` |

### updateCustomerProfile

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCustomerProfile(request: TrusthubV1CustomerProfiles.UpdateCustomerProfileRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfile, ResponseError>`
- **Wire**: `POST /v1/CustomerProfiles/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1CustomerProfile`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfiles.UpdateCustomerProfileRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `CustomerProfileEnumStatus` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `email` | `form` | `Email` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CustomerProfileEnumStatus` | `customerProfileEnumStatusSchema` | `src/models/customer-profile-enum-status.ts` |
| `TrusthubV1CustomerProfile` | `trusthubV1CustomerProfileSchema` | `src/models/trusthub-v1-customer-profile.ts` |

