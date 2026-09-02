<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV2TypingIndicator — operations

Accessor: `client.messagingV2TypingIndicator` · Source: `src/resources/messaging-v2-typing-indicator.ts` · 1 operation · Request types: namespace `MessagingV2TypingIndicator`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createTypingIndicator

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createTypingIndicator(request: MessagingV2TypingIndicator.CreateTypingIndicatorRequest, options?: RequestOptions): ApiPromise<V2IndicatorsTypingJsonResponse, ResponseError>`
- **Wire**: `POST /v2/Indicators/Typing.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `V2IndicatorsTypingJsonResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV2TypingIndicator.CreateTypingIndicatorRequest` (2):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `channel` | `form` | `Channel` | yes |
| `messageId` | `form` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `Channel` | `channelSchema` | `src/models/channel.ts` |
| `V2IndicatorsTypingJsonResponse` | `v2IndicatorsTypingJsonResponseSchema` | `src/models/v2-indicators-typing-json-response.ts` |

