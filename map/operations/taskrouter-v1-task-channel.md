<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskChannel — operations

Accessor: `client.taskrouterV1TaskChannel` · Source: `src/resources/taskrouter-v1-task-channel.ts` · 5 operations · Request types: namespace `TaskrouterV1TaskChannel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTaskChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTaskChannel(request: TaskrouterV1TaskChannel.CreateTaskChannelRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/TaskChannels`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskChannel.CreateTaskChannelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `uniqueName` | `form` | `UniqueName` | `string` | yes |
| `channelOptimizedRouting` | `form` | `ChannelOptimizedRouting` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `taskrouterV1WorkspaceTaskChannelSchema` | `src/models/taskrouter-v1-workspace-task-channel.ts` |

### deleteTaskChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteTaskChannel(request: TaskrouterV1TaskChannel.DeleteTaskChannelRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskChannel.DeleteTaskChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchTaskChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTaskChannel(request: TaskrouterV1TaskChannel.FetchTaskChannelRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskChannel.FetchTaskChannelRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `taskrouterV1WorkspaceTaskChannelSchema` | `src/models/taskrouter-v1-workspace-task-channel.ts` |

### listTaskChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTaskChannel(request: TaskrouterV1TaskChannel.ListTaskChannelRequest, options?: RequestOptions): ApiPromise<ListTaskChannelResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskChannels`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTaskChannelResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskChannel.ListTaskChannelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTaskChannelResponse` | `listTaskChannelResponseSchema` | `src/models/list-task-channel-response.ts` |

### updateTaskChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTaskChannel(request: TaskrouterV1TaskChannel.UpdateTaskChannelRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskChannel, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/TaskChannels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTaskChannel`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskChannel.UpdateTaskChannelRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `channelOptimizedRouting` | `form` | `ChannelOptimizedRouting` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskChannel` | `taskrouterV1WorkspaceTaskChannelSchema` | `src/models/taskrouter-v1-workspace-task-channel.ts` |

