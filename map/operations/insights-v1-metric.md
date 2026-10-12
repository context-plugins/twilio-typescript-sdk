<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Metric — operations

Accessor: `client.insightsV1Metric` · Source: `src/resources/insights-v1-metric.ts` · 1 operation · Request types: namespace `InsightsV1Metric`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listMetric

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listMetric(request: InsightsV1Metric.ListMetricRequest, options?: RequestOptions): ApiPromise<ListMetricResponse, ApiError>`
- **Wire**: `GET /v1/Voice/{CallSid}/Metrics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMetricResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Metric.ListMetricRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `edge` | `query` | `Edge` | `MetricEnumTwilioEdge` | no |
| `direction` | `query` | `Direction` | `MetricEnumStreamDirection` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MetricEnumTwilioEdge` | `metricEnumTwilioEdgeSchema` | `src/models/metric-enum-twilio-edge.ts` |
| `MetricEnumStreamDirection` | `metricEnumStreamDirectionSchema` | `src/models/metric-enum-stream-direction.ts` |
| `ListMetricResponse` | `listMetricResponseSchema` | `src/models/list-metric-response.ts` |

