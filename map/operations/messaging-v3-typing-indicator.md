<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV3TypingIndicator — operations

Accessor: `client.messagingV3TypingIndicator` · Source: `src/resources/messaging-v3-typing-indicator.ts` · 1 operation · Request and error types: namespace `MessagingV3TypingIndicator`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createV3TypingIndicator

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createV3TypingIndicator(request: MessagingV3TypingIndicator.CreateV3TypingIndicatorRequest, options?: RequestOptions): ApiPromise<V2IndicatorsTypingJsonResponse, MessagingV3TypingIndicator.CreateV3TypingIndicatorError>`
- **Wire**: `POST /v3/Indicators/Typing.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `MessagingV3TypingIndicator.CreateV3TypingIndicatorError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [401] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [403] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessagingV3TypingIndicator.CreateV3TypingIndicatorRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `TypingIndicatorRequest` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `TypingIndicatorRequest` | `typingIndicatorRequestSchema` | `src/models/unions/typing-indicator-request.ts` |
| `V2IndicatorsTypingJsonResponse` | `v2IndicatorsTypingJsonResponseSchema` | `src/models/v2-indicators-typing-json-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

