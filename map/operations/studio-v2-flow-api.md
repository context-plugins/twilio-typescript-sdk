<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowApi — operations

Accessor: `client.studioV2FlowApi` · Source: `src/resources/studio-v2-flow-api.ts` · 5 operations · Request types: namespace `StudioV2FlowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createFlow

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createFlow(request: StudioV2FlowApi.CreateFlowRequest, options?: RequestOptions): ApiPromise<StudioV2Flow, ResponseError>`
- **Wire**: `POST /v2/Flows`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV2Flow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowApi.CreateFlowRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `status` | `form` | `Status` | `FlowEnumStatus` | yes |
| `definition` | `form` | `Definition` | `Record<string, unknown>` | yes |
| `commitMessage` | `form` | `CommitMessage` | `string` | no |
| `authorSid` | `form` | `AuthorSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlowEnumStatus` | `flowEnumStatusSchema` | `src/models/flow-enum-status.ts` |
| `StudioV2Flow` | `studioV2FlowSchema` | `src/models/studio-v2-flow.ts` |

### deleteFlow2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteFlow2(request: StudioV2FlowApi.DeleteFlow2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Flows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowApi.DeleteFlow2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchFlow2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFlow2(request: StudioV2FlowApi.FetchFlow2Request, options?: RequestOptions): ApiPromise<StudioV2Flow, ResponseError>`
- **Wire**: `GET /v2/Flows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV2Flow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowApi.FetchFlow2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2Flow` | `studioV2FlowSchema` | `src/models/studio-v2-flow.ts` |

### listFlow2

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFlow2(request: StudioV2FlowApi.ListFlow2Request, options?: RequestOptions): ApiPromise<ListFlowResponse1, ResponseError>`
- **Wire**: `GET /v2/Flows`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFlowResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowApi.ListFlow2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFlowResponse1` | `listFlowResponse1Schema` | `src/models/list-flow-response1.ts` |

### updateFlow

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFlow(request: StudioV2FlowApi.UpdateFlowRequest, options?: RequestOptions): ApiPromise<StudioV2Flow, ResponseError>`
- **Wire**: `POST /v2/Flows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV2Flow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowApi.UpdateFlowRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `FlowEnumStatus` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `definition` | `form` | `Definition` | `Record<string, unknown>` | no |
| `commitMessage` | `form` | `CommitMessage` | `string` | no |
| `authorSid` | `form` | `AuthorSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlowEnumStatus` | `flowEnumStatusSchema` | `src/models/flow-enum-status.ts` |
| `StudioV2Flow` | `studioV2FlowSchema` | `src/models/studio-v2-flow.ts` |

