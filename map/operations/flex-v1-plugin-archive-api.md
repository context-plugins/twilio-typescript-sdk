<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginArchiveApi — operations

Accessor: `client.flexV1PluginArchiveApi` · Source: `src/resources/flex-v1-plugin-archive-api.ts` · 1 operation · Request types: namespace `FlexV1PluginArchiveApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### updatePluginArchive

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePluginArchive(request: FlexV1PluginArchiveApi.UpdatePluginArchiveRequest, options?: RequestOptions): ApiPromise<FlexV1PluginArchive, ApiError>`
- **Wire**: `POST /v1/PluginService/Plugins/{Sid}/Archive`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1PluginArchive`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginArchiveApi.UpdatePluginArchiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginArchive` | `flexV1PluginArchiveSchema` | `src/models/flex-v1-plugin-archive.ts` |

