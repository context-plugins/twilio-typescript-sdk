<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Verification — operations

Accessor: `client.verifyV2Verification` · Source: `src/resources/verify-v2-verification.ts` · 3 operations · Request and error types: namespace `VerifyV2Verification`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createVerification

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createVerification(request: VerifyV2Verification.CreateVerificationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceVerification, VerifyV2Verification.CreateVerificationError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Verifications`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `VerifyV2Verification.CreateVerificationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `VerifyV2Verification.CreateVerificationRequest` (19):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `channel` | `form` | `Channel` | `string` | yes |
| `customFriendlyName` | `form` | `CustomFriendlyName` | `string` | no |
| `customMessage` | `form` | `CustomMessage` | `string` | no |
| `sendDigits` | `form` | `SendDigits` | `string` | no |
| `locale` | `form` | `Locale` | `string` | no |
| `customCode` | `form` | `CustomCode` | `string` | no |
| `amount` | `form` | `Amount` | `string` | no |
| `payee` | `form` | `Payee` | `string` | no |
| `rateLimits` | `form` | `RateLimits` | `Record<string, unknown>` | no |
| `channelConfiguration` | `form` | `ChannelConfiguration` | `Record<string, unknown>` | no |
| `appHash` | `form` | `AppHash` | `string` | no |
| `templateSid` | `form` | `TemplateSid` | `string` | no |
| `templateCustomSubstitutions` | `form` | `TemplateCustomSubstitutions` | `string` | no |
| `deviceIp` | `form` | `DeviceIp` | `string` | no |
| `enableSnaClientToken` | `form` | `EnableSnaClientToken` | `boolean` | no |
| `riskCheck` | `form` | `RiskCheck` | `MessageEnumRiskCheck` | no |
| `tags` | `form` | `Tags` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessageEnumRiskCheck` | `messageEnumRiskCheckSchema` | `src/models/message-enum-risk-check.ts` |
| `VerifyV2ServiceVerification` | `verifyV2ServiceVerificationSchema` | `src/models/verify-v2-service-verification.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchVerification

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchVerification(request: VerifyV2Verification.FetchVerificationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceVerification, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Verifications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Verification.FetchVerificationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceVerification` | `verifyV2ServiceVerificationSchema` | `src/models/verify-v2-service-verification.ts` |

### updateVerification

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateVerification(request: VerifyV2Verification.UpdateVerificationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceVerification, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Verifications/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceVerification`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Verification.UpdateVerificationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `VerificationEnumStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationEnumStatus` | `verificationEnumStatusSchema` | `src/models/verification-enum-status.ts` |
| `VerifyV2ServiceVerification` | `verifyV2ServiceVerificationSchema` | `src/models/verify-v2-service-verification.ts` |

