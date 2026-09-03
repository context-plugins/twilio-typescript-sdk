<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionHookApi — operations

Accessor: `client.videoV1CompositionHookApi` · Source: `src/resources/video-v1-composition-hook-api.ts` · 5 operations · Request types: namespace `VideoV1CompositionHookApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCompositionHook

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCompositionHook(request: VideoV1CompositionHookApi.CreateCompositionHookRequest, options?: RequestOptions): ApiPromise<VideoV1CompositionHook, ResponseError>`
- **Wire**: `POST /v1/CompositionHooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1CompositionHook`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionHookApi.CreateCompositionHookRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `enabled` | `form` | `Enabled` | `boolean` | no |
| `videoLayout` | `form` | `VideoLayout` | `Record<string, unknown>` | no |
| `audioSources` | `form` | `AudioSources` | `string[]` | no |
| `audioSourcesExcluded` | `form` | `AudioSourcesExcluded` | `string[]` | no |
| `resolution` | `form` | `Resolution` | `string` | no |
| `format` | `form` | `Format` | `CompositionHookEnumFormat` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `trim` | `form` | `Trim` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompositionHookEnumFormat` | `compositionHookEnumFormatSchema` | `src/models/composition-hook-enum-format.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `VideoV1CompositionHook` | `videoV1CompositionHookSchema` | `src/models/video-v1-composition-hook.ts` |

### deleteCompositionHook

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteCompositionHook(request: VideoV1CompositionHookApi.DeleteCompositionHookRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/CompositionHooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionHookApi.DeleteCompositionHookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchCompositionHook

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCompositionHook(request: VideoV1CompositionHookApi.FetchCompositionHookRequest, options?: RequestOptions): ApiPromise<VideoV1CompositionHook, ResponseError>`
- **Wire**: `GET /v1/CompositionHooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1CompositionHook`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionHookApi.FetchCompositionHookRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1CompositionHook` | `videoV1CompositionHookSchema` | `src/models/video-v1-composition-hook.ts` |

### listCompositionHook

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listCompositionHook(request: VideoV1CompositionHookApi.ListCompositionHookRequest, options?: RequestOptions): ApiPromise<ListCompositionHookResponse, ResponseError>`
- **Wire**: `GET /v1/CompositionHooks`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListCompositionHookResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionHookApi.ListCompositionHookRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `enabled` | `query` | `Enabled` | `boolean` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListCompositionHookResponse` | `listCompositionHookResponseSchema` | `src/models/list-composition-hook-response.ts` |

### updateCompositionHook

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateCompositionHook(request: VideoV1CompositionHookApi.UpdateCompositionHookRequest, options?: RequestOptions): ApiPromise<VideoV1CompositionHook, ResponseError>`
- **Wire**: `POST /v1/CompositionHooks/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1CompositionHook`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionHookApi.UpdateCompositionHookRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `enabled` | `form` | `Enabled` | `boolean` | no |
| `videoLayout` | `form` | `VideoLayout` | `Record<string, unknown>` | no |
| `audioSources` | `form` | `AudioSources` | `string[]` | no |
| `audioSourcesExcluded` | `form` | `AudioSourcesExcluded` | `string[]` | no |
| `trim` | `form` | `Trim` | `boolean` | no |
| `format` | `form` | `Format` | `CompositionHookEnumFormat` | no |
| `resolution` | `form` | `Resolution` | `string` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `CompositionHookEnumFormat` | `compositionHookEnumFormatSchema` | `src/models/composition-hook-enum-format.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `VideoV1CompositionHook` | `videoV1CompositionHookSchema` | `src/models/video-v1-composition-hook.ts` |

