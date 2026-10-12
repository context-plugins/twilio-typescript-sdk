<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1DomainCerts — operations

Accessor: `client.messagingV1DomainCerts` · Source: `src/resources/messaging-v1-domain-certs.ts` · 3 operations · Request types: namespace `MessagingV1DomainCerts`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ApiError`, the runtime error family and the file vocabulary are excluded — see sdk-map.md.

### deleteDomainCertV4

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `deleteDomainCertV4(request: MessagingV1DomainCerts.DeleteDomainCertV4Request, options?: RequestOptions): ApiPromise<undefined, ApiError>`
- **Wire**: `DELETE /v1/LinkShortening/Domains/{DomainSid}/Certificate`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainCerts.DeleteDomainCertV4Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

### fetchDomainCertV4

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchDomainCertV4(request: MessagingV1DomainCerts.FetchDomainCertV4Request, options?: RequestOptions): ApiPromise<MessagingV1DomainCertV4, ApiError>`
- **Wire**: `GET /v1/LinkShortening/Domains/{DomainSid}/Certificate`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainCerts.FetchDomainCertV4Request` (1):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainCertV4` | `messagingV1DomainCertV4Schema` | `src/models/messaging-v1-domain-cert-v4.ts` |

### updateDomainCertV4

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `updateDomainCertV4(request: MessagingV1DomainCerts.UpdateDomainCertV4Request, options?: RequestOptions): ApiPromise<MessagingV1DomainCertV4, ApiError>`
- **Wire**: `POST /v1/LinkShortening/Domains/{DomainSid}/Certificate`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **SDK-sent**: `header Idempotency-Key` (minted per call)
- **Returns**: `MessagingV1DomainCertV4`
- **Error**: `TwilioSdkError` with `kind: "api"` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1DomainCerts.UpdateDomainCertV4Request` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `domainSid` | `path` | `DomainSid` | `string` | yes |
| `tlsCert` | `form` | `TlsCert` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1DomainCertV4` | `messagingV1DomainCertV4Schema` | `src/models/messaging-v1-domain-cert-v4.ts` |

