<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1ExecutionStep — operations

Accessor: `client.studioV1ExecutionStep` · Source: `src/resources/studio-v1-execution-step.ts` · 2 operations · Request types: namespace `StudioV1ExecutionStep`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchExecutionStep

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecutionStep(request: StudioV1ExecutionStep.FetchExecutionStepRequest, options?: RequestOptions): ApiPromise<StudioV1FlowExecutionExecutionStep, ApiError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecutionExecutionStep`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1ExecutionStep.FetchExecutionStepRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecutionExecutionStep` | `studioV1FlowExecutionExecutionStepSchema` | `src/models/studio-v1-flow-execution-execution-step.ts` |

### listExecutionStep

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExecutionStep(request: StudioV1ExecutionStep.ListExecutionStepRequest, options?: RequestOptions): ApiPromise<ListExecutionStepResponse, ApiError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExecutionStepResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1ExecutionStep.ListExecutionStepRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListExecutionStepResponse` | `listExecutionStepResponseSchema` | `src/models/list-execution-step-response.ts` |

