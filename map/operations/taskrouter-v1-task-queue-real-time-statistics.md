<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueRealTimeStatistics — operations

Accessor: `client.taskrouterV1TaskQueueRealTimeStatistics` · Source: `src/resources/taskrouter-v1-task-queue-real-time-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1TaskQueueRealTimeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchTaskQueueRealTimeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTaskQueueRealTimeStatistics(request: TaskrouterV1TaskQueueRealTimeStatistics.FetchTaskQueueRealTimeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/{TaskQueueSid}/RealTimeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueueRealTimeStatistics.FetchTaskQueueRealTimeStatisticsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskQueueSid` | `path` | `TaskQueueSid` | `string` | yes |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics` | `taskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatisticsSchema` | `src/models/taskrouter-v1-workspace-task-queue-task-queue-real-time-statistics.ts` |

