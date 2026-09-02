<!-- Generated file — do not edit; regenerated with the SDK. -->

# LookupsV1PhoneNumberApi — operations

Accessor: `client.lookupsV1PhoneNumberApi` · Source: `src/resources/lookups-v1-phone-number-api.ts` · 1 operation · Request types: namespace `LookupsV1PhoneNumberApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchPhoneNumber2

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPhoneNumber2(request: LookupsV1PhoneNumberApi.FetchPhoneNumber2Request, options?: RequestOptions): ApiPromise<LookupsV1PhoneNumber, ResponseError>`
- **Wire**: `GET /v1/PhoneNumbers/{PhoneNumber}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LookupsV1PhoneNumber`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LookupsV1PhoneNumberApi.FetchPhoneNumber2Request` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |
| `countryCode` | `query` | `CountryCode` | `string` | no |
| `type` | `query` | `Type` | `string[]` | no |
| `addOns` | `query` | `AddOns` | `string[]` | no |
| `addOnsData` | `query` | `AddOnsData` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LookupsV1PhoneNumber` | `lookupsV1PhoneNumberSchema` | `src/models/lookups-v1-phone-number.ts` |

