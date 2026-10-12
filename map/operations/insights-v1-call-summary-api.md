<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CallSummaryApi — operations

Accessor: `client.insightsV1CallSummaryApi` · Source: `src/resources/insights-v1-call-summary-api.ts` · 1 operation · Request types: namespace `InsightsV1CallSummaryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchSummary

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSummary(request: InsightsV1CallSummaryApi.FetchSummaryRequest, options?: RequestOptions): ApiPromise<InsightsV1CallSummary, ApiError>`
- **Wire**: `GET /v1/Voice/{CallSid}/Summary`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1CallSummary`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CallSummaryApi.FetchSummaryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `processingState` | `query` | `ProcessingState` | `SummaryEnumProcessingState` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SummaryEnumProcessingState` | `summaryEnumProcessingStateSchema` | `src/models/summary-enum-processing-state.ts` |
| `InsightsV1CallSummary` | `insightsV1CallSummarySchema` | `src/models/insights-v1-call-summary.ts` |

