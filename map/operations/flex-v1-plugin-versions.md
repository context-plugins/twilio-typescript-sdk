<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginVersions — operations

Accessor: `client.flexV1PluginVersions` · Source: `src/resources/flex-v1-plugin-versions.ts` · 3 operations · Request types: namespace `FlexV1PluginVersions`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPluginVersion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPluginVersion(request: FlexV1PluginVersions.CreatePluginVersionRequest, options?: RequestOptions): ApiPromise<FlexV1PluginPluginVersion, ApiError>`
- **Wire**: `POST /v1/PluginService/Plugins/{PluginSid}/Versions`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginVersions.CreatePluginVersionRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pluginSid` | `path` | `PluginSid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |
| `version` | `form` | `Version` | `string` | yes |
| `pluginUrl` | `form` | `PluginUrl` | `string` | yes |
| `changelog` | `form` | `Changelog` | `string` | no |
| `private` | `form` | `Private` | `boolean` | no |
| `cliVersion` | `form` | `CliVersion` | `string` | no |
| `validateStatus` | `form` | `ValidateStatus` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginPluginVersion` | `flexV1PluginPluginVersionSchema` | `src/models/flex-v1-plugin-plugin-version.ts` |

### fetchPluginVersion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPluginVersion(request: FlexV1PluginVersions.FetchPluginVersionRequest, options?: RequestOptions): ApiPromise<FlexV1PluginPluginVersion, ApiError>`
- **Wire**: `GET /v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginPluginVersion`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginVersions.FetchPluginVersionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pluginSid` | `path` | `PluginSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginPluginVersion` | `flexV1PluginPluginVersionSchema` | `src/models/flex-v1-plugin-plugin-version.ts` |

### listPluginVersion

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPluginVersion(request: FlexV1PluginVersions.ListPluginVersionRequest, options?: RequestOptions): ApiPromise<ListPluginVersionResponse, ApiError>`
- **Wire**: `GET /v1/PluginService/Plugins/{PluginSid}/Versions`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPluginVersionResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginVersions.ListPluginVersionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pluginSid` | `path` | `PluginSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPluginVersionResponse` | `listPluginVersionResponseSchema` | `src/models/list-plugin-version-response.ts` |

