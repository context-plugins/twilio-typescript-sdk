<!-- Generated file — do not edit; regenerated with the SDK. -->

# VerifyV2Template — operations

Accessor: `client.verifyV2Template` · Source: `src/resources/verify-v2-template.ts` · 1 operation · Request types: namespace `VerifyV2Template`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### listVerificationTemplate

- **Server**: `default3` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `listVerificationTemplate(request: VerifyV2Template.ListVerificationTemplateRequest, options?: RequestOptions): ApiPromise<ListVerificationTemplateResponse, ResponseError>`
- **Wire**: `GET /v2/Templates`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListVerificationTemplateResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `VerifyV2Template.ListVerificationTemplateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListVerificationTemplateResponse` | `listVerificationTemplateResponseSchema` | `src/models/list-verification-template-response.ts` |

