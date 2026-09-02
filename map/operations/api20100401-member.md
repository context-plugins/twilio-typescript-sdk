<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Member — operations

Accessor: `client.api20100401Member` · Source: `src/resources/api20100401-member.ts` · 3 operations · Request types: namespace `Api20100401Member`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchMember

- **Signature**: `fetchMember(request: Api20100401Member.FetchMemberRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountQueueMember, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Member.FetchMemberRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `queueSid` | `path` | `QueueSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountQueueMember` | `apiV2010AccountQueueMemberSchema` | `src/models/api-v2010-account-queue-member.ts` |

### listMember

- **Signature**: `listMember(request: Api20100401Member.ListMemberRequest, options?: RequestOptions): ApiPromise<ListMemberResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListMemberResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Member.ListMemberRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `queueSid` | `path` | `QueueSid` | `string` | yes |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListMemberResponse` | `listMemberResponseSchema` | `src/models/list-member-response.ts` |

### updateMember

- **Signature**: `updateMember(request: Api20100401Member.UpdateMemberRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountQueueMember, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Queues/{QueueSid}/Members/{CallSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountQueueMember`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Member.UpdateMemberRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `queueSid` | `path` | `QueueSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `url` | `form` | `Url` | `string` | yes |
| `method` | `form` | `Method` | `Method2` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `Method2` | `method2Schema` | `src/models/method2.ts` |
| `ApiV2010AccountQueueMember` | `apiV2010AccountQueueMemberSchema` | `src/models/api-v2010-account-queue-member.ts` |

