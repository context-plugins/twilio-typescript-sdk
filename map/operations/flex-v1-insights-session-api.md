<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsSessionApi — operations

Accessor: `client.flexV1InsightsSessionApi` · Source: `src/resources/flex-v1-insights-session-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsSessionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createInsightsSession

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInsightsSession(request: FlexV1InsightsSessionApi.CreateInsightsSessionRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsSession, ResponseError>`
- **Wire**: `POST /v1/Insights/Session`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InsightsSession`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsSessionApi.CreateInsightsSessionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsSession` | `flexV1InsightsSessionSchema` | `src/models/flex-v1-insights-session.ts` |

