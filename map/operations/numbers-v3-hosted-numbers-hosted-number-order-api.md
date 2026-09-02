<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV3HostedNumbersHostedNumberOrderApi — operations

Accessor: `client.numbersV3HostedNumbersHostedNumberOrderApi` · Source: `src/resources/numbers-v3-hosted-numbers-hosted-number-order-api.ts` · 1 operation · Request types: namespace `NumbersV3HostedNumbersHostedNumberOrderApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createHostedNumbersHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createHostedNumbersHostedNumberOrder(request: NumbersV3HostedNumbersHostedNumberOrderApi.CreateHostedNumbersHostedNumberOrderRequestParams, options?: RequestOptions): ApiPromise<NumbersV3HostedNumbersHostedNumberOrder, ResponseError>`
- **Wire**: `POST /v3/HostedNumbers/HostedNumberOrders`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `NumbersV3HostedNumbersHostedNumberOrder`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV3HostedNumbersHostedNumberOrderApi.CreateHostedNumbersHostedNumberOrderRequestParams` (17):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `phoneNumber` | `form` | `string` | yes |
| `smsCapability` | `form` | `boolean` | yes |
| `accountSid` | `form` | `string` | no |
| `friendlyName` | `form` | `string` | no |
| `uniqueName` | `form` | `string` | no |
| `ccEmails` | `form` | `string[]` | no |
| `smsUrl` | `form` | `string` | no |
| `smsMethod` | `form` | `AmdStatusCallbackMethod` | no |
| `smsFallbackUrl` | `form` | `string` | no |
| `smsFallbackMethod` | `form` | `AmdStatusCallbackMethod` | no |
| `statusCallbackUrl` | `form` | `string` | no |
| `statusCallbackMethod` | `form` | `AmdStatusCallbackMethod` | no |
| `smsApplicationSid` | `form` | `string` | no |
| `addressSid` | `form` | `string` | no |
| `email` | `form` | `string` | no |
| `verificationType` | `form` | `DependentOrderEnumVerificationType` | no |
| `verificationDocumentSid` | `form` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `DependentOrderEnumVerificationType` | `dependentOrderEnumVerificationTypeSchema` | `src/models/dependent-order-enum-verification-type.ts` |
| `NumbersV3HostedNumbersHostedNumberOrder` | `numbersV3HostedNumbersHostedNumberOrderSchema` | `src/models/numbers-v3-hosted-numbers-hosted-number-order.ts` |

