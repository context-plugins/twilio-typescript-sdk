<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CreateOutboundPhoneNumbersReport — operations

Accessor: `client.insightsV1CreateOutboundPhoneNumbersReport` · Source: `src/resources/insights-v1-create-outbound-phone-numbers-report.ts` · 1 operation · Request types: namespace `InsightsV1CreateOutboundPhoneNumbersReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createOutboundPhoneNumbersReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createOutboundPhoneNumbersReport(request: InsightsV1CreateOutboundPhoneNumbersReport.CreateOutboundPhoneNumbersReportRequest, options?: RequestOptions): ApiPromise<InsightsV2CreateReportResponse, ResponseError>`
- **Wire**: `POST /v2/Voice/Reports/PhoneNumbers/Outbound`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CreateOutboundPhoneNumbersReport.CreateOutboundPhoneNumbersReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsV2CreatePhoneNumbersReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV2CreatePhoneNumbersReportRequest` | `insightsV2CreatePhoneNumbersReportRequestSchema` | `src/models/insights-v2-create-phone-numbers-report-request.ts` |
| `InsightsV2CreateReportResponse` | `insightsV2CreateReportResponseSchema` | `src/models/insights-v2-create-report-response.ts` |

