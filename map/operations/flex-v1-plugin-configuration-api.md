<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginConfigurationApi — operations

Accessor: `client.flexV1PluginConfigurationApi` · Source: `src/resources/flex-v1-plugin-configuration-api.ts` · 3 operations · Request types: namespace `FlexV1PluginConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPluginConfiguration

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPluginConfiguration(request: FlexV1PluginConfigurationApi.CreatePluginConfigurationRequest, options?: RequestOptions): ApiPromise<FlexV1PluginConfiguration, ApiError>`
- **Wire**: `POST /v1/PluginService/Configurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1PluginConfiguration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginConfigurationApi.CreatePluginConfigurationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |
| `name` | `form` | `Name` | `string` | yes |
| `plugins` | `form` | `Plugins` | `Record<string, unknown>[]` | no |
| `description` | `form` | `Description` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginConfiguration` | `flexV1PluginConfigurationSchema` | `src/models/flex-v1-plugin-configuration.ts` |

### fetchPluginConfiguration

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPluginConfiguration(request: FlexV1PluginConfigurationApi.FetchPluginConfigurationRequest, options?: RequestOptions): ApiPromise<FlexV1PluginConfiguration, ApiError>`
- **Wire**: `GET /v1/PluginService/Configurations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginConfiguration`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginConfigurationApi.FetchPluginConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginConfiguration` | `flexV1PluginConfigurationSchema` | `src/models/flex-v1-plugin-configuration.ts` |

### listPluginConfiguration

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPluginConfiguration(request: FlexV1PluginConfigurationApi.ListPluginConfigurationRequest, options?: RequestOptions): ApiPromise<ListPluginConfigurationResponse, ApiError>`
- **Wire**: `GET /v1/PluginService/Configurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPluginConfigurationResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginConfigurationApi.ListPluginConfigurationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPluginConfigurationResponse` | `listPluginConfigurationResponseSchema` | `src/models/list-plugin-configuration-response.ts` |

