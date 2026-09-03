<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1GetOutboundPhoneNumbersReport — operations

Accessor: `client.insightsV1GetOutboundPhoneNumbersReport` · Source: `src/resources/insights-v1-get-outbound-phone-numbers-report.ts` · 1 operation · Request types: namespace `InsightsV1GetOutboundPhoneNumbersReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listOutboundPhoneNumbersReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listOutboundPhoneNumbersReport(request: InsightsV1GetOutboundPhoneNumbersReport.ListOutboundPhoneNumbersReportRequest, options?: RequestOptions): ApiPromise<ListOutboundPhoneNumbersReports, ResponseError>`
- **Wire**: `GET /v2/Voice/Reports/PhoneNumbers/Outbound/{reportId}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListOutboundPhoneNumbersReports`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1GetOutboundPhoneNumbersReport.ListOutboundPhoneNumbersReportRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `reportId` | `path` | — | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListOutboundPhoneNumbersReports` | `listOutboundPhoneNumbersReportsSchema` | `src/models/list-outbound-phone-numbers-reports.ts` |

