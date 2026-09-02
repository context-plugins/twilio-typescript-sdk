<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProducts — operations

Accessor: `client.trusthubV1TrustProducts` · Source: `src/resources/trusthub-v1-trust-products.ts` · 5 operations · Request types: namespace `TrusthubV1TrustProducts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTrustProduct

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTrustProduct(request: TrusthubV1TrustProducts.CreateTrustProductRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProduct, ResponseError>`
- **Wire**: `POST /v1/TrustProducts`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProducts.CreateTrustProductRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `email` | `form` | `Email` | `string` | yes |
| `policySid` | `form` | `PolicySid` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProduct` | `trusthubV1TrustProductSchema` | `src/models/trusthub-v1-trust-product.ts` |

### deleteTrustProduct

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTrustProduct(request: TrusthubV1TrustProducts.DeleteTrustProductRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/TrustProducts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProducts.DeleteTrustProductRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTrustProduct

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTrustProduct(request: TrusthubV1TrustProducts.FetchTrustProductRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProduct, ResponseError>`
- **Wire**: `GET /v1/TrustProducts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProducts.FetchTrustProductRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProduct` | `trusthubV1TrustProductSchema` | `src/models/trusthub-v1-trust-product.ts` |

### listTrustProduct

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTrustProduct(request: TrusthubV1TrustProducts.ListTrustProductRequest, options?: RequestOptions): ApiPromise<ListTrustProductResponse, ResponseError>`
- **Wire**: `GET /v1/TrustProducts`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTrustProductResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProducts.ListTrustProductRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `TrustProductEnumStatus` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `policySid` | `query` | `PolicySid` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrustProductEnumStatus` | `trustProductEnumStatusSchema` | `src/models/trust-product-enum-status.ts` |
| `ListTrustProductResponse` | `listTrustProductResponseSchema` | `src/models/list-trust-product-response.ts` |

### updateTrustProduct

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTrustProduct(request: TrusthubV1TrustProducts.UpdateTrustProductRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProduct, ResponseError>`
- **Wire**: `POST /v1/TrustProducts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1TrustProduct`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProducts.UpdateTrustProductRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `TrustProductEnumStatus` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `email` | `form` | `Email` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrustProductEnumStatus` | `trustProductEnumStatusSchema` | `src/models/trust-product-enum-status.ts` |
| `TrusthubV1TrustProduct` | `trusthubV1TrustProductSchema` | `src/models/trusthub-v1-trust-product.ts` |

