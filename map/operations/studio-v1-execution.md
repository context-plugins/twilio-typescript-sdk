<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1Execution — operations

Accessor: `client.studioV1Execution` · Source: `src/resources/studio-v1-execution.ts` · 5 operations · Request types: namespace `StudioV1Execution`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createExecution

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExecution(request: StudioV1Execution.CreateExecutionRequest, options?: RequestOptions): ApiPromise<StudioV1FlowExecution, ResponseError>`
- **Wire**: `POST /v1/Flows/{FlowSid}/Executions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Execution.CreateExecutionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `from` | `form` | `From` | `string` | yes |
| `parameters` | `form` | `Parameters` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecution` | `studioV1FlowExecutionSchema` | `src/models/studio-v1-flow-execution.ts` |

### deleteExecution

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteExecution(request: StudioV1Execution.DeleteExecutionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Execution.DeleteExecutionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchExecution

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecution(request: StudioV1Execution.FetchExecutionRequest, options?: RequestOptions): ApiPromise<StudioV1FlowExecution, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecution`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Execution.FetchExecutionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecution` | `studioV1FlowExecutionSchema` | `src/models/studio-v1-flow-execution.ts` |

### listExecution

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExecution(request: StudioV1Execution.ListExecutionRequest, options?: RequestOptions): ApiPromise<ListExecutionResponse, ResponseError>`
- **Wire**: `GET /v1/Flows/{FlowSid}/Executions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExecutionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Execution.ListExecutionRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `dateCreatedFrom` | `query` | `DateCreatedFrom` | `Date` (date-time) | no |
| `dateCreatedTo` | `query` | `DateCreatedTo` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListExecutionResponse` | `listExecutionResponseSchema` | `src/models/list-execution-response.ts` |

### updateExecution

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateExecution(request: StudioV1Execution.UpdateExecutionRequest, options?: RequestOptions): ApiPromise<StudioV1FlowExecution, ResponseError>`
- **Wire**: `POST /v1/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV1FlowExecution`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1Execution.UpdateExecutionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `ExecutionEnumStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ExecutionEnumStatus` | `executionEnumStatusSchema` | `src/models/execution-enum-status.ts` |
| `StudioV1FlowExecution` | `studioV1FlowExecutionSchema` | `src/models/studio-v1-flow-execution.ts` |

