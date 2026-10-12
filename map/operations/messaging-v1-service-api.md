<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1ServiceApi — operations

Accessor: `client.messagingV1ServiceApi` · Source: `src/resources/messaging-v1-service-api.ts` · 5 operations · Request types: namespace `MessagingV1ServiceApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createService(request: MessagingV1ServiceApi.CreateServiceRequest, options?: RequestOptions): ApiPromise<MessagingV1Service, ApiError>`
- **Wire**: `POST /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1Service`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ServiceApi.CreateServiceRequest` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `inboundRequestUrl` | `form` | `InboundRequestUrl` | `string` | no |
| `inboundMethod` | `form` | `InboundMethod` | `AmdStatusCallbackMethod` | no |
| `fallbackUrl` | `form` | `FallbackUrl` | `string` | no |
| `fallbackMethod` | `form` | `FallbackMethod` | `AmdStatusCallbackMethod` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `stickySender` | `form` | `StickySender` | `boolean` | no |
| `mmsConverter` | `form` | `MmsConverter` | `boolean` | no |
| `smartEncoding` | `form` | `SmartEncoding` | `boolean` | no |
| `scanMessageContent` | `form` | `ScanMessageContent` | `ServiceEnumScanMessageContent` | no |
| `fallbackToLongCode` | `form` | `FallbackToLongCode` | `boolean` | no |
| `areaCodeGeomatch` | `form` | `AreaCodeGeomatch` | `boolean` | no |
| `validityPeriod` | `form` | `ValidityPeriod` | `number` | no |
| `synchronousValidation` | `form` | `SynchronousValidation` | `boolean` | no |
| `usecase` | `form` | `Usecase` | `string` | no |
| `useInboundWebhookOnNumber` | `form` | `UseInboundWebhookOnNumber` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `ServiceEnumScanMessageContent` | `serviceEnumScanMessageContentSchema` | `src/models/service-enum-scan-message-content.ts` |
| `MessagingV1Service` | `messagingV1ServiceSchema` | `src/models/messaging-v1-service.ts` |

### deleteService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteService(request: MessagingV1ServiceApi.DeleteServiceRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ServiceApi.DeleteServiceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchService(request: MessagingV1ServiceApi.FetchServiceRequest, options?: RequestOptions): ApiPromise<MessagingV1Service, ApiError>`
- **Wire**: `GET /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1Service`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ServiceApi.FetchServiceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1Service` | `messagingV1ServiceSchema` | `src/models/messaging-v1-service.ts` |

### listService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listService(request: MessagingV1ServiceApi.ListServiceRequest, options?: RequestOptions): ApiPromise<ListServiceResponse, ApiError>`
- **Wire**: `GET /v1/Services`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ServiceApi.ListServiceRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListServiceResponse` | `listServiceResponseSchema` | `src/models/list-service-response.ts` |

### updateService

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateService(request: MessagingV1ServiceApi.UpdateServiceRequest, options?: RequestOptions): ApiPromise<MessagingV1Service, ApiError>`
- **Wire**: `POST /v1/Services/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1Service`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1ServiceApi.UpdateServiceRequest` (17):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `inboundRequestUrl` | `form` | `InboundRequestUrl` | `string` | no |
| `inboundMethod` | `form` | `InboundMethod` | `AmdStatusCallbackMethod` | no |
| `fallbackUrl` | `form` | `FallbackUrl` | `string` | no |
| `fallbackMethod` | `form` | `FallbackMethod` | `AmdStatusCallbackMethod` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `stickySender` | `form` | `StickySender` | `boolean` | no |
| `mmsConverter` | `form` | `MmsConverter` | `boolean` | no |
| `smartEncoding` | `form` | `SmartEncoding` | `boolean` | no |
| `scanMessageContent` | `form` | `ScanMessageContent` | `ServiceEnumScanMessageContent` | no |
| `fallbackToLongCode` | `form` | `FallbackToLongCode` | `boolean` | no |
| `areaCodeGeomatch` | `form` | `AreaCodeGeomatch` | `boolean` | no |
| `validityPeriod` | `form` | `ValidityPeriod` | `number` | no |
| `synchronousValidation` | `form` | `SynchronousValidation` | `boolean` | no |
| `usecase` | `form` | `Usecase` | `string` | no |
| `useInboundWebhookOnNumber` | `form` | `UseInboundWebhookOnNumber` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `ServiceEnumScanMessageContent` | `serviceEnumScanMessageContentSchema` | `src/models/service-enum-scan-message-content.ts` |
| `MessagingV1Service` | `messagingV1ServiceSchema` | `src/models/messaging-v1-service.ts` |

