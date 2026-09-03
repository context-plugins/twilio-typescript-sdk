<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1BrandVetting — operations

Accessor: `client.messagingV1BrandVetting` · Source: `src/resources/messaging-v1-brand-vetting.ts` · 3 operations · Request types: namespace `MessagingV1BrandVetting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBrandVetting

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBrandVetting(request: MessagingV1BrandVetting.CreateBrandVettingRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ResponseError>`
- **Wire**: `POST /v1/a2p/BrandRegistrations/{BrandSid}/Vettings`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandVetting.CreateBrandVettingRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandSid` | `path` | `BrandSid` | `string` | yes |
| `vettingProvider` | `form` | `VettingProvider` | `BrandVettingEnumVettingProvider` | yes |
| `vettingId` | `form` | `VettingId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BrandVettingEnumVettingProvider` | `brandVettingEnumVettingProviderSchema` | `src/models/brand-vetting-enum-vetting-provider.ts` |
| `MessagingV1BrandRegistrationsBrandVetting` | `messagingV1BrandRegistrationsBrandVettingSchema` | `src/models/messaging-v1-brand-registrations-brand-vetting.ts` |

### fetchBrandVetting

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBrandVetting(request: MessagingV1BrandVetting.FetchBrandVettingRequest, options?: RequestOptions): ApiPromise<MessagingV1BrandRegistrationsBrandVetting, ResponseError>`
- **Wire**: `GET /v1/a2p/BrandRegistrations/{BrandSid}/Vettings/{BrandVettingSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1BrandRegistrationsBrandVetting`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandVetting.FetchBrandVettingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandSid` | `path` | `BrandSid` | `string` | yes |
| `brandVettingSid` | `path` | `BrandVettingSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1BrandRegistrationsBrandVetting` | `messagingV1BrandRegistrationsBrandVettingSchema` | `src/models/messaging-v1-brand-registrations-brand-vetting.ts` |

### listBrandVetting

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listBrandVetting(request: MessagingV1BrandVetting.ListBrandVettingRequest, options?: RequestOptions): ApiPromise<ListBrandVettingResponse, ResponseError>`
- **Wire**: `GET /v1/a2p/BrandRegistrations/{BrandSid}/Vettings`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListBrandVettingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1BrandVetting.ListBrandVettingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `brandSid` | `path` | `BrandSid` | `string` | yes |
| `vettingProvider` | `query` | `VettingProvider` | `BrandVettingEnumVettingProvider` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `BrandVettingEnumVettingProvider` | `brandVettingEnumVettingProviderSchema` | `src/models/brand-vetting-enum-vetting-provider.ts` |
| `ListBrandVettingResponse` | `listBrandVettingResponseSchema` | `src/models/list-brand-vetting-response.ts` |

