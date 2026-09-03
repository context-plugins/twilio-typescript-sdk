<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsConversationsApi — operations

Accessor: `client.flexV1InsightsConversationsApi` · Source: `src/resources/flex-v1-insights-conversations-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsConversationsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listInsightsConversations

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsConversations(request: FlexV1InsightsConversationsApi.ListInsightsConversationsRequest, options?: RequestOptions): ApiPromise<ListInsightsConversationsResponse, ResponseError>`
- **Wire**: `GET /v1/Insights/Conversations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsConversationsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsConversationsApi.ListInsightsConversationsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segmentId` | `query` | `SegmentId` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsConversationsResponse` | `listInsightsConversationsResponseSchema` | `src/models/list-insights-conversations-response.ts` |

