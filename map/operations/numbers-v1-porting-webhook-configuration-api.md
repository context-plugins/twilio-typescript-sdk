<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingWebhookConfigurationApi — operations

Accessor: `client.numbersV1PortingWebhookConfigurationApi` · Source: `src/resources/numbers-v1-porting-webhook-configuration-api.ts` · 1 operation · Request types: namespace `NumbersV1PortingWebhookConfigurationApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createPortingWebhookConfiguration

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `createPortingWebhookConfiguration(request: NumbersV1PortingWebhookConfigurationApi.CreatePortingWebhookConfigurationRequest, options?: RequestOptions): ApiPromise<NumbersV1PortingWebhookConfiguration, ResponseError>`
- **Wire**: `POST /v1/Porting/Configuration/Webhook`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/json` — the `body` field, a bare top-level JSON map with no fixed keys
- **Returns**: `NumbersV1PortingWebhookConfiguration`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `NumbersV1PortingWebhookConfigurationApi.CreatePortingWebhookConfigurationRequest` (1):

| Field | Channel | Type | Req |
| --- | --- | --- | --- |
| `body` | `body` | `Record<string, unknown>` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1PortingWebhookConfiguration` | `numbersV1PortingWebhookConfigurationSchema` | `src/models/numbers-v1-porting-webhook-configuration.ts` |

