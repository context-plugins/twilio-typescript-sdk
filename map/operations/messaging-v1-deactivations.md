<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1Deactivations — operations

Accessor: `client.messagingV1Deactivations` · Source: `src/resources/messaging-v1-deactivations.ts` · 1 operation · Request and error types: namespace `MessagingV1Deactivations`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchDeactivation

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDeactivation(request: MessagingV1Deactivations.FetchDeactivationRequest, options?: RequestOptions): ApiPromise<undefined, MessagingV1Deactivations.FetchDeactivationError>`
- **Wire**: `GET /v1/Deactivations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `MessagingV1Deactivations.FetchDeactivationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"recordingAddOnResultPayloadData"` [307] `RecordingAddOnResultPayloadData` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MessagingV1Deactivations.FetchDeactivationRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `date` | `query` | `Date` | `string` (date) | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `RecordingAddOnResultPayloadData` | `recordingAddOnResultPayloadDataSchema` | `src/models/recording-add-on-result-payload-data.ts` |

