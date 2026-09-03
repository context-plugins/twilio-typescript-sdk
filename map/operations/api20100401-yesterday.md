<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Yesterday — operations

Accessor: `client.api20100401Yesterday` · Source: `src/resources/api20100401-yesterday.ts` · 1 operation · Request types: namespace `Api20100401Yesterday`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listUsageRecordYesterday

- **Signature**: `listUsageRecordYesterday(request: Api20100401Yesterday.ListUsageRecordYesterdayRequest, options?: RequestOptions): ApiPromise<ListUsageRecordYesterdayResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/Yesterday.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsageRecordYesterdayResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Yesterday.ListUsageRecordYesterdayRequest` (8):

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
| `ListUsageRecordYesterdayResponse` | `listUsageRecordYesterdayResponseSchema` | `src/models/list-usage-record-yesterday-response.ts` |

