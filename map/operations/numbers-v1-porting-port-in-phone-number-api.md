<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortInPhoneNumberApi — operations

Accessor: `client.numbersV1PortingPortInPhoneNumberApi` · Source: `src/resources/numbers-v1-porting-port-in-phone-number-api.ts` · 2 operations · Request types: namespace `NumbersV1PortingPortInPhoneNumberApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deletePortingPortInPhoneNumber

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePortingPortInPhoneNumber(request: NumbersV1PortingPortInPhoneNumberApi.DeletePortingPortInPhoneNumberRequest, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInPhoneNumberApi.DeletePortingPortInPhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portInRequestSid` | `path` | `PortInRequestSid` | `string` | yes |
| `phoneNumberSid` | `path` | `PhoneNumberSid` | `string` | yes |

### fetchPortingPortInPhoneNumber

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPortingPortInPhoneNumber(request: NumbersV1PortingPortInPhoneNumberApi.FetchPortingPortInPhoneNumberRequest, options?: RequestOptions): ApiPromise<NumbersV1PortingPortInPhoneNumber, ApiError>`
- **Wire**: `GET /v1/Porting/PortIn/{PortInRequestSid}/PhoneNumber/{PhoneNumberSid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV1PortingPortInPhoneNumber`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortInPhoneNumberApi.FetchPortingPortInPhoneNumberRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `portInRequestSid` | `path` | `PortInRequestSid` | `string` | yes |
| `phoneNumberSid` | `path` | `PhoneNumberSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1PortingPortInPhoneNumber` | `numbersV1PortingPortInPhoneNumberSchema` | `src/models/numbers-v1-porting-port-in-phone-number.ts` |

