<!-- Generated file — do not edit; regenerated with the SDK. -->

# NumbersV1PortingWebhookConfigurationFetchApi — operations

Accessor: `client.numbersV1PortingWebhookConfigurationFetchApi` · Source: `src/resources/numbers-v1-porting-webhook-configuration-fetch-api.ts` · 1 operation · Request types: namespace `NumbersV1PortingWebhookConfigurationFetchApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### fetchPortingWebhookConfigurationFetch

- **Server**: `default5` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchPortingWebhookConfigurationFetch(options?: RequestOptions): ApiPromise<NumbersV1PortingWebhookConfigurationFetch, ApiError>`
- **Wire**: `GET /v1/Porting/Configuration/Webhook`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `NumbersV1PortingWebhookConfigurationFetch`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `NumbersV1PortingWebhookConfigurationFetch` | `numbersV1PortingWebhookConfigurationFetchSchema` | `src/models/numbers-v1-porting-webhook-configuration-fetch.ts` |

