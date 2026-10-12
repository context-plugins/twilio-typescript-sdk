<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1Participant — operations

Accessor: `client.videoV1Participant` · Source: `src/resources/video-v1-participant.ts` · 3 operations · Request types: namespace `VideoV1Participant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRoomParticipant

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomParticipant(request: VideoV1Participant.FetchRoomParticipantRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipant, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Participant.FetchRoomParticipantRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipant` | `videoV1RoomRoomParticipantSchema` | `src/models/video-v1-room-room-participant.ts` |

### listRoomParticipant

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoomParticipant(request: VideoV1Participant.ListRoomParticipantRequest, options?: RequestOptions): ApiPromise<ListRoomParticipantResponse, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomParticipantResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Participant.ListRoomParticipantRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `status` | `query` | `Status` | `RoomParticipantEnumStatus` | no |
| `identity` | `query` | `Identity` | `string` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoomParticipantEnumStatus` | `roomParticipantEnumStatusSchema` | `src/models/room-participant-enum-status.ts` |
| `ListRoomParticipantResponse` | `listRoomParticipantResponseSchema` | `src/models/list-room-participant-response.ts` |

### updateRoomParticipant

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoomParticipant(request: VideoV1Participant.UpdateRoomParticipantRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipant, ApiError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/Participants/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RoomRoomParticipant`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Participant.UpdateRoomParticipantRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `RoomParticipantEnumStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoomParticipantEnumStatus` | `roomParticipantEnumStatusSchema` | `src/models/room-participant-enum-status.ts` |
| `VideoV1RoomRoomParticipant` | `videoV1RoomRoomParticipantSchema` | `src/models/video-v1-room-room-participant.ts` |

