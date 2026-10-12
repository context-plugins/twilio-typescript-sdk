<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2Evaluation — operations

Accessor: `client.numbersV2Evaluation` · Source: `src/resources/numbers-v2-evaluation.ts` · 3 operations · Request types: namespace `NumbersV2Evaluation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createEvaluation

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEvaluation(request: NumbersV2Evaluation.CreateEvaluationRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ApiError>`
- **Wire**: `POST /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Evaluation.CreateEvaluationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `numbersV2RegulatoryComplianceBundleEvaluationSchema` | `src/models/numbers-v2-regulatory-compliance-bundle-evaluation.ts` |

### fetchEvaluation

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEvaluation(request: NumbersV2Evaluation.FetchEvaluationRequest, options?: RequestOptions): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2RegulatoryComplianceBundleEvaluation`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Evaluation.FetchEvaluationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2RegulatoryComplianceBundleEvaluation` | `numbersV2RegulatoryComplianceBundleEvaluationSchema` | `src/models/numbers-v2-regulatory-compliance-bundle-evaluation.ts` |

### listEvaluation

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEvaluation(request: NumbersV2Evaluation.ListEvaluationRequest, options?: RequestOptions): ApiPromise<ListEvaluationResponse, ApiError>`
- **Wire**: `GET /v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEvaluationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2Evaluation.ListEvaluationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEvaluationResponse` | `listEvaluationResponseSchema` | `src/models/list-evaluation-response.ts` |

