<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401IncomingPhoneNumber — operations

Accessor: `client.api20100401IncomingPhoneNumber` · Source: `src/resources/api20100401-incoming-phone-number.ts` · 5 operations · Request types: namespace `Api20100401IncomingPhoneNumber`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createIncomingPhoneNumber

- **Signature**: `createIncomingPhoneNumber(request: Api20100401IncomingPhoneNumber.CreateIncomingPhoneNumberRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumber.CreateIncomingPhoneNumberRequest` (25):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
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
| `emergencyStatus` | `form` | `EmergencyStatus` | `IncomingPhoneNumberEnumEmergencyStatus` | no |
| `emergencyAddressSid` | `form` | `EmergencyAddressSid` | `string` | no |
| `trunkSid` | `form` | `TrunkSid` | `string` | no |
| `identitySid` | `form` | `IdentitySid` | `string` | no |
| `addressSid` | `form` | `AddressSid` | `string` | no |
| `voiceReceiveMode` | `form` | `VoiceReceiveMode` | `IncomingPhoneNumberEnumVoiceReceiveMode` | no |
| `bundleSid` | `form` | `BundleSid` | `string` | no |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | no |
| `areaCode` | `form` | `AreaCode` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsFallbackMethod9` | `smsFallbackMethod9Schema` | `src/models/sms-fallback-method9.ts` |
| `SmsMethod9` | `smsMethod9Schema` | `src/models/sms-method9.ts` |
| `StatusCallbackMethod10` | `statusCallbackMethod10Schema` | `src/models/status-callback-method10.ts` |
| `VoiceFallbackMethod9` | `voiceFallbackMethod9Schema` | `src/models/voice-fallback-method9.ts` |
| `VoiceMethod9` | `voiceMethod9Schema` | `src/models/voice-method9.ts` |
| `IncomingPhoneNumberEnumEmergencyStatus` | `incomingPhoneNumberEnumEmergencyStatusSchema` | `src/models/incoming-phone-number-enum-emergency-status.ts` |
| `IncomingPhoneNumberEnumVoiceReceiveMode` | `incomingPhoneNumberEnumVoiceReceiveModeSchema` | `src/models/incoming-phone-number-enum-voice-receive-mode.ts` |
| `ApiV2010AccountIncomingPhoneNumber` | `apiV2010AccountIncomingPhoneNumberSchema` | `src/models/api-v2010-account-incoming-phone-number.ts` |

### deleteIncomingPhoneNumber

- **Signature**: `deleteIncomingPhoneNumber(request: Api20100401IncomingPhoneNumber.DeleteIncomingPhoneNumberRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumber.DeleteIncomingPhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchIncomingPhoneNumber

- **Signature**: `fetchIncomingPhoneNumber(request: Api20100401IncomingPhoneNumber.FetchIncomingPhoneNumberRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumber.FetchIncomingPhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountIncomingPhoneNumber` | `apiV2010AccountIncomingPhoneNumberSchema` | `src/models/api-v2010-account-incoming-phone-number.ts` |

### listIncomingPhoneNumber

- **Signature**: `listIncomingPhoneNumber(request: Api20100401IncomingPhoneNumber.ListIncomingPhoneNumberRequest, options?: RequestOptions): ApiPromise<ListIncomingPhoneNumberResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListIncomingPhoneNumberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumber.ListIncomingPhoneNumberRequest` (8):

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
| `ListIncomingPhoneNumberResponse` | `listIncomingPhoneNumberResponseSchema` | `src/models/list-incoming-phone-number-response.ts` |

### updateIncomingPhoneNumber

- **Signature**: `updateIncomingPhoneNumber(request: Api20100401IncomingPhoneNumber.UpdateIncomingPhoneNumberRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountIncomingPhoneNumber, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountIncomingPhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401IncomingPhoneNumber.UpdateIncomingPhoneNumberRequest` (25):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSidTemplate` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `accountSid` | `form` | `AccountSid` | `string` | no |
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
| `emergencyStatus` | `form` | `EmergencyStatus` | `IncomingPhoneNumberEnumEmergencyStatus` | no |
| `emergencyAddressSid` | `form` | `EmergencyAddressSid` | `string` | no |
| `trunkSid` | `form` | `TrunkSid` | `string` | no |
| `voiceReceiveMode` | `form` | `VoiceReceiveMode` | `IncomingPhoneNumberEnumVoiceReceiveMode` | no |
| `identitySid` | `form` | `IdentitySid` | `string` | no |
| `addressSid` | `form` | `AddressSid` | `string` | no |
| `bundleSid` | `form` | `BundleSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `SmsFallbackMethod9` | `smsFallbackMethod9Schema` | `src/models/sms-fallback-method9.ts` |
| `SmsMethod9` | `smsMethod9Schema` | `src/models/sms-method9.ts` |
| `StatusCallbackMethod10` | `statusCallbackMethod10Schema` | `src/models/status-callback-method10.ts` |
| `VoiceFallbackMethod9` | `voiceFallbackMethod9Schema` | `src/models/voice-fallback-method9.ts` |
| `VoiceMethod9` | `voiceMethod9Schema` | `src/models/voice-method9.ts` |
| `IncomingPhoneNumberEnumEmergencyStatus` | `incomingPhoneNumberEnumEmergencyStatusSchema` | `src/models/incoming-phone-number-enum-emergency-status.ts` |
| `IncomingPhoneNumberEnumVoiceReceiveMode` | `incomingPhoneNumberEnumVoiceReceiveModeSchema` | `src/models/incoming-phone-number-enum-voice-receive-mode.ts` |
| `ApiV2010AccountIncomingPhoneNumber` | `apiV2010AccountIncomingPhoneNumberSchema` | `src/models/api-v2010-account-incoming-phone-number.ts` |

