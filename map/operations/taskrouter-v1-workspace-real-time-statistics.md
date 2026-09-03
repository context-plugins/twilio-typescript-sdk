<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceRealTimeStatistics — operations

Accessor: `client.taskrouterV1WorkspaceRealTimeStatistics` · Source: `src/resources/taskrouter-v1-workspace-real-time-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkspaceRealTimeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkspaceRealTimeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkspaceRealTimeStatistics(request: TaskrouterV1WorkspaceRealTimeStatistics.FetchWorkspaceRealTimeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkspaceRealTimeStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/RealTimeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceRealTimeStatistics.FetchWorkspaceRealTimeStatisticsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkspaceRealTimeStatistics` | `taskrouterV1WorkspaceWorkspaceRealTimeStatisticsSchema` | `src/models/taskrouter-v1-workspace-workspace-real-time-statistics.ts` |

