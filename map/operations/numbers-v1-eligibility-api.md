<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1EligibilityApi — operations

Accessor: `client.numbersV1EligibilityApi` · Source: `src/resources/numbers-v1-eligibility-api.ts` · 1 operation · Request types: namespace `NumbersV1EligibilityApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createEligibility

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createEligibility(request: NumbersV1EligibilityApi.CreateEligibilityRequest, options?: RequestOptions): ApiPromise<NumbersV1Eligibility, ResponseError>`
- **Wire**: `POST /v1/HostedNumber/Eligibility`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `NumbersV1Eligibility`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1EligibilityApi.CreateEligibilityRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1Eligibility` | `numbersV1EligibilitySchema` | `src/models/numbers-v1-eligibility.ts` |

