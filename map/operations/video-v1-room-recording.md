<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RoomRecording — operations

Accessor: `client.videoV1RoomRecording` · Source: `src/resources/video-v1-room-recording.ts` · 3 operations · Request types: namespace `VideoV1RoomRecording`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteRoomRecording

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRoomRecording(request: VideoV1RoomRecording.DeleteRoomRecordingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Rooms/{RoomSid}/Recordings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomRecording.DeleteRoomRecordingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRoomRecording

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomRecording(request: VideoV1RoomRecording.FetchRoomRecordingRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomRecording, ResponseError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Recordings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomRecording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomRecording.FetchRoomRecordingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomRecording` | `videoV1RoomRoomRecordingSchema` | `src/models/video-v1-room-room-recording.ts` |

### listRoomRecording

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoomRecording(request: VideoV1RoomRecording.ListRoomRecordingRequest, options?: RequestOptions): ApiPromise<ListRoomRecordingResponse, ResponseError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Recordings`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomRecordingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomRecording.ListRoomRecordingRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `status` | `query` | `Status` | `RoomRecordingEnumStatus` | no |
| `sourceSid` | `query` | `SourceSid` | `string` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoomRecordingEnumStatus` | `roomRecordingEnumStatusSchema` | `src/models/room-recording-enum-status.ts` |
| `ListRoomRecordingResponse` | `listRoomRecordingResponseSchema` | `src/models/list-room-recording-response.ts` |

