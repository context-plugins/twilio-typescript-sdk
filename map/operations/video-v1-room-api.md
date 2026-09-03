<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RoomApi — operations

Accessor: `client.videoV1RoomApi` · Source: `src/resources/video-v1-room-api.ts` · 4 operations · Request types: namespace `VideoV1RoomApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createRoom

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRoom(request: VideoV1RoomApi.CreateRoomRequest, options?: RequestOptions): ApiPromise<VideoV1Room, ResponseError>`
- **Wire**: `POST /v1/Rooms`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1Room`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomApi.CreateRoomRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `enableTurn` | `form` | `EnableTurn` | `boolean` | no |
| `type` | `form` | `Type` | `RoomEnumRoomType` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `maxParticipants` | `form` | `MaxParticipants` | `number` | no |
| `recordParticipantsOnConnect` | `form` | `RecordParticipantsOnConnect` | `boolean` | no |
| `transcribeParticipantsOnConnect` | `form` | `TranscribeParticipantsOnConnect` | `boolean` | no |
| `videoCodecs` | `form` | `VideoCodecs` | `RoomEnumVideoCodec[]` | no |
| `mediaRegion` | `form` | `MediaRegion` | `string` | no |
| `recordingRules` | `form` | `RecordingRules` | `Record<string, unknown>` | no |
| `transcriptionsConfiguration` | `form` | `TranscriptionsConfiguration` | `Record<string, unknown>` | no |
| `audioOnly` | `form` | `AudioOnly` | `boolean` | no |
| `maxParticipantDuration` | `form` | `MaxParticipantDuration` | `number` | no |
| `emptyRoomTimeout` | `form` | `EmptyRoomTimeout` | `number` | no |
| `unusedRoomTimeout` | `form` | `UnusedRoomTimeout` | `number` | no |
| `largeRoom` | `form` | `LargeRoom` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoomEnumRoomType` | `roomEnumRoomTypeSchema` | `src/models/room-enum-room-type.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `RoomEnumVideoCodec` | `roomEnumVideoCodecSchema` | `src/models/room-enum-video-codec.ts` |
| `VideoV1Room` | `videoV1RoomSchema` | `src/models/video-v1-room.ts` |

### fetchRoom

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoom(request: VideoV1RoomApi.FetchRoomRequest, options?: RequestOptions): ApiPromise<VideoV1Room, ResponseError>`
- **Wire**: `GET /v1/Rooms/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1Room`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomApi.FetchRoomRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1Room` | `videoV1RoomSchema` | `src/models/video-v1-room.ts` |

### listRoom

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoom(request: VideoV1RoomApi.ListRoomRequest, options?: RequestOptions): ApiPromise<ListRoomResponse, ResponseError>`
- **Wire**: `GET /v1/Rooms`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomApi.ListRoomRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `RecordingTranscriptionEnumStatus` | no |
| `uniqueName` | `query` | `UniqueName` | `string` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingTranscriptionEnumStatus` | `recordingTranscriptionEnumStatusSchema` | `src/models/recording-transcription-enum-status.ts` |
| `ListRoomResponse` | `listRoomResponseSchema` | `src/models/list-room-response.ts` |

### updateRoom

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoom(request: VideoV1RoomApi.UpdateRoomRequest, options?: RequestOptions): ApiPromise<VideoV1Room, ResponseError>`
- **Wire**: `POST /v1/Rooms/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1Room`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RoomApi.UpdateRoomRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `RecordingTranscriptionEnumStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingTranscriptionEnumStatus` | `recordingTranscriptionEnumStatusSchema` | `src/models/recording-transcription-enum-status.ts` |
| `VideoV1Room` | `videoV1RoomSchema` | `src/models/video-v1-room.ts` |

