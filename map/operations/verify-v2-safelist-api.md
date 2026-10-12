<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2SafelistApi — operations

Accessor: `client.verifyV2SafelistApi` · Source: `src/resources/verify-v2-safelist-api.ts` · 3 operations · Request types: namespace `VerifyV2SafelistApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createSafelist

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSafelist(request: VerifyV2SafelistApi.CreateSafelistRequest, options?: RequestOptions): ApiPromise<VerifyV2Safelist, ApiError>`
- **Wire**: `POST /v2/SafeList/Numbers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `VerifyV2Safelist`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2SafelistApi.CreateSafelistRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2Safelist` | `verifyV2SafelistSchema` | `src/models/verify-v2-safelist.ts` |

### deleteSafelist

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteSafelist(request: VerifyV2SafelistApi.DeleteSafelistRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v2/SafeList/Numbers/{PhoneNumber}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2SafelistApi.DeleteSafelistRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |

### fetchSafelist

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchSafelist(request: VerifyV2SafelistApi.FetchSafelistRequest, options?: RequestOptions): ApiPromise<VerifyV2Safelist, ApiError>`
- **Wire**: `GET /v2/SafeList/Numbers/{PhoneNumber}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2Safelist`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2SafelistApi.FetchSafelistRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2Safelist` | `verifyV2SafelistSchema` | `src/models/verify-v2-safelist.ts` |

