<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumberTollFree — operations

Accessor: `client.api20100401IncomingPhoneNumberTollFree` · Source: `src/resources/api20100401-incoming-phone-number-toll-free.ts` · 2 operations · Request types: namespace `Api20100401IncomingPhoneNumberTollFree`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createIncomingPhoneNumberTollFree

- **Signature**: `createIncomingPhoneNumberTollFree(request: Api20100401IncomingPhoneNumberTollFree.CreateIncomingPhoneNumberTollFreeRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumberTollFree.CreateIncomingPhoneNumberTollFreeRequest` (24):

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
| `emergencyStatus` | `form` | `EmergencyStatus` | `IncomingPhoneNumberTollFreeEnumEmergencyStatus` | no |
| `emergencyAddressSid` | `form` | `EmergencyAddressSid` | `string` | no |
| `trunkSid` | `form` | `TrunkSid` | `string` | no |
| `voiceReceiveMode` | `form` | `VoiceReceiveMode` | `IncomingPhoneNumberTollFreeEnumVoiceReceiveMode` | no |
| `bundleSid` | `form` | `BundleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsFallbackMethod9` | `smsFallbackMethod9Schema` | `src/models/sms-fallback-method9.ts` |
| `SmsMethod9` | `smsMethod9Schema` | `src/models/sms-method9.ts` |
| `StatusCallbackMethod10` | `statusCallbackMethod10Schema` | `src/models/status-callback-method10.ts` |
| `VoiceFallbackMethod9` | `voiceFallbackMethod9Schema` | `src/models/voice-fallback-method9.ts` |
| `VoiceMethod9` | `voiceMethod9Schema` | `src/models/voice-method9.ts` |
| `IncomingPhoneNumberTollFreeEnumEmergencyStatus` | `incomingPhoneNumberTollFreeEnumEmergencyStatusSchema` | `src/models/incoming-phone-number-toll-free-enum-emergency-status.ts` |
| `IncomingPhoneNumberTollFreeEnumVoiceReceiveMode` | `incomingPhoneNumberTollFreeEnumVoiceReceiveModeSchema` | `src/models/incoming-phone-number-toll-free-enum-voice-receive-mode.ts` |
| `ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFree` | `apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberTollFreeSchema` | `src/models/api-v2010-account-incoming-phone-number-incoming-phone-number-toll-free.ts` |

### listIncomingPhoneNumberTollFree

- **Signature**: `listIncomingPhoneNumberTollFree(request: Api20100401IncomingPhoneNumberTollFree.ListIncomingPhoneNumberTollFreeRequest, options?: RequestOptions): ApiPromise<ListIncomingPhoneNumberTollFreeResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/TollFree.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIncomingPhoneNumberTollFreeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumberTollFree.ListIncomingPhoneNumberTollFreeRequest` (8):

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
| `ListIncomingPhoneNumberTollFreeResponse` | `listIncomingPhoneNumberTollFreeResponseSchema` | `src/models/list-incoming-phone-number-toll-free-response.ts` |

