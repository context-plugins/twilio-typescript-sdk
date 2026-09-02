<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowStatistics — operations

Accessor: `client.taskrouterV1WorkflowStatistics` · Source: `src/resources/taskrouter-v1-workflow-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkflowStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkflowStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkflowStatistics(request: TaskrouterV1WorkflowStatistics.FetchWorkflowStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/Statistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkflowStatistics.FetchWorkflowStatisticsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workflowSid` | `path` | `WorkflowSid` | `string` | yes |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowStatistics` | `taskrouterV1WorkspaceWorkflowWorkflowStatisticsSchema` | `src/models/taskrouter-v1-workspace-workflow-workflow-statistics.ts` |

