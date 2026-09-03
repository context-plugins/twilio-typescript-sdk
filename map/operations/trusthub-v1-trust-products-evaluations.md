<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1TrustProductsEvaluations — operations

Accessor: `client.trusthubV1TrustProductsEvaluations` · Source: `src/resources/trusthub-v1-trust-products-evaluations.ts` · 3 operations · Request types: namespace `TrusthubV1TrustProductsEvaluations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTrustProductEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTrustProductEvaluation(request: TrusthubV1TrustProductsEvaluations.CreateTrustProductEvaluationRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ResponseError>`
- **Wire**: `POST /v1/TrustProducts/{TrustProductSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEvaluations.CreateTrustProductEvaluationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `policySid` | `form` | `PolicySid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductEvaluation` | `trusthubV1TrustProductTrustProductEvaluationSchema` | `src/models/trusthub-v1-trust-product-trust-product-evaluation.ts` |

### fetchTrustProductEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTrustProductEvaluation(request: TrusthubV1TrustProductsEvaluations.FetchTrustProductEvaluationRequest, options?: RequestOptions): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ResponseError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1TrustProductTrustProductEvaluation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEvaluations.FetchTrustProductEvaluationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1TrustProductTrustProductEvaluation` | `trusthubV1TrustProductTrustProductEvaluationSchema` | `src/models/trusthub-v1-trust-product-trust-product-evaluation.ts` |

### listTrustProductEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTrustProductEvaluation(request: TrusthubV1TrustProductsEvaluations.ListTrustProductEvaluationRequest, options?: RequestOptions): ApiPromise<ListTrustProductEvaluationResponse, ResponseError>`
- **Wire**: `GET /v1/TrustProducts/{TrustProductSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTrustProductEvaluationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1TrustProductsEvaluations.ListTrustProductEvaluationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `trustProductSid` | `path` | `TrustProductSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTrustProductEvaluationResponse` | `listTrustProductEvaluationResponseSchema` | `src/models/list-trust-product-evaluation-response.ts` |

