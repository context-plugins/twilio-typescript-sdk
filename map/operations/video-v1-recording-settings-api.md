<!-- Generated file — do not edit; regenerated with the SDK. -->

# VideoV1RecordingSettingsApi — operations

Accessor: `client.videoV1RecordingSettingsApi` · Source: `src/resources/video-v1-recording-settings-api.ts` · 2 operations · Request types: namespace `VideoV1RecordingSettingsApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createRecordingSettings

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createRecordingSettings(request: VideoV1RecordingSettingsApi.CreateRecordingSettingsRequest, options?: RequestOptions): ApiPromise<VideoV1RecordingSettings, ApiError>`
- **Wire**: `POST /v1/RecordingSettings/Default`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VideoV1RecordingSettingsApi.CreateRecordingSettingsRequest` (6):

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
| `VideoV1RecordingSettings` | `videoV1RecordingSettingsSchema` | `src/models/video-v1-recording-settings.ts` |

### fetchRecordingSettings

- **Server**: `default6` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchRecordingSettings(options?: RequestOptions): ApiPromise<VideoV1RecordingSettings, ApiError>`
- **Wire**: `GET /v1/RecordingSettings/Default`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VideoV1RecordingSettings`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `VideoV1RecordingSettings` | `videoV1RecordingSettingsSchema` | `src/models/video-v1-recording-settings.ts` |

