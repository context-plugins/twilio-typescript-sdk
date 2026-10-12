<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1PhoneNumber — operations

Accessor: `client.messagingV1PhoneNumber` · Source: `src/resources/messaging-v1-phone-number.ts` · 4 operations · Request types: namespace `MessagingV1PhoneNumber`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### createPhoneNumber

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPhoneNumber(request: MessagingV1PhoneNumber.CreatePhoneNumberRequest, options?: RequestOptions): ApiPromise<MessagingV1ServicePhoneNumber, ApiError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/PhoneNumbers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1ServicePhoneNumber`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1PhoneNumber.CreatePhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `phoneNumberSid` | `form` | `PhoneNumberSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServicePhoneNumber` | `messagingV1ServicePhoneNumberSchema` | `src/models/messaging-v1-service-phone-number.ts` |

### deletePhoneNumber

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePhoneNumber(request: MessagingV1PhoneNumber.DeletePhoneNumberRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1PhoneNumber.DeletePhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchPhoneNumber

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPhoneNumber(request: MessagingV1PhoneNumber.FetchPhoneNumberRequest, options?: RequestOptions): ApiPromise<MessagingV1ServicePhoneNumber, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServicePhoneNumber`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1PhoneNumber.FetchPhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServicePhoneNumber` | `messagingV1ServicePhoneNumberSchema` | `src/models/messaging-v1-service-phone-number.ts` |

### listPhoneNumber

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPhoneNumber(request: MessagingV1PhoneNumber.ListPhoneNumberRequest, options?: RequestOptions): ApiPromise<ListPhoneNumberResponse, ApiError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/PhoneNumbers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPhoneNumberResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1PhoneNumber.ListPhoneNumberRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPhoneNumberResponse` | `listPhoneNumberResponseSchema` | `src/models/list-phone-number-response.ts` |

