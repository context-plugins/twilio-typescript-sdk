<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2ExecutionStep — operations

Accessor: `client.studioV2ExecutionStep` · Source: `src/resources/studio-v2-execution-step.ts` · 2 operations · Request types: namespace `StudioV2ExecutionStep`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchExecutionStep2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecutionStep2(request: StudioV2ExecutionStep.FetchExecutionStep2Request, options?: RequestOptions): ApiPromise<StudioV1FlowExecutionExecutionStep, ResponseError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecutionExecutionStep`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2ExecutionStep.FetchExecutionStep2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecutionExecutionStep` | `studioV1FlowExecutionExecutionStepSchema` | `src/models/studio-v1-flow-execution-execution-step.ts` |

### listExecutionStep2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExecutionStep2(request: StudioV2ExecutionStep.ListExecutionStep2Request, options?: RequestOptions): ApiPromise<ListExecutionStepResponse, ResponseError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Steps`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExecutionStepResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2ExecutionStep.ListExecutionStep2Request` (5):

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

