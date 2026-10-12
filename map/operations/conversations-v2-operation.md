<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2Operation — operations

Accessor: `client.conversationsV2Operation` · Source: `src/resources/conversations-v2-operation.ts` · 1 operation · Request and error types: namespace `ConversationsV2Operation`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchOperationStatus

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchOperationStatus(request: ConversationsV2Operation.FetchOperationStatusRequest, options?: RequestOptions): ApiPromise<ConversationsV2OperationStatus, ConversationsV2Operation.FetchOperationStatusError>`
- **Wire**: `GET /v2/ControlPlane/Operations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2OperationStatus`
- **Error**: `TwilioSdkError` with `kind: "api"`, an instance of `ConversationsV2Operation.FetchOperationStatusError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2Operation.FetchOperationStatusRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2OperationStatus` | `conversationsV2OperationStatusSchema` | `src/models/conversations-v2-operation-status.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

