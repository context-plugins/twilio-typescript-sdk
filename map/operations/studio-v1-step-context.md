<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1StepContext — operations

Accessor: `client.studioV1StepContext` · Source: `src/resources/studio-v1-step-context.ts` · 1 operation · Request types: namespace `StudioV1StepContext`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchStepContext

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchStepContext(request: StudioV1StepContext.FetchStepContextRequest, options?: RequestOptions): ApiPromise<StudioV1FlowEngagementStepStepContext, ApiError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Engagements/{EngagementSid}/Steps/{StepSid}/Context`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowEngagementStepStepContext`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1StepContext.FetchStepContextRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `engagementSid` | `path` | `EngagementSid` | `string` | yes |
| `stepSid` | `path` | `StepSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowEngagementStepStepContext` | `studioV1FlowEngagementStepStepContextSchema` | `src/models/studio-v1-flow-engagement-step-step-context.ts` |

