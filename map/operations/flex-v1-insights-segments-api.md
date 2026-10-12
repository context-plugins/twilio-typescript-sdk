<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsSegmentsApi — operations

Accessor: `client.flexV1InsightsSegmentsApi` · Source: `src/resources/flex-v1-insights-segments-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsSegmentsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listInsightsSegments

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listInsightsSegments(request: FlexV1InsightsSegmentsApi.ListInsightsSegmentsRequest, options?: RequestOptions): ApiPromise<ListInsightsSegmentsResponse, ApiError>`
- **Wire**: `GET /v1/Insights/Segments`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListInsightsSegmentsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsSegmentsApi.ListInsightsSegmentsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `segmentId` | `query` | `SegmentId` | `string` | no |
| `reservationId` | `query` | `ReservationId` | `string[]` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListInsightsSegmentsResponse` | `listInsightsSegmentsResponseSchema` | `src/models/list-insights-segments-response.ts` |

