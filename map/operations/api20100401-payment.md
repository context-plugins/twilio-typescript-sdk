<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Payment — operations

Accessor: `client.api20100401Payment` · Source: `src/resources/api20100401-payment.ts` · 2 operations · Request types: namespace `Api20100401Payment`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createPayments

- **Signature**: `createPayments(request: Api20100401Payment.CreatePaymentsRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallPayments, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Payment.CreatePaymentsRequest` (20):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `idempotencyKey` | `form` | `IdempotencyKey` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | yes |
| `bankAccountType` | `form` | `BankAccountType` | `PaymentsEnumBankAccountType` | no |
| `chargeAmount` | `form` | `ChargeAmount` | `number` | no |
| `currency` | `form` | `Currency` | `string` | no |
| `description` | `form` | `Description` | `string` | no |
| `input` | `form` | `Input` | `string` | no |
| `minPostalCodeLength` | `form` | `MinPostalCodeLength` | `number` | no |
| `parameter` | `form` | `Parameter` | `Record<string, unknown>` | no |
| `paymentConnector` | `form` | `PaymentConnector` | `string` | no |
| `paymentMethod` | `form` | `PaymentMethod` | `PaymentsEnumPaymentMethod` | no |
| `postalCode` | `form` | `PostalCode` | `boolean` | no |
| `securityCode` | `form` | `SecurityCode` | `boolean` | no |
| `timeout` | `form` | `Timeout` | `number` | no |
| `tokenType` | `form` | `TokenType` | `PaymentsEnumTokenType` | no |
| `validCardTypes` | `form` | `ValidCardTypes` | `string` | no |
| `requireMatchingInputs` | `form` | `RequireMatchingInputs` | `string` | no |
| `confirmation` | `form` | `Confirmation` | `Confirmation` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsEnumBankAccountType` | `paymentsEnumBankAccountTypeSchema` | `src/models/payments-enum-bank-account-type.ts` |
| `PaymentsEnumPaymentMethod` | `paymentsEnumPaymentMethodSchema` | `src/models/payments-enum-payment-method.ts` |
| `PaymentsEnumTokenType` | `paymentsEnumTokenTypeSchema` | `src/models/payments-enum-token-type.ts` |
| `Confirmation` | `confirmationSchema` | `src/models/confirmation.ts` |
| `ApiV2010AccountCallPayments` | `apiV2010AccountCallPaymentsSchema` | `src/models/api-v2010-account-call-payments.ts` |

### updatePayments

- **Signature**: `updatePayments(request: Api20100401Payment.UpdatePaymentsRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallPayments, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Payments/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallPayments`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Payment.UpdatePaymentsRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `idempotencyKey` | `form` | `IdempotencyKey` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | yes |
| `capture` | `form` | `Capture` | `PaymentsEnumCapture` | no |
| `status` | `form` | `Status` | `PaymentsEnumStatus` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `PaymentsEnumCapture` | `paymentsEnumCaptureSchema` | `src/models/payments-enum-capture.ts` |
| `PaymentsEnumStatus` | `paymentsEnumStatusSchema` | `src/models/payments-enum-status.ts` |
| `ApiV2010AccountCallPayments` | `apiV2010AccountCallPaymentsSchema` | `src/models/api-v2010-account-call-payments.ts` |

