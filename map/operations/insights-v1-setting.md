<!-- Generated file — do not edit; regenerated with the SDK. -->

# InsightsV1Setting — operations

Accessor: `client.insightsV1Setting` · Source: `src/resources/insights-v1-setting.ts` · 2 operations · Request types: namespace `InsightsV1Setting`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchAccountSettings

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAccountSettings(request: InsightsV1Setting.FetchAccountSettingsRequest, options?: RequestOptions): ApiPromise<InsightsV1AccountSettings, ApiError>`
- **Wire**: `GET /v1/Voice/Settings`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Setting.FetchAccountSettingsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `subaccountSid` | `query` | `SubaccountSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1AccountSettings` | `insightsV1AccountSettingsSchema` | `src/models/insights-v1-account-settings.ts` |

### updateAccountSettings

- **Server**: `default14` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateAccountSettings(request: InsightsV1Setting.UpdateAccountSettingsRequest, options?: RequestOptions): ApiPromise<InsightsV1AccountSettings, ApiError>`
- **Wire**: `POST /v1/Voice/Settings`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `InsightsV1AccountSettings`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `InsightsV1Setting.UpdateAccountSettingsRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `advancedFeatures` | `form` | `AdvancedFeatures` | `boolean` | no |
| `voiceTrace` | `form` | `VoiceTrace` | `boolean` | no |
| `subaccountSid` | `form` | `SubaccountSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `InsightsV1AccountSettings` | `insightsV1AccountSettingsSchema` | `src/models/insights-v1-account-settings.ts` |

