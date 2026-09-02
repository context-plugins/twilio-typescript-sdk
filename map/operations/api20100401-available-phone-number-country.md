<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401AvailablePhoneNumberCountry — operations

Accessor: `client.api20100401AvailablePhoneNumberCountry` · Source: `src/resources/api20100401-available-phone-number-country.ts` · 2 operations · Request types: namespace `Api20100401AvailablePhoneNumberCountry`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchAvailablePhoneNumberCountry

- **Signature**: `fetchAvailablePhoneNumberCountry(request: Api20100401AvailablePhoneNumberCountry.FetchAvailablePhoneNumberCountryRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountAvailablePhoneNumberCountry, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountAvailablePhoneNumberCountry`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AvailablePhoneNumberCountry.FetchAvailablePhoneNumberCountryRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `countryCode` | `path` | `CountryCode` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountAvailablePhoneNumberCountry` | `apiV2010AccountAvailablePhoneNumberCountrySchema` | `src/models/api-v2010-account-available-phone-number-country.ts` |

### listAvailablePhoneNumberCountry

- **Signature**: `listAvailablePhoneNumberCountry(request: Api20100401AvailablePhoneNumberCountry.ListAvailablePhoneNumberCountryRequest, options?: RequestOptions): ApiPromise<ListAvailablePhoneNumberCountryResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAvailablePhoneNumberCountryResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401AvailablePhoneNumberCountry.ListAvailablePhoneNumberCountryRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAvailablePhoneNumberCountryResponse` | `listAvailablePhoneNumberCountryResponseSchema` | `src/models/list-available-phone-number-country-response.ts` |

