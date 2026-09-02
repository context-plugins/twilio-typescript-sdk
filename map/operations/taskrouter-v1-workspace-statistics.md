<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceStatistics — operations

Accessor: `client.taskrouterV1WorkspaceStatistics` · Source: `src/resources/taskrouter-v1-workspace-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkspaceStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkspaceStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkspaceStatistics(request: TaskrouterV1WorkspaceStatistics.FetchWorkspaceStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkspaceStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Statistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkspaceStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceStatistics.FetchWorkspaceStatisticsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkspaceStatistics` | `taskrouterV1WorkspaceWorkspaceStatisticsSchema` | `src/models/taskrouter-v1-workspace-workspace-statistics.ts` |

