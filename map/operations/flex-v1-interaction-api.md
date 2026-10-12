<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InteractionApi — operations

Accessor: `client.flexV1InteractionApi` · Source: `src/resources/flex-v1-interaction-api.ts` · 3 operations · Request types: namespace `FlexV1InteractionApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createInteraction

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createInteraction(request: FlexV1InteractionApi.CreateInteractionRequest, options?: RequestOptions): ApiPromise<FlexV1Interaction, ApiError>`
- **Wire**: `POST /v1/Interactions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1Interaction`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionApi.CreateInteractionRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `channel` | `form` | `Channel` | `Record<string, unknown>` | yes |
| `routing` | `form` | `Routing` | `Record<string, unknown>` | no |
| `interactionContextSid` | `form` | `InteractionContextSid` | `string` | no |
| `webhookTtid` | `form` | `WebhookTtid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Interaction` | `flexV1InteractionSchema` | `src/models/flex-v1-interaction.ts` |

### fetchInteraction2

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInteraction2(request: FlexV1InteractionApi.FetchInteraction2Request, options?: RequestOptions): ApiPromise<FlexV1Interaction, ApiError>`
- **Wire**: `GET /v1/Interactions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1Interaction`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionApi.FetchInteraction2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Interaction` | `flexV1InteractionSchema` | `src/models/flex-v1-interaction.ts` |

### updateInteraction

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateInteraction(request: FlexV1InteractionApi.UpdateInteractionRequest, options?: RequestOptions): ApiPromise<FlexV1Interaction, ApiError>`
- **Wire**: `POST /v1/Interactions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1Interaction`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InteractionApi.UpdateInteractionRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `webhookTtid` | `form` | `WebhookTtid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Interaction` | `flexV1InteractionSchema` | `src/models/flex-v1-interaction.ts` |

