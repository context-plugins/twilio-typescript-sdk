<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Participant — operations

Accessor: `client.insightsV1Participant` · Source: `src/resources/insights-v1-participant.ts` · 2 operations · Request types: namespace `InsightsV1Participant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchVideoParticipantSummary

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchVideoParticipantSummary(request: InsightsV1Participant.FetchVideoParticipantSummaryRequest, options?: RequestOptions): ApiPromise<InsightsV1VideoRoomSummaryVideoParticipantSummary, ResponseError>`
- **Wire**: `GET /v1/Video/Rooms/{RoomSid}/Participants/{ParticipantSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1VideoRoomSummaryVideoParticipantSummary`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Participant.FetchVideoParticipantSummaryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `participantSid` | `path` | `ParticipantSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1VideoRoomSummaryVideoParticipantSummary` | `insightsV1VideoRoomSummaryVideoParticipantSummarySchema` | `src/models/insights-v1-video-room-summary-video-participant-summary.ts` |

### listVideoParticipantSummary

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listVideoParticipantSummary(request: InsightsV1Participant.ListVideoParticipantSummaryRequest, options?: RequestOptions): ApiPromise<ListVideoParticipantSummaryResponse, ResponseError>`
- **Wire**: `GET /v1/Video/Rooms/{RoomSid}/Participants`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVideoParticipantSummaryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Participant.ListVideoParticipantSummaryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListVideoParticipantSummaryResponse` | `listVideoParticipantSummaryResponseSchema` | `src/models/list-video-participant-summary-response.ts` |

