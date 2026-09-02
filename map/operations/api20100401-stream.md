<!-- Generated file — do not edit; regenerated with the SDK. -->

# Api20100401Stream — operations

Accessor: `client.api20100401Stream` · Source: `src/resources/api20100401-stream.ts` · 2 operations · Request types: namespace `Api20100401Stream`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `twilio`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### createStream

- **Signature**: `createStream(request: Api20100401Stream.CreateStreamRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallStream, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallStream`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Stream.CreateStreamRequest` (205):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `url` | `form` | `Url` | `string` | yes |
| `name` | `form` | `Name` | `string` | no |
| `track` | `form` | `Track` | `StreamEnumTrack` | no |
| `statusCallback` | `form` | `StatusCallback` | `string` | no |
| `statusCallbackMethod` | `form` | `StatusCallbackMethod` | `StatusCallbackMethod19` | no |
| `parameter1Name` | `form` | `Parameter1.Name` | `string` | no |
| `parameter1Value` | `form` | `Parameter1.Value` | `string` | no |
| `parameter2Name` | `form` | `Parameter2.Name` | `string` | no |
| `parameter2Value` | `form` | `Parameter2.Value` | `string` | no |
| `parameter3Name` | `form` | `Parameter3.Name` | `string` | no |
| `parameter3Value` | `form` | `Parameter3.Value` | `string` | no |
| `parameter4Name` | `form` | `Parameter4.Name` | `string` | no |
| `parameter4Value` | `form` | `Parameter4.Value` | `string` | no |
| `parameter5Name` | `form` | `Parameter5.Name` | `string` | no |
| `parameter5Value` | `form` | `Parameter5.Value` | `string` | no |
| `parameter6Name` | `form` | `Parameter6.Name` | `string` | no |
| `parameter6Value` | `form` | `Parameter6.Value` | `string` | no |
| `parameter7Name` | `form` | `Parameter7.Name` | `string` | no |
| `parameter7Value` | `form` | `Parameter7.Value` | `string` | no |
| `parameter8Name` | `form` | `Parameter8.Name` | `string` | no |
| `parameter8Value` | `form` | `Parameter8.Value` | `string` | no |
| `parameter9Name` | `form` | `Parameter9.Name` | `string` | no |
| `parameter9Value` | `form` | `Parameter9.Value` | `string` | no |
| `parameter10Name` | `form` | `Parameter10.Name` | `string` | no |
| `parameter10Value` | `form` | `Parameter10.Value` | `string` | no |
| `parameter11Name` | `form` | `Parameter11.Name` | `string` | no |
| `parameter11Value` | `form` | `Parameter11.Value` | `string` | no |
| `parameter12Name` | `form` | `Parameter12.Name` | `string` | no |
| `parameter12Value` | `form` | `Parameter12.Value` | `string` | no |
| `parameter13Name` | `form` | `Parameter13.Name` | `string` | no |
| `parameter13Value` | `form` | `Parameter13.Value` | `string` | no |
| `parameter14Name` | `form` | `Parameter14.Name` | `string` | no |
| `parameter14Value` | `form` | `Parameter14.Value` | `string` | no |
| `parameter15Name` | `form` | `Parameter15.Name` | `string` | no |
| `parameter15Value` | `form` | `Parameter15.Value` | `string` | no |
| `parameter16Name` | `form` | `Parameter16.Name` | `string` | no |
| `parameter16Value` | `form` | `Parameter16.Value` | `string` | no |
| `parameter17Name` | `form` | `Parameter17.Name` | `string` | no |
| `parameter17Value` | `form` | `Parameter17.Value` | `string` | no |
| `parameter18Name` | `form` | `Parameter18.Name` | `string` | no |
| `parameter18Value` | `form` | `Parameter18.Value` | `string` | no |
| `parameter19Name` | `form` | `Parameter19.Name` | `string` | no |
| `parameter19Value` | `form` | `Parameter19.Value` | `string` | no |
| `parameter20Name` | `form` | `Parameter20.Name` | `string` | no |
| `parameter20Value` | `form` | `Parameter20.Value` | `string` | no |
| `parameter21Name` | `form` | `Parameter21.Name` | `string` | no |
| `parameter21Value` | `form` | `Parameter21.Value` | `string` | no |
| `parameter22Name` | `form` | `Parameter22.Name` | `string` | no |
| `parameter22Value` | `form` | `Parameter22.Value` | `string` | no |
| `parameter23Name` | `form` | `Parameter23.Name` | `string` | no |
| `parameter23Value` | `form` | `Parameter23.Value` | `string` | no |
| `parameter24Name` | `form` | `Parameter24.Name` | `string` | no |
| `parameter24Value` | `form` | `Parameter24.Value` | `string` | no |
| `parameter25Name` | `form` | `Parameter25.Name` | `string` | no |
| `parameter25Value` | `form` | `Parameter25.Value` | `string` | no |
| `parameter26Name` | `form` | `Parameter26.Name` | `string` | no |
| `parameter26Value` | `form` | `Parameter26.Value` | `string` | no |
| `parameter27Name` | `form` | `Parameter27.Name` | `string` | no |
| `parameter27Value` | `form` | `Parameter27.Value` | `string` | no |
| `parameter28Name` | `form` | `Parameter28.Name` | `string` | no |
| `parameter28Value` | `form` | `Parameter28.Value` | `string` | no |
| `parameter29Name` | `form` | `Parameter29.Name` | `string` | no |
| `parameter29Value` | `form` | `Parameter29.Value` | `string` | no |
| `parameter30Name` | `form` | `Parameter30.Name` | `string` | no |
| `parameter30Value` | `form` | `Parameter30.Value` | `string` | no |
| `parameter31Name` | `form` | `Parameter31.Name` | `string` | no |
| `parameter31Value` | `form` | `Parameter31.Value` | `string` | no |
| `parameter32Name` | `form` | `Parameter32.Name` | `string` | no |
| `parameter32Value` | `form` | `Parameter32.Value` | `string` | no |
| `parameter33Name` | `form` | `Parameter33.Name` | `string` | no |
| `parameter33Value` | `form` | `Parameter33.Value` | `string` | no |
| `parameter34Name` | `form` | `Parameter34.Name` | `string` | no |
| `parameter34Value` | `form` | `Parameter34.Value` | `string` | no |
| `parameter35Name` | `form` | `Parameter35.Name` | `string` | no |
| `parameter35Value` | `form` | `Parameter35.Value` | `string` | no |
| `parameter36Name` | `form` | `Parameter36.Name` | `string` | no |
| `parameter36Value` | `form` | `Parameter36.Value` | `string` | no |
| `parameter37Name` | `form` | `Parameter37.Name` | `string` | no |
| `parameter37Value` | `form` | `Parameter37.Value` | `string` | no |
| `parameter38Name` | `form` | `Parameter38.Name` | `string` | no |
| `parameter38Value` | `form` | `Parameter38.Value` | `string` | no |
| `parameter39Name` | `form` | `Parameter39.Name` | `string` | no |
| `parameter39Value` | `form` | `Parameter39.Value` | `string` | no |
| `parameter40Name` | `form` | `Parameter40.Name` | `string` | no |
| `parameter40Value` | `form` | `Parameter40.Value` | `string` | no |
| `parameter41Name` | `form` | `Parameter41.Name` | `string` | no |
| `parameter41Value` | `form` | `Parameter41.Value` | `string` | no |
| `parameter42Name` | `form` | `Parameter42.Name` | `string` | no |
| `parameter42Value` | `form` | `Parameter42.Value` | `string` | no |
| `parameter43Name` | `form` | `Parameter43.Name` | `string` | no |
| `parameter43Value` | `form` | `Parameter43.Value` | `string` | no |
| `parameter44Name` | `form` | `Parameter44.Name` | `string` | no |
| `parameter44Value` | `form` | `Parameter44.Value` | `string` | no |
| `parameter45Name` | `form` | `Parameter45.Name` | `string` | no |
| `parameter45Value` | `form` | `Parameter45.Value` | `string` | no |
| `parameter46Name` | `form` | `Parameter46.Name` | `string` | no |
| `parameter46Value` | `form` | `Parameter46.Value` | `string` | no |
| `parameter47Name` | `form` | `Parameter47.Name` | `string` | no |
| `parameter47Value` | `form` | `Parameter47.Value` | `string` | no |
| `parameter48Name` | `form` | `Parameter48.Name` | `string` | no |
| `parameter48Value` | `form` | `Parameter48.Value` | `string` | no |
| `parameter49Name` | `form` | `Parameter49.Name` | `string` | no |
| `parameter49Value` | `form` | `Parameter49.Value` | `string` | no |
| `parameter50Name` | `form` | `Parameter50.Name` | `string` | no |
| `parameter50Value` | `form` | `Parameter50.Value` | `string` | no |
| `parameter51Name` | `form` | `Parameter51.Name` | `string` | no |
| `parameter51Value` | `form` | `Parameter51.Value` | `string` | no |
| `parameter52Name` | `form` | `Parameter52.Name` | `string` | no |
| `parameter52Value` | `form` | `Parameter52.Value` | `string` | no |
| `parameter53Name` | `form` | `Parameter53.Name` | `string` | no |
| `parameter53Value` | `form` | `Parameter53.Value` | `string` | no |
| `parameter54Name` | `form` | `Parameter54.Name` | `string` | no |
| `parameter54Value` | `form` | `Parameter54.Value` | `string` | no |
| `parameter55Name` | `form` | `Parameter55.Name` | `string` | no |
| `parameter55Value` | `form` | `Parameter55.Value` | `string` | no |
| `parameter56Name` | `form` | `Parameter56.Name` | `string` | no |
| `parameter56Value` | `form` | `Parameter56.Value` | `string` | no |
| `parameter57Name` | `form` | `Parameter57.Name` | `string` | no |
| `parameter57Value` | `form` | `Parameter57.Value` | `string` | no |
| `parameter58Name` | `form` | `Parameter58.Name` | `string` | no |
| `parameter58Value` | `form` | `Parameter58.Value` | `string` | no |
| `parameter59Name` | `form` | `Parameter59.Name` | `string` | no |
| `parameter59Value` | `form` | `Parameter59.Value` | `string` | no |
| `parameter60Name` | `form` | `Parameter60.Name` | `string` | no |
| `parameter60Value` | `form` | `Parameter60.Value` | `string` | no |
| `parameter61Name` | `form` | `Parameter61.Name` | `string` | no |
| `parameter61Value` | `form` | `Parameter61.Value` | `string` | no |
| `parameter62Name` | `form` | `Parameter62.Name` | `string` | no |
| `parameter62Value` | `form` | `Parameter62.Value` | `string` | no |
| `parameter63Name` | `form` | `Parameter63.Name` | `string` | no |
| `parameter63Value` | `form` | `Parameter63.Value` | `string` | no |
| `parameter64Name` | `form` | `Parameter64.Name` | `string` | no |
| `parameter64Value` | `form` | `Parameter64.Value` | `string` | no |
| `parameter65Name` | `form` | `Parameter65.Name` | `string` | no |
| `parameter65Value` | `form` | `Parameter65.Value` | `string` | no |
| `parameter66Name` | `form` | `Parameter66.Name` | `string` | no |
| `parameter66Value` | `form` | `Parameter66.Value` | `string` | no |
| `parameter67Name` | `form` | `Parameter67.Name` | `string` | no |
| `parameter67Value` | `form` | `Parameter67.Value` | `string` | no |
| `parameter68Name` | `form` | `Parameter68.Name` | `string` | no |
| `parameter68Value` | `form` | `Parameter68.Value` | `string` | no |
| `parameter69Name` | `form` | `Parameter69.Name` | `string` | no |
| `parameter69Value` | `form` | `Parameter69.Value` | `string` | no |
| `parameter70Name` | `form` | `Parameter70.Name` | `string` | no |
| `parameter70Value` | `form` | `Parameter70.Value` | `string` | no |
| `parameter71Name` | `form` | `Parameter71.Name` | `string` | no |
| `parameter71Value` | `form` | `Parameter71.Value` | `string` | no |
| `parameter72Name` | `form` | `Parameter72.Name` | `string` | no |
| `parameter72Value` | `form` | `Parameter72.Value` | `string` | no |
| `parameter73Name` | `form` | `Parameter73.Name` | `string` | no |
| `parameter73Value` | `form` | `Parameter73.Value` | `string` | no |
| `parameter74Name` | `form` | `Parameter74.Name` | `string` | no |
| `parameter74Value` | `form` | `Parameter74.Value` | `string` | no |
| `parameter75Name` | `form` | `Parameter75.Name` | `string` | no |
| `parameter75Value` | `form` | `Parameter75.Value` | `string` | no |
| `parameter76Name` | `form` | `Parameter76.Name` | `string` | no |
| `parameter76Value` | `form` | `Parameter76.Value` | `string` | no |
| `parameter77Name` | `form` | `Parameter77.Name` | `string` | no |
| `parameter77Value` | `form` | `Parameter77.Value` | `string` | no |
| `parameter78Name` | `form` | `Parameter78.Name` | `string` | no |
| `parameter78Value` | `form` | `Parameter78.Value` | `string` | no |
| `parameter79Name` | `form` | `Parameter79.Name` | `string` | no |
| `parameter79Value` | `form` | `Parameter79.Value` | `string` | no |
| `parameter80Name` | `form` | `Parameter80.Name` | `string` | no |
| `parameter80Value` | `form` | `Parameter80.Value` | `string` | no |
| `parameter81Name` | `form` | `Parameter81.Name` | `string` | no |
| `parameter81Value` | `form` | `Parameter81.Value` | `string` | no |
| `parameter82Name` | `form` | `Parameter82.Name` | `string` | no |
| `parameter82Value` | `form` | `Parameter82.Value` | `string` | no |
| `parameter83Name` | `form` | `Parameter83.Name` | `string` | no |
| `parameter83Value` | `form` | `Parameter83.Value` | `string` | no |
| `parameter84Name` | `form` | `Parameter84.Name` | `string` | no |
| `parameter84Value` | `form` | `Parameter84.Value` | `string` | no |
| `parameter85Name` | `form` | `Parameter85.Name` | `string` | no |
| `parameter85Value` | `form` | `Parameter85.Value` | `string` | no |
| `parameter86Name` | `form` | `Parameter86.Name` | `string` | no |
| `parameter86Value` | `form` | `Parameter86.Value` | `string` | no |
| `parameter87Name` | `form` | `Parameter87.Name` | `string` | no |
| `parameter87Value` | `form` | `Parameter87.Value` | `string` | no |
| `parameter88Name` | `form` | `Parameter88.Name` | `string` | no |
| `parameter88Value` | `form` | `Parameter88.Value` | `string` | no |
| `parameter89Name` | `form` | `Parameter89.Name` | `string` | no |
| `parameter89Value` | `form` | `Parameter89.Value` | `string` | no |
| `parameter90Name` | `form` | `Parameter90.Name` | `string` | no |
| `parameter90Value` | `form` | `Parameter90.Value` | `string` | no |
| `parameter91Name` | `form` | `Parameter91.Name` | `string` | no |
| `parameter91Value` | `form` | `Parameter91.Value` | `string` | no |
| `parameter92Name` | `form` | `Parameter92.Name` | `string` | no |
| `parameter92Value` | `form` | `Parameter92.Value` | `string` | no |
| `parameter93Name` | `form` | `Parameter93.Name` | `string` | no |
| `parameter93Value` | `form` | `Parameter93.Value` | `string` | no |
| `parameter94Name` | `form` | `Parameter94.Name` | `string` | no |
| `parameter94Value` | `form` | `Parameter94.Value` | `string` | no |
| `parameter95Name` | `form` | `Parameter95.Name` | `string` | no |
| `parameter95Value` | `form` | `Parameter95.Value` | `string` | no |
| `parameter96Name` | `form` | `Parameter96.Name` | `string` | no |
| `parameter96Value` | `form` | `Parameter96.Value` | `string` | no |
| `parameter97Name` | `form` | `Parameter97.Name` | `string` | no |
| `parameter97Value` | `form` | `Parameter97.Value` | `string` | no |
| `parameter98Name` | `form` | `Parameter98.Name` | `string` | no |
| `parameter98Value` | `form` | `Parameter98.Value` | `string` | no |
| `parameter99Name` | `form` | `Parameter99.Name` | `string` | no |
| `parameter99Value` | `form` | `Parameter99.Value` | `string` | no |

| Type | Schema value | Source |
| --- | --- | --- |
| `StreamEnumTrack` | `streamEnumTrackSchema` | `src/models/stream-enum-track.ts` |
| `StatusCallbackMethod19` | `statusCallbackMethod19Schema` | `src/models/status-callback-method19.ts` |
| `ApiV2010AccountCallStream` | `apiV2010AccountCallStreamSchema` | `src/models/api-v2010-account-call-stream.ts` |

### updateStream

- **Signature**: `updateStream(request: Api20100401Stream.UpdateStreamRequest, options?: RequestOptions): ApiPromise<ApiV2010AccountCallStream, ResponseError>`
- **Wire**: `POST /2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json`
- **Auth**: `accountSidAuthToken`
- **Request body**: `application/x-www-form-urlencoded;charset=UTF-8` — every field marked `form`
- **Returns**: `ApiV2010AccountCallStream`
- **Error**: `ResponseError` — untyped, `payload.kind` always `"undeclared"`

**Fields** — `Api20100401Stream.UpdateStreamRequest` (4):

| Field | Channel | Wire | Type | Req |
| --- | --- | --- | --- | --- |
| `accountSid` | `path` | `AccountSid` | `string` | yes |
| `callSid` | `path` | `CallSid` | `string` | yes |
| `sid` | `path` | `Sid` | `string` | yes |
| `status` | `form` | `Status` | `StreamEnumUpdateStatus` | yes |

| Type | Schema value | Source |
| --- | --- | --- |
| `StreamEnumUpdateStatus` | `streamEnumUpdateStatusSchema` | `src/models/stream-enum-update-status.ts` |
| `ApiV2010AccountCallStream` | `apiV2010AccountCallStreamSchema` | `src/models/api-v2010-account-call-stream.ts` |

