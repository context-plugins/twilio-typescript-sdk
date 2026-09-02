<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1PluginReleaseApi — operations

Accessor: `client.flexV1PluginReleaseApi` · Source: `src/resources/flex-v1-plugin-release-api.ts` · 3 operations · Request types: namespace `FlexV1PluginReleaseApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createPluginRelease

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPluginRelease(request: FlexV1PluginReleaseApi.CreatePluginReleaseRequest, options?: RequestOptions): ApiPromise<FlexV1PluginRelease, ResponseError>`
- **Wire**: `POST /v1/PluginService/Releases`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1PluginRelease`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginReleaseApi.CreatePluginReleaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |
| `configurationId` | `form` | `ConfigurationId` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginRelease` | `flexV1PluginReleaseSchema` | `src/models/flex-v1-plugin-release.ts` |

### fetchPluginRelease

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPluginRelease(request: FlexV1PluginReleaseApi.FetchPluginReleaseRequest, options?: RequestOptions): ApiPromise<FlexV1PluginRelease, ResponseError>`
- **Wire**: `GET /v1/PluginService/Releases/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1PluginRelease`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginReleaseApi.FetchPluginReleaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1PluginRelease` | `flexV1PluginReleaseSchema` | `src/models/flex-v1-plugin-release.ts` |

### listPluginRelease

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPluginRelease(request: FlexV1PluginReleaseApi.ListPluginReleaseRequest, options?: RequestOptions): ApiPromise<ListPluginReleaseResponse, ResponseError>`
- **Wire**: `GET /v1/PluginService/Releases`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPluginReleaseResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1PluginReleaseApi.ListPluginReleaseRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |
| `flexMetadata` | `header` | `Flex-Metadata` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPluginReleaseResponse` | `listPluginReleaseResponseSchema` | `src/models/list-plugin-release-response.ts` |

