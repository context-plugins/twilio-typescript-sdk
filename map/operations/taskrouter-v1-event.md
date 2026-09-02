<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1Event — operations

Accessor: `client.taskrouterV1Event` · Source: `src/resources/taskrouter-v1-event.ts` · 2 operations · Request types: namespace `TaskrouterV1Event`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchEvent

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchEvent(request: TaskrouterV1Event.FetchEventRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceEvent, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Events/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceEvent`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Event.FetchEventRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceEvent` | `taskrouterV1WorkspaceEventSchema` | `src/models/taskrouter-v1-workspace-event.ts` |

### listEvent

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listEvent(request: TaskrouterV1Event.ListEventRequest, options?: RequestOptions): ApiPromise<ListEventResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Events`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListEventResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1Event.ListEventRequest` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `endDate` | `query` | `EndDate` | `Date` (date-time) | no |
| `eventType` | `query` | `EventType` | `string` | no |
| `minutes` | `query` | `Minutes` | `number` | no |
| `reservationSid` | `query` | `ReservationSid` | `string` | no |
| `startDate` | `query` | `StartDate` | `Date` (date-time) | no |
| `taskQueueSid` | `query` | `TaskQueueSid` | `string` | no |
| `taskSid` | `query` | `TaskSid` | `string` | no |
| `workerSid` | `query` | `WorkerSid` | `string` | no |
| `workflowSid` | `query` | `WorkflowSid` | `string` | no |
| `taskChannel` | `query` | `TaskChannel` | `string` | no |
| `sid` | `query` | `Sid` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListEventResponse` | `listEventResponseSchema` | `src/models/list-event-response.ts` |

