<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1SenderIdRegistration — operations

Accessor: `client.numbersV1SenderIdRegistration` · Source: `src/resources/numbers-v1-sender-id-registration.ts` · 1 operation · Request and error types: namespace `NumbersV1SenderIdRegistration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createSenderIdRegistration

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createSenderIdRegistration(request: NumbersV1SenderIdRegistration.CreateSenderIdRegistrationRequest, options?: RequestOptions): ApiPromise<NumbersV1CreateEmbeddedRegistrationResponse, NumbersV1SenderIdRegistration.CreateSenderIdRegistrationError>`
- **Wire**: `POST /v1/SenderIdRegistrations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `NumbersV1CreateEmbeddedRegistrationResponse`
- **Error**: `NumbersV1SenderIdRegistration.CreateSenderIdRegistrationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NumbersV1SenderIdRegistration.CreateSenderIdRegistrationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `NumbersV1CreateEmbeddedRegistrationRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1CreateEmbeddedRegistrationRequest` | `numbersV1CreateEmbeddedRegistrationRequestSchema` | `src/models/numbers-v1-create-embedded-registration-request.ts` |
| `NumbersV1CreateEmbeddedRegistrationResponse` | `numbersV1CreateEmbeddedRegistrationResponseSchema` | `src/models/numbers-v1-create-embedded-registration-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

