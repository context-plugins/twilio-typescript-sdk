<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1PublishedTrack — operations

Accessor: `client.videoV1PublishedTrack` · Source: `src/resources/video-v1-published-track.ts` · 2 operations · Request types: namespace `VideoV1PublishedTrack`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRoomParticipantPublishedTrack

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomParticipantPublishedTrack(request: VideoV1PublishedTrack.FetchRoomParticipantPublishedTrackRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantPublishedTrack, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1PublishedTrack.FetchRoomParticipantPublishedTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantPublishedTrack` | `videoV1RoomRoomParticipantRoomParticipantPublishedTrackSchema` | `src/models/video-v1-room-room-participant-room-participant-published-track.ts` |

### listRoomParticipantPublishedTrack

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoomParticipantPublishedTrack(request: VideoV1PublishedTrack.ListRoomParticipantPublishedTrackRequest, options?: RequestOptions): ApiPromise<ListRoomParticipantPublishedTrackResponse, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/PublishedTracks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomParticipantPublishedTrackResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1PublishedTrack.ListRoomParticipantPublishedTrackRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRoomParticipantPublishedTrackResponse` | `listRoomParticipantPublishedTrackResponseSchema` | `src/models/list-room-participant-published-track-response.ts` |

