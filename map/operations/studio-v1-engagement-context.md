<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1EngagementContext — operations

Accessor: `client.studioV1EngagementContext` · Source: `src/resources/studio-v1-engagement-context.ts` · 1 operation · Request types: namespace `StudioV1EngagementContext`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchEngagementContext

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEngagementContext(request: StudioV1EngagementContext.FetchEngagementContextRequest, options?: RequestOptions): ApiPromise<StudioV1FlowEngagementEngagementContext, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Context`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowEngagementEngagementContext`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1EngagementContext.FetchEngagementContextRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `engagementSid` | `path` | `EngagementSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowEngagementEngagementContext` | `studioV1FlowEngagementEngagementContextSchema` | `src/models/studio-v1-flow-engagement-engagement-context.ts` |

