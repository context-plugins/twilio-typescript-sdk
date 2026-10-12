<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkersRealTimeStatistics — operations

Accessor: `client.taskrouterV1WorkersRealTimeStatistics` · Source: `src/resources/taskrouter-v1-workers-real-time-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkersRealTimeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchWorkersRealTimeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkersRealTimeStatistics(request: TaskrouterV1WorkersRealTimeStatistics.FetchWorkersRealTimeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics, ApiError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Workers/RealTimeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkersRealTimeStatistics.FetchWorkersRealTimeStatisticsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkerWorkersRealTimeStatistics` | `taskrouterV1WorkspaceWorkerWorkersRealTimeStatisticsSchema` | `src/models/taskrouter-v1-workspace-worker-workers-real-time-statistics.ts` |

