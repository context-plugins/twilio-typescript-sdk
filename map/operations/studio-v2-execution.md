<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2Execution — operations

Accessor: `client.studioV2Execution` · Source: `src/resources/studio-v2-execution.ts` · 5 operations · Request types: namespace `StudioV2Execution`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createExecution2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createExecution2(request: StudioV2Execution.CreateExecution2Request, options?: RequestOptions): ApiPromise<StudioV2FlowExecution, ApiError>`
- **Wire**: `POST /v2/Flows/{FlowSid}/Executions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StudioV2FlowExecution`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2Execution.CreateExecution2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `from` | `form` | `From` | `string` | yes |
| `parameters` | `form` | `Parameters` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2FlowExecution` | `studioV2FlowExecutionSchema` | `src/models/studio-v2-flow-execution.ts` |

### deleteExecution2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteExecution2(request: StudioV2Execution.DeleteExecution2Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2Execution.DeleteExecution2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchExecution2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecution2(request: StudioV2Execution.FetchExecution2Request, options?: RequestOptions): ApiPromise<StudioV2FlowExecution, ApiError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV2FlowExecution`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2Execution.FetchExecution2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2FlowExecution` | `studioV2FlowExecutionSchema` | `src/models/studio-v2-flow-execution.ts` |

### listExecution2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listExecution2(request: StudioV2Execution.ListExecution2Request, options?: RequestOptions): ApiPromise<ListExecutionResponse1, ApiError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListExecutionResponse1`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2Execution.ListExecution2Request` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `status` | `query` | — | `EngagementEnumStatus` | no |
| `dateCreatedFrom` | `query` | `DateCreatedFrom` | `Date` (date-time) | no |
| `dateCreatedTo` | `query` | `DateCreatedTo` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `EngagementEnumStatus` | `engagementEnumStatusSchema` | `src/models/engagement-enum-status.ts` |
| `ListExecutionResponse1` | `listExecutionResponse1Schema` | `src/models/list-execution-response1.ts` |

### updateExecution2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateExecution2(request: StudioV2Execution.UpdateExecution2Request, options?: RequestOptions): ApiPromise<StudioV2FlowExecution, ApiError>`
- **Wire**: `POST /v2/Flows/{FlowSid}/Executions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `StudioV2FlowExecution`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2Execution.UpdateExecution2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `EngagementEnumStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `EngagementEnumStatus` | `engagementEnumStatusSchema` | `src/models/engagement-enum-status.ts` |
| `StudioV2FlowExecution` | `studioV2FlowExecutionSchema` | `src/models/studio-v2-flow-execution.ts` |

