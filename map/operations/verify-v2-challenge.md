<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Challenge — operations

Accessor: `client.verifyV2Challenge` · Source: `src/resources/verify-v2-challenge.ts` · 4 operations · Request types: namespace `VerifyV2Challenge`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createChallenge

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createChallenge(request: VerifyV2Challenge.CreateChallengeRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Challenge.CreateChallengeRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `factorSid` | `form` | `FactorSid` | `string` | yes |
| `expirationDate` | `form` | `ExpirationDate` | `Date` (date-time) | no |
| `detailsMessage` | `form` | `Details.Message` | `string` | no |
| `detailsFields` | `form` | `Details.Fields` | `Record<string, unknown>[]` | no |
| `hiddenDetails` | `form` | `HiddenDetails` | `Record<string, unknown>` | no |
| `authPayload` | `form` | `AuthPayload` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntityChallenge` | `verifyV2ServiceEntityChallengeSchema` | `src/models/verify-v2-service-entity-challenge.ts` |

### fetchChallenge

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchChallenge(request: VerifyV2Challenge.FetchChallengeRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Challenge.FetchChallengeRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntityChallenge` | `verifyV2ServiceEntityChallengeSchema` | `src/models/verify-v2-service-entity-challenge.ts` |

### listChallenge

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listChallenge(request: VerifyV2Challenge.ListChallengeRequest, options?: RequestOptions): ApiPromise<ListChallengeResponse, ApiError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListChallengeResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Challenge.ListChallengeRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `factorSid` | `query` | `FactorSid` | `string` | no |
| `status` | `query` | `Status` | `ChallengeEnumChallengeStatuses` | no |
| `order` | `query` | `Order` | `ChallengeEnumListOrders` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ChallengeEnumChallengeStatuses` | `challengeEnumChallengeStatusesSchema` | `src/models/challenge-enum-challenge-statuses.ts` |
| `ChallengeEnumListOrders` | `challengeEnumListOrdersSchema` | `src/models/challenge-enum-list-orders.ts` |
| `ListChallengeResponse` | `listChallengeResponseSchema` | `src/models/list-challenge-response.ts` |

### updateChallenge

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateChallenge(request: VerifyV2Challenge.UpdateChallengeRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceEntityChallenge, ApiError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Entities/{Identity}/Challenges/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2ServiceEntityChallenge`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Challenge.UpdateChallengeRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `identity` | `path` | `Identity` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `authPayload` | `form` | `AuthPayload` | `string` | no |
| `metadata` | `form` | `Metadata` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceEntityChallenge` | `verifyV2ServiceEntityChallengeSchema` | `src/models/verify-v2-service-entity-challenge.ts` |

