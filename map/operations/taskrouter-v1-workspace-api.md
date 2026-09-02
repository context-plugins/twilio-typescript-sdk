<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceApi — operations

Accessor: `client.taskrouterV1WorkspaceApi` · Source: `src/resources/taskrouter-v1-workspace-api.ts` · 5 operations · Request types: namespace `TaskrouterV1WorkspaceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createWorkspace

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWorkspace(request: TaskrouterV1WorkspaceApi.CreateWorkspaceRequest, options?: RequestOptions): ApiPromise<TaskrouterV1Workspace, ResponseError>`
- **Wire**: `POST /v1/Workspaces`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceApi.CreateWorkspaceRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `eventCallbackUrl` | `form` | `EventCallbackUrl` | `string` | no |
| `eventsFilter` | `form` | `EventsFilter` | `string` | no |
| `multiTaskEnabled` | `form` | `MultiTaskEnabled` | `boolean` | no |
| `template` | `form` | `Template` | `string` | no |
| `prioritizeQueueOrder` | `form` | `PrioritizeQueueOrder` | `WorkspaceEnumQueueOrder` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceEnumQueueOrder` | `workspaceEnumQueueOrderSchema` | `src/models/workspace-enum-queue-order.ts` |
| `TaskrouterV1Workspace` | `taskrouterV1WorkspaceSchema` | `src/models/taskrouter-v1-workspace.ts` |

### deleteWorkspace

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWorkspace(request: TaskrouterV1WorkspaceApi.DeleteWorkspaceRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Workspaces/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceApi.DeleteWorkspaceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchWorkspace

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkspace(request: TaskrouterV1WorkspaceApi.FetchWorkspaceRequest, options?: RequestOptions): ApiPromise<TaskrouterV1Workspace, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceApi.FetchWorkspaceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1Workspace` | `taskrouterV1WorkspaceSchema` | `src/models/taskrouter-v1-workspace.ts` |

### listWorkspace

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWorkspace(request: TaskrouterV1WorkspaceApi.ListWorkspaceRequest, options?: RequestOptions): ApiPromise<ListWorkspaceResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkspaceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceApi.ListWorkspaceRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkspaceResponse` | `listWorkspaceResponseSchema` | `src/models/list-workspace-response.ts` |

### updateWorkspace

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWorkspace(request: TaskrouterV1WorkspaceApi.UpdateWorkspaceRequest, options?: RequestOptions): ApiPromise<TaskrouterV1Workspace, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1Workspace`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceApi.UpdateWorkspaceRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `defaultActivitySid` | `form` | `DefaultActivitySid` | `string` | no |
| `eventCallbackUrl` | `form` | `EventCallbackUrl` | `string` | no |
| `eventsFilter` | `form` | `EventsFilter` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `multiTaskEnabled` | `form` | `MultiTaskEnabled` | `boolean` | no |
| `timeoutActivitySid` | `form` | `TimeoutActivitySid` | `string` | no |
| `prioritizeQueueOrder` | `form` | `PrioritizeQueueOrder` | `WorkspaceEnumQueueOrder` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `WorkspaceEnumQueueOrder` | `workspaceEnumQueueOrderSchema` | `src/models/workspace-enum-queue-order.ts` |
| `TaskrouterV1Workspace` | `taskrouterV1WorkspaceSchema` | `src/models/taskrouter-v1-workspace.ts` |

