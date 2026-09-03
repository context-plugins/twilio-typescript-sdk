<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1WorkspaceCumulativeStatistics — operations

Accessor: `client.taskrouterV1WorkspaceCumulativeStatistics` · Source: `src/resources/taskrouter-v1-workspace-cumulative-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1WorkspaceCumulativeStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchWorkspaceCumulativeStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchWorkspaceCumulativeStatistics(request: TaskrouterV1WorkspaceCumulativeStatistics.FetchWorkspaceCumulativeStatisticsRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceWorkspaceCumulativeStatistics, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/CumulativeStatistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1WorkspaceCumulativeStatistics.FetchWorkspaceCumulativeStatisticsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceWorkspaceCumulativeStatistics` | `taskrouterV1WorkspaceWorkspaceCumulativeStatisticsSchema` | `src/models/taskrouter-v1-workspace-workspace-cumulative-statistics.ts` |

