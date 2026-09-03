<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginConfigurationArchiveApi — operations

Accessor: `client.flexV1PluginConfigurationArchiveApi` · Source: `src/resources/flex-v1-plugin-configuration-archive-api.ts` · 1 operation · Request types: namespace `FlexV1PluginConfigurationArchiveApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updatePluginConfigurationArchive

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePluginConfigurationArchive(request: FlexV1PluginConfigurationArchiveApi.UpdatePluginConfigurationArchiveRequest, options?: RequestOptions): ApiPromise<FlexV1PluginConfigurationArchive, ResponseError>`
- **Wire**: `POST /v1/PluginService/Configurations/{Sid}/Archive`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginConfigurationArchive`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginConfigurationArchiveApi.UpdatePluginConfigurationArchiveRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginConfigurationArchive` | `flexV1PluginConfigurationArchiveSchema` | `src/models/flex-v1-plugin-configuration-archive.ts` |

