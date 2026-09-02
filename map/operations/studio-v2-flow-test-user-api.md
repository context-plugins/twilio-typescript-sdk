<!-- Generated file — do not edit; regenerated with the SDK. -->

# StudioV2FlowTestUserApi — operations

Accessor: `client.studioV2FlowTestUserApi` · Source: `src/resources/studio-v2-flow-test-user-api.ts` · 2 operations · Request types: namespace `StudioV2FlowTestUserApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchTestUser

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchTestUser(request: StudioV2FlowTestUserApi.FetchTestUserRequest, options?: RequestOptions): ApiPromise<StudioV2FlowTestUser, ResponseError>`
- **Wire**: `GET /v2/Flows/{Sid}/TestUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowTestUserApi.FetchTestUserRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2FlowTestUser` | `studioV2FlowTestUserSchema` | `src/models/studio-v2-flow-test-user.ts` |

### updateTestUser

- **Server**: `default11` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateTestUser(request: StudioV2FlowTestUserApi.UpdateTestUserRequest, options?: RequestOptions): ApiPromise<StudioV2FlowTestUser, ResponseError>`
- **Wire**: `POST /v2/Flows/{Sid}/TestUsers`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `StudioV2FlowTestUser`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `StudioV2FlowTestUserApi.UpdateTestUserRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `sid` | `path` | `Sid` | `string` | yes |
| `testUsers` | `form` | `TestUsers` | `string[]` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StudioV2FlowTestUser` | `studioV2FlowTestUserSchema` | `src/models/studio-v2-flow-test-user.ts` |

