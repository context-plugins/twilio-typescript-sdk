<!-- Generated file — do not edit; regenerated with the SDK. -->

# TaskrouterV1TaskReservation — operations

Accessor: `client.taskrouterV1TaskReservation` · Source: `src/resources/taskrouter-v1-task-reservation.ts` · 3 operations · Request types: namespace `TaskrouterV1TaskReservation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchTaskReservation

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTaskReservation(request: TaskrouterV1TaskReservation.FetchTaskReservationRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskReservation.FetchTaskReservationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskSid` | `path` | `TaskSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `taskrouterV1WorkspaceTaskTaskReservationSchema` | `src/models/taskrouter-v1-workspace-task-task-reservation.ts` |

### listTaskReservation

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listTaskReservation(request: TaskrouterV1TaskReservation.ListTaskReservationRequest, options?: RequestOptions): ApiPromise<ListTaskReservationResponse, ResponseError>`
- **Wire**: `GET /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListTaskReservationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskReservation.ListTaskReservationRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskSid` | `path` | `TaskSid` | `string` | yes |
| `reservationStatus` | `query` | `ReservationStatus` | `TaskReservationEnumStatus` | no |
| `workerSid` | `query` | `WorkerSid` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskReservationEnumStatus` | `taskReservationEnumStatusSchema` | `src/models/task-reservation-enum-status.ts` |
| `ListTaskReservationResponse` | `listTaskReservationResponseSchema` | `src/models/list-task-reservation-response.ts` |

### updateTaskReservation

- **Server**: `default8` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTaskReservation(request: TaskrouterV1TaskReservation.UpdateTaskReservationRequest, options?: RequestOptions): ApiPromise<TaskrouterV1WorkspaceTaskTaskReservation, ResponseError>`
- **Wire**: `POST /v1/Workspaces/{WorkspaceSid}/Tasks/{TaskSid}/Reservations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `TaskrouterV1WorkspaceTaskTaskReservation`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TaskrouterV1TaskReservation.UpdateTaskReservationRequest` (58):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `workspaceSid` | `path` | `WorkspaceSid` | `string` | yes |
| `taskSid` | `path` | `TaskSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `ifMatch` | `header` | `If-Match` | `string` | no |
| `reservationStatus` | `form` | `ReservationStatus` | `TaskReservationEnumStatus` | no |
| `workerActivitySid` | `form` | `WorkerActivitySid` | `string` | no |
| `instruction` | `form` | `Instruction` | `string` | no |
| `dequeuePostWorkActivitySid` | `form` | `DequeuePostWorkActivitySid` | `string` | no |
| `dequeueFrom` | `form` | `DequeueFrom` | `string` | no |
| `dequeueRecord` | `form` | `DequeueRecord` | `string` | no |
| `dequeueTimeout` | `form` | `DequeueTimeout` | `number` | no |
| `dequeueTo` | `form` | `DequeueTo` | `string` | no |
| `dequeueStatusCallbackUrl` | `form` | `DequeueStatusCallbackUrl` | `string` | no |
| `callFrom` | `form` | `CallFrom` | `string` | no |
| `callRecord` | `form` | `CallRecord` | `string` | no |
| `callTimeout` | `form` | `CallTimeout` | `number` | no |
| `callTo` | `form` | `CallTo` | `string` | no |
| `callUrl` | `form` | `CallUrl` | `string` | no |
| `callStatusCallbackUrl` | `form` | `CallStatusCallbackUrl` | `string` | no |
| `callAccept` | `form` | `CallAccept` | `boolean` | no |
| `redirectCallSid` | `form` | `RedirectCallSid` | `string` | no |
| `redirectAccept` | `form` | `RedirectAccept` | `boolean` | no |
| `redirectUrl` | `form` | `RedirectUrl` | `string` | no |
| `to` | `form` | `To` | `string` | no |
| `from` | `form` | `From` | `string` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `statusCallbackEvent` | `form` | `StatusCallbackEvent` | `CallEnumEvent[]` | no |
| `timeout` | `form` | `Timeout` | `number` | no |
| `record` | `form` | `Record` | `boolean` | no |
| `muted` | `form` | `Muted` | `boolean` | no |
| `beep` | `form` | `Beep` | `string` | no |
| `startConferenceOnEnter` | `form` | `StartConferenceOnEnter` | `boolean` | no |
| `endConferenceOnExit` | `form` | `EndConferenceOnExit` | `boolean` | no |
| `waitUrl` | `form` | `WaitUrl` | `string` | no |
| `waitMethod` | `form` | `WaitMethod` | `AmdStatusCallbackMethod` | no |
| `earlyMedia` | `form` | `EarlyMedia` | `boolean` | no |
| `maxParticipants` | `form` | `MaxParticipants` | `number` | no |
| `conferenceStatusCallback` | `form` | `ConferenceStatusCallback` | `string` | no |
| `conferenceStatusCallbackMethod` | `form` | `ConferenceStatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `conferenceStatusCallbackEvent` | `form` | `ConferenceStatusCallbackEvent` | `TaskReservationEnumConferenceEvent[]` | no |
| `conferenceRecord` | `form` | `ConferenceRecord` | `string` | no |
| `conferenceTrim` | `form` | `ConferenceTrim` | `string` | no |
| `recordingChannels` | `form` | `RecordingChannels` | `string` | no |
| `recordingStatusCallback` | `form` | `RecordingStatusCallback` | `string` | no |
| `recordingStatusCallbackMethod` | `form` | `RecordingStatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `conferenceRecordingStatusCallback` | `form` | `ConferenceRecordingStatusCallback` | `string` | no |
| `conferenceRecordingStatusCallbackMethod` | `form` | `ConferenceRecordingStatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `region` | `form` | `Region` | `string` | no |
| `sipAuthUsername` | `form` | `SipAuthUsername` | `string` | no |
| `sipAuthPassword` | `form` | `SipAuthPassword` | `string` | no |
| `dequeueStatusCallbackEvent` | `form` | `DequeueStatusCallbackEvent` | `string[]` | no |
| `postWorkActivitySid` | `form` | `PostWorkActivitySid` | `string` | no |
| `supervisorMode` | `form` | `SupervisorMode` | `TaskReservationEnumSupervisorMode` | no |
| `supervisor` | `form` | `Supervisor` | `string` | no |
| `endConferenceOnCustomerExit` | `form` | `EndConferenceOnCustomerExit` | `boolean` | no |
| `beepOnCustomerEntrance` | `form` | `BeepOnCustomerEntrance` | `boolean` | no |
| `jitterBufferSize` | `form` | `JitterBufferSize` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `TaskReservationEnumStatus` | `taskReservationEnumStatusSchema` | `src/models/task-reservation-enum-status.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `CallEnumEvent` | `callEnumEventSchema` | `src/models/call-enum-event.ts` |
| `TaskReservationEnumConferenceEvent` | `taskReservationEnumConferenceEventSchema` | `src/models/task-reservation-enum-conference-event.ts` |
| `TaskReservationEnumSupervisorMode` | `taskReservationEnumSupervisorModeSchema` | `src/models/task-reservation-enum-supervisor-mode.ts` |
| `TaskrouterV1WorkspaceTaskTaskReservation` | `taskrouterV1WorkspaceTaskTaskReservationSchema` | `src/models/taskrouter-v1-workspace-task-task-reservation.ts` |

