<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkerStatistics — operations

Accessor: `client.taskrouterV1WorkerStatistics` · Source: `src/resources/taskrouter-v1-worker-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkerStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkerInstanceStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkerInstanceStatistics(request: TaskrouterV1WorkerStatistics.FetchWorkerInstanceStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/{WorkerSid}/Statistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkerStatistics.FetchWorkerInstanceStatisticsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `workerSid` | `path` | `WorkerSid` | `string` | yes |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkerInstanceStatistics` | `taskrouterV1WorkspaceWorkerWorkerInstanceStatisticsSchema` | `src/models/taskrouter-v1-workspace-worker-worker-instance-statistics.ts` |

