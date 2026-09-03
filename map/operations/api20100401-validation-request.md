<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401ValidationRequest — operations

Accessor: `client.api20100401ValidationRequest` · Source: `src/resources/api20100401-validation-request.ts` · 1 operation · Request types: namespace `Api20100401ValidationRequest`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createValidationRequest

- **Signature**: `createValidationRequest(request: Api20100401ValidationRequest.CreateValidationRequestRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountValidationRequest, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountValidationRequest`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401ValidationRequest.CreateValidationRequestRequest` (7):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |
| `callDelay` | `form` | `CallDelay` | `number` | no |
| `extension` | `form` | `Extension` | `string` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod15` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusCallbackMethod15` | `statusCallbackMethod15Schema` | `src/models/status-callback-method15.ts` |
| `ApiV2010AccountValidationRequest` | `apiV2010AccountValidationRequestSchema` | `src/models/api-v2010-account-validation-request.ts` |

