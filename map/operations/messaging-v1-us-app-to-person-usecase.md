<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1UsAppToPersonUsecase — operations

Accessor: `client.messagingV1UsAppToPersonUsecase` · Source: `src/resources/messaging-v1-us-app-to-person-usecase.ts` · 1 operation · Request types: namespace `MessagingV1UsAppToPersonUsecase`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchUsAppToPersonUsecase

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchUsAppToPersonUsecase(request: MessagingV1UsAppToPersonUsecase.FetchUsAppToPersonUsecaseRequest, options?: RequestOptions): ApiPromise<MessagingV1ServiceUsAppToPersonUsecase, ResponseError>`
- **Wire**: `GET /v1/Services/{MessagingServiceSid}/Compliance/Usa2p/Usecases`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1ServiceUsAppToPersonUsecase`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `MessagingV1UsAppToPersonUsecase.FetchUsAppToPersonUsecaseRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `messagingServiceSid` | `path` | `MessagingServiceSid` | `string` | yes |
| `brandRegistrationSid` | `query` | `BrandRegistrationSid` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1ServiceUsAppToPersonUsecase` | `messagingV1ServiceUsAppToPersonUsecaseSchema` | `src/models/messaging-v1-service-us-app-to-person-usecase.ts` |

