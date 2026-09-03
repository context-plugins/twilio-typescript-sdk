<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401SharedCost — operations

Accessor: `client.api20100401SharedCost` · Source: `src/resources/api20100401-shared-cost.ts` · 1 operation · Request types: namespace `Api20100401SharedCost`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listAvailablePhoneNumberSharedCost

- **Signature**: `listAvailablePhoneNumberSharedCost(request: Api20100401SharedCost.ListAvailablePhoneNumberSharedCostRequest, options?: RequestOptions): ApiPromise<ListAvailablePhoneNumberSharedCostResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/AvailablePhoneNumbers/{CountryCode}/SharedCost.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListAvailablePhoneNumberSharedCostResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401SharedCost.ListAvailablePhoneNumberSharedCostRequest` (23):

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
| `ListAvailablePhoneNumberSharedCostResponse` | `listAvailablePhoneNumberSharedCostResponseSchema` | `src/models/list-available-phone-number-shared-cost-response.ts` |

