<!-- Generated file — do not edit; regenerated with the SDK. -->

# ProxyV1PhoneNumber — operations

Accessor: `client.proxyV1PhoneNumber` · Source: `src/resources/proxy-v1-phone-number.ts` · 5 operations · Request types: namespace `ProxyV1PhoneNumber`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createPhoneNumber2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPhoneNumber2(request: ProxyV1PhoneNumber.CreatePhoneNumber2Request, options?: RequestOptions): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/PhoneNumbers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1PhoneNumber.CreatePhoneNumber2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `form` | `Sid` | `string` | no |
| `phoneNumber` | `form` | `PhoneNumber` | `string` | no |
| `isReserved` | `form` | `IsReserved` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServicePhoneNumber` | `proxyV1ServicePhoneNumberSchema` | `src/models/proxy-v1-service-phone-number.ts` |

### deletePhoneNumber2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePhoneNumber2(request: ProxyV1PhoneNumber.DeletePhoneNumber2Request, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1PhoneNumber.DeletePhoneNumber2Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

### fetchPhoneNumber4

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPhoneNumber4(request: ProxyV1PhoneNumber.FetchPhoneNumber4Request, options?: RequestOptions): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1PhoneNumber.FetchPhoneNumber4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServicePhoneNumber` | `proxyV1ServicePhoneNumberSchema` | `src/models/proxy-v1-service-phone-number.ts` |

### listPhoneNumber2

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listPhoneNumber2(request: ProxyV1PhoneNumber.ListPhoneNumber2Request, options?: RequestOptions): ApiPromise<ListPhoneNumberResponse1, ResponseError>`
- **Wire**: `GET /v1/Services/{ServiceSid}/PhoneNumbers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListPhoneNumberResponse1`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1PhoneNumber.ListPhoneNumber2Request` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListPhoneNumberResponse1` | `listPhoneNumberResponse1Schema` | `src/models/list-phone-number-response1.ts` |

### updatePhoneNumber

- **Server**: `default10` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updatePhoneNumber(request: ProxyV1PhoneNumber.UpdatePhoneNumberRequest, options?: RequestOptions): ApiPromise<ProxyV1ServicePhoneNumber, ResponseError>`
- **Wire**: `POST /v1/Services/{ServiceSid}/PhoneNumbers/{Sid}`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ProxyV1ServicePhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `ProxyV1PhoneNumber.UpdatePhoneNumberRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `serviceSid` | `path` | `ServiceSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `isReserved` | `form` | `IsReserved` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ProxyV1ServicePhoneNumber` | `proxyV1ServicePhoneNumberSchema` | `src/models/proxy-v1-service-phone-number.ts` |

