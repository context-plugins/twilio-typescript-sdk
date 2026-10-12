<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Workflow — operations

Accessor: `client.taskrouterV1Workflow` · Source: `src/resources/taskrouter-v1-workflow.ts` · 5 operations · Request types: namespace `TaskrouterV1Workflow`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createWorkflow

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createWorkflow(request: TaskrouterV1Workflow.CreateWorkflowRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Workflows`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Workflow.CreateWorkflowRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `configuration` | `form` | `Configuration` | `string` | yes |
| `assignmentCallbackUrl` | `form` | `AssignmentCallbackUrl` | `string` | no |
| `fallbackAssignmentCallbackUrl` | `form` | `FallbackAssignmentCallbackUrl` | `string` | no |
| `taskReservationTimeout` | `form` | `TaskReservationTimeout` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `taskrouterV1WorkspaceWorkflowSchema` | `src/models/taskrouter-v1-workspace-workflow.ts` |

### deleteWorkflow

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteWorkflow(request: TaskrouterV1Workflow.DeleteWorkflowRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Workflow.DeleteWorkflowRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchWorkflow

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkflow(request: TaskrouterV1Workflow.FetchWorkflowRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Workflow.FetchWorkflowRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `taskrouterV1WorkspaceWorkflowSchema` | `src/models/taskrouter-v1-workspace-workflow.ts` |

### listWorkflow

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listWorkflow(request: TaskrouterV1Workflow.ListWorkflowRequest, options?: RequestOptions): ApiPromise<ListWorkflowResponse, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListWorkflowResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Workflow.ListWorkflowRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListWorkflowResponse` | `listWorkflowResponseSchema` | `src/models/list-workflow-response.ts` |

### updateWorkflow

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateWorkflow(request: TaskrouterV1Workflow.UpdateWorkflowRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflow, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Workflows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceWorkflow`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Workflow.UpdateWorkflowRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `assignmentCallbackUrl` | `form` | `AssignmentCallbackUrl` | `string` | no |
| `fallbackAssignmentCallbackUrl` | `form` | `FallbackAssignmentCallbackUrl` | `string` | no |
| `configuration` | `form` | `Configuration` | `string` | no |
| `taskReservationTimeout` | `form` | `TaskReservationTimeout` | `number` | no |
| `reEvaluateTasks` | `form` | `ReEvaluateTasks` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflow` | `taskrouterV1WorkspaceWorkflowSchema` | `src/models/taskrouter-v1-workspace-workflow.ts` |

