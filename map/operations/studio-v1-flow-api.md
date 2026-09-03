<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV1FlowApi — operations

Accessor: `client.studioV1FlowApi` · Source: `src/resources/studio-v1-flow-api.ts` · 3 operations · Request types: namespace `StudioV1FlowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteFlow

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteFlow(request: StudioV1FlowApi.DeleteFlowRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Flows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1FlowApi.DeleteFlowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchFlow

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFlow(request: StudioV1FlowApi.FetchFlowRequest, options?: RequestOptions): ApiPromise<StudioV1Flow, ResponseError>`
- **Wire**: `GET /v1/Flows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV1Flow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1FlowApi.FetchFlowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV1Flow` | `studioV1FlowSchema` | `src/models/studio-v1-flow.ts` |

### listFlow

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFlow(request: StudioV1FlowApi.ListFlowRequest, options?: RequestOptions): ApiPromise<ListFlowResponse, ResponseError>`
- **Wire**: `GET /v1/Flows`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFlowResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV1FlowApi.ListFlowRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFlowResponse` | `listFlowResponseSchema` | `src/models/list-flow-response.ts` |

