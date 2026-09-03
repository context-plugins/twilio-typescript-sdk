<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueue — operations

Accessor: `client.taskrouterV1TaskQueue` · Source: `src/resources/taskrouter-v1-task-queue.ts` · 5 operations · Request types: namespace `TaskrouterV1TaskQueue`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTaskQueue

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTaskQueue(request: TaskrouterV1TaskQueue.CreateTaskQueueRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueue.CreateTaskQueueRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `targetWorkers` | `form` | `TargetWorkers` | `string` | no |
| `maxReservedWorkers` | `form` | `MaxReservedWorkers` | `number` | no |
| `taskOrder` | `form` | `TaskOrder` | `TaskQueueEnumTaskOrder` | no |
| `reservationActivitySid` | `form` | `ReservationActivitySid` | `string` | no |
| `assignmentActivitySid` | `form` | `AssignmentActivitySid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskQueueEnumTaskOrder` | `taskQueueEnumTaskOrderSchema` | `src/models/task-queue-enum-task-order.ts` |
| `TaskrouterV1WorkspaceTaskQueue` | `taskrouterV1WorkspaceTaskQueueSchema` | `src/models/taskrouter-v1-workspace-task-queue.ts` |

### deleteTaskQueue

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTaskQueue(request: TaskrouterV1TaskQueue.DeleteTaskQueueRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueue.DeleteTaskQueueRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTaskQueue

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTaskQueue(request: TaskrouterV1TaskQueue.FetchTaskQueueRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueue.FetchTaskQueueRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskQueue` | `taskrouterV1WorkspaceTaskQueueSchema` | `src/models/taskrouter-v1-workspace-task-queue.ts` |

### listTaskQueue

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTaskQueue(request: TaskrouterV1TaskQueue.ListTaskQueueRequest, options?: RequestOptions): ApiPromise<ListTaskQueueResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTaskQueueResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueue.ListTaskQueueRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `evaluateWorkerAttributes` | `query` | `EvaluateWorkerAttributes` | `string` | no |
| `workerSid` | `query` | `WorkerSid` | `string` | no |
| `ordering` | `query` | `Ordering` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTaskQueueResponse` | `listTaskQueueResponseSchema` | `src/models/list-task-queue-response.ts` |

### updateTaskQueue

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTaskQueue(request: TaskrouterV1TaskQueue.UpdateTaskQueueRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueue, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTaskQueue`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueue.UpdateTaskQueueRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `targetWorkers` | `form` | `TargetWorkers` | `string` | no |
| `reservationActivitySid` | `form` | `ReservationActivitySid` | `string` | no |
| `assignmentActivitySid` | `form` | `AssignmentActivitySid` | `string` | no |
| `maxReservedWorkers` | `form` | `MaxReservedWorkers` | `number` | no |
| `taskOrder` | `form` | `TaskOrder` | `TaskQueueEnumTaskOrder` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskQueueEnumTaskOrder` | `taskQueueEnumTaskOrderSchema` | `src/models/task-queue-enum-task-order.ts` |
| `TaskrouterV1WorkspaceTaskQueue` | `taskrouterV1WorkspaceTaskQueueSchema` | `src/models/taskrouter-v1-workspace-task-queue.ts` |

