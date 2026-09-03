<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1CompositionSettingsApi — operations

Accessor: `client.videoV1CompositionSettingsApi` · Source: `src/resources/video-v1-composition-settings-api.ts` · 2 operations · Request types: namespace `VideoV1CompositionSettingsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createCompositionSettings

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createCompositionSettings(request: VideoV1CompositionSettingsApi.CreateCompositionSettingsRequest, options?: RequestOptions): ApiPromise<VideoV1CompositionSettings, ResponseError>`
- **Wire**: `POST /v1/CompositionSettings/Default`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1CompositionSettingsApi.CreateCompositionSettingsRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `awsCredentialsSid` | `form` | `AwsCredentialsSid` | `string` | no |
| `encryptionKeySid` | `form` | `EncryptionKeySid` | `string` | no |
| `awsS3Url` | `form` | `AwsS3Url` | `string` | no |
| `awsStorageEnabled` | `form` | `AwsStorageEnabled` | `boolean` | no |
| `encryptionEnabled` | `form` | `EncryptionEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1CompositionSettings` | `videoV1CompositionSettingsSchema` | `src/models/video-v1-composition-settings.ts` |

### fetchCompositionSettings

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchCompositionSettings(options?: RequestOptions): ApiPromise<VideoV1CompositionSettings, ResponseError>`
- **Wire**: `GET /v1/CompositionSettings/Default`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1CompositionSettings`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1CompositionSettings` | `videoV1CompositionSettingsSchema` | `src/models/video-v1-composition-settings.ts` |

