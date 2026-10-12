<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkerChannel — operations

Accessor: `client.taskrouterV1WorkerChannel` · Source: `src/resources/taskrouter-v1-worker-channel.ts` · 3 operations · Request types: namespace `TaskrouterV1WorkerChannel`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchWorkerChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkerChannel(request: TaskrouterV1WorkerChannel.FetchWorkerChannelRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkerChannel.FetchWorkerChannelRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workerSid` | `path` | `WorkerSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `taskrouterV1WorkspaceWorkerWorkerChannelSchema` | `src/models/taskrouter-v1-workspace-worker-worker-channel.ts` |

### listWorkerChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWorkerChannel(request: TaskrouterV1WorkerChannel.ListWorkerChannelRequest, options?: RequestOptions): ApiPromise<ListWorkerChannelResponse, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkerChannelResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkerChannel.ListWorkerChannelRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workerSid` | `path` | `WorkerSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkerChannelResponse` | `listWorkerChannelResponseSchema` | `src/models/list-worker-channel-response.ts` |

### updateWorkerChannel

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWorkerChannel(request: TaskrouterV1WorkerChannel.UpdateWorkerChannelRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerChannel, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Channels/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerChannel`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkerChannel.UpdateWorkerChannelRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workerSid` | `path` | `WorkerSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `capacity` | `form` | `Capacity` | `number` | no |
| `available` | `form` | `Available` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerChannel` | `taskrouterV1WorkspaceWorkerWorkerChannelSchema` | `src/models/taskrouter-v1-workspace-worker-worker-channel.ts` |

