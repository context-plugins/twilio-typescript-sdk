<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1SubscribedTrack — operations

Accessor: `client.videoV1SubscribedTrack` · Source: `src/resources/video-v1-subscribed-track.ts` · 2 operations · Request types: namespace `VideoV1SubscribedTrack`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRoomParticipantSubscribedTrack

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomParticipantSubscribedTrack(request: VideoV1SubscribedTrack.FetchRoomParticipantSubscribedTrackRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1SubscribedTrack.FetchRoomParticipantSubscribedTrackRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribedTrack` | `videoV1RoomRoomParticipantRoomParticipantSubscribedTrackSchema` | `src/models/video-v1-room-room-participant-room-participant-subscribed-track.ts` |

### listRoomParticipantSubscribedTrack

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoomParticipantSubscribedTrack(request: VideoV1SubscribedTrack.ListRoomParticipantSubscribedTrackRequest, options?: RequestOptions): ApiPromise<ListRoomParticipantSubscribedTrackResponse, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribedTracks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomParticipantSubscribedTrackResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1SubscribedTrack.ListRoomParticipantSubscribedTrackRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRoomParticipantSubscribedTrackResponse` | `listRoomParticipantSubscribedTrackResponseSchema` | `src/models/list-room-participant-subscribed-track-response.ts` |

