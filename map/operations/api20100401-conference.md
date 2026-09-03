<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Conference — operations

Accessor: `client.api20100401Conference` · Source: `src/resources/api20100401-conference.ts` · 3 operations · Request types: namespace `Api20100401Conference`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### fetchConference

- **Signature**: `fetchConference(request: Api20100401Conference.FetchConferenceRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConference, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountConference`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Conference.FetchConferenceRequest` (2):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountConference` | `apiV2010AccountConferenceSchema` | `src/models/api-v2010-account-conference.ts` |

### listConference

- **Signature**: `listConference(request: Api20100401Conference.ListConferenceRequest, options?: RequestOptions): ApiPromise<ListConferenceResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListConferenceResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Conference.ListConferenceRequest` (12):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `dateCreated` | `query` | `DateCreated` | `string` (date) | no |
| `dateCreatedQuery` | `query` | `DateCreated<` | `string` (date) | no |
| `dateCreatedQueryQuery` | `query` | `DateCreated>` | `string` (date) | no |
| `dateUpdated` | `query` | `DateUpdated` | `string` (date) | no |
| `dateUpdatedQuery` | `query` | `DateUpdated<` | `string` (date) | no |
| `dateUpdatedQueryQuery` | `query` | `DateUpdated>` | `string` (date) | no |
| `friendlyName` | `query` | `FriendlyName` | `string` | no |
| `status` | `query` | `Status` | `ConferenceEnumStatus` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConferenceEnumStatus` | `conferenceEnumStatusSchema` | `src/models/conference-enum-status.ts` |
| `ListConferenceResponse` | `listConferenceResponseSchema` | `src/models/list-conference-response.ts` |

### updateConference

- **Signature**: `updateConference(request: Api20100401Conference.UpdateConferenceRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConference, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountConference`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Conference.UpdateConferenceRequest` (5):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `ConferenceEnumUpdateStatus` | no |
| `announceUrl` | `form` | `AnnounceUrl` | `string` | no |
| `announceMethod` | `form` | `AnnounceMethod` | `AnnounceMethod` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ConferenceEnumUpdateStatus` | `conferenceEnumUpdateStatusSchema` | `src/models/conference-enum-update-status.ts` |
| `AnnounceMethod` | `announceMethodSchema` | `src/models/announce-method.ts` |
| `ApiV2010AccountConference` | `apiV2010AccountConferenceSchema` | `src/models/api-v2010-account-conference.ts` |

