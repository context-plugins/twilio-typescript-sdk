<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Activity — operations

Accessor: `client.taskrouterV1Activity` · Source: `src/resources/taskrouter-v1-activity.ts` · 5 operations · Request types: namespace `TaskrouterV1Activity`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createActivity

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createActivity(request: TaskrouterV1Activity.CreateActivityRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Activities`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Activity.CreateActivityRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `available` | `form` | `Available` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceActivity` | `taskrouterV1WorkspaceActivitySchema` | `src/models/taskrouter-v1-workspace-activity.ts` |

### deleteActivity

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteActivity(request: TaskrouterV1Activity.DeleteActivityRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Activity.DeleteActivityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchActivity

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchActivity(request: TaskrouterV1Activity.FetchActivityRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Activity.FetchActivityRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceActivity` | `taskrouterV1WorkspaceActivitySchema` | `src/models/taskrouter-v1-workspace-activity.ts` |

### listActivity

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listActivity(request: TaskrouterV1Activity.ListActivityRequest, options?: RequestOptions): ApiPromise<ListActivityResponse, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Activities`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListActivityResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Activity.ListActivityRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `available` | `query` | `Available` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListActivityResponse` | `listActivityResponseSchema` | `src/models/list-activity-response.ts` |

### updateActivity

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateActivity(request: TaskrouterV1Activity.UpdateActivityRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceActivity, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Activities/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceActivity`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Activity.UpdateActivityRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceActivity` | `taskrouterV1WorkspaceActivitySchema` | `src/models/taskrouter-v1-workspace-activity.ts` |

