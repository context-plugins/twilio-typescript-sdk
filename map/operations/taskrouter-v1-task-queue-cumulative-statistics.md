<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueCumulativeStatistics — operations

Accessor: `client.taskrouterV1TaskQueueCumulativeStatistics` · Source: `src/resources/taskrouter-v1-task-queue-cumulative-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1TaskQueueCumulativeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchTaskQueueCumulativeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTaskQueueCumulativeStatistics(request: TaskrouterV1TaskQueueCumulativeStatistics.FetchTaskQueueCumulativeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/CumulativeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueueCumulativeStatistics.FetchTaskQueueCumulativeStatisticsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskQueueSid` | `path` | `TaskQueueSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics` | `taskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatisticsSchema` | `src/models/taskrouter-v1-workspace-task-queue-task-queue-cumulative-statistics.ts` |

