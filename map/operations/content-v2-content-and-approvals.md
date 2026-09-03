<!-- Generated file — do not edit; regenerated with the SDK. -->

# ContentV2ContentAndApprovals — operations

Accessor: `client.contentV2ContentAndApprovals` · Source: `src/resources/content-v2-content-and-approvals.ts` · 1 operation · Request types: namespace `ContentV2ContentAndApprovals`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listContentAndApprovals2

- **Server**: `default2` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listContentAndApprovals2(request: ContentV2ContentAndApprovals.ListContentAndApprovals2Request, options?: RequestOptions): ApiPromise<ListContentAndApprovalsResponse, ResponseError>`
- **Wire**: `GET /v2/ContentAndApprovals`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListContentAndApprovalsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ContentV2ContentAndApprovals.ListContentAndApprovals2Request` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `sortByDate` | `query` | `SortByDate` | `string` | no |
| `sortByContentName` | `query` | `SortByContentName` | `string` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `contentName` | `query` | `ContentName` | `string` | no |
| `content` | `query` | `Content` | `string` | no |
| `language` | `query` | `Language` | `string[]` | no |
| `contentType` | `query` | `ContentType` | `string[]` | no |
| `channelEligibility` | `query` | `ChannelEligibility` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListContentAndApprovalsResponse` | `listContentAndApprovalsResponseSchema` | `src/models/list-content-and-approvals-response.ts` |

