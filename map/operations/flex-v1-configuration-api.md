<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ConfigurationApi — operations

Accessor: `client.flexV1ConfigurationApi` · Source: `src/resources/flex-v1-configuration-api.ts` · 2 operations · Request types: namespace `FlexV1ConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchConfiguration3

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfiguration3(request: FlexV1ConfigurationApi.FetchConfiguration3Request, options?: RequestOptions): ApiPromise<FlexV1Configuration, ResponseError>`
- **Wire**: `GET /v1/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1Configuration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ConfigurationApi.FetchConfiguration3Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `uiVersion` | `query` | `UiVersion` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Configuration` | `flexV1ConfigurationSchema` | `src/models/flex-v1-configuration.ts` |

### updateConfiguration3

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfiguration3(request: FlexV1ConfigurationApi.UpdateConfiguration3Request, options?: RequestOptions): ApiPromise<FlexV1Configuration, ResponseError>`
- **Wire**: `POST /v1/Configuration`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `FlexV1Configuration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ConfigurationApi.UpdateConfiguration3Request` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Configuration` | `flexV1ConfigurationSchema` | `src/models/flex-v1-configuration.ts` |

