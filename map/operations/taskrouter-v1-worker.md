<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Worker — operations

Accessor: `client.taskrouterV1Worker` · Source: `src/resources/taskrouter-v1-worker.ts` · 5 operations · Request types: namespace `TaskrouterV1Worker`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createWorker

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWorker(request: TaskrouterV1Worker.CreateWorkerRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Workers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Worker.CreateWorkerRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `activitySid` | `form` | `ActivitySid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorker` | `taskrouterV1WorkspaceWorkerSchema` | `src/models/taskrouter-v1-workspace-worker.ts` |

### deleteWorker

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWorker(request: TaskrouterV1Worker.DeleteWorkerRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Worker.DeleteWorkerRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |

### fetchWorker

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorker(request: TaskrouterV1Worker.FetchWorkerRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Worker.FetchWorkerRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorker` | `taskrouterV1WorkspaceWorkerSchema` | `src/models/taskrouter-v1-workspace-worker.ts` |

### listWorker

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWorker(request: TaskrouterV1Worker.ListWorkerRequest, options?: RequestOptions): ApiPromise<ListWorkerResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkerResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Worker.ListWorkerRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `activityName` | `query` | `ActivityName` | `string` | no |
| `activitySid` | `query` | `ActivitySid` | `string` | no |
| `available` | `query` | `Available` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `targetWorkersExpression` | `query` | `TargetWorkersExpression` | `string` | no |
| `taskQueueName` | `query` | `TaskQueueName` | `string` | no |
| `taskQueueSid` | `query` | `TaskQueueSid` | `string` | no |
| `ordering` | `query` | `Ordering` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkerResponse` | `listWorkerResponseSchema` | `src/models/list-worker-response.ts` |

### updateWorker

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWorker(request: TaskrouterV1Worker.UpdateWorkerRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorker, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Workers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceWorker`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Worker.UpdateWorkerRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `activitySid` | `form` | `ActivitySid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `rejectPendingReservations` | `form` | `RejectPendingReservations` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorker` | `taskrouterV1WorkspaceWorkerSchema` | `src/models/taskrouter-v1-workspace-worker.ts` |

