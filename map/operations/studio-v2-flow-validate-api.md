<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowValidateApi — operations

Accessor: `client.studioV2FlowValidateApi` · Source: `src/resources/studio-v2-flow-validate-api.ts` · 1 operation · Request types: namespace `StudioV2FlowValidateApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### updateFlowValidate

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateFlowValidate(request: StudioV2FlowValidateApi.UpdateFlowValidateRequest, options?: RequestOptions): ApiPromise<StudioV2FlowValidate, ResponseError>`
- **Wire**: `POST /v2/Flows/Validate`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV2FlowValidate`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowValidateApi.UpdateFlowValidateRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `friendlyName` | `form` | `FriendlyName` | `string` | yes |
| `status` | `form` | `Status` | `FlowEnumStatus` | yes |
| `definition` | `form` | `Definition` | `Record<string, unknown>` | yes |
| `commitMessage` | `form` | `CommitMessage` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlowEnumStatus` | `flowEnumStatusSchema` | `src/models/flow-enum-status.ts` |
| `StudioV2FlowValidate` | `studioV2FlowValidateSchema` | `src/models/studio-v2-flow-validate.ts` |

