<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2NewFactor — operations

Accessor: `client.verifyV2NewFactor` · Source: `src/resources/verify-v2-new-factor.ts` · 2 operations · Request types: namespace `VerifyV2NewFactor`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createNewFactor

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createNewFactor(request: VerifyV2NewFactor.CreateNewFactorRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityNewFactor, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Factors`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceEntityNewFactor`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2NewFactor.CreateNewFactorRequest` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `factorType` | `form` | `FactorType` | `NewFactorEnumFactorTypes` | yes |
| `bindingAlg` | `form` | `Binding.Alg` | `string` | no |
| `bindingPublicKey` | `form` | `Binding.PublicKey` | `string` | no |
| `configAppId` | `form` | `Config.AppId` | `string` | no |
| `configNotificationPlatform` | `form` | `Config.NotificationPlatform` | `NewFactorEnumNotificationPlatforms` | no |
| `configNotificationToken` | `form` | `Config.NotificationToken` | `string` | no |
| `configSdkVersion` | `form` | `Config.SdkVersion` | `string` | no |
| `bindingSecret` | `form` | `Binding.Secret` | `string` | no |
| `configTimeStep` | `form` | `Config.TimeStep` | `number` | no |
| `configSkew` | `form` | `Config.Skew` | `number` | no |
| `configCodeLength` | `form` | `Config.CodeLength` | `number` | no |
| `configAlg` | `form` | `Config.Alg` | `NewFactorEnumTotpAlgorithms` | no |
| `metadata` | `form` | `Metadata` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NewFactorEnumFactorTypes` | `newFactorEnumFactorTypesSchema` | `src/models/new-factor-enum-factor-types.ts` |
| `NewFactorEnumNotificationPlatforms` | `newFactorEnumNotificationPlatformsSchema` | `src/models/new-factor-enum-notification-platforms.ts` |
| `NewFactorEnumTotpAlgorithms` | `newFactorEnumTotpAlgorithmsSchema` | `src/models/new-factor-enum-totp-algorithms.ts` |
| `VerifyV2ServiceEntityNewFactor` | `verifyV2ServiceEntityNewFactorSchema` | `src/models/verify-v2-service-entity-new-factor.ts` |

### createNewFactorPasskey

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createNewFactorPasskey(request: VerifyV2NewFactor.CreateNewFactorPasskeyRequest, options?: RequestOptions): ApiPromise<V2ServicesPasskeysFactorsResponse, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Passkeys/Factors`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V2ServicesPasskeysFactorsResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2NewFactor.CreateNewFactorPasskeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `body` | `body` | — | `CreateNewPasskeysFactorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreateNewPasskeysFactorRequest` | `createNewPasskeysFactorRequestSchema` | `src/models/create-new-passkeys-factor-request.ts` |
| `V2ServicesPasskeysFactorsResponse` | `v2ServicesPasskeysFactorsResponseSchema` | `src/models/v2-services-passkeys-factors-response.ts` |

