<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingRules — operations

Accessor: `client.videoV1RecordingRules` · Source: `src/resources/video-v1-recording-rules.ts` · 2 operations · Request types: namespace `VideoV1RecordingRules`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchRoomRecordingRule

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomRecordingRule(request: VideoV1RecordingRules.FetchRoomRecordingRuleRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomRecordingRule, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/RecordingRules`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingRules.FetchRoomRecordingRuleRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomRecordingRule` | `videoV1RoomRoomRecordingRuleSchema` | `src/models/video-v1-room-room-recording-rule.ts` |

### updateRoomRecordingRule

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoomRecordingRule(request: VideoV1RecordingRules.UpdateRoomRecordingRuleRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomRecordingRule, ApiError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/RecordingRules`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RoomRoomRecordingRule`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingRules.UpdateRoomRecordingRuleRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `rules` | `form` | `Rules` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomRecordingRule` | `videoV1RoomRoomRecordingRuleSchema` | `src/models/video-v1-room-room-recording-rule.ts` |

