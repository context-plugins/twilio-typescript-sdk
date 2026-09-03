<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1BulkEligibilityApi — operations

Accessor: `client.numbersV1BulkEligibilityApi` · Source: `src/resources/numbers-v1-bulk-eligibility-api.ts` · 2 operations · Request types: namespace `NumbersV1BulkEligibilityApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBulkEligibility

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBulkEligibility(request: NumbersV1BulkEligibilityApi.CreateBulkEligibilityRequest, options?: RequestOptions): ApiPromise<NumbersV1BulkEligibility, ResponseError>`
- **Wire**: `POST /v1/HostedNumber/Eligibility/Bulk`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1BulkEligibilityApi.CreateBulkEligibilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1BulkEligibility` | `numbersV1BulkEligibilitySchema` | `src/models/numbers-v1-bulk-eligibility.ts` |

### fetchBulkEligibility

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchBulkEligibility(request: NumbersV1BulkEligibilityApi.FetchBulkEligibilityRequest, options?: RequestOptions): ApiPromise<NumbersV1BulkEligibility, ResponseError>`
- **Wire**: `GET /v1/HostedNumber/Eligibility/Bulk/{RequestId}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV1BulkEligibility`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1BulkEligibilityApi.FetchBulkEligibilityRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `requestId` | `path` | `RequestId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1BulkEligibility` | `numbersV1BulkEligibilitySchema` | `src/models/numbers-v1-bulk-eligibility.ts` |

