<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2VerificationAttemptApi — operations

Accessor: `client.verifyV2VerificationAttemptApi` · Source: `src/resources/verify-v2-verification-attempt-api.ts` · 2 operations · Request types: namespace `VerifyV2VerificationAttemptApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchVerificationAttempt

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchVerificationAttempt(request: VerifyV2VerificationAttemptApi.FetchVerificationAttemptRequest, options?: RequestOptions): ApiPromise<VerifyV2VerificationAttempt, ResponseError>`
- **Wire**: `GET /v2/Attempts/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2VerificationAttempt`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2VerificationAttemptApi.FetchVerificationAttemptRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2VerificationAttempt` | `verifyV2VerificationAttemptSchema` | `src/models/verify-v2-verification-attempt.ts` |

### listVerificationAttempt

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listVerificationAttempt(request: VerifyV2VerificationAttemptApi.ListVerificationAttemptRequest, options?: RequestOptions): ApiPromise<ListVerificationAttemptResponse, ResponseError>`
- **Wire**: `GET /v2/Attempts`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVerificationAttemptResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2VerificationAttemptApi.ListVerificationAttemptRequest` (11):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `dateCreatedAfter` | `query` | `DateCreatedAfter` | `Date` (date-time) | no |
| `dateCreatedBefore` | `query` | `DateCreatedBefore` | `Date` (date-time) | no |
| `channelDataTo` | `query` | `ChannelData.To` | `string` | no |
| `country` | `query` | `Country` | `string` | no |
| `channel` | `query` | `Channel` | `VerificationAttemptEnumChannels` | no |
| `verifyServiceSid` | `query` | `VerifyServiceSid` | `string` | no |
| `verificationSid` | `query` | `VerificationSid` | `string` | no |
| `status` | `query` | `Status` | `VerificationAttemptEnumConversionStatus` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerificationAttemptEnumChannels` | `verificationAttemptEnumChannelsSchema` | `src/models/verification-attempt-enum-channels.ts` |
| `VerificationAttemptEnumConversionStatus` | `verificationAttemptEnumConversionStatusSchema` | `src/models/verification-attempt-enum-conversion-status.ts` |
| `ListVerificationAttemptResponse` | `listVerificationAttemptResponseSchema` | `src/models/list-verification-attempt-response.ts` |

