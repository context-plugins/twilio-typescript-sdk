<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV2ConfigurationApi — operations

Accessor: `client.conversationsV2ConfigurationApi` · Source: `src/resources/conversations-v2-configuration-api.ts` · 5 operations · Request and error types: namespace `ConversationsV2ConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfiguration(request: ConversationsV2ConfigurationApi.CreateConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.CreateConfigurationError>`
- **Wire**: `POST /v2/ControlPlane/Configurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `ConversationsV2ConfigurationApi.CreateConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConfigurationApi.CreateConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `V2ControlPlaneConfigurationsRequest` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ControlPlaneConfigurationsRequest` | `v2ControlPlaneConfigurationsRequestSchema` | `src/models/v2-control-plane-configurations-request.ts` |
| `ConversationsV2OperationAccepted` | `conversationsV2OperationAcceptedSchema` | `src/models/conversations-v2-operation-accepted.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### deleteConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConfiguration(request: ConversationsV2ConfigurationApi.DeleteConfigurationRequest, options?: RequestOptions): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.DeleteConfigurationError>`
- **Wire**: `DELETE /v2/ControlPlane/Configurations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `ConversationsV2ConfigurationApi.DeleteConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConfigurationApi.DeleteConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2OperationAccepted` | `conversationsV2OperationAcceptedSchema` | `src/models/conversations-v2-operation-accepted.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### fetchConfiguration2

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfiguration2(request: ConversationsV2ConfigurationApi.FetchConfiguration2Request, options?: RequestOptions): ApiPromise<ConversationsV2Configuration, ConversationsV2ConfigurationApi.FetchConfiguration2Error>`
- **Wire**: `GET /v2/ControlPlane/Configurations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV2Configuration`
- **Error**: `ConversationsV2ConfigurationApi.FetchConfiguration2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConfigurationApi.FetchConfiguration2Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV2Configuration` | `conversationsV2ConfigurationSchema` | `src/models/conversations-v2-configuration.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### listConfiguration

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConfiguration(request: ConversationsV2ConfigurationApi.ListConfigurationRequest, options?: RequestOptions): ApiPromise<V2ControlPlaneConfigurationsResponse, ConversationsV2ConfigurationApi.ListConfigurationError>`
- **Wire**: `GET /v2/ControlPlane/Configurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `V2ControlPlaneConfigurationsResponse`
- **Error**: `ConversationsV2ConfigurationApi.ListConfigurationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConfigurationApi.ListConfigurationRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `number` | no | `50` |
| `pageToken` | `query` | `string` | no | — |
| `memoryStoreId` | `query` | `string` | no | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ControlPlaneConfigurationsResponse` | `v2ControlPlaneConfigurationsResponseSchema` | `src/models/v2-control-plane-configurations-response.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

### updateConfiguration2

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfiguration2(request: ConversationsV2ConfigurationApi.UpdateConfiguration2Request, options?: RequestOptions): ApiPromise<ConversationsV2OperationAccepted, ConversationsV2ConfigurationApi.UpdateConfiguration2Error>`
- **Wire**: `PUT /v2/ControlPlane/Configurations/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field
- **Returns**: `ConversationsV2OperationAccepted`
- **Error**: `ConversationsV2ConfigurationApi.UpdateConfiguration2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"accountsCallsRecordingsSidJson201041408Error1"` [400] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error12"` [404] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error13"` [409] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error14"` [429] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error15"` [500] `AccountsCallsRecordingsSidJson201041408Error1` · `"accountsCallsRecordingsSidJson201041408Error16"` [503] `AccountsCallsRecordingsSidJson201041408Error1` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `ConversationsV2ConfigurationApi.UpdateConfiguration2Request` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `idempotencyKey` | `header` | `Idempotency-Key` | `string` | no |
| `body` | `body` | — | `V2ControlPlaneConfigurationsRequest1` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `V2ControlPlaneConfigurationsRequest1` | `v2ControlPlaneConfigurationsRequest1Schema` | `src/models/v2-control-plane-configurations-request1.ts` |
| `ConversationsV2OperationAccepted` | `conversationsV2OperationAcceptedSchema` | `src/models/conversations-v2-operation-accepted.ts` |
| `AccountsCallsRecordingsSidJson201041408Error1` | `accountsCallsRecordingsSidJson201041408Error1Schema` | `src/models/accounts-calls-recordings-sid-json201041408-error1.ts` |

