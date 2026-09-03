<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1Anonymize — operations

Accessor: `client.videoV1Anonymize` · Source: `src/resources/video-v1-anonymize.ts` · 1 operation · Request types: namespace `VideoV1Anonymize`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updateRoomParticipantAnonymize

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoomParticipantAnonymize(request: VideoV1Anonymize.UpdateRoomParticipantAnonymizeRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantAnonymize, ResponseError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/Participants/{Sid}/Anonymize`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantAnonymize`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Anonymize.UpdateRoomParticipantAnonymizeRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantAnonymize` | `videoV1RoomRoomParticipantRoomParticipantAnonymizeSchema` | `src/models/video-v1-room-room-participant-room-participant-anonymize.ts` |

