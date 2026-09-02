<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Application — operations

Accessor: `client.api20100401Application` · Source: `src/resources/api20100401-application.ts` · 5 operations · Request types: namespace `Api20100401Application`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createApplication

- **Signature**: `createApplication(request: Api20100401Application.CreateApplicationRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountApplication, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Applications.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Application.CreateApplicationRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `apiVersion` | `form` | `ApiVersion` | `string` | no |
| `voiceUrl` | `form` | `VoiceUrl` | `string` | no |
| `voiceMethod` | `form` | `VoiceMethod` | `VoiceMethod7` | no |
| `voiceFallbackUrl` | `form` | `VoiceFallbackUrl` | `string` | no |
| `voiceFallbackMethod` | `form` | `VoiceFallbackMethod` | `VoiceFallbackMethod7` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod6` | no |
| `voiceCallerIdLookup` | `form` | `VoiceCallerIdLookup` | `boolean` | no |
| `smsUrl` | `form` | `SmsUrl` | `string` | no |
| `smsMethod` | `form` | `SmsMethod` | `SmsMethod7` | no |
| `smsFallbackUrl` | `form` | `SmsFallbackUrl` | `string` | no |
| `smsFallbackMethod` | `form` | `SmsFallbackMethod` | `SmsFallbackMethod7` | no |
| `smsStatusCallback` | `form` | `SmsStatusCallback` | `string` | no |
| `messageStatusCallback` | `form` | `MessageStatusCallback` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `publicApplicationConnectEnabled` | `form` | `PublicApplicationConnectEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceMethod7` | `voiceMethod7Schema` | `src/models/voice-method7.ts` |
| `VoiceFallbackMethod7` | `voiceFallbackMethod7Schema` | `src/models/voice-fallback-method7.ts` |
| `StatusCallbackMethod6` | `statusCallbackMethod6Schema` | `src/models/status-callback-method6.ts` |
| `SmsMethod7` | `smsMethod7Schema` | `src/models/sms-method7.ts` |
| `SmsFallbackMethod7` | `smsFallbackMethod7Schema` | `src/models/sms-fallback-method7.ts` |
| `ApiV2010AccountApplication` | `apiV2010AccountApplicationSchema` | `src/models/api-v2010-account-application.ts` |

### deleteApplication

- **Signature**: `deleteApplication(request: Api20100401Application.DeleteApplicationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Application.DeleteApplicationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchApplication

- **Signature**: `fetchApplication(request: Api20100401Application.FetchApplicationRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountApplication, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Application.FetchApplicationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountApplication` | `apiV2010AccountApplicationSchema` | `src/models/api-v2010-account-application.ts` |

### listApplication

- **Signature**: `listApplication(request: Api20100401Application.ListApplicationRequest, options?: RequestOptions): ApiPromise<ListApplicationResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Applications.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListApplicationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Application.ListApplicationRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListApplicationResponse` | `listApplicationResponseSchema` | `src/models/list-application-response.ts` |

### updateApplication

- **Signature**: `updateApplication(request: Api20100401Application.UpdateApplicationRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountApplication, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Applications/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountApplication`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Application.UpdateApplicationRequest` (18):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `apiVersion` | `form` | `ApiVersion` | `string` | no |
| `voiceUrl` | `form` | `VoiceUrl` | `string` | no |
| `voiceMethod` | `form` | `VoiceMethod` | `VoiceMethod7` | no |
| `voiceFallbackUrl` | `form` | `VoiceFallbackUrl` | `string` | no |
| `voiceFallbackMethod` | `form` | `VoiceFallbackMethod` | `VoiceFallbackMethod7` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod6` | no |
| `voiceCallerIdLookup` | `form` | `VoiceCallerIdLookup` | `boolean` | no |
| `smsUrl` | `form` | `SmsUrl` | `string` | no |
| `smsMethod` | `form` | `SmsMethod` | `SmsMethod7` | no |
| `smsFallbackUrl` | `form` | `SmsFallbackUrl` | `string` | no |
| `smsFallbackMethod` | `form` | `SmsFallbackMethod` | `SmsFallbackMethod7` | no |
| `smsStatusCallback` | `form` | `SmsStatusCallback` | `string` | no |
| `messageStatusCallback` | `form` | `MessageStatusCallback` | `string` | no |
| `publicApplicationConnectEnabled` | `form` | `PublicApplicationConnectEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceMethod7` | `voiceMethod7Schema` | `src/models/voice-method7.ts` |
| `VoiceFallbackMethod7` | `voiceFallbackMethod7Schema` | `src/models/voice-fallback-method7.ts` |
| `StatusCallbackMethod6` | `statusCallbackMethod6Schema` | `src/models/status-callback-method6.ts` |
| `SmsMethod7` | `smsMethod7Schema` | `src/models/sms-method7.ts` |
| `SmsFallbackMethod7` | `smsFallbackMethod7Schema` | `src/models/sms-fallback-method7.ts` |
| `ApiV2010AccountApplication` | `apiV2010AccountApplicationSchema` | `src/models/api-v2010-account-application.ts` |

