<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SenderIdRegistrationEmbeddedSession — operations

Accessor: `client.numbersV1SenderIdRegistrationEmbeddedSession` · Source: `src/resources/numbers-v1-sender-id-registration-embedded-session.ts` · 1 operation · Request and error types: namespace `NumbersV1SenderIdRegistrationEmbeddedSession`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSenderIdRegistrationEmbeddedSession

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSenderIdRegistrationEmbeddedSession(request: NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionRequest, options?: RequestOptions): ApiPromise<NumbersV1CreateEmbeddedSessionResponse, NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionError>`
- **Wire**: `POST /v1/SenderIdRegistrations/{BundleSid}/EmbeddedSessions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `NumbersV1CreateEmbeddedSessionResponse`
- **Error**: `NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersV1SenderIdRegistrationEmbeddedSession.CreateSenderIdRegistrationEmbeddedSessionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `bundleSid` | `path` | `BundleSid` | `string` | yes |
| `body` | `body` | — | `NumbersV1CreateEmbeddedSessionRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1CreateEmbeddedSessionRequest` | `numbersV1CreateEmbeddedSessionRequestSchema` | `src/models/numbers-v1-create-embedded-session-request.ts` |
| `NumbersV1CreateEmbeddedSessionResponse` | `numbersV1CreateEmbeddedSessionResponseSchema` | `src/models/numbers-v1-create-embedded-session-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

