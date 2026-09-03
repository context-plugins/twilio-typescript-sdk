<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401UserDefinedMessage — operations

Accessor: `client.api20100401UserDefinedMessage` · Source: `src/resources/api20100401-user-defined-message.ts` · 1 operation · Request types: namespace `Api20100401UserDefinedMessage`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createUserDefinedMessage

- **Signature**: `createUserDefinedMessage(request: Api20100401UserDefinedMessage.CreateUserDefinedMessageRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallUserDefinedMessage, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/UserDefinedMessages.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallUserDefinedMessage`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401UserDefinedMessage.CreateUserDefinedMessageRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `content` | `form` | `Content` | `string` | yes |
| `idempotencyKey` | `form` | `IdempotencyKey` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountCallUserDefinedMessage` | `apiV2010AccountCallUserDefinedMessageSchema` | `src/models/api-v2010-account-call-user-defined-message.ts` |

