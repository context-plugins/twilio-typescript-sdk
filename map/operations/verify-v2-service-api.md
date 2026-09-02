<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2ServiceApi — operations

Accessor: `client.verifyV2ServiceApi` · Source: `src/resources/verify-v2-service-api.ts` · 5 operations · Request types: namespace `VerifyV2ServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createService2

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createService2(request: VerifyV2ServiceApi.CreateService2Request, options?: RequestOptions): ApiPromise<VerifyV2Service, ResponseError>`
- **Wire**: `POST /v2/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2ServiceApi.CreateService2Request` (26):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `codeLength` | `form` | `CodeLength` | `number` | no |
| `lookupEnabled` | `form` | `LookupEnabled` | `boolean` | no |
| `skipSmsToLandlines` | `form` | `SkipSmsToLandlines` | `boolean` | no |
| `dtmfInputRequired` | `form` | `DtmfInputRequired` | `boolean` | no |
| `ttsName` | `form` | `TtsName` | `string` | no |
| `psd2Enabled` | `form` | `Psd2Enabled` | `boolean` | no |
| `doNotShareWarningEnabled` | `form` | `DoNotShareWarningEnabled` | `boolean` | no |
| `customCodeEnabled` | `form` | `CustomCodeEnabled` | `boolean` | no |
| `pushIncludeDate` | `form` | `Push.IncludeDate` | `boolean` | no |
| `pushApnCredentialSid` | `form` | `Push.ApnCredentialSid` | `string` | no |
| `pushFcmCredentialSid` | `form` | `Push.FcmCredentialSid` | `string` | no |
| `totpIssuer` | `form` | `Totp.Issuer` | `string` | no |
| `totpTimeStep` | `form` | `Totp.TimeStep` | `number` | no |
| `totpCodeLength` | `form` | `Totp.CodeLength` | `number` | no |
| `totpSkew` | `form` | `Totp.Skew` | `number` | no |
| `defaultTemplateSid` | `form` | `DefaultTemplateSid` | `string` | no |
| `whatsappMsgServiceSid` | `form` | `Whatsapp.MsgServiceSid` | `string` | no |
| `whatsappFrom` | `form` | `Whatsapp.From` | `string` | no |
| `passkeysRelyingPartyId` | `form` | `Passkeys.RelyingParty.Id` | `string` | no |
| `passkeysRelyingPartyName` | `form` | `Passkeys.RelyingParty.Name` | `string` | no |
| `passkeysRelyingPartyOrigins` | `form` | `Passkeys.RelyingParty.Origins` | `string` | no |
| `passkeysAuthenticatorAttachment` | `form` | `Passkeys.AuthenticatorAttachment` | `string` | no |
| `passkeysDiscoverableCredentials` | `form` | `Passkeys.DiscoverableCredentials` | `string` | no |
| `passkeysUserVerification` | `form` | `Passkeys.UserVerification` | `string` | no |
| `verifyEventSubscriptionEnabled` | `form` | `VerifyEventSubscriptionEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2Service` | `verifyV2ServiceSchema` | `src/models/verify-v2-service.ts` |

### deleteService2

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteService2(request: VerifyV2ServiceApi.DeleteService2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2ServiceApi.DeleteService2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchService2

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchService2(request: VerifyV2ServiceApi.FetchService2Request, options?: RequestOptions): ApiPromise<VerifyV2Service, ResponseError>`
- **Wire**: `GET /v2/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2ServiceApi.FetchService2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2Service` | `verifyV2ServiceSchema` | `src/models/verify-v2-service.ts` |

### listService2

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listService2(request: VerifyV2ServiceApi.ListService2Request, options?: RequestOptions): ApiPromise<ListServiceResponse1, ResponseError>`
- **Wire**: `GET /v2/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2ServiceApi.ListService2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceResponse1` | `listServiceResponse1Schema` | `src/models/list-service-response1.ts` |

### updateService2

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateService2(request: VerifyV2ServiceApi.UpdateService2Request, options?: RequestOptions): ApiPromise<VerifyV2Service, ResponseError>`
- **Wire**: `POST /v2/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2Service`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2ServiceApi.UpdateService2Request` (27):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `codeLength` | `form` | `CodeLength` | `number` | no |
| `lookupEnabled` | `form` | `LookupEnabled` | `boolean` | no |
| `skipSmsToLandlines` | `form` | `SkipSmsToLandlines` | `boolean` | no |
| `dtmfInputRequired` | `form` | `DtmfInputRequired` | `boolean` | no |
| `ttsName` | `form` | `TtsName` | `string` | no |
| `psd2Enabled` | `form` | `Psd2Enabled` | `boolean` | no |
| `doNotShareWarningEnabled` | `form` | `DoNotShareWarningEnabled` | `boolean` | no |
| `customCodeEnabled` | `form` | `CustomCodeEnabled` | `boolean` | no |
| `pushIncludeDate` | `form` | `Push.IncludeDate` | `boolean` | no |
| `pushApnCredentialSid` | `form` | `Push.ApnCredentialSid` | `string` | no |
| `pushFcmCredentialSid` | `form` | `Push.FcmCredentialSid` | `string` | no |
| `totpIssuer` | `form` | `Totp.Issuer` | `string` | no |
| `totpTimeStep` | `form` | `Totp.TimeStep` | `number` | no |
| `totpCodeLength` | `form` | `Totp.CodeLength` | `number` | no |
| `totpSkew` | `form` | `Totp.Skew` | `number` | no |
| `defaultTemplateSid` | `form` | `DefaultTemplateSid` | `string` | no |
| `whatsappMsgServiceSid` | `form` | `Whatsapp.MsgServiceSid` | `string` | no |
| `whatsappFrom` | `form` | `Whatsapp.From` | `string` | no |
| `passkeysRelyingPartyId` | `form` | `Passkeys.RelyingParty.Id` | `string` | no |
| `passkeysRelyingPartyName` | `form` | `Passkeys.RelyingParty.Name` | `string` | no |
| `passkeysRelyingPartyOrigins` | `form` | `Passkeys.RelyingParty.Origins` | `string` | no |
| `passkeysAuthenticatorAttachment` | `form` | `Passkeys.AuthenticatorAttachment` | `string` | no |
| `passkeysDiscoverableCredentials` | `form` | `Passkeys.DiscoverableCredentials` | `string` | no |
| `passkeysUserVerification` | `form` | `Passkeys.UserVerification` | `string` | no |
| `verifyEventSubscriptionEnabled` | `form` | `VerifyEventSubscriptionEnabled` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2Service` | `verifyV2ServiceSchema` | `src/models/verify-v2-service.ts` |

