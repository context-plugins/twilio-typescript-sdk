<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1GetAccountReport — operations

Accessor: `client.insightsV1GetAccountReport` · Source: `src/resources/insights-v1-get-account-report.ts` · 1 operation · Request types: namespace `InsightsV1GetAccountReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchAccountReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAccountReport(request: InsightsV1GetAccountReport.FetchAccountReportRequest, options?: RequestOptions): ApiPromise<InsightsV2AccountReport, ResponseError>`
- **Wire**: `GET /v2/Voice/Reports/{reportId}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV2AccountReport`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1GetAccountReport.FetchAccountReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `reportId` | `path` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV2AccountReport` | `insightsV2AccountReportSchema` | `src/models/insights-v2-account-report.ts` |

