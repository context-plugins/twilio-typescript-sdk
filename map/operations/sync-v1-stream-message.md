<!-- Generated file — do not edit; regenerated with the SDK. -->

# SyncV1StreamMessage — operations

Accessor: `client.syncV1StreamMessage` · Source: `src/resources/sync-v1-stream-message.ts` · 1 operation · Request types: namespace `SyncV1StreamMessage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createStreamMessage

- **Server**: `default12` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createStreamMessage(request: SyncV1StreamMessage.CreateStreamMessageRequest, options?: RequestOptions): ApiPromise<SyncV1ServiceSyncStreamStreamMessage, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `SyncV1ServiceSyncStreamStreamMessage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `SyncV1StreamMessage.CreateStreamMessageRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `streamSid` | `path` | `StreamSid` | `string` | yes |
| `data` | `form` | `Data` | `Record<string, unknown>` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `SyncV1ServiceSyncStreamStreamMessage` | `syncV1ServiceSyncStreamStreamMessageSchema` | `src/models/sync-v1-service-sync-stream-stream-message.ts` |

