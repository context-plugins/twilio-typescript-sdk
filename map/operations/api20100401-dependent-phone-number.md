<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401DependentPhoneNumber — operations

Accessor: `client.api20100401DependentPhoneNumber` · Source: `src/resources/api20100401-dependent-phone-number.ts` · 1 operation · Request types: namespace `Api20100401DependentPhoneNumber`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listDependentPhoneNumber

- **Signature**: `listDependentPhoneNumber(request: Api20100401DependentPhoneNumber.ListDependentPhoneNumberRequest, options?: RequestOptions): ApiPromise<ListDependentPhoneNumberResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Addresses/{AddressSid}/DependentPhoneNumbers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListDependentPhoneNumberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401DependentPhoneNumber.ListDependentPhoneNumberRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `addressSid` | `path` | `AddressSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListDependentPhoneNumberResponse` | `listDependentPhoneNumberResponseSchema` | `src/models/list-dependent-phone-number-response.ts` |

