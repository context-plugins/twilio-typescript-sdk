<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingPortabilityApi — operations

Accessor: `client.numbersV1PortingPortabilityApi` · Source: `src/resources/numbers-v1-porting-portability-api.ts` · 1 operation · Request types: namespace `NumbersV1PortingPortabilityApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchPortingPortability

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPortingPortability(request: NumbersV1PortingPortabilityApi.FetchPortingPortabilityRequest, options?: RequestOptions): ApiPromise<NumbersV1PortingPortability, ResponseError>`
- **Wire**: `GET /v1/Porting/Portability/PhoneNumber/{PhoneNumber}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV1PortingPortability`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingPortabilityApi.FetchPortingPortabilityRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `phoneNumber` | `path` | `PhoneNumber` | `string` | yes |
| `targetAccountSid` | `query` | `TargetAccountSid` | `string` | no |
| `addressSid` | `query` | `AddressSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1PortingPortability` | `numbersV1PortingPortabilitySchema` | `src/models/numbers-v1-porting-portability.ts` |

