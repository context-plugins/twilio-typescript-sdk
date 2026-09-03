<!-- Generated file — do not edit; regenerated with the SDK. -->

# LookupsV2PhoneNumber — operations

Accessor: `client.lookupsV2PhoneNumber` · Source: `src/resources/lookups-v2-phone-number.ts` · 1 operation · Request types: namespace `LookupsV2PhoneNumber`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchPhoneNumber3

- **Server**: `default4` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPhoneNumber3(request: LookupsV2PhoneNumber.FetchPhoneNumber3Request, options?: RequestOptions): ApiPromise<LookupResponse, ResponseError>`
- **Wire**: `GET /v2/PhoneNumbers/{PhoneNumber}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LookupResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `LookupsV2PhoneNumber.FetchPhoneNumber3Request` (16):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |
| `fields` | `query` | `Fields` | `string` | no |
| `countryCode` | `query` | `CountryCode` | `string` | no |
| `firstName` | `query` | `FirstName` | `string` | no |
| `lastName` | `query` | `LastName` | `string` | no |
| `addressLine1` | `query` | `AddressLine1` | `string` | no |
| `addressLine2` | `query` | `AddressLine2` | `string` | no |
| `city` | `query` | `City` | `string` | no |
| `state` | `query` | `State` | `string` | no |
| `postalCode` | `query` | `PostalCode` | `string` | no |
| `addressCountryCode` | `query` | `AddressCountryCode` | `string` | no |
| `nationalId` | `query` | `NationalId` | `string` | no |
| `dateOfBirth` | `query` | `DateOfBirth` | `string` | no |
| `lastVerifiedDate` | `query` | `LastVerifiedDate` | `string` | no |
| `verificationSid` | `query` | `VerificationSid` | `string` | no |
| `partnerSubId` | `query` | `PartnerSubId` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `LookupResponse` | `lookupResponseSchema` | `src/models/lookup-response.ts` |

