<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueueBulkRealTimeStatistics — operations

Accessor: `client.taskrouterV1TaskQueueBulkRealTimeStatistics` · Source: `src/resources/taskrouter-v1-task-queue-bulk-real-time-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1TaskQueueBulkRealTimeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createTaskQueueBulkRealTimeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTaskQueueBulkRealTimeStatistics(request: TaskrouterV1TaskQueueBulkRealTimeStatistics.CreateTaskQueueBulkRealTimeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics, ApiError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/TaskQueues/RealTimeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys. **Optional**: omit it and the request carries no body and no `Content-Type` header at all
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueueBulkRealTimeStatistics.CreateTaskQueueBulkRealTimeStatisticsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `body` | `body` | — | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatistics` | `taskrouterV1WorkspaceTaskQueueTaskQueueBulkRealTimeStatisticsSchema` | `src/models/taskrouter-v1-workspace-task-queue-task-queue-bulk-real-time-statistics.ts` |

