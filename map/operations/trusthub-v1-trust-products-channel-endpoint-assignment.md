<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsChannelEndpointAssignment — operations

Accessor: `client.trusthubV1TrustProductsChannelEndpointAssignment` · Source: `src/resources/trusthub-v1-trust-products-channel-endpoint-assignment.ts` · 4 operations · Request types: namespace `TrusthubV1TrustProductsChannelEndpointAssignment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTrustProductChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTrustProductChannelEndpointAssignment(request: TrusthubV1TrustProductsChannelEndpointAssignment.CreateTrustProductChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError>`
- **Wire**: `POST /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsChannelEndpointAssignment.CreateTrustProductChannelEndpointAssignmentRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `channelEndpointType` | `form` | `ChannelEndpointType` | `string` | yes |
| `channelEndpointSid` | `form` | `ChannelEndpointSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema` | `src/models/trusthub-v1-trust-product-trust-product-channel-endpoint-assignment.ts` |

### deleteTrustProductChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTrustProductChannelEndpointAssignment(request: TrusthubV1TrustProductsChannelEndpointAssignment.DeleteTrustProductChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsChannelEndpointAssignment.DeleteTrustProductChannelEndpointAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTrustProductChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTrustProductChannelEndpointAssignment(request: TrusthubV1TrustProductsChannelEndpointAssignment.FetchTrustProductChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1TrustProductTrustProductChannelEndpointAssignment`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsChannelEndpointAssignment.FetchTrustProductChannelEndpointAssignmentRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductChannelEndpointAssignment` | `trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema` | `src/models/trusthub-v1-trust-product-trust-product-channel-endpoint-assignment.ts` |

### listTrustProductChannelEndpointAssignment

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTrustProductChannelEndpointAssignment(request: TrusthubV1TrustProductsChannelEndpointAssignment.ListTrustProductChannelEndpointAssignmentRequest, options?: RequestOptions): ApiPromise<ListTrustProductChannelEndpointAssignmentResponse, ResponseError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTrustProductChannelEndpointAssignmentResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsChannelEndpointAssignment.ListTrustProductChannelEndpointAssignmentRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `channelEndpointSid` | `query` | `ChannelEndpointSid` | `string` | no |
| `channelEndpointSids` | `query` | `ChannelEndpointSids` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTrustProductChannelEndpointAssignmentResponse` | `listTrustProductChannelEndpointAssignmentResponseSchema` | `src/models/list-trust-product-channel-endpoint-assignment-response.ts` |

