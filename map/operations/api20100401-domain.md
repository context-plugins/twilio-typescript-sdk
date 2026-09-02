<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Domain — operations

Accessor: `client.api20100401Domain` · Source: `src/resources/api20100401-domain.ts` · 5 operations · Request types: namespace `Api20100401Domain`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSipDomain

- **Signature**: `createSipDomain(request: Api20100401Domain.CreateSipDomainRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Domain.CreateSipDomainRequest` (14):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `domainName` | `form` | `DomainName` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `voiceUrl` | `form` | `VoiceUrl` | `string` | no |
| `voiceMethod` | `form` | `VoiceMethod` | `VoiceMethod7` | no |
| `voiceFallbackUrl` | `form` | `VoiceFallbackUrl` | `string` | no |
| `voiceFallbackMethod` | `form` | `VoiceFallbackMethod` | `VoiceFallbackMethod7` | no |
| `voiceStatusCallbackUrl` | `form` | `VoiceStatusCallbackUrl` | `string` | no |
| `voiceStatusCallbackMethod` | `form` | `VoiceStatusCallbackMethod` | `VoiceStatusCallbackMethod1` | no |
| `sipRegistration` | `form` | `SipRegistration` | `boolean` | no |
| `emergencyCallingEnabled` | `form` | `EmergencyCallingEnabled` | `boolean` | no |
| `secure` | `form` | `Secure` | `boolean` | no |
| `byocTrunkSid` | `form` | `ByocTrunkSid` | `string` | no |
| `emergencyCallerSid` | `form` | `EmergencyCallerSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceMethod7` | `voiceMethod7Schema` | `src/models/voice-method7.ts` |
| `VoiceFallbackMethod7` | `voiceFallbackMethod7Schema` | `src/models/voice-fallback-method7.ts` |
| `VoiceStatusCallbackMethod1` | `voiceStatusCallbackMethod1Schema` | `src/models/voice-status-callback-method1.ts` |
| `ApiV2010AccountSipSipDomain` | `apiV2010AccountSipSipDomainSchema` | `src/models/api-v2010-account-sip-sip-domain.ts` |

### deleteSipDomain

- **Signature**: `deleteSipDomain(request: Api20100401Domain.DeleteSipDomainRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Domain.DeleteSipDomainRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchSipDomain

- **Signature**: `fetchSipDomain(request: Api20100401Domain.FetchSipDomainRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Domain.FetchSipDomainRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountSipSipDomain` | `apiV2010AccountSipSipDomainSchema` | `src/models/api-v2010-account-sip-sip-domain.ts` |

### listSipDomain

- **Signature**: `listSipDomain(request: Api20100401Domain.ListSipDomainRequest, options?: RequestOptions): ApiPromise<ListSipDomainResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/SIP/Domains.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListSipDomainResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Domain.ListSipDomainRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListSipDomainResponse` | `listSipDomainResponseSchema` | `src/models/list-sip-domain-response.ts` |

### updateSipDomain

- **Signature**: `updateSipDomain(request: Api20100401Domain.UpdateSipDomainRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountSipSipDomain, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SIP/Domains/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountSipSipDomain`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Domain.UpdateSipDomainRequest` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `voiceFallbackMethod` | `form` | `VoiceFallbackMethod` | `VoiceFallbackMethod7` | no |
| `voiceFallbackUrl` | `form` | `VoiceFallbackUrl` | `string` | no |
| `voiceMethod` | `form` | `VoiceMethod` | `VoiceMethod15` | no |
| `voiceStatusCallbackMethod` | `form` | `VoiceStatusCallbackMethod` | `VoiceStatusCallbackMethod1` | no |
| `voiceStatusCallbackUrl` | `form` | `VoiceStatusCallbackUrl` | `string` | no |
| `voiceUrl` | `form` | `VoiceUrl` | `string` | no |
| `sipRegistration` | `form` | `SipRegistration` | `boolean` | no |
| `domainName` | `form` | `DomainName` | `string` | no |
| `emergencyCallingEnabled` | `form` | `EmergencyCallingEnabled` | `boolean` | no |
| `secure` | `form` | `Secure` | `boolean` | no |
| `byocTrunkSid` | `form` | `ByocTrunkSid` | `string` | no |
| `emergencyCallerSid` | `form` | `EmergencyCallerSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VoiceFallbackMethod7` | `voiceFallbackMethod7Schema` | `src/models/voice-fallback-method7.ts` |
| `VoiceMethod15` | `voiceMethod15Schema` | `src/models/voice-method15.ts` |
| `VoiceStatusCallbackMethod1` | `voiceStatusCallbackMethod1Schema` | `src/models/voice-status-callback-method1.ts` |
| `ApiV2010AccountSipSipDomain` | `apiV2010AccountSipSipDomainSchema` | `src/models/api-v2010-account-sip-sip-domain.ts` |

