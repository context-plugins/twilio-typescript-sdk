<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainConfigApi — operations

Accessor: `client.messagingV1DomainConfigApi` · Source: `src/resources/messaging-v1-domain-config-api.ts` · 2 operations · Request types: namespace `MessagingV1DomainConfigApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchDomainConfig

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDomainConfig(request: MessagingV1DomainConfigApi.FetchDomainConfigRequest, options?: RequestOptions): ApiPromise<MessagingV1DomainConfig, ResponseError>`
- **Wire**: `GET /v1/LinkShortening/Domains/{DomainSid}/Config`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainConfigApi.FetchDomainConfigRequest` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainConfig` | `messagingV1DomainConfigSchema` | `src/models/messaging-v1-domain-config.ts` |

### updateDomainConfig

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDomainConfig(request: MessagingV1DomainConfigApi.UpdateDomainConfigRequest, options?: RequestOptions): ApiPromise<MessagingV1DomainConfig, ResponseError>`
- **Wire**: `POST /v1/LinkShortening/Domains/{DomainSid}/Config`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `MessagingV1DomainConfig`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainConfigApi.UpdateDomainConfigRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `fallbackUrl` | `form` | `FallbackUrl` | `string` | no |
| `callbackUrl` | `form` | `CallbackUrl` | `string` | no |
| `continueOnFailure` | `form` | `ContinueOnFailure` | `boolean` | no |
| `disableHttps` | `form` | `DisableHttps` | `boolean` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainConfig` | `messagingV1DomainConfigSchema` | `src/models/messaging-v1-domain-config.ts` |

