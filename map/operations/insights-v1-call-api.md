<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1CallApi — operations

Accessor: `client.insightsV1CallApi` · Source: `src/resources/insights-v1-call-api.ts` · 1 operation · Request types: namespace `InsightsV1CallApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchCall2

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCall2(request: InsightsV1CallApi.FetchCall2Request, options?: RequestOptions): ApiPromise<InsightsV1Call, ResponseError>`
- **Wire**: `GET /v1/Voice/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1Call`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1CallApi.FetchCall2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1Call` | `insightsV1CallSchema` | `src/models/insights-v1-call.ts` |

