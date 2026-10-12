<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1InsightsUserRolesApi — operations

Accessor: `client.flexV1InsightsUserRolesApi` · Source: `src/resources/flex-v1-insights-user-roles-api.ts` · 1 operation · Request types: namespace `FlexV1InsightsUserRolesApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchInsightsUserRoles

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchInsightsUserRoles(request: FlexV1InsightsUserRolesApi.FetchInsightsUserRolesRequest, options?: RequestOptions): ApiPromise<FlexV1InsightsUserRoles, ApiError>`
- **Wire**: `GET /v1/Insights/UserRoles`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1InsightsUserRoles`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `FlexV1InsightsUserRolesApi.FetchInsightsUserRolesRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `authorization` | `header` | `Authorization` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1InsightsUserRoles` | `flexV1InsightsUserRolesSchema` | `src/models/flex-v1-insights-user-roles.ts` |

