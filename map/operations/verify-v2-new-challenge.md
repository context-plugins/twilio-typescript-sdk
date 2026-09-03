<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2NewChallenge — operations

Accessor: `client.verifyV2NewChallenge` · Source: `src/resources/verify-v2-new-challenge.ts` · 1 operation · Request types: namespace `VerifyV2NewChallenge`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createChallengePasskeys

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createChallengePasskeys(request: VerifyV2NewChallenge.CreateChallengePasskeysRequest, options?: RequestOptions): ApiPromise<V2ServicesPasskeysChallengesResponse, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/Passkeys/Challenges`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V2ServicesPasskeysChallengesResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2NewChallenge.CreateChallengePasskeysRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `body` | `body` | — | `CreatePasskeysChallengeRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `CreatePasskeysChallengeRequest` | `createPasskeysChallengeRequestSchema` | `src/models/create-passkeys-challenge-request.ts` |
| `V2ServicesPasskeysChallengesResponse` | `v2ServicesPasskeysChallengesResponseSchema` | `src/models/v2-services-passkeys-challenges-response.ts` |

