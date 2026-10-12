<!-- Generated file — do not edit; regenerated with the SDK. -->

# FlexV1ProvisioningStatusApi — operations

Accessor: `client.flexV1ProvisioningStatusApi` · Source: `src/resources/flex-v1-provisioning-status-api.ts` · 1 operation · Request types: namespace `FlexV1ProvisioningStatusApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchProvisioningStatus

- **Server**: `default13` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchProvisioningStatus(options?: RequestOptions): ApiPromise<FlexV1ProvisioningStatus, ApiError>`
- **Wire**: `GET /v1/account/provision/status`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FlexV1ProvisioningStatus`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `FlexV1ProvisioningStatus` | `flexV1ProvisioningStatusSchema` | `src/models/flex-v1-provisioning-status.ts` |

