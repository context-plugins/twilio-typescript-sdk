<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401National — operations

Accessor: `client.api20100401National` · Source: `src/resources/api20100401-national.ts` · 1 operation · Request types: namespace `Api20100401National`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### listAvailablePhoneNumberNational

- **Signature**: `listAvailablePhoneNumberNational(request: Api20100401National.ListAvailablePhoneNumberNationalRequest, options?: RequestOptions): ApiPromise<ListAvailablePhoneNumberNationalResponse, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/National.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAvailablePhoneNumberNationalResponse`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401National.ListAvailablePhoneNumberNationalRequest` (23):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `countryCode` | `path` | `CountryCode` | `string` | yes |
| `areaCode` | `query` | `AreaCode` | `number` | no |
| `contains` | `query` | `Contains` | `string` | no |
| `smsEnabled` | `query` | `SmsEnabled` | `boolean` | no |
| `mmsEnabled` | `query` | `MmsEnabled` | `boolean` | no |
| `voiceEnabled` | `query` | `VoiceEnabled` | `boolean` | no |
| `excludeAllAddressRequired` | `query` | `ExcludeAllAddressRequired` | `boolean` | no |
| `excludeLocalAddressRequired` | `query` | `ExcludeLocalAddressRequired` | `boolean` | no |
| `excludeForeignAddressRequired` | `query` | `ExcludeForeignAddressRequired` | `boolean` | no |
| `beta` | `query` | `Beta` | `boolean` | no |
| `nearNumber` | `query` | `NearNumber` | `string` | no |
| `nearLatLong` | `query` | `NearLatLong` | `string` | no |
| `distance` | `query` | `Distance` | `number` | no |
| `inPostalCode` | `query` | `InPostalCode` | `string` | no |
| `inRegion` | `query` | `InRegion` | `string` | no |
| `inRateCenter` | `query` | `InRateCenter` | `string` | no |
| `inLata` | `query` | `InLata` | `string` | no |
| `inLocality` | `query` | `InLocality` | `string` | no |
| `faxEnabled` | `query` | `FaxEnabled` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListAvailablePhoneNumberNationalResponse` | `listAvailablePhoneNumberNationalResponseSchema` | `src/models/list-available-phone-number-national-response.ts` |

