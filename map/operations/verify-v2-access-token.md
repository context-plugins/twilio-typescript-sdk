<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2AccessToken — operations

Accessor: `client.verifyV2AccessToken` · Source: `src/resources/verify-v2-access-token.ts` · 2 operations · Request types: namespace `VerifyV2AccessToken`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createAccessToken

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createAccessToken(request: VerifyV2AccessToken.CreateAccessTokenRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceAccessToken, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/AccessTokens`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2AccessToken.CreateAccessTokenRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `form` | `Identity` | `string` | yes |
| `factorType` | `form` | `FactorType` | `AccessTokenEnumFactorTypes` | yes |
| `factorFriendlyName` | `form` | `FactorFriendlyName` | `string` | no |
| `ttl` | `form` | `Ttl` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AccessTokenEnumFactorTypes` | `accessTokenEnumFactorTypesSchema` | `src/models/access-token-enum-factor-types.ts` |
| `VerifyV2ServiceAccessToken` | `verifyV2ServiceAccessTokenSchema` | `src/models/verify-v2-service-access-token.ts` |

### fetchAccessToken

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchAccessToken(request: VerifyV2AccessToken.FetchAccessTokenRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceAccessToken, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/AccessTokens/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceAccessToken`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2AccessToken.FetchAccessTokenRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceAccessToken` | `verifyV2ServiceAccessTokenSchema` | `src/models/verify-v2-service-access-token.ts` |

