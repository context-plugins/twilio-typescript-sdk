<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersStatistics — operations

Accessor: `client.taskrouterV1WorkersStatistics` · Source: `src/resources/taskrouter-v1-workers-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkersStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkerStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkerStatistics(request: TaskrouterV1WorkersStatistics.FetchWorkerStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/Statistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkersStatistics.FetchWorkerStatisticsRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `taskQueueSid` | `query` | `TaskQueueSid` | `string` | no |
| `taskQueueName` | `query` | `TaskQueueName` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerStatistics` | `taskrouterV1WorkspaceWorkerWorkerStatisticsSchema` | `src/models/taskrouter-v1-workspace-worker-worker-statistics.ts` |

