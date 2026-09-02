<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2MessagingConfiguration — operations

Accessor: `client.verifyV2MessagingConfiguration` · Source: `src/resources/verify-v2-messaging-configuration.ts` · 5 operations · Request types: namespace `VerifyV2MessagingConfiguration`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createMessagingConfiguration

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createMessagingConfiguration(request: VerifyV2MessagingConfiguration.CreateMessagingConfigurationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/MessagingConfigurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2MessagingConfiguration.CreateMessagingConfigurationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `country` | `form` | `Country` | `string` | yes |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `verifyV2ServiceMessagingConfigurationSchema` | `src/models/verify-v2-service-messaging-configuration.ts` |

### deleteMessagingConfiguration

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteMessagingConfiguration(request: VerifyV2MessagingConfiguration.DeleteMessagingConfigurationRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2MessagingConfiguration.DeleteMessagingConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `country` | `path` | `Country` | `string` | yes |

### fetchMessagingConfiguration

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchMessagingConfiguration(request: VerifyV2MessagingConfiguration.FetchMessagingConfigurationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2MessagingConfiguration.FetchMessagingConfigurationRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `country` | `path` | `Country` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `verifyV2ServiceMessagingConfigurationSchema` | `src/models/verify-v2-service-messaging-configuration.ts` |

### listMessagingConfiguration

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listMessagingConfiguration(request: VerifyV2MessagingConfiguration.ListMessagingConfigurationRequest, options?: RequestOptions): ApiPromise<ListMessagingConfigurationResponse, ResponseError>`
- **Wire**: `GET /v2/Services/{ServiceSid}/MessagingConfigurations`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMessagingConfigurationResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2MessagingConfiguration.ListMessagingConfigurationRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMessagingConfigurationResponse` | `listMessagingConfigurationResponseSchema` | `src/models/list-messaging-configuration-response.ts` |

### updateMessagingConfiguration

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateMessagingConfiguration(request: VerifyV2MessagingConfiguration.UpdateMessagingConfigurationRequest, options?: RequestOptions): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError>`
- **Wire**: `POST /v2/Services/{ServiceSid}/MessagingConfigurations/{Country}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `VerifyV2ServiceMessagingConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2MessagingConfiguration.UpdateMessagingConfigurationRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `country` | `path` | `Country` | `string` | yes |
| `messagingServiceSid` | `form` | `MessagingServiceSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `VerifyV2ServiceMessagingConfiguration` | `verifyV2ServiceMessagingConfigurationSchema` | `src/models/verify-v2-service-messaging-configuration.ts` |

