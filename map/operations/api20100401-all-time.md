<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AllTime — operations

Accessor: `client.api20100401AllTime` · Source: `src/resources/api20100401-all-time.ts` · 1 operation · Request types: namespace `Api20100401AllTime`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listUsageRecordAllTime

- **Signature**: `listUsageRecordAllTime(request: Api20100401AllTime.ListUsageRecordAllTimeRequest, options?: RequestOptions): ApiPromise<ListUsageRecordAllTimeResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Usage/Records/AllTime.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListUsageRecordAllTimeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AllTime.ListUsageRecordAllTimeRequest` (8):

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
| `ListUsageRecordAllTimeResponse` | `listUsageRecordAllTimeResponseSchema` | `src/models/list-usage-record-all-time-response.ts` |

