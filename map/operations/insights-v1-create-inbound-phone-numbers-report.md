<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CreateInboundPhoneNumbersReport — operations

Accessor: `client.insightsV1CreateInboundPhoneNumbersReport` · Source: `src/resources/insights-v1-create-inbound-phone-numbers-report.ts` · 1 operation · Request types: namespace `InsightsV1CreateInboundPhoneNumbersReport`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInboundPhoneNumbersReport

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInboundPhoneNumbersReport(request: InsightsV1CreateInboundPhoneNumbersReport.CreateInboundPhoneNumbersReportRequest, options?: RequestOptions): ApiPromise<InsightsV2CreateReportResponse, ApiError>`
- **Wire**: `POST /v2/Voice/Reports/PhoneNumbers/Inbound`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsV2CreateReportResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CreateInboundPhoneNumbersReport.CreateInboundPhoneNumbersReportRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `InsightsV2CreatePhoneNumbersReportRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV2CreatePhoneNumbersReportRequest` | `insightsV2CreatePhoneNumbersReportRequestSchema` | `src/models/insights-v2-create-phone-numbers-report-request.ts` |
| `InsightsV2CreateReportResponse` | `insightsV2CreateReportResponseSchema` | `src/models/insights-v2-create-report-response.ts` |

