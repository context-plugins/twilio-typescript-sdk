<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Event — operations

Accessor: `client.insightsV1Event` · Source: `src/resources/insights-v1-event.ts` · 1 operation · Request types: namespace `InsightsV1Event`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listEvent2

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEvent2(request: InsightsV1Event.ListEvent2Request, options?: RequestOptions): ApiPromise<ListEventResponse1, ResponseError>`
- **Wire**: `GET /v1/Voice/{CallSid}/Events`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEventResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Event.ListEvent2Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `edge` | `query` | `Edge` | `EventEnumTwilioEdge` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EventEnumTwilioEdge` | `eventEnumTwilioEdgeSchema` | `src/models/event-enum-twilio-edge.ts` |
| `ListEventResponse1` | `listEventResponse1Schema` | `src/models/list-event-response1.ts` |

