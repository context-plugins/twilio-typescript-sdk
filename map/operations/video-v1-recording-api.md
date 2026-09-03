<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingApi — operations

Accessor: `client.videoV1RecordingApi` · Source: `src/resources/video-v1-recording-api.ts` · 3 operations · Request types: namespace `VideoV1RecordingApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteRecording2

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteRecording2(request: VideoV1RecordingApi.DeleteRecording2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Recordings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingApi.DeleteRecording2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchRecording2

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRecording2(request: VideoV1RecordingApi.FetchRecording2Request, options?: RequestOptions): ApiPromise<VideoV1Recording, ResponseError>`
- **Wire**: `GET /v1/Recordings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1Recording`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingApi.FetchRecording2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1Recording` | `videoV1RecordingSchema` | `src/models/video-v1-recording.ts` |

### listRecording2

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listRecording2(request: VideoV1RecordingApi.ListRecording2Request, options?: RequestOptions): ApiPromise<ListRecordingResponse1, ResponseError>`
- **Wire**: `GET /v1/Recordings`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListRecordingResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingApi.ListRecording2Request` (9):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `RecordingEnumStatus1` | no | — |
| `sourceSid` | `query` | `SourceSid` | `string` | no | — |
| `groupingSid` | `query` | `GroupingSid` | `string[]` | no | — |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no | — |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no | — |
| `mediaType` | `query` | `MediaType` | `RecordingEnumType` | no | — |
| `pageSize` | `query` | `PageSize` | `number` | no | `50` |
| `page` | `query` | `Page` | `number` | no | — |
| `pageToken` | `query` | `PageToken` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingEnumStatus1` | `recordingEnumStatus1Schema` | `src/models/recording-enum-status1.ts` |
| `RecordingEnumType` | `recordingEnumTypeSchema` | `src/models/recording-enum-type.ts` |
| `ListRecordingResponse1` | `listRecordingResponse1Schema` | `src/models/list-recording-response1.ts` |

