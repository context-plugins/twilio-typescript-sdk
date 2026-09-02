<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1ExecutionStepContext — operations

Accessor: `client.studioV1ExecutionStepContext` · Source: `src/resources/studio-v1-execution-step-context.ts` · 1 operation · Request types: namespace `StudioV1ExecutionStepContext`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchExecutionStepContext

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecutionStepContext(request: StudioV1ExecutionStepContext.FetchExecutionStepContextRequest, options?: RequestOptions): ApiPromise<StudioV1FlowExecutionExecutionStepExecutionStepContext, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecutionExecutionStepExecutionStepContext`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1ExecutionStepContext.FetchExecutionStepContextRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |
| `stepSid` | `path` | `StepSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `studioV1FlowExecutionExecutionStepExecutionStepContextSchema` | `src/models/studio-v1-flow-execution-execution-step-execution-step-context.ts` |

