<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationAttemptsSummaryApi — operations

Accessor: `client.verifyV2VerificationAttemptsSummaryApi` · Source: `src/resources/verify-v2-verification-attempts-summary-api.ts` · 1 operation · Request types: namespace `VerifyV2VerificationAttemptsSummaryApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchVerificationAttemptsSummary

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchVerificationAttemptsSummary(request: VerifyV2VerificationAttemptsSummaryApi.FetchVerificationAttemptsSummaryRequest, options?: RequestOptions): ApiPromise<VerifyV2VerificationAttemptsSummary, ApiError>`
- **Wire**: `GET /v2/Attempts/Summary`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2VerificationAttemptsSummary`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2VerificationAttemptsSummaryApi.FetchVerificationAttemptsSummaryRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `verifyServiceSid` | `query` | `VerifyServiceSid` | `string` | no |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `country` | `query` | `Country` | `string` | no |
| `channel` | `query` | `Channel` | `VerificationAttemptsSummaryEnumChannels` | no |
| `destinationPrefix` | `query` | `DestinationPrefix` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationAttemptsSummaryEnumChannels` | `verificationAttemptsSummaryEnumChannelsSchema` | `src/models/verification-attempts-summary-enum-channels.ts` |
| `VerifyV2VerificationAttemptsSummary` | `verifyV2VerificationAttemptsSummarySchema` | `src/models/verify-v2-verification-attempts-summary.ts` |

