<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingWebhookConfigurationDeleteApi — operations

Accessor: `client.numbersV1PortingWebhookConfigurationDeleteApi` · Source: `src/resources/numbers-v1-porting-webhook-configuration-delete-api.ts` · 1 operation · Request types: namespace `NumbersV1PortingWebhookConfigurationDeleteApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### deletePortingWebhookConfigurationDelete

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deletePortingWebhookConfigurationDelete(request: NumbersV1PortingWebhookConfigurationDeleteApi.DeletePortingWebhookConfigurationDeleteRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /v1/Porting/Configuration/Webhook/{WebhookType}`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingWebhookConfigurationDeleteApi.DeletePortingWebhookConfigurationDeleteRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `webhookType` | `path` | `WebhookType` | `PortingWebhookConfigurationDeleteEnumWebhookType` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `PortingWebhookConfigurationDeleteEnumWebhookType` | `portingWebhookConfigurationDeleteEnumWebhookTypeSchema` | `src/models/porting-webhook-configuration-delete-enum-webhook-type.ts` |

