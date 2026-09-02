<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1AddressConfiguration — operations

Accessor: `client.conversationsV1AddressConfiguration` · Source: `src/resources/conversations-v1-address-configuration.ts` · 5 operations · Request types: namespace `ConversationsV1AddressConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createConfigurationAddress

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createConfigurationAddress(request: ConversationsV1AddressConfiguration.CreateConfigurationAddressRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError>`
- **Wire**: `POST /v1/Configuration/Addresses`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1AddressConfiguration.CreateConfigurationAddressRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `type` | `form` | `Type` | `ConfigurationAddressEnumType` | yes |
| `address` | `form` | `Address` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `autoCreationEnabled` | `form` | `AutoCreation.Enabled` | `boolean` | no |
| `autoCreationType` | `form` | `AutoCreation.Type` | `ConfigurationAddressEnumAutoCreationType` | no |
| `autoCreationConversationServiceSid` | `form` | `AutoCreation.ConversationServiceSid` | `string` | no |
| `autoCreationWebhookUrl` | `form` | `AutoCreation.WebhookUrl` | `string` | no |
| `autoCreationWebhookMethod` | `form` | `AutoCreation.WebhookMethod` | `ConfigurationAddressEnumMethod` | no |
| `autoCreationWebhookFilters` | `form` | `AutoCreation.WebhookFilters` | `string[]` | no |
| `autoCreationStudioFlowSid` | `form` | `AutoCreation.StudioFlowSid` | `string` | no |
| `autoCreationStudioRetryCount` | `form` | `AutoCreation.StudioRetryCount` | `number` | no |
| `addressCountry` | `form` | `AddressCountry` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfigurationAddressEnumType` | `configurationAddressEnumTypeSchema` | `src/models/configuration-address-enum-type.ts` |
| `ConfigurationAddressEnumAutoCreationType` | `configurationAddressEnumAutoCreationTypeSchema` | `src/models/configuration-address-enum-auto-creation-type.ts` |
| `ConfigurationAddressEnumMethod` | `configurationAddressEnumMethodSchema` | `src/models/configuration-address-enum-method.ts` |
| `ConversationsV1ConfigurationAddress` | `conversationsV1ConfigurationAddressSchema` | `src/models/conversations-v1-configuration-address.ts` |

### deleteConfigurationAddress

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteConfigurationAddress(request: ConversationsV1AddressConfiguration.DeleteConfigurationAddressRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Configuration/Addresses/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1AddressConfiguration.DeleteConfigurationAddressRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchConfigurationAddress

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchConfigurationAddress(request: ConversationsV1AddressConfiguration.FetchConfigurationAddressRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError>`
- **Wire**: `GET /v1/Configuration/Addresses/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1AddressConfiguration.FetchConfigurationAddressRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ConfigurationAddress` | `conversationsV1ConfigurationAddressSchema` | `src/models/conversations-v1-configuration-address.ts` |

### listConfigurationAddress

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listConfigurationAddress(request: ConversationsV1AddressConfiguration.ListConfigurationAddressRequest, options?: RequestOptions): ApiPromise<ListConfigurationAddressResponse, ResponseError>`
- **Wire**: `GET /v1/Configuration/Addresses`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConfigurationAddressResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1AddressConfiguration.ListConfigurationAddressRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `type` | `query` | `Type` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListConfigurationAddressResponse` | `listConfigurationAddressResponseSchema` | `src/models/list-configuration-address-response.ts` |

### updateConfigurationAddress

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateConfigurationAddress(request: ConversationsV1AddressConfiguration.UpdateConfigurationAddressRequest, options?: RequestOptions): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError>`
- **Wire**: `POST /v1/Configuration/Addresses/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ConversationsV1ConfigurationAddress`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1AddressConfiguration.UpdateConfigurationAddressRequest` (10):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `autoCreationEnabled` | `form` | `AutoCreation.Enabled` | `boolean` | no |
| `autoCreationType` | `form` | `AutoCreation.Type` | `ConfigurationAddressEnumAutoCreationType` | no |
| `autoCreationConversationServiceSid` | `form` | `AutoCreation.ConversationServiceSid` | `string` | no |
| `autoCreationWebhookUrl` | `form` | `AutoCreation.WebhookUrl` | `string` | no |
| `autoCreationWebhookMethod` | `form` | `AutoCreation.WebhookMethod` | `ConfigurationAddressEnumMethod` | no |
| `autoCreationWebhookFilters` | `form` | `AutoCreation.WebhookFilters` | `string[]` | no |
| `autoCreationStudioFlowSid` | `form` | `AutoCreation.StudioFlowSid` | `string` | no |
| `autoCreationStudioRetryCount` | `form` | `AutoCreation.StudioRetryCount` | `number` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConfigurationAddressEnumAutoCreationType` | `configurationAddressEnumAutoCreationTypeSchema` | `src/models/configuration-address-enum-auto-creation-type.ts` |
| `ConfigurationAddressEnumMethod` | `configurationAddressEnumMethodSchema` | `src/models/configuration-address-enum-method.ts` |
| `ConversationsV1ConfigurationAddress` | `conversationsV1ConfigurationAddressSchema` | `src/models/conversations-v1-configuration-address.ts` |

