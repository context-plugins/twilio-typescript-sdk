<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401UserDefinedMessageSubscription — operations

Accessor: `client.api20100401UserDefinedMessageSubscription` · Source: `src/resources/api20100401-user-defined-message-subscription.ts` · 2 operations · Request types: namespace `Api20100401UserDefinedMessageSubscription`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createUserDefinedMessageSubscription

- **Signature**: `createUserDefinedMessageSubscription(request: Api20100401UserDefinedMessageSubscription.CreateUserDefinedMessageSubscriptionRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallUserDefinedMessageSubscription, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallUserDefinedMessageSubscription`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401UserDefinedMessageSubscription.CreateUserDefinedMessageSubscriptionRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `callback` | `form` | `Callback` | `string` | yes |
| `idempotencyKey` | `form` | `IdempotencyKey` | `string` | no |
| `method` | `form` | `Method` | `Method3` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Method3` | `method3Schema` | `src/models/method3.ts` |
| `ApiV2010AccountCallUserDefinedMessageSubscription` | `apiV2010AccountCallUserDefinedMessageSubscriptionSchema` | `src/models/api-v2010-account-call-user-defined-message-subscription.ts` |

### deleteUserDefinedMessageSubscription

- **Signature**: `deleteUserDefinedMessageSubscription(request: Api20100401UserDefinedMessageSubscription.DeleteUserDefinedMessageSubscriptionRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessageSubscriptions/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401UserDefinedMessageSubscription.DeleteUserDefinedMessageSubscriptionRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

