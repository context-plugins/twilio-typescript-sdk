<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Factor — operations

Accessor: `client.verifyV2Factor` · Source: `src/resources/verify-v2-factor.ts` · 4 operations · Request types: namespace `VerifyV2Factor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteFactor(request: VerifyV2Factor.DeleteFactorRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Factor.DeleteFactorRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFactor(request: VerifyV2Factor.FetchFactorRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityFactor, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Factor.FetchFactorRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntityFactor` | `verifyV2ServiceEntityFactorSchema` | `src/models/verify-v2-service-entity-factor.ts` |

### listFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFactor(request: VerifyV2Factor.ListFactorRequest, options?: RequestOptions): ApiPromise<ListFactorResponse, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Factors`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFactorResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Factor.ListFactorRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFactorResponse` | `listFactorResponseSchema` | `src/models/list-factor-response.ts` |

### updateFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFactor(request: VerifyV2Factor.UpdateFactorRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityFactor, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Factors/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceEntityFactor`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Factor.UpdateFactorRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `authPayload` | `form` | `AuthPayload` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `configNotificationToken` | `form` | `Config.NotificationToken` | `string` | no |
| `configSdkVersion` | `form` | `Config.SdkVersion` | `string` | no |
| `configTimeStep` | `form` | `Config.TimeStep` | `number` | no |
| `configSkew` | `form` | `Config.Skew` | `number` | no |
| `configCodeLength` | `form` | `Config.CodeLength` | `number` | no |
| `configAlg` | `form` | `Config.Alg` | `FactorEnumTotpAlgorithms` | no |
| `configNotificationPlatform` | `form` | `Config.NotificationPlatform` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FactorEnumTotpAlgorithms` | `factorEnumTotpAlgorithmsSchema` | `src/models/factor-enum-totp-algorithms.ts` |
| `VerifyV2ServiceEntityFactor` | `verifyV2ServiceEntityFactorSchema` | `src/models/verify-v2-service-entity-factor.ts` |

