<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersCumulativeStatistics — operations

Accessor: `client.taskrouterV1WorkersCumulativeStatistics` · Source: `src/resources/taskrouter-v1-workers-cumulative-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkersCumulativeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkersCumulativeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkersCumulativeStatistics(request: TaskrouterV1WorkersCumulativeStatistics.FetchWorkersCumulativeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/CumulativeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkersCumulativeStatistics.FetchWorkersCumulativeStatisticsRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics` | `taskrouterV1WorkspaceWorkerWorkersCumulativeStatisticsSchema` | `src/models/taskrouter-v1-workspace-worker-workers-cumulative-statistics.ts` |

