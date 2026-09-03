<!-- Generated file — do not edit; regenerated with the SDK. -->

# MessagingV1UsecaseApi — operations

Accessor: `client.messagingV1UsecaseApi` · Source: `src/resources/messaging-v1-usecase-api.ts` · 1 operation · Request types: namespace `MessagingV1UsecaseApi`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchUsecase

- **Server**: `default1` — not the `default` group; see Servers & auth in sdk-map.md
- **Signature**: `fetchUsecase(options?: RequestOptions): ApiPromise<MessagingV1Usecase, ResponseError>`
- **Wire**: `GET /v1/Services/Usecases`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MessagingV1Usecase`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

| Type | Schema value | Source |
| --- | --- | --- |
| `MessagingV1Usecase` | `messagingV1UsecaseSchema` | `src/models/messaging-v1-usecase.ts` |

