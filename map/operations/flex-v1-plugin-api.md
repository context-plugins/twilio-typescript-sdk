<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginApi — operations

Accessor: `client.flexV1PluginApi` · Source: `src/resources/flex-v1-plugin-api.ts` · 4 operations · Request types: namespace `FlexV1PluginApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createPlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPlugin(request: FlexV1PluginApi.CreatePluginRequest, options?: RequestOptions): ApiPromise<FlexV1Plugin, ResponseError>`
- **Wire**: `POST /v1/PluginService/Plugins`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1Plugin`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginApi.CreatePluginRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |
| `uniqueName` | `form` | `UniqueName` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Plugin` | `flexV1PluginSchema` | `src/models/flex-v1-plugin.ts` |

### fetchPlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPlugin(request: FlexV1PluginApi.FetchPluginRequest, options?: RequestOptions): ApiPromise<FlexV1Plugin, ResponseError>`
- **Wire**: `GET /v1/PluginService/Plugins/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1Plugin`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginApi.FetchPluginRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Plugin` | `flexV1PluginSchema` | `src/models/flex-v1-plugin.ts` |

### listPlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPlugin(request: FlexV1PluginApi.ListPluginRequest, options?: RequestOptions): ApiPromise<ListPluginResponse, ResponseError>`
- **Wire**: `GET /v1/PluginService/Plugins`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPluginResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginApi.ListPluginRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPluginResponse` | `listPluginResponseSchema` | `src/models/list-plugin-response.ts` |

### updatePlugin

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePlugin(request: FlexV1PluginApi.UpdatePluginRequest, options?: RequestOptions): ApiPromise<FlexV1Plugin, ResponseError>`
- **Wire**: `POST /v1/PluginService/Plugins/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1Plugin`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginApi.UpdatePluginRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1Plugin` | `flexV1PluginSchema` | `src/models/flex-v1-plugin.ts` |

