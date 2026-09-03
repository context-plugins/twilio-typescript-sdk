<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401NewKey — operations

Accessor: `client.api20100401NewKey` · Source: `src/resources/api20100401-new-key.ts` · 1 operation · Request types: namespace `Api20100401NewKey`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createNewKey

- **Signature**: `createNewKey(request: Api20100401NewKey.CreateNewKeyRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountNewKey, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Keys.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountNewKey`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401NewKey.CreateNewKeyRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `friendlyName` | `form` | `FriendlyName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountNewKey` | `apiV2010AccountNewKeySchema` | `src/models/api-v2010-account-new-key.ts` |

