<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumberMobile — operations

Accessor: `client.api20100401IncomingPhoneNumberMobile` · Source: `src/resources/api20100401-incoming-phone-number-mobile.ts` · 2 operations · Request types: namespace `Api20100401IncomingPhoneNumberMobile`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createIncomingPhoneNumberMobile

- **Signature**: `createIncomingPhoneNumberMobile(request: Api20100401IncomingPhoneNumberMobile.CreateIncomingPhoneNumberMobileRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile, ApiError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumberMobile.CreateIncomingPhoneNumberMobileRequest` (24):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | yes |
| `apiVersion` | `form` | `ApiVersion` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `smsApplicationSid` | `form` | `SmsApplicationSid` | `string` | no |
| `smsFallbackMethod` | `form` | `SmsFallbackMethod` | `SmsFallbackMethod9` | no |
| `smsFallbackUrl` | `form` | `SmsFallbackUrl` | `string` | no |
| `smsMethod` | `form` | `SmsMethod` | `SmsMethod9` | no |
| `smsUrl` | `form` | `SmsUrl` | `string` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod10` | no |
| `voiceApplicationSid` | `form` | `VoiceApplicationSid` | `string` | no |
| `voiceCallerIdLookup` | `form` | `VoiceCallerIdLookup` | `boolean` | no |
| `voiceFallbackMethod` | `form` | `VoiceFallbackMethod` | `VoiceFallbackMethod9` | no |
| `voiceFallbackUrl` | `form` | `VoiceFallbackUrl` | `string` | no |
| `voiceMethod` | `form` | `VoiceMethod` | `VoiceMethod9` | no |
| `voiceUrl` | `form` | `VoiceUrl` | `string` | no |
| `identitySid` | `form` | `IdentitySid` | `string` | no |
| `addressSid` | `form` | `AddressSid` | `string` | no |
| `emergencyStatus` | `form` | `EmergencyStatus` | `IncomingPhoneNumberMobileEnumEmergencyStatus` | no |
| `emergencyAddressSid` | `form` | `EmergencyAddressSid` | `string` | no |
| `trunkSid` | `form` | `TrunkSid` | `string` | no |
| `voiceReceiveMode` | `form` | `VoiceReceiveMode` | `IncomingPhoneNumberMobileEnumVoiceReceiveMode` | no |
| `bundleSid` | `form` | `BundleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsFallbackMethod9` | `smsFallbackMethod9Schema` | `src/models/sms-fallback-method9.ts` |
| `SmsMethod9` | `smsMethod9Schema` | `src/models/sms-method9.ts` |
| `StatusCallbackMethod10` | `statusCallbackMethod10Schema` | `src/models/status-callback-method10.ts` |
| `VoiceFallbackMethod9` | `voiceFallbackMethod9Schema` | `src/models/voice-fallback-method9.ts` |
| `VoiceMethod9` | `voiceMethod9Schema` | `src/models/voice-method9.ts` |
| `IncomingPhoneNumberMobileEnumEmergencyStatus` | `incomingPhoneNumberMobileEnumEmergencyStatusSchema` | `src/models/incoming-phone-number-mobile-enum-emergency-status.ts` |
| `IncomingPhoneNumberMobileEnumVoiceReceiveMode` | `incomingPhoneNumberMobileEnumVoiceReceiveModeSchema` | `src/models/incoming-phone-number-mobile-enum-voice-receive-mode.ts` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile` | `apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSchema` | `src/models/api-v2010-account-incoming-phone-number-incoming-phone-number-mobile.ts` |

### listIncomingPhoneNumberMobile

- **Signature**: `listIncomingPhoneNumberMobile(request: Api20100401IncomingPhoneNumberMobile.ListIncomingPhoneNumberMobileRequest, options?: RequestOptions): ApiPromise<ListIncomingPhoneNumberMobileResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/Mobile.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIncomingPhoneNumberMobileResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumberMobile.ListIncomingPhoneNumberMobileRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `beta` | `query` | `Beta` | `boolean` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `phoneNumber` | `query` | `PhoneNumber` | `string` | no |
| `origin` | `query` | `Origin` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListIncomingPhoneNumberMobileResponse` | `listIncomingPhoneNumberMobileResponseSchema` | `src/models/list-incoming-phone-number-mobile-response.ts` |

