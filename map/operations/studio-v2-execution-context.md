<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2ExecutionContext — operations

Accessor: `client.studioV2ExecutionContext` · Source: `src/resources/studio-v2-execution-context.ts` · 1 operation · Request types: namespace `StudioV2ExecutionContext`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchExecutionContext2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchExecutionContext2(request: StudioV2ExecutionContext.FetchExecutionContext2Request, options?: RequestOptions): ApiPromise<StudioV1FlowExecutionExecutionContext, ResponseError>`
- **Wire**: `GET /v2/Flows/{FlowSid}/Executions/{ExecutionSid}/Context`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1FlowExecutionExecutionContext`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2ExecutionContext.FetchExecutionContext2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flowSid` | `path` | `FlowSid` | `string` | yes |
| `executionSid` | `path` | `ExecutionSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1FlowExecutionExecutionContext` | `studioV1FlowExecutionExecutionContextSchema` | `src/models/studio-v1-flow-execution-execution-context.ts` |

