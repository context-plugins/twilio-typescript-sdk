<!-- Generated file — do not edit; regenerated with the SDK. -->

# TrusthubV1CustomerProfilesEvaluations — operations

Accessor: `client.trusthubV1CustomerProfilesEvaluations` · Source: `src/resources/trusthub-v1-customer-profiles-evaluations.ts` · 3 operations · Request types: namespace `TrusthubV1CustomerProfilesEvaluations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCustomerProfileEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCustomerProfileEvaluation(request: TrusthubV1CustomerProfilesEvaluations.CreateCustomerProfileEvaluationRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError>`
- **Wire**: `POST /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEvaluations.CreateCustomerProfileEvaluationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `policySid` | `form` | `PolicySid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `trusthubV1CustomerProfileCustomerProfileEvaluationSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-evaluation.ts` |

### fetchCustomerProfileEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCustomerProfileEvaluation(request: TrusthubV1CustomerProfilesEvaluations.FetchCustomerProfileEvaluationRequest, options?: RequestOptions): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TrusthubV1CustomerProfileCustomerProfileEvaluation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEvaluations.FetchCustomerProfileEvaluationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TrusthubV1CustomerProfileCustomerProfileEvaluation` | `trusthubV1CustomerProfileCustomerProfileEvaluationSchema` | `src/models/trusthub-v1-customer-profile-customer-profile-evaluation.ts` |

### listCustomerProfileEvaluation

- **Server**: `default9` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCustomerProfileEvaluation(request: TrusthubV1CustomerProfilesEvaluations.ListCustomerProfileEvaluationRequest, options?: RequestOptions): ApiPromise<ListCustomerProfileEvaluationResponse, ResponseError>`
- **Wire**: `GET /v1/CustomerProfiles/{CustomerProfileSid}/Evaluations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCustomerProfileEvaluationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TrusthubV1CustomerProfilesEvaluations.ListCustomerProfileEvaluationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `customerProfileSid` | `path` | `CustomerProfileSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCustomerProfileEvaluationResponse` | `listCustomerProfileEvaluationResponseSchema` | `src/models/list-customer-profile-evaluation-response.ts` |

