<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1Transcriptions — operations

Accessor: `client.videoV1Transcriptions` · Source: `src/resources/video-v1-transcriptions.ts` · 4 operations · Request types: namespace `VideoV1Transcriptions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRoomTranscriptions

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRoomTranscriptions(request: VideoV1Transcriptions.CreateRoomTranscriptionsRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/Transcriptions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Transcriptions.CreateRoomTranscriptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `configuration` | `form` | `Configuration` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomTranscriptions` | `videoV1RoomRoomTranscriptionsSchema` | `src/models/video-v1-room-room-transcriptions.ts` |

### fetchRoomTranscriptions

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRoomTranscriptions(request: VideoV1Transcriptions.FetchRoomTranscriptionsRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Transcriptions/{Ttid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Transcriptions.FetchRoomTranscriptionsRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `ttid` | `path` | `Ttid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RoomRoomTranscriptions` | `videoV1RoomRoomTranscriptionsSchema` | `src/models/video-v1-room-room-transcriptions.ts` |

### listRoomTranscriptions

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRoomTranscriptions(request: VideoV1Transcriptions.ListRoomTranscriptionsRequest, options?: RequestOptions): ApiPromise<ListRoomTranscriptionsResponse, ApiError>`
- **Wire**: `GET /v1/Rooms/{RoomSid}/Transcriptions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRoomTranscriptionsResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Transcriptions.ListRoomTranscriptionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListRoomTranscriptionsResponse` | `listRoomTranscriptionsResponseSchema` | `src/models/list-room-transcriptions-response.ts` |

### updateRoomTranscriptions

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateRoomTranscriptions(request: VideoV1Transcriptions.UpdateRoomTranscriptionsRequest, options?: RequestOptions): ApiPromise<VideoV1RoomRoomTranscriptions, ApiError>`
- **Wire**: `POST /v1/Rooms/{RoomSid}/Transcriptions/{Ttid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RoomRoomTranscriptions`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1Transcriptions.UpdateRoomTranscriptionsRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `ttid` | `path` | `Ttid` | `string` | yes |
| `status` | `form` | `Status` | `RoomTranscriptionsEnumStatus` | no |
| `configuration` | `form` | `Configuration` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RoomTranscriptionsEnumStatus` | `roomTranscriptionsEnumStatusSchema` | `src/models/room-transcriptions-enum-status.ts` |
| `VideoV1RoomRoomTranscriptions` | `videoV1RoomRoomTranscriptionsSchema` | `src/models/video-v1-room-room-transcriptions.ts` |

