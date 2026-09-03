<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Participant — operations

Accessor: `client.api20100401Participant` · Source: `src/resources/api20100401-participant.ts` · 5 operations · Request types: namespace `Api20100401Participant`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio-sdk`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createParticipant

- **Signature**: `createParticipant(request: Api20100401Participant.CreateParticipantRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Participant.CreateParticipantRequest` (53):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `from` | `form` | `From` | `string` | yes |
| `to` | `form` | `To` | `string` | yes |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod16` | no |
| `statusCallbackEvent` | `form` | `StatusCallbackEvent` | `string[]` | no |
| `label` | `form` | `Label` | `string` | no |
| `timeout` | `form` | `Timeout` | `number` | no |
| `record` | `form` | `Record` | `boolean` | no |
| `muted` | `form` | `Muted` | `boolean` | no |
| `beep` | `form` | `Beep` | `string` | no |
| `startConferenceOnEnter` | `form` | `StartConferenceOnEnter` | `boolean` | no |
| `endConferenceOnExit` | `form` | `EndConferenceOnExit` | `boolean` | no |
| `waitUrl` | `form` | `WaitUrl` | `string` | no |
| `waitMethod` | `form` | `WaitMethod` | `WaitMethod` | no |
| `earlyMedia` | `form` | `EarlyMedia` | `boolean` | no |
| `maxParticipants` | `form` | `MaxParticipants` | `number` | no |
| `conferenceRecord` | `form` | `ConferenceRecord` | `string` | no |
| `conferenceTrim` | `form` | `ConferenceTrim` | `string` | no |
| `conferenceStatusCallback` | `form` | `ConferenceStatusCallback` | `string` | no |
| `conferenceStatusCallbackMethod` | `form` | `ConferenceStatusCallbackMethod` | `ConferenceStatusCallbackMethod` | no |
| `conferenceStatusCallbackEvent` | `form` | `ConferenceStatusCallbackEvent` | `string[]` | no |
| `recordingChannels` | `form` | `RecordingChannels` | `string` | no |
| `recordingStatusCallback` | `form` | `RecordingStatusCallback` | `string` | no |
| `recordingStatusCallbackMethod` | `form` | `RecordingStatusCallbackMethod` | `RecordingStatusCallbackMethod2` | no |
| `sipAuthUsername` | `form` | `SipAuthUsername` | `string` | no |
| `sipAuthPassword` | `form` | `SipAuthPassword` | `string` | no |
| `region` | `form` | `Region` | `string` | no |
| `conferenceRecordingStatusCallback` | `form` | `ConferenceRecordingStatusCallback` | `string` | no |
| `conferenceRecordingStatusCallbackMethod` | `form` | `ConferenceRecordingStatusCallbackMethod` | `ConferenceRecordingStatusCallbackMethod` | no |
| `recordingStatusCallbackEvent` | `form` | `RecordingStatusCallbackEvent` | `string[]` | no |
| `conferenceRecordingStatusCallbackEvent` | `form` | `ConferenceRecordingStatusCallbackEvent` | `string[]` | no |
| `coaching` | `form` | `Coaching` | `boolean` | no |
| `callSidToCoach` | `form` | `CallSidToCoach` | `string` | no |
| `jitterBufferSize` | `form` | `JitterBufferSize` | `string` | no |
| `byoc` | `form` | `Byoc` | `string` | no |
| `callerId` | `form` | `CallerId` | `string` | no |
| `callReason` | `form` | `CallReason` | `string` | no |
| `recordingTrack` | `form` | `RecordingTrack` | `string` | no |
| `recordingConfigurationId` | `form` | `RecordingConfigurationId` | `string` | no |
| `timeLimit` | `form` | `TimeLimit` | `number` | no |
| `machineDetection` | `form` | `MachineDetection` | `string` | no |
| `machineDetectionTimeout` | `form` | `MachineDetectionTimeout` | `number` | no |
| `machineDetectionSpeechThreshold` | `form` | `MachineDetectionSpeechThreshold` | `number` | no |
| `machineDetectionSpeechEndThreshold` | `form` | `MachineDetectionSpeechEndThreshold` | `number` | no |
| `machineDetectionSilenceTimeout` | `form` | `MachineDetectionSilenceTimeout` | `number` | no |
| `amdStatusCallback` | `form` | `AmdStatusCallback` | `string` | no |
| `amdStatusCallbackMethod` | `form` | `AmdStatusCallbackMethod` | `AmdStatusCallbackMethod` | no |
| `trim` | `form` | `Trim` | `string` | no |
| `callToken` | `form` | `CallToken` | `string` | no |
| `clientNotificationUrl` | `form` | `ClientNotificationUrl` | `string` | no |
| `callerDisplayName` | `form` | `CallerDisplayName` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StatusCallbackMethod16` | `statusCallbackMethod16Schema` | `src/models/status-callback-method16.ts` |
| `WaitMethod` | `waitMethodSchema` | `src/models/wait-method.ts` |
| `ConferenceStatusCallbackMethod` | `conferenceStatusCallbackMethodSchema` | `src/models/conference-status-callback-method.ts` |
| `RecordingStatusCallbackMethod2` | `recordingStatusCallbackMethod2Schema` | `src/models/recording-status-callback-method2.ts` |
| `ConferenceRecordingStatusCallbackMethod` | `conferenceRecordingStatusCallbackMethodSchema` | `src/models/conference-recording-status-callback-method.ts` |
| `AmdStatusCallbackMethod` | `amdStatusCallbackMethodSchema` | `src/models/amd-status-callback-method.ts` |
| `ApiV2010AccountConferenceParticipant` | `apiV2010AccountConferenceParticipantSchema` | `src/models/api-v2010-account-conference-participant.ts` |

### deleteParticipant

- **Signature**: `deleteParticipant(request: Api20100401Participant.DeleteParticipantRequest, options?: RequestOptions): ApiPromise<undefined, ResponseError>`
- **Wire**: `DELETE /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Participant.DeleteParticipantRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |

### fetchParticipant

- **Signature**: `fetchParticipant(request: Api20100401Participant.FetchParticipantRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Participant.FetchParticipantRequest` (3):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `ApiV2010AccountConferenceParticipant` | `apiV2010AccountConferenceParticipantSchema` | `src/models/api-v2010-account-conference-participant.ts` |

### listParticipant

- **Signature**: `listParticipant(request: Api20100401Participant.ListParticipantRequest, options?: RequestOptions): ApiPromise<ListParticipantResponse, ResponseError>`
- **Wire**: `GET /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ListParticipantResponse`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Participant.ListParticipantRequest` (8):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `muted` | `query` | `Muted` | `boolean` | no |
| `hold` | `query` | `Hold` | `boolean` | no |
| `coaching` | `query` | `Coaching` | `boolean` | no |
| `pageSize` | `query` | `PageSize` | `number` | no |
| `page` | `query` | `Page` | `number` | no |
| `pageToken` | `query` | `PageToken` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `ListParticipantResponse` | `listParticipantResponseSchema` | `src/models/list-participant-response.ts` |

### updateParticipant

- **Signature**: `updateParticipant(request: Api20100401Participant.UpdateParticipantRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountConferenceParticipant, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Conferences/{ConferenceSid}/Participants/{CallSid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountConferenceParticipant`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Participant.UpdateParticipantRequest` (15):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `conferenceSid` | `path` | `ConferenceSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `muted` | `form` | `Muted` | `boolean` | no |
| `hold` | `form` | `Hold` | `boolean` | no |
| `holdUrl` | `form` | `HoldUrl` | `string` | no |
| `holdMethod` | `form` | `HoldMethod` | `HoldMethod` | no |
| `announceUrl` | `form` | `AnnounceUrl` | `string` | no |
| `announceMethod` | `form` | `AnnounceMethod` | `AnnounceMethod1` | no |
| `waitUrl` | `form` | `WaitUrl` | `string` | no |
| `waitMethod` | `form` | `WaitMethod` | `WaitMethod` | no |
| `beepOnExit` | `form` | `BeepOnExit` | `boolean` | no |
| `endConferenceOnExit` | `form` | `EndConferenceOnExit` | `boolean` | no |
| `coaching` | `form` | `Coaching` | `boolean` | no |
| `callSidToCoach` | `form` | `CallSidToCoach` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `HoldMethod` | `holdMethodSchema` | `src/models/hold-method.ts` |
| `AnnounceMethod1` | `announceMethod1Schema` | `src/models/announce-method1.ts` |
| `WaitMethod` | `waitMethodSchema` | `src/models/wait-method.ts` |
| `ApiV2010AccountConferenceParticipant` | `apiV2010AccountConferenceParticipantSchema` | `src/models/api-v2010-account-conference-participant.ts` |

