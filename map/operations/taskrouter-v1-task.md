<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Task — operations

Accessor: `client.taskrouterV1Task` · Source: `src/resources/taskrouter-v1-task.ts` · 5 operations · Request types: namespace `TaskrouterV1Task`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTask

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTask(request: TaskrouterV1Task.CreateTaskRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Task.CreateTaskRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `timeout` | `form` | `Timeout` | `number` | no |
| `priority` | `form` | `Priority` | `number` | no |
| `taskChannel` | `form` | `TaskChannel` | `string` | no |
| `workflowSid` | `form` | `WorkflowSid` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `virtualStartTime` | `form` | `VirtualStartTime` | `Date` (date-time) | no |
| `routingTarget` | `form` | `RoutingTarget` | `string` | no |
| `ignoreCapacity` | `form` | `IgnoreCapacity` | `string` | no |
| `taskQueueSid` | `form` | `TaskQueueSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTask` | `taskrouterV1WorkspaceTaskSchema` | `src/models/taskrouter-v1-workspace-task.ts` |

### deleteTask

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTask(request: TaskrouterV1Task.DeleteTaskRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Task.DeleteTaskRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |

### fetchTask

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTask(request: TaskrouterV1Task.FetchTaskRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Task.FetchTaskRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTask` | `taskrouterV1WorkspaceTaskSchema` | `src/models/taskrouter-v1-workspace-task.ts` |

### listTask

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTask(request: TaskrouterV1Task.ListTaskRequest, options?: RequestOptions): ApiPromise<ListTaskResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTaskResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Task.ListTaskRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `priority` | `query` | `Priority` | `number` | no |
| `assignmentStatus` | `query` | `AssignmentStatus` | `string[]` | no |
| `workflowSid` | `query` | `WorkflowSid` | `string` | no |
| `workflowName` | `query` | `WorkflowName` | `string` | no |
| `taskQueueSid` | `query` | `TaskQueueSid` | `string` | no |
| `taskQueueName` | `query` | `TaskQueueName` | `string` | no |
| `evaluateTaskAttributes` | `query` | `EvaluateTaskAttributes` | `string` | no |
| `routingTarget` | `query` | `RoutingTarget` | `string` | no |
| `ordering` | `query` | `Ordering` | `string` | no |
| `hasAddons` | `query` | `HasAddons` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTaskResponse` | `listTaskResponseSchema` | `src/models/list-task-response.ts` |

### updateTask

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTask(request: TaskrouterV1Task.UpdateTaskRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTask, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTask`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Task.UpdateTaskRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `attributes` | `form` | `Attributes` | `string` | no |
| `assignmentStatus` | `form` | `AssignmentStatus` | `TaskEnumStatus` | no |
| `reason` | `form` | `Reason` | `string` | no |
| `priority` | `form` | `Priority` | `number` | no |
| `taskChannel` | `form` | `TaskChannel` | `string` | no |
| `virtualStartTime` | `form` | `VirtualStartTime` | `Date` (date-time) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskEnumStatus` | `taskEnumStatusSchema` | `src/models/task-enum-status.ts` |
| `TaskrouterV1WorkspaceTask` | `taskrouterV1WorkspaceTaskSchema` | `src/models/taskrouter-v1-workspace-task.ts` |

