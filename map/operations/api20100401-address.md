<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Address — operations

Accessor: `client.api20100401Address` · Source: `src/resources/api20100401-address.ts` · 5 operations · Request types: namespace `Api20100401Address`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAddress

- **Signature**: `createAddress(request: Api20100401Address.CreateAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountAddress, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Addresses.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Address.CreateAddressRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `customerName` | `form` | `CustomerName` | `string` | yes |
| `street` | `form` | `Street` | `string` | yes |
| `city` | `form` | `City` | `string` | yes |
| `region` | `form` | `Region` | `string` | yes |
| `postalCode` | `form` | `PostalCode` | `string` | yes |
| `isoCountry` | `form` | `IsoCountry` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `emergencyEnabled` | `form` | `EmergencyEnabled` | `boolean` | no |
| `autoCorrectAddress` | `form` | `AutoCorrectAddress` | `boolean` | no |
| `streetSecondary` | `form` | `StreetSecondary` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountAddress` | `apiV2010AccountAddressSchema` | `src/models/api-v2010-account-address.ts` |

### deleteAddress

- **Signature**: `deleteAddress(request: Api20100401Address.DeleteAddressRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Address.DeleteAddressRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchAddress

- **Signature**: `fetchAddress(request: Api20100401Address.FetchAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountAddress, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Address.FetchAddressRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountAddress` | `apiV2010AccountAddressSchema` | `src/models/api-v2010-account-address.ts` |

### listAddress

- **Signature**: `listAddress(request: Api20100401Address.ListAddressRequest, options?: RequestOptions): ApiPromise<ListAddressResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Addresses.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAddressResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Address.ListAddressRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `customerName` | `query` | `CustomerName` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `emergencyEnabled` | `query` | `EmergencyEnabled` | `boolean` | no |
| `isoCountry` | `query` | `IsoCountry` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAddressResponse` | `listAddressResponseSchema` | `src/models/list-address-response.ts` |

### updateAddress

- **Signature**: `updateAddress(request: Api20100401Address.UpdateAddressRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountAddress, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Addresses/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Address.UpdateAddressRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `customerName` | `form` | `CustomerName` | `string` | no |
| `street` | `form` | `Street` | `string` | no |
| `city` | `form` | `City` | `string` | no |
| `region` | `form` | `Region` | `string` | no |
| `postalCode` | `form` | `PostalCode` | `string` | no |
| `emergencyEnabled` | `form` | `EmergencyEnabled` | `boolean` | no |
| `autoCorrectAddress` | `form` | `AutoCorrectAddress` | `boolean` | no |
| `streetSecondary` | `form` | `StreetSecondary` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountAddress` | `apiV2010AccountAddressSchema` | `src/models/api-v2010-account-address.ts` |

