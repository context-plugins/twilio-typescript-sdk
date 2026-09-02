<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowRevision — operations

Accessor: `client.studioV2FlowRevision` · Source: `src/resources/studio-v2-flow-revision.ts` · 2 operations · Request types: namespace `StudioV2FlowRevision`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchFlowRevision

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFlowRevision(request: StudioV2FlowRevision.FetchFlowRevisionRequest, options?: RequestOptions): ApiPromise<StudioV2FlowFlowRevision, ResponseError>`
- **Wire**: `GET /v2/Flows/{Sid}/Revisions/{Revision}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV2FlowFlowRevision`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowRevision.FetchFlowRevisionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `revision` | `path` | `Revision` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2FlowFlowRevision` | `studioV2FlowFlowRevisionSchema` | `src/models/studio-v2-flow-flow-revision.ts` |

### listFlowRevision

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFlowRevision(request: StudioV2FlowRevision.ListFlowRevisionRequest, options?: RequestOptions): ApiPromise<ListFlowRevisionResponse, ResponseError>`
- **Wire**: `GET /v2/Flows/{Sid}/Revisions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFlowRevisionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowRevision.ListFlowRevisionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFlowRevisionResponse` | `listFlowRevisionResponseSchema` | `src/models/list-flow-revision-response.ts` |

