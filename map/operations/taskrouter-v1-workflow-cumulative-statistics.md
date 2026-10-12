<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkflowCumulativeStatistics — operations

Accessor: `client.taskrouterV1WorkflowCumulativeStatistics` · Source: `src/resources/taskrouter-v1-workflow-cumulative-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkflowCumulativeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchWorkflowCumulativeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkflowCumulativeStatistics(request: TaskrouterV1WorkflowCumulativeStatistics.FetchWorkflowCumulativeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workflows/{WorkflowSid}/CumulativeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkflowCumulativeStatistics.FetchWorkflowCumulativeStatisticsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workflowSid` | `path` | `WorkflowSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkflowWorkflowCumulativeStatistics` | `taskrouterV1WorkspaceWorkflowWorkflowCumulativeStatisticsSchema` | `src/models/taskrouter-v1-workspace-workflow-workflow-cumulative-statistics.ts` |

