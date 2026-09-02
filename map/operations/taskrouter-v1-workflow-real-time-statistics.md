<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowRealTimeStatistics — operations

Accessor: `client.taskrouterV1WorkflowRealTimeStatistics` · Source: `src/resources/taskrouter-v1-workflow-real-time-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkflowRealTimeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkflowRealTimeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkflowRealTimeStatistics(request: TaskrouterV1WorkflowRealTimeStatistics.FetchWorkflowRealTimeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/RealTimeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkflowRealTimeStatistics.FetchWorkflowRealTimeStatisticsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workflowSid` | `path` | `WorkflowSid` | `string` | yes |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowRealTimeStatistics` | `taskrouterV1WorkspaceWorkflowWorkflowRealTimeStatisticsSchema` | `src/models/taskrouter-v1-workspace-workflow-workflow-real-time-statistics.ts` |

