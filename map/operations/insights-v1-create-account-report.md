<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CreateAccountReport — operations

Accessor: `client.insightsV1CreateAccountReport` · Source: `src/resources/insights-v1-create-account-report.ts` · 1 operation · Request types: namespace `InsightsV1CreateAccountReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAccountReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAccountReport(request: InsightsV1CreateAccountReport.CreateAccountReportRequest, options?: RequestOptions): ApiPromise<InsightsV2CreateReportResponse, ResponseError>`
- **Wire**: `POST /v2/Voice/Reports`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CreateAccountReport.CreateAccountReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsV2CreateAccountReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV2CreateAccountReportRequest` | `insightsV2CreateAccountReportRequestSchema` | `src/models/insights-v2-create-account-report-request.ts` |
| `InsightsV2CreateReportResponse` | `insightsV2CreateReportResponseSchema` | `src/models/insights-v2-create-report-response.ts` |

