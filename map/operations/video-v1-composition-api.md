<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionApi — operations

Accessor: `client.videoV1CompositionApi` · Source: `src/resources/video-v1-composition-api.ts` · 4 operations · Request types: namespace `VideoV1CompositionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createComposition

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createComposition(request: VideoV1CompositionApi.CreateCompositionRequest, options?: RequestOptions): ApiPromise<VideoV1Composition, ResponseError>`
- **Wire**: `POST /v1/Compositions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1Composition`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionApi.CreateCompositionRequest` (9):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `roomSid` | `form` | `RoomSid` | `string` | yes |
| `videoLayout` | `form` | `VideoLayout` | `Record<string, unknown>` | no |
| `audioSources` | `form` | `AudioSources` | `string[]` | no |
| `audioSourcesExcluded` | `form` | `AudioSourcesExcluded` | `string[]` | no |
| `resolution` | `form` | `Resolution` | `string` | no |
| `format` | `form` | `Format` | `CompositionEnumFormat` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `trim` | `form` | `Trim` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompositionEnumFormat` | `compositionEnumFormatSchema` | `src/models/composition-enum-format.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `VideoV1Composition` | `videoV1CompositionSchema` | `src/models/video-v1-composition.ts` |

### deleteComposition

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteComposition(request: VideoV1CompositionApi.DeleteCompositionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Compositions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionApi.DeleteCompositionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchComposition

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchComposition(request: VideoV1CompositionApi.FetchCompositionRequest, options?: RequestOptions): ApiPromise<VideoV1Composition, ResponseError>`
- **Wire**: `GET /v1/Compositions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1Composition`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionApi.FetchCompositionRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1Composition` | `videoV1CompositionSchema` | `src/models/video-v1-composition.ts` |

### listComposition

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listComposition(request: VideoV1CompositionApi.ListCompositionRequest, options?: RequestOptions): ApiPromise<ListCompositionResponse, ResponseError>`
- **Wire**: `GET /v1/Compositions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompositionResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionApi.ListCompositionRequest` (7):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `CompositionEnumStatus` | no | — |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no | — |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no | — |
| `roomSid` | `query` | `RoomSid` | `string` | no | — |
| `pageSize` | `query` | `PageSize` | `number` | no | `50` |
| `page` | `query` | `Page` | `number` | no | — |
| `pageToken` | `query` | `PageToken` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompositionEnumStatus` | `compositionEnumStatusSchema` | `src/models/composition-enum-status.ts` |
| `ListCompositionResponse` | `listCompositionResponseSchema` | `src/models/list-composition-response.ts` |

