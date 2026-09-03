<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1GetInboundPhoneNumbersReport — operations

Accessor: `client.insightsV1GetInboundPhoneNumbersReport` · Source: `src/resources/insights-v1-get-inbound-phone-numbers-report.ts` · 1 operation · Request types: namespace `InsightsV1GetInboundPhoneNumbersReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listInboundPhoneNumbersReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInboundPhoneNumbersReport(request: InsightsV1GetInboundPhoneNumbersReport.ListInboundPhoneNumbersReportRequest, options?: RequestOptions): ApiPromise<ListInboundPhoneNumbersReports, ResponseError>`
- **Wire**: `GET /v2/Voice/Reports/PhoneNumbers/Inbound/{reportId}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInboundPhoneNumbersReports`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1GetInboundPhoneNumbersReport.ListInboundPhoneNumbersReportRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportId` | `path` | — | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInboundPhoneNumbersReports` | `listInboundPhoneNumbersReportsSchema` | `src/models/list-inbound-phone-numbers-reports.ts` |

