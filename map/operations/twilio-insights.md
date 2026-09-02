<!-- Generated file — do not edit; regenerated with the SDK. -->

# TwilioInsights — operations

Accessor: `client.twilioInsights` · Source: `src/resources/twilio-insights.ts` · 3 operations · Request and error types: namespace `TwilioInsights`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createQueryResults

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createQueryResults(request: TwilioInsights.CreateQueryResultsRequest, options?: RequestOptions): ApiPromise<InsightsQueryResponse, TwilioInsights.CreateQueryResultsError>`
- **Wire**: `POST /v3/InsightsDomains/Conversations/Query`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `InsightsQueryResponse`
- **Error**: `TwilioInsights.CreateQueryResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsDomainsConversationsQuery400Error1"` [400] `V3InsightsDomainsConversationsQuery400Error1` · `"v3InsightsDomainsConversationsQuery429Error1"` [429] `V3InsightsDomainsConversationsQuery429Error1` · `"v3InsightsDomainsConversationsQuery500Error1"` [500] `V3InsightsDomainsConversationsQuery500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioInsights.CreateQueryResultsRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no |
| `body` | `body` | `InsightsQueryRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsQueryRequest` | `insightsQueryRequestSchema` | `src/models/insights-query-request.ts` |
| `InsightsQueryResponse` | `insightsQueryResponseSchema` | `src/models/insights-query-response.ts` |
| `V3InsightsDomainsConversationsQuery400Error1` | `v3InsightsDomainsConversationsQuery400Error1Schema` | `src/models/v3-insights-domains-conversations-query400-error1.ts` |
| `V3InsightsDomainsConversationsQuery429Error1` | `v3InsightsDomainsConversationsQuery429Error1Schema` | `src/models/v3-insights-domains-conversations-query429-error1.ts` |
| `V3InsightsDomainsConversationsQuery500Error1` | `v3InsightsDomainsConversationsQuery500Error1Schema` | `src/models/v3-insights-domains-conversations-query500-error1.ts` |

### fetchMetadata

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchMetadata(options?: RequestOptions): ApiPromise<InsightsMetadataResponse, TwilioInsights.FetchMetadataError>`
- **Wire**: `GET /v3/InsightsDomains/Conversations/Metadata`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsMetadataResponse`
- **Error**: `TwilioInsights.FetchMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsDomainsConversationsMetadata400Error1"` [400] `V3InsightsDomainsConversationsMetadata400Error1` · `"v3InsightsDomainsConversationsMetadata429Error1"` [429] `V3InsightsDomainsConversationsMetadata429Error1` · `"v3InsightsDomainsConversationsMetadata500Error1"` [500] `V3InsightsDomainsConversationsMetadata500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsMetadataResponse` | `insightsMetadataResponseSchema` | `src/models/insights-metadata-response.ts` |
| `V3InsightsDomainsConversationsMetadata400Error1` | `v3InsightsDomainsConversationsMetadata400Error1Schema` | `src/models/v3-insights-domains-conversations-metadata400-error1.ts` |
| `V3InsightsDomainsConversationsMetadata429Error1` | `v3InsightsDomainsConversationsMetadata429Error1Schema` | `src/models/v3-insights-domains-conversations-metadata429-error1.ts` |
| `V3InsightsDomainsConversationsMetadata500Error1` | `v3InsightsDomainsConversationsMetadata500Error1Schema` | `src/models/v3-insights-domains-conversations-metadata500-error1.ts` |

### fetchQueryResults

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchQueryResults(request: TwilioInsights.FetchQueryResultsRequest, options?: RequestOptions): ApiPromise<InsightsQueryResponse, TwilioInsights.FetchQueryResultsError>`
- **Wire**: `GET /v3/InsightsDomains/Conversations/Query`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsQueryResponse`
- **Error**: `TwilioInsights.FetchQueryResultsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"v3InsightsDomainsConversationsQuery400Error1"` [400] `V3InsightsDomainsConversationsQuery400Error1` · `"v3InsightsDomainsConversationsQuery429Error1"` [429] `V3InsightsDomainsConversationsQuery429Error1` · `"v3InsightsDomainsConversationsQuery500Error1"` [500] `V3InsightsDomainsConversationsQuery500Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioInsights.FetchQueryResultsRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `pageToken` | `query` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsQueryResponse` | `insightsQueryResponseSchema` | `src/models/insights-query-response.ts` |
| `V3InsightsDomainsConversationsQuery400Error1` | `v3InsightsDomainsConversationsQuery400Error1Schema` | `src/models/v3-insights-domains-conversations-query400-error1.ts` |
| `V3InsightsDomainsConversationsQuery429Error1` | `v3InsightsDomainsConversationsQuery429Error1Schema` | `src/models/v3-insights-domains-conversations-query429-error1.ts` |
| `V3InsightsDomainsConversationsQuery500Error1` | `v3InsightsDomainsConversationsQuery500Error1Schema` | `src/models/v3-insights-domains-conversations-query500-error1.ts` |

