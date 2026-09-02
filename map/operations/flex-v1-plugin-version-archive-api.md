<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginVersionArchiveApi — operations

Accessor: `client.flexV1PluginVersionArchiveApi` · Source: `src/resources/flex-v1-plugin-version-archive-api.ts` · 1 operation · Request types: namespace `FlexV1PluginVersionArchiveApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updatePluginVersionArchive

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePluginVersionArchive(request: FlexV1PluginVersionArchiveApi.UpdatePluginVersionArchiveRequest, options?: RequestOptions): ApiPromise<FlexV1PluginVersionArchive, ResponseError>`
- **Wire**: `POST /v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}/Archive`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginVersionArchive`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginVersionArchiveApi.UpdatePluginVersionArchiveRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pluginSid` | `path` | `PluginSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginVersionArchive` | `flexV1PluginVersionArchiveSchema` | `src/models/flex-v1-plugin-version-archive.ts` |

