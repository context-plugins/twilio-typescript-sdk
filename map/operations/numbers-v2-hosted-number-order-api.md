<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2HostedNumberOrderApi — operations

Accessor: `client.numbersV2HostedNumberOrderApi` · Source: `src/resources/numbers-v2-hosted-number-order-api.ts` · 5 operations · Request types: namespace `NumbersV2HostedNumberOrderApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createHostedNumberOrder(request: NumbersV2HostedNumberOrderApi.CreateHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<NumbersV2HostedNumberOrder, ResponseError>`
- **Wire**: `POST /v2/HostedNumber/Orders`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2HostedNumberOrderApi.CreateHostedNumberOrderRequest` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | yes |
| `contactPhoneNumber` | `form` | `ContactPhoneNumber` | `string` | yes |
| `addressSid` | `form` | `AddressSid` | `string` | yes |
| `email` | `form` | `Email` | `string` | yes |
| `accountSid` | `form` | `AccountSid` | `string` | no |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `ccEmails` | `form` | `CcEmails` | `string[]` | no |
| `smsUrl` | `form` | `SmsUrl` | `string` | no |
| `smsMethod` | `form` | `SmsMethod` | `AmdStatusCallbackMethod` | no |
| `smsFallbackUrl` | `form` | `SmsFallbackUrl` | `string` | no |
| `smsCapability` | `form` | `SmsCapability` | `boolean` | no |
| `smsFallbackMethod` | `form` | `SmsFallbackMethod` | `AmdStatusCallbackMethod` | no |
| `statusCallbackUrl` | `form` | `StatusCallbackUrl` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `smsApplicationSid` | `form` | `SmsApplicationSid` | `string` | no |
| `contactTitle` | `form` | `ContactTitle` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `NumbersV2HostedNumberOrder` | `numbersV2HostedNumberOrderSchema` | `src/models/numbers-v2-hosted-number-order.ts` |

### deleteHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteHostedNumberOrder(request: NumbersV2HostedNumberOrderApi.DeleteHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v2/HostedNumber/Orders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2HostedNumberOrderApi.DeleteHostedNumberOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchHostedNumberOrder(request: NumbersV2HostedNumberOrderApi.FetchHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<NumbersV2HostedNumberOrder, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/Orders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2HostedNumberOrderApi.FetchHostedNumberOrderRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV2HostedNumberOrder` | `numbersV2HostedNumberOrderSchema` | `src/models/numbers-v2-hosted-number-order.ts` |

### listHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listHostedNumberOrder(request: NumbersV2HostedNumberOrderApi.ListHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<ListHostedNumberOrderResponse, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/Orders`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListHostedNumberOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2HostedNumberOrderApi.ListHostedNumberOrderRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `status` | `query` | `Status` | `DependentOrderEnumStatus` | no |
| `smsCapability` | `query` | `SmsCapability` | `boolean` | no |
| `phoneNumber` | `query` | `PhoneNumber` | `string` | no |
| `incomingPhoneNumberSid` | `query` | `IncomingPhoneNumberSid` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DependentOrderEnumStatus` | `dependentOrderEnumStatusSchema` | `src/models/dependent-order-enum-status.ts` |
| `ListHostedNumberOrderResponse` | `listHostedNumberOrderResponseSchema` | `src/models/list-hosted-number-order-response.ts` |

### updateHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateHostedNumberOrder(request: NumbersV2HostedNumberOrderApi.UpdateHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<NumbersV2HostedNumberOrder, ResponseError>`
- **Wire**: `POST /v2/HostedNumber/Orders/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV2HostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2HostedNumberOrderApi.UpdateHostedNumberOrderRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `DependentOrderEnumStatus` | yes |
| `verificationCallDelay` | `form` | `VerificationCallDelay` | `number` | no |
| `verificationCallExtension` | `form` | `VerificationCallExtension` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DependentOrderEnumStatus` | `dependentOrderEnumStatusSchema` | `src/models/dependent-order-enum-status.ts` |
| `NumbersV2HostedNumberOrder` | `numbersV2HostedNumberOrderSchema` | `src/models/numbers-v2-hosted-number-order.ts` |

