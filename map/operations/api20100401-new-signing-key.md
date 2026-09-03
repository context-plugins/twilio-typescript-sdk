<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401NewSigningKey — operations

Accessor: `client.api20100401NewSigningKey` · Source: `src/resources/api20100401-new-signing-key.ts` · 1 operation · Request types: namespace `Api20100401NewSigningKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createNewSigningKey

- **Signature**: `createNewSigningKey(request: Api20100401NewSigningKey.CreateNewSigningKeyRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountNewSigningKey, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/SigningKeys.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountNewSigningKey`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401NewSigningKey.CreateNewSigningKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountNewSigningKey` | `apiV2010AccountNewSigningKeySchema` | `src/models/api-v2010-account-new-signing-key.ts` |

