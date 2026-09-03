<!-- Generated file — do not edit; regenerated with the SDK. -->

# ConversationsV1Binding — operations

Accessor: `client.conversationsV1Binding` · Source: `src/resources/conversations-v1-binding.ts` · 3 operations · Request types: namespace `ConversationsV1Binding`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deleteServiceBinding

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteServiceBinding(request: ConversationsV1Binding.DeleteServiceBindingRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ChatServiceSid}/Bindings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Binding.DeleteServiceBindingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchServiceBinding

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchServiceBinding(request: ConversationsV1Binding.FetchServiceBindingRequest, options?: RequestOptions): ApiPromise<ConversationsV1ServiceServiceBinding, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Bindings/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ConversationsV1ServiceServiceBinding`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Binding.FetchServiceBindingRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConversationsV1ServiceServiceBinding` | `conversationsV1ServiceServiceBindingSchema` | `src/models/conversations-v1-service-service-binding.ts` |

### listServiceBinding

- **Server**: `default7` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listServiceBinding(request: ConversationsV1Binding.ListServiceBindingRequest, options?: RequestOptions): ApiPromise<ListServiceBindingResponse, ResponseError>`
- **Wire**: `GET /v1/Services/{ChatServiceSid}/Bindings`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListServiceBindingResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ConversationsV1Binding.ListServiceBindingRequest` (6):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `chatServiceSid` | `path` | `ChatServiceSid` | `string` | yes |
| `bindingType` | `query` | `BindingType` | `ServiceBindingEnumBindingType[]` | no |
| `identity` | `query` | `Identity` | `string[]` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ServiceBindingEnumBindingType` | `serviceBindingEnumBindingTypeSchema` | `src/models/service-binding-enum-binding-type.ts` |
| `ListServiceBindingResponse` | `listServiceBindingResponseSchema` | `src/models/list-service-binding-response.ts` |

