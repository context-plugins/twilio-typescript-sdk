<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2FormApi — operations

Accessor: `client.verifyV2FormApi` · Source: `src/resources/verify-v2-form-api.ts` · 1 operation · Request types: namespace `VerifyV2FormApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchForm

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchForm(request: VerifyV2FormApi.FetchFormRequest, options?: RequestOptions): ApiPromise<VerifyV2Form, ResponseError>`
- **Wire**: `GET /v2/Forms/{FormType}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `VerifyV2Form`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2FormApi.FetchFormRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `formType` | `path` | `FormType` | `FormEnumFormTypes` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `FormEnumFormTypes` | `formEnumFormTypesSchema` | `src/models/form-enum-form-types.ts` |
| `VerifyV2Form` | `verifyV2FormSchema` | `src/models/verify-v2-form.ts` |

