<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Balance — operations

Accessor: `client.api20100401Balance` · Source: `src/resources/api20100401-balance.ts` · 1 operation · Request types: namespace `Api20100401Balance`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchBalance

- **Signature**: `fetchBalance(request: Api20100401Balance.FetchBalanceRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountBalance, ApiError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Balance.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountBalance`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Balance.FetchBalanceRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountBalance` | `apiV2010AccountBalanceSchema` | `src/models/api-v2010-account-balance.ts` |

