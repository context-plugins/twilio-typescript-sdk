<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Monthly — operations

Accessor: `client.api20100401Monthly` · Source: `src/resources/api20100401-monthly.ts` · 1 operation · Request types: namespace `Api20100401Monthly`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listUsageRecordMonthly

- **Signature**: `listUsageRecordMonthly(request: Api20100401Monthly.ListUsageRecordMonthlyRequest, options?: RequestOptions): ApiPromise<ListUsageRecordMonthlyResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Monthly.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsageRecordMonthlyResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Monthly.ListUsageRecordMonthlyRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `category` | `query` | `Category` | `string` | no |
| `startDate` | `query` | `StartDate` | `string` (date) | no |
| `endDate` | `query` | `EndDate` | `string` (date) | no |
| `includeSubaccounts` | `query` | `IncludeSubaccounts` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListUsageRecordMonthlyResponse` | `listUsageRecordMonthlyResponseSchema` | `src/models/list-usage-record-monthly-response.ts` |

