<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV2DependentHostedNumberOrder — operations

Accessor: `client.numbersV2DependentHostedNumberOrder` · Source: `src/resources/numbers-v2-dependent-hosted-number-order.ts` · 1 operation · Request types: namespace `NumbersV2DependentHostedNumberOrder`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listDependentHostedNumberOrder

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listDependentHostedNumberOrder(request: NumbersV2DependentHostedNumberOrder.ListDependentHostedNumberOrderRequest, options?: RequestOptions): ApiPromise<ListDependentHostedNumberOrderResponse, ResponseError>`
- **Wire**: `GET /v2/HostedNumber/AuthorizationDocuments/{SigningDocumentSid}/DependentHostedNumberOrders`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDependentHostedNumberOrderResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV2DependentHostedNumberOrder.ListDependentHostedNumberOrderRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `signingDocumentSid` | `path` | `SigningDocumentSid` | `string` | yes |
| `status` | `query` | `Status` | `DependentHostedNumberOrderEnumStatus` | no |
| `phoneNumber` | `query` | `PhoneNumber` | `string` | no |
| `incomingPhoneNumberSid` | `query` | `IncomingPhoneNumberSid` | `string` | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `DependentHostedNumberOrderEnumStatus` | `dependentHostedNumberOrderEnumStatusSchema` | `src/models/dependent-hosted-number-order-enum-status.ts` |
| `ListDependentHostedNumberOrderResponse` | `listDependentHostedNumberOrderResponseSchema` | `src/models/list-dependent-hosted-number-order-response.ts` |

