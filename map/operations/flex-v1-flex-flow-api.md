<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1FlexFlowApi — operations

Accessor: `client.flexV1FlexFlowApi` · Source: `src/resources/flex-v1-flex-flow-api.ts` · 5 operations · Request types: namespace `FlexV1FlexFlowApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createFlexFlow

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createFlexFlow(request: FlexV1FlexFlowApi.CreateFlexFlowRequest, options?: RequestOptions): ApiPromise<FlexV1FlexFlow, ResponseError>`
- **Wire**: `POST /v1/FlexFlows`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1FlexFlow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1FlexFlowApi.CreateFlexFlowRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `chatServiceSid` | `form` | `ChatServiceSid` | `string` | yes |
| `channelType` | `form` | `ChannelType` | `FlexFlowEnumChannelType` | yes |
| `contactIdentity` | `form` | `ContactIdentity` | `string` | no |
| `enabled` | `form` | `Enabled` | `boolean` | no |
| `integrationType` | `form` | `IntegrationType` | `FlexFlowEnumIntegrationType` | no |
| `integrationFlowSid` | `form` | `Integration.FlowSid` | `string` | no |
| `integrationUrl` | `form` | `Integration.Url` | `string` | no |
| `integrationWorkspaceSid` | `form` | `Integration.WorkspaceSid` | `string` | no |
| `integrationWorkflowSid` | `form` | `Integration.WorkflowSid` | `string` | no |
| `integrationChannel` | `form` | `Integration.Channel` | `string` | no |
| `integrationTimeout` | `form` | `Integration.Timeout` | `number` | no |
| `integrationPriority` | `form` | `Integration.Priority` | `number` | no |
| `integrationCreationOnMessage` | `form` | `Integration.CreationOnMessage` | `boolean` | no |
| `longLived` | `form` | `LongLived` | `boolean` | no |
| `janitorEnabled` | `form` | `JanitorEnabled` | `boolean` | no |
| `integrationRetryCount` | `form` | `Integration.RetryCount` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexFlowEnumChannelType` | `flexFlowEnumChannelTypeSchema` | `src/models/flex-flow-enum-channel-type.ts` |
| `FlexFlowEnumIntegrationType` | `flexFlowEnumIntegrationTypeSchema` | `src/models/flex-flow-enum-integration-type.ts` |
| `FlexV1FlexFlow` | `flexV1FlexFlowSchema` | `src/models/flex-v1-flex-flow.ts` |

### deleteFlexFlow

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteFlexFlow(request: FlexV1FlexFlowApi.DeleteFlexFlowRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/FlexFlows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1FlexFlowApi.DeleteFlexFlowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchFlexFlow

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchFlexFlow(request: FlexV1FlexFlowApi.FetchFlexFlowRequest, options?: RequestOptions): ApiPromise<FlexV1FlexFlow, ResponseError>`
- **Wire**: `GET /v1/FlexFlows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1FlexFlow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1FlexFlowApi.FetchFlexFlowRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1FlexFlow` | `flexV1FlexFlowSchema` | `src/models/flex-v1-flex-flow.ts` |

### listFlexFlow

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listFlexFlow(request: FlexV1FlexFlowApi.ListFlexFlowRequest, options?: RequestOptions): ApiPromise<ListFlexFlowResponse, ResponseError>`
- **Wire**: `GET /v1/FlexFlows`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListFlexFlowResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1FlexFlowApi.ListFlexFlowRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListFlexFlowResponse` | `listFlexFlowResponseSchema` | `src/models/list-flex-flow-response.ts` |

### updateFlexFlow

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFlexFlow(request: FlexV1FlexFlowApi.UpdateFlexFlowRequest, options?: RequestOptions): ApiPromise<FlexV1FlexFlow, ResponseError>`
- **Wire**: `POST /v1/FlexFlows/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `FlexV1FlexFlow`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1FlexFlowApi.UpdateFlexFlowRequest` (18):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `chatServiceSid` | `form` | `ChatServiceSid` | `string` | no |
| `channelType` | `form` | `ChannelType` | `FlexFlowEnumChannelType` | no |
| `contactIdentity` | `form` | `ContactIdentity` | `string` | no |
| `enabled` | `form` | `Enabled` | `boolean` | no |
| `integrationType` | `form` | `IntegrationType` | `FlexFlowEnumIntegrationType` | no |
| `integrationFlowSid` | `form` | `Integration.FlowSid` | `string` | no |
| `integrationUrl` | `form` | `Integration.Url` | `string` | no |
| `integrationWorkspaceSid` | `form` | `Integration.WorkspaceSid` | `string` | no |
| `integrationWorkflowSid` | `form` | `Integration.WorkflowSid` | `string` | no |
| `integrationChannel` | `form` | `Integration.Channel` | `string` | no |
| `integrationTimeout` | `form` | `Integration.Timeout` | `number` | no |
| `integrationPriority` | `form` | `Integration.Priority` | `number` | no |
| `integrationCreationOnMessage` | `form` | `Integration.CreationOnMessage` | `boolean` | no |
| `longLived` | `form` | `LongLived` | `boolean` | no |
| `janitorEnabled` | `form` | `JanitorEnabled` | `boolean` | no |
| `integrationRetryCount` | `form` | `Integration.RetryCount` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexFlowEnumChannelType` | `flexFlowEnumChannelTypeSchema` | `src/models/flex-flow-enum-channel-type.ts` |
| `FlexFlowEnumIntegrationType` | `flexFlowEnumIntegrationTypeSchema` | `src/models/flex-flow-enum-integration-type.ts` |
| `FlexV1FlexFlow` | `flexV1FlexFlowSchema` | `src/models/flex-v1-flex-flow.ts` |

