<!-- Generated file — do not edit; regenerated with the SDK. -->

# TwilioSdkClient — ungrouped operations

Accessor: `client` (the client itself) · Source: `src/client.ts` · 11 operations · Request and error types: namespace `TwilioSdkClient`

Operations the spec leaves untagged are methods on the client rather than on a resource, so there is no accessor property to go through. The request type still lives in a namespace merged onto the exported class, so you write `TwilioSdkClient.CreateBulkLookupRequest`.

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createBulkLookup

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createBulkLookup(request: TwilioSdkClient.CreateBulkLookupRequest, options?: RequestOptions): ApiPromise<LookupResponse1, ResponseError>`
- **Wire**: `POST /v2/batch/query`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `LookupResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TwilioSdkClient.CreateBulkLookupRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `LookupRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LookupRequest` | `lookupRequestSchema` | `src/models/lookup-request.ts` |
| `LookupResponse1` | `lookupResponse1Schema` | `src/models/lookup-response1.ts` |

### createLookupPhoneNumberOverrides

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createLookupPhoneNumberOverrides(request: TwilioSdkClient.CreateLookupPhoneNumberOverridesRequest, options?: RequestOptions): ApiPromise<OverridesResponse, TwilioSdkClient.CreateLookupPhoneNumberOverridesError>`
- **Wire**: `POST /v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `OverridesResponse`
- **Error**: `TwilioSdkClient.CreateLookupPhoneNumberOverridesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.CreateLookupPhoneNumberOverridesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |
| `body` | `body` | — | `OverridesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OverridesRequest` | `overridesRequestSchema` | `src/models/overrides-request.ts` |
| `OverridesResponse` | `overridesResponseSchema` | `src/models/overrides-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### deleteLookupPhoneNumberOverrides

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteLookupPhoneNumberOverrides(request: TwilioSdkClient.DeleteLookupPhoneNumberOverridesRequest, options?: RequestOptions): ApiPromise<undefined, TwilioSdkClient.DeleteLookupPhoneNumberOverridesError>`
- **Wire**: `DELETE /v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkClient.DeleteLookupPhoneNumberOverridesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.DeleteLookupPhoneNumberOverridesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### deleteLookupRateLimit

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteLookupRateLimit(request: TwilioSdkClient.DeleteLookupRateLimitRequest, options?: RequestOptions): ApiPromise<undefined, TwilioSdkClient.DeleteLookupRateLimitError>`
- **Wire**: `DELETE /v2/RateLimits/Fields/{Field}/Bucket/{Bucket}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkClient.DeleteLookupRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.DeleteLookupRateLimitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `bucket` | `path` | `Bucket` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchLookupAccountRateLimits

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchLookupAccountRateLimits(request: TwilioSdkClient.FetchLookupAccountRateLimitsRequest, options?: RequestOptions): ApiPromise<RateLimitListResponse, TwilioSdkClient.FetchLookupAccountRateLimitsError>`
- **Wire**: `GET /v2/RateLimits`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RateLimitListResponse`
- **Error**: `TwilioSdkClient.FetchLookupAccountRateLimitsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.FetchLookupAccountRateLimitsRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `fields` | `query` | `Fields` | `string[]` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RateLimitListResponse` | `rateLimitListResponseSchema` | `src/models/rate-limit-list-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchLookupPhoneNumberOverrides

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchLookupPhoneNumberOverrides(request: TwilioSdkClient.FetchLookupPhoneNumberOverridesRequest, options?: RequestOptions): ApiPromise<OverridesResponse, TwilioSdkClient.FetchLookupPhoneNumberOverridesError>`
- **Wire**: `GET /v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `OverridesResponse`
- **Error**: `TwilioSdkClient.FetchLookupPhoneNumberOverridesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.FetchLookupPhoneNumberOverridesRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `OverridesResponse` | `overridesResponseSchema` | `src/models/overrides-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchLookupRateLimit

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchLookupRateLimit(request: TwilioSdkClient.FetchLookupRateLimitRequest, options?: RequestOptions): ApiPromise<RateLimitResponse, TwilioSdkClient.FetchLookupRateLimitError>`
- **Wire**: `GET /v2/RateLimits/Fields/{Field}/Bucket/{Bucket}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RateLimitResponse`
- **Error**: `TwilioSdkClient.FetchLookupRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.FetchLookupRateLimitRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `bucket` | `path` | `Bucket` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `RateLimitResponse` | `rateLimitResponseSchema` | `src/models/rate-limit-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updateChallengePasskeys

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateChallengePasskeys(request: TwilioSdkClient.UpdateChallengePasskeysRequest, options?: RequestOptions): ApiPromise<V2ServicesPasskeysApproveChallengeResponse, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Passkeys/ApproveChallenge`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V2ServicesPasskeysApproveChallengeResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TwilioSdkClient.UpdateChallengePasskeysRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `body` | `body` | — | `ApprovePasskeysChallengeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApprovePasskeysChallengeRequest` | `approvePasskeysChallengeRequestSchema` | `src/models/approve-passkeys-challenge-request.ts` |
| `V2ServicesPasskeysApproveChallengeResponse` | `v2ServicesPasskeysApproveChallengeResponseSchema` | `src/models/v2-services-passkeys-approve-challenge-response.ts` |

### updateLookupPhoneNumberOverrides

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateLookupPhoneNumberOverrides(request: TwilioSdkClient.UpdateLookupPhoneNumberOverridesRequest, options?: RequestOptions): ApiPromise<OverridesResponse, TwilioSdkClient.UpdateLookupPhoneNumberOverridesError>`
- **Wire**: `PUT /v2/PhoneNumbers/{PhoneNumber}/Overrides/{Field}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `OverridesResponse`
- **Error**: `TwilioSdkClient.UpdateLookupPhoneNumberOverridesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.UpdateLookupPhoneNumberOverridesRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |
| `body` | `body` | — | `OverridesRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `OverridesRequest` | `overridesRequestSchema` | `src/models/overrides-request.ts` |
| `OverridesResponse` | `overridesResponseSchema` | `src/models/overrides-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updateLookupRateLimit

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateLookupRateLimit(request: TwilioSdkClient.UpdateLookupRateLimitRequest, options?: RequestOptions): ApiPromise<RateLimitResponse, TwilioSdkClient.UpdateLookupRateLimitError>`
- **Wire**: `PUT /v2/RateLimits/Fields/{Field}/Bucket/{Bucket}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `RateLimitResponse`
- **Error**: `TwilioSdkClient.UpdateLookupRateLimitError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `TwilioSdkClient.UpdateLookupRateLimitRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `field` | `path` | `Field` | `string` | yes |
| `bucket` | `path` | `Bucket` | `string` | yes |
| `body` | `body` | — | `RateLimitRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RateLimitRequest` | `rateLimitRequestSchema` | `src/models/rate-limit-request.ts` |
| `RateLimitResponse` | `rateLimitResponseSchema` | `src/models/rate-limit-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updatePasskeysFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePasskeysFactor(request: TwilioSdkClient.UpdatePasskeysFactorRequest, options?: RequestOptions): ApiPromise<V2ServicesPasskeysVerifyFactorResponse, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Passkeys/VerifyFactor`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V2ServicesPasskeysVerifyFactorResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `TwilioSdkClient.UpdatePasskeysFactorRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `body` | `body` | — | `VerifyPasskeysFactorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyPasskeysFactorRequest` | `verifyPasskeysFactorRequestSchema` | `src/models/verify-passkeys-factor-request.ts` |
| `V2ServicesPasskeysVerifyFactorResponse` | `v2ServicesPasskeysVerifyFactorResponseSchema` | `src/models/v2-services-passkeys-verify-factor-response.ts` |

