<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsEntityAssignments — operations

Accessor: `client.trusthubV1TrustProductsEntityAssignments` · Source: `src/resources/trusthub-v1-trust-products-entity-assignments.ts` · 4 operations · Request types: namespace `TrusthubV1TrustProductsEntityAssignments`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTrustProductEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTrustProductEntityAssignment(request: TrusthubV1TrustProductsEntityAssignments.CreateTrustProductEntityAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ApiError>`
- **Wire**: `POST /v1/TrustProducts/{TrustProductSid}/EntityAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEntityAssignments.CreateTrustProductEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `objectSid` | `form` | `ObjectSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `trusthubV1TrustProductTrustProductEntityAssignmentSchema` | `src/models/trusthub-v1-trust-product-trust-product-entity-assignment.ts` |

### deleteTrustProductEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTrustProductEntityAssignment(request: TrusthubV1TrustProductsEntityAssignments.DeleteTrustProductEntityAssignmentRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEntityAssignments.DeleteTrustProductEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTrustProductEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTrustProductEntityAssignment(request: TrusthubV1TrustProductsEntityAssignments.FetchTrustProductEntityAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ApiError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1TrustProductTrustProductEntityAssignment`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEntityAssignments.FetchTrustProductEntityAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductEntityAssignment` | `trusthubV1TrustProductTrustProductEntityAssignmentSchema` | `src/models/trusthub-v1-trust-product-trust-product-entity-assignment.ts` |

### listTrustProductEntityAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTrustProductEntityAssignment(request: TrusthubV1TrustProductsEntityAssignments.ListTrustProductEntityAssignmentRequest, options?: RequestOptions): ApiPromise<ListTrustProductEntityAssignmentResponse, ApiError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/EntityAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTrustProductEntityAssignmentResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEntityAssignments.ListTrustProductEntityAssignmentRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `objectType` | `query` | `ObjectType` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTrustProductEntityAssignmentResponse` | `listTrustProductEntityAssignmentResponseSchema` | `src/models/list-trust-product-entity-assignment-response.ts` |

