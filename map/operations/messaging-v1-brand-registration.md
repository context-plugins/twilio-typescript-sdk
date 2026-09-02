<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1BrandRegistration — operations

Accessor: `client.messagingV1BrandRegistration` · Source: `src/resources/messaging-v1-brand-registration.ts` · 4 operations · Request types: namespace `MessagingV1BrandRegistration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBrandRegistrations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBrandRegistrations(request: MessagingV1BrandRegistration.CreateBrandRegistrationsRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrations, ResponseError>`
- **Wire**: `POST /v1/a2p/BrandRegistrations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandRegistration.CreateBrandRegistrationsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileBundleSid` | `form` | `CustomerProfileBundleSid` | `string` | yes |
| `a2PProfileBundleSid` | `form` | `A2PProfileBundleSid` | `string` | yes |
| `brandType` | `form` | `BrandType` | `string` | no |
| `mock` | `form` | `Mock` | `boolean` | no |
| `skipAutomaticSecVet` | `form` | `SkipAutomaticSecVet` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1BrandRegistrations` | `messagingV1BrandRegistrationsSchema` | `src/models/messaging-v1-brand-registrations.ts` |

### fetchBrandRegistrations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBrandRegistrations(request: MessagingV1BrandRegistration.FetchBrandRegistrationsRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrations, ResponseError>`
- **Wire**: `GET /v1/a2p/BrandRegistrations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandRegistration.FetchBrandRegistrationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1BrandRegistrations` | `messagingV1BrandRegistrationsSchema` | `src/models/messaging-v1-brand-registrations.ts` |

### listBrandRegistrations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBrandRegistrations(request: MessagingV1BrandRegistration.ListBrandRegistrationsRequest, options?: RequestOptions): ApiPromise<ListBrandRegistrationsResponse, ResponseError>`
- **Wire**: `GET /v1/a2p/BrandRegistrations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBrandRegistrationsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandRegistration.ListBrandRegistrationsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListBrandRegistrationsResponse` | `listBrandRegistrationsResponseSchema` | `src/models/list-brand-registrations-response.ts` |

### updateBrandRegistrations

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateBrandRegistrations(request: MessagingV1BrandRegistration.UpdateBrandRegistrationsRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrations, ResponseError>`
- **Wire**: `POST /v1/a2p/BrandRegistrations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1BrandRegistrations`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandRegistration.UpdateBrandRegistrationsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1BrandRegistrations` | `messagingV1BrandRegistrationsSchema` | `src/models/messaging-v1-brand-registrations.ts` |

