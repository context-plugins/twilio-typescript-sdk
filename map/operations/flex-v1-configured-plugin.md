<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ConfiguredPlugin — operations

Accessor: `client.flexV1ConfiguredPlugin` · Source: `src/resources/flex-v1-configured-plugin.ts` · 2 operations · Request types: namespace `FlexV1ConfiguredPlugin`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchConfiguredPlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfiguredPlugin(request: FlexV1ConfiguredPlugin.FetchConfiguredPluginRequest, options?: RequestOptions): ApiPromise<FlexV1PluginConfigurationConfiguredPlugin, ResponseError>`
- **Wire**: `GET /v1/PluginService/Configurations/{ConfigurationSid}/Plugins/{PluginSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginConfigurationConfiguredPlugin`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ConfiguredPlugin.FetchConfiguredPluginRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `configurationSid` | `path` | `ConfigurationSid` | `string` | yes |
| `pluginSid` | `path` | `PluginSid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginConfigurationConfiguredPlugin` | `flexV1PluginConfigurationConfiguredPluginSchema` | `src/models/flex-v1-plugin-configuration-configured-plugin.ts` |

### listConfiguredPlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConfiguredPlugin(request: FlexV1ConfiguredPlugin.ListConfiguredPluginRequest, options?: RequestOptions): ApiPromise<ListConfiguredPluginResponse, ResponseError>`
- **Wire**: `GET /v1/PluginService/Configurations/{ConfigurationSid}/Plugins`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConfiguredPluginResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1ConfiguredPlugin.ListConfiguredPluginRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `configurationSid` | `path` | `ConfigurationSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConfiguredPluginResponse` | `listConfiguredPluginResponseSchema` | `src/models/list-configured-plugin-response.ts` |

