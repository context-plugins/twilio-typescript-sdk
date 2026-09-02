<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskQueuesStatistics — operations

Accessor: `client.taskrouterV1TaskQueuesStatistics` · Source: `src/resources/taskrouter-v1-task-queues-statistics.ts` · 1 operation · Request types: namespace `TaskrouterV1TaskQueuesStatistics`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listTaskQueuesStatistics

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTaskQueuesStatistics(request: TaskrouterV1TaskQueuesStatistics.ListTaskQueuesStatisticsRequest, options?: RequestOptions): ApiPromise<ListTaskQueuesStatisticsResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/TaskQueues/Statistics`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTaskQueuesStatisticsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskQueuesStatistics.ListTaskQueuesStatisticsRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `splitByWaitTime` | `query` | `SplitByWaitTime` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListTaskQueuesStatisticsResponse` | `listTaskQueuesStatisticsResponseSchema` | `src/models/list-task-queues-statistics-response.ts` |

