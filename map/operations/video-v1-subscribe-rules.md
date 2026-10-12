<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1SubscribeRules — operations

Accessor: `client.videoV1SubscribeRules` · Source: `src/resources/video-v1-subscribe-rules.ts` · 2 operations · Request types: namespace `VideoV1SubscribeRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRoomParticipantSubscribeRule

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomParticipantSubscribeRule(request: VideoV1SubscribeRules.FetchRoomParticipantSubscribeRuleRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1SubscribeRules.FetchRoomParticipantSubscribeRuleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema` | `src/models/video-v1-room-room-participant-room-participant-subscribe-rule.ts` |

### updateRoomParticipantSubscribeRule

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoomParticipantSubscribeRule(request: VideoV1SubscribeRules.UpdateRoomParticipantSubscribeRuleRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomParticipantRoomParticipantSubscribeRule, ApiError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/Participants/{ParticipantSid}/SubscribeRules`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1SubscribeRules.UpdateRoomParticipantSubscribeRuleRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |
| `rules` | `form` | `Rules` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomParticipantRoomParticipantSubscribeRule` | `videoV1RoomRoomParticipantRoomParticipantSubscribeRuleSchema` | `src/models/video-v1-room-room-participant-room-participant-subscribe-rule.ts` |

