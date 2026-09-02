<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Room — operations

Accessor: `client.insightsV1Room` · Source: `src/resources/insights-v1-room.ts` · 2 operations · Request types: namespace `InsightsV1Room`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchVideoRoomSummary

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchVideoRoomSummary(request: InsightsV1Room.FetchVideoRoomSummaryRequest, options?: RequestOptions): ApiPromise<InsightsV1VideoRoomSummary, ResponseError>`
- **Wire**: `GET /v1/Video/Rooms/{RoomSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1VideoRoomSummary`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Room.FetchVideoRoomSummaryRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `path` | `RoomSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1VideoRoomSummary` | `insightsV1VideoRoomSummarySchema` | `src/models/insights-v1-video-room-summary.ts` |

### listVideoRoomSummary

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listVideoRoomSummary(request: InsightsV1Room.ListVideoRoomSummaryRequest, options?: RequestOptions): ApiPromise<ListVideoRoomSummaryResponse, ResponseError>`
- **Wire**: `GET /v1/Video/Rooms`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVideoRoomSummaryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Room.ListVideoRoomSummaryRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomType` | `query` | `RoomType` | `VideoRoomSummaryEnumRoomType[]` | no |
| `codec` | `query` | `Codec` | `VideoRoomSummaryEnumCodec[]` | no |
| `roomName` | `query` | `RoomName` | `string` | no |
| `createdAfter` | `query` | `CreatedAfter` | `Date` (date-time) | no |
| `createdBefore` | `query` | `CreatedBefore` | `Date` (date-time) | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoRoomSummaryEnumRoomType` | `videoRoomSummaryEnumRoomTypeSchema` | `src/models/video-room-summary-enum-room-type.ts` |
| `VideoRoomSummaryEnumCodec` | `videoRoomSummaryEnumCodecSchema` | `src/models/video-room-summary-enum-codec.ts` |
| `ListVideoRoomSummaryResponse` | `listVideoRoomSummaryResponseSchema` | `src/models/list-video-room-summary-response.ts` |

