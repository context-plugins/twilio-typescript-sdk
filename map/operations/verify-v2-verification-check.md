<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationCheck — operations

Accessor: `client.verifyV2VerificationCheck` · Source: `src/resources/verify-v2-verification-check.ts` · 1 operation · Request types: namespace `VerifyV2VerificationCheck`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createVerificationCheck

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createVerificationCheck(request: VerifyV2VerificationCheck.CreateVerificationCheckRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceVerificationCheck, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/VerificationCheck`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceVerificationCheck`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2VerificationCheck.CreateVerificationCheckRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `code` | `form` | `Code` | `string` | no |
| `to` | `form` | `To` | `string` | no |
| `verificationSid` | `form` | `VerificationSid` | `string` | no |
| `amount` | `form` | `Amount` | `string` | no |
| `payee` | `form` | `Payee` | `string` | no |
| `snaClientToken` | `form` | `SnaClientToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceVerificationCheck` | `verifyV2ServiceVerificationCheckSchema` | `src/models/verify-v2-service-verification-check.ts` |

