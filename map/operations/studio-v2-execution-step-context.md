<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2ExecutionStepContext — operations

Accessor: `client.studioV2ExecutionStepContext` · Source: `src/resources/studio-v2-execution-step-context.ts` · 1 operation · Request types: namespace `StudioV2ExecutionStepContext`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchExecutionStepContext2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecutionStepContext2(request: StudioV2ExecutionStepContext.FetchExecutionStepContext2Request, options?: RequestOptions): ApiPromise<StudioV1FlowExecutionExecutionStepExecutionStepContext, ApiError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{StepSid}/Context`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecutionExecutionStepExecutionStepContext`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2ExecutionStepContext.FetchExecutionStepContext2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |
| `stepSid` | `path` | `StepSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecutionExecutionStepExecutionStepContext` | `studioV1FlowExecutionExecutionStepExecutionStepContextSchema` | `src/models/studio-v1-flow-execution-execution-step-execution-step-context.ts` |

