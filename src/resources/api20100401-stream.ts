import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountCallStreamSchema,
  type ApiV2010AccountCallStream,
} from "../models/api-v2010-account-call-stream.js";
import {
  statusCallbackMethod19Schema,
  type StatusCallbackMethod19,
} from "../models/status-callback-method19.js";
import { streamEnumTrackSchema, type StreamEnumTrack } from "../models/stream-enum-track.js";
import {
  streamEnumUpdateStatusSchema,
  type StreamEnumUpdateStatus,
} from "../models/stream-enum-update-status.js";
import type { Servers } from "../servers.js";

export class Api20100401Stream {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createStream(
    request: Api20100401Stream.CreateStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallStream, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallStream, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Url", value: request.url, schema: s.string() },
            { name: "Name", value: request.name, schema: s.optional(s.string()) },
            { name: "Track", value: request.track, schema: s.optional(s.lazy(() => streamEnumTrackSchema)) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod19Schema)),
            },
            { name: "Parameter1.Name", value: request.parameter1Name, schema: s.optional(s.string()) },
            { name: "Parameter1.Value", value: request.parameter1Value, schema: s.optional(s.string()) },
            { name: "Parameter2.Name", value: request.parameter2Name, schema: s.optional(s.string()) },
            { name: "Parameter2.Value", value: request.parameter2Value, schema: s.optional(s.string()) },
            { name: "Parameter3.Name", value: request.parameter3Name, schema: s.optional(s.string()) },
            { name: "Parameter3.Value", value: request.parameter3Value, schema: s.optional(s.string()) },
            { name: "Parameter4.Name", value: request.parameter4Name, schema: s.optional(s.string()) },
            { name: "Parameter4.Value", value: request.parameter4Value, schema: s.optional(s.string()) },
            { name: "Parameter5.Name", value: request.parameter5Name, schema: s.optional(s.string()) },
            { name: "Parameter5.Value", value: request.parameter5Value, schema: s.optional(s.string()) },
            { name: "Parameter6.Name", value: request.parameter6Name, schema: s.optional(s.string()) },
            { name: "Parameter6.Value", value: request.parameter6Value, schema: s.optional(s.string()) },
            { name: "Parameter7.Name", value: request.parameter7Name, schema: s.optional(s.string()) },
            { name: "Parameter7.Value", value: request.parameter7Value, schema: s.optional(s.string()) },
            { name: "Parameter8.Name", value: request.parameter8Name, schema: s.optional(s.string()) },
            { name: "Parameter8.Value", value: request.parameter8Value, schema: s.optional(s.string()) },
            { name: "Parameter9.Name", value: request.parameter9Name, schema: s.optional(s.string()) },
            { name: "Parameter9.Value", value: request.parameter9Value, schema: s.optional(s.string()) },
            { name: "Parameter10.Name", value: request.parameter10Name, schema: s.optional(s.string()) },
            { name: "Parameter10.Value", value: request.parameter10Value, schema: s.optional(s.string()) },
            { name: "Parameter11.Name", value: request.parameter11Name, schema: s.optional(s.string()) },
            { name: "Parameter11.Value", value: request.parameter11Value, schema: s.optional(s.string()) },
            { name: "Parameter12.Name", value: request.parameter12Name, schema: s.optional(s.string()) },
            { name: "Parameter12.Value", value: request.parameter12Value, schema: s.optional(s.string()) },
            { name: "Parameter13.Name", value: request.parameter13Name, schema: s.optional(s.string()) },
            { name: "Parameter13.Value", value: request.parameter13Value, schema: s.optional(s.string()) },
            { name: "Parameter14.Name", value: request.parameter14Name, schema: s.optional(s.string()) },
            { name: "Parameter14.Value", value: request.parameter14Value, schema: s.optional(s.string()) },
            { name: "Parameter15.Name", value: request.parameter15Name, schema: s.optional(s.string()) },
            { name: "Parameter15.Value", value: request.parameter15Value, schema: s.optional(s.string()) },
            { name: "Parameter16.Name", value: request.parameter16Name, schema: s.optional(s.string()) },
            { name: "Parameter16.Value", value: request.parameter16Value, schema: s.optional(s.string()) },
            { name: "Parameter17.Name", value: request.parameter17Name, schema: s.optional(s.string()) },
            { name: "Parameter17.Value", value: request.parameter17Value, schema: s.optional(s.string()) },
            { name: "Parameter18.Name", value: request.parameter18Name, schema: s.optional(s.string()) },
            { name: "Parameter18.Value", value: request.parameter18Value, schema: s.optional(s.string()) },
            { name: "Parameter19.Name", value: request.parameter19Name, schema: s.optional(s.string()) },
            { name: "Parameter19.Value", value: request.parameter19Value, schema: s.optional(s.string()) },
            { name: "Parameter20.Name", value: request.parameter20Name, schema: s.optional(s.string()) },
            { name: "Parameter20.Value", value: request.parameter20Value, schema: s.optional(s.string()) },
            { name: "Parameter21.Name", value: request.parameter21Name, schema: s.optional(s.string()) },
            { name: "Parameter21.Value", value: request.parameter21Value, schema: s.optional(s.string()) },
            { name: "Parameter22.Name", value: request.parameter22Name, schema: s.optional(s.string()) },
            { name: "Parameter22.Value", value: request.parameter22Value, schema: s.optional(s.string()) },
            { name: "Parameter23.Name", value: request.parameter23Name, schema: s.optional(s.string()) },
            { name: "Parameter23.Value", value: request.parameter23Value, schema: s.optional(s.string()) },
            { name: "Parameter24.Name", value: request.parameter24Name, schema: s.optional(s.string()) },
            { name: "Parameter24.Value", value: request.parameter24Value, schema: s.optional(s.string()) },
            { name: "Parameter25.Name", value: request.parameter25Name, schema: s.optional(s.string()) },
            { name: "Parameter25.Value", value: request.parameter25Value, schema: s.optional(s.string()) },
            { name: "Parameter26.Name", value: request.parameter26Name, schema: s.optional(s.string()) },
            { name: "Parameter26.Value", value: request.parameter26Value, schema: s.optional(s.string()) },
            { name: "Parameter27.Name", value: request.parameter27Name, schema: s.optional(s.string()) },
            { name: "Parameter27.Value", value: request.parameter27Value, schema: s.optional(s.string()) },
            { name: "Parameter28.Name", value: request.parameter28Name, schema: s.optional(s.string()) },
            { name: "Parameter28.Value", value: request.parameter28Value, schema: s.optional(s.string()) },
            { name: "Parameter29.Name", value: request.parameter29Name, schema: s.optional(s.string()) },
            { name: "Parameter29.Value", value: request.parameter29Value, schema: s.optional(s.string()) },
            { name: "Parameter30.Name", value: request.parameter30Name, schema: s.optional(s.string()) },
            { name: "Parameter30.Value", value: request.parameter30Value, schema: s.optional(s.string()) },
            { name: "Parameter31.Name", value: request.parameter31Name, schema: s.optional(s.string()) },
            { name: "Parameter31.Value", value: request.parameter31Value, schema: s.optional(s.string()) },
            { name: "Parameter32.Name", value: request.parameter32Name, schema: s.optional(s.string()) },
            { name: "Parameter32.Value", value: request.parameter32Value, schema: s.optional(s.string()) },
            { name: "Parameter33.Name", value: request.parameter33Name, schema: s.optional(s.string()) },
            { name: "Parameter33.Value", value: request.parameter33Value, schema: s.optional(s.string()) },
            { name: "Parameter34.Name", value: request.parameter34Name, schema: s.optional(s.string()) },
            { name: "Parameter34.Value", value: request.parameter34Value, schema: s.optional(s.string()) },
            { name: "Parameter35.Name", value: request.parameter35Name, schema: s.optional(s.string()) },
            { name: "Parameter35.Value", value: request.parameter35Value, schema: s.optional(s.string()) },
            { name: "Parameter36.Name", value: request.parameter36Name, schema: s.optional(s.string()) },
            { name: "Parameter36.Value", value: request.parameter36Value, schema: s.optional(s.string()) },
            { name: "Parameter37.Name", value: request.parameter37Name, schema: s.optional(s.string()) },
            { name: "Parameter37.Value", value: request.parameter37Value, schema: s.optional(s.string()) },
            { name: "Parameter38.Name", value: request.parameter38Name, schema: s.optional(s.string()) },
            { name: "Parameter38.Value", value: request.parameter38Value, schema: s.optional(s.string()) },
            { name: "Parameter39.Name", value: request.parameter39Name, schema: s.optional(s.string()) },
            { name: "Parameter39.Value", value: request.parameter39Value, schema: s.optional(s.string()) },
            { name: "Parameter40.Name", value: request.parameter40Name, schema: s.optional(s.string()) },
            { name: "Parameter40.Value", value: request.parameter40Value, schema: s.optional(s.string()) },
            { name: "Parameter41.Name", value: request.parameter41Name, schema: s.optional(s.string()) },
            { name: "Parameter41.Value", value: request.parameter41Value, schema: s.optional(s.string()) },
            { name: "Parameter42.Name", value: request.parameter42Name, schema: s.optional(s.string()) },
            { name: "Parameter42.Value", value: request.parameter42Value, schema: s.optional(s.string()) },
            { name: "Parameter43.Name", value: request.parameter43Name, schema: s.optional(s.string()) },
            { name: "Parameter43.Value", value: request.parameter43Value, schema: s.optional(s.string()) },
            { name: "Parameter44.Name", value: request.parameter44Name, schema: s.optional(s.string()) },
            { name: "Parameter44.Value", value: request.parameter44Value, schema: s.optional(s.string()) },
            { name: "Parameter45.Name", value: request.parameter45Name, schema: s.optional(s.string()) },
            { name: "Parameter45.Value", value: request.parameter45Value, schema: s.optional(s.string()) },
            { name: "Parameter46.Name", value: request.parameter46Name, schema: s.optional(s.string()) },
            { name: "Parameter46.Value", value: request.parameter46Value, schema: s.optional(s.string()) },
            { name: "Parameter47.Name", value: request.parameter47Name, schema: s.optional(s.string()) },
            { name: "Parameter47.Value", value: request.parameter47Value, schema: s.optional(s.string()) },
            { name: "Parameter48.Name", value: request.parameter48Name, schema: s.optional(s.string()) },
            { name: "Parameter48.Value", value: request.parameter48Value, schema: s.optional(s.string()) },
            { name: "Parameter49.Name", value: request.parameter49Name, schema: s.optional(s.string()) },
            { name: "Parameter49.Value", value: request.parameter49Value, schema: s.optional(s.string()) },
            { name: "Parameter50.Name", value: request.parameter50Name, schema: s.optional(s.string()) },
            { name: "Parameter50.Value", value: request.parameter50Value, schema: s.optional(s.string()) },
            { name: "Parameter51.Name", value: request.parameter51Name, schema: s.optional(s.string()) },
            { name: "Parameter51.Value", value: request.parameter51Value, schema: s.optional(s.string()) },
            { name: "Parameter52.Name", value: request.parameter52Name, schema: s.optional(s.string()) },
            { name: "Parameter52.Value", value: request.parameter52Value, schema: s.optional(s.string()) },
            { name: "Parameter53.Name", value: request.parameter53Name, schema: s.optional(s.string()) },
            { name: "Parameter53.Value", value: request.parameter53Value, schema: s.optional(s.string()) },
            { name: "Parameter54.Name", value: request.parameter54Name, schema: s.optional(s.string()) },
            { name: "Parameter54.Value", value: request.parameter54Value, schema: s.optional(s.string()) },
            { name: "Parameter55.Name", value: request.parameter55Name, schema: s.optional(s.string()) },
            { name: "Parameter55.Value", value: request.parameter55Value, schema: s.optional(s.string()) },
            { name: "Parameter56.Name", value: request.parameter56Name, schema: s.optional(s.string()) },
            { name: "Parameter56.Value", value: request.parameter56Value, schema: s.optional(s.string()) },
            { name: "Parameter57.Name", value: request.parameter57Name, schema: s.optional(s.string()) },
            { name: "Parameter57.Value", value: request.parameter57Value, schema: s.optional(s.string()) },
            { name: "Parameter58.Name", value: request.parameter58Name, schema: s.optional(s.string()) },
            { name: "Parameter58.Value", value: request.parameter58Value, schema: s.optional(s.string()) },
            { name: "Parameter59.Name", value: request.parameter59Name, schema: s.optional(s.string()) },
            { name: "Parameter59.Value", value: request.parameter59Value, schema: s.optional(s.string()) },
            { name: "Parameter60.Name", value: request.parameter60Name, schema: s.optional(s.string()) },
            { name: "Parameter60.Value", value: request.parameter60Value, schema: s.optional(s.string()) },
            { name: "Parameter61.Name", value: request.parameter61Name, schema: s.optional(s.string()) },
            { name: "Parameter61.Value", value: request.parameter61Value, schema: s.optional(s.string()) },
            { name: "Parameter62.Name", value: request.parameter62Name, schema: s.optional(s.string()) },
            { name: "Parameter62.Value", value: request.parameter62Value, schema: s.optional(s.string()) },
            { name: "Parameter63.Name", value: request.parameter63Name, schema: s.optional(s.string()) },
            { name: "Parameter63.Value", value: request.parameter63Value, schema: s.optional(s.string()) },
            { name: "Parameter64.Name", value: request.parameter64Name, schema: s.optional(s.string()) },
            { name: "Parameter64.Value", value: request.parameter64Value, schema: s.optional(s.string()) },
            { name: "Parameter65.Name", value: request.parameter65Name, schema: s.optional(s.string()) },
            { name: "Parameter65.Value", value: request.parameter65Value, schema: s.optional(s.string()) },
            { name: "Parameter66.Name", value: request.parameter66Name, schema: s.optional(s.string()) },
            { name: "Parameter66.Value", value: request.parameter66Value, schema: s.optional(s.string()) },
            { name: "Parameter67.Name", value: request.parameter67Name, schema: s.optional(s.string()) },
            { name: "Parameter67.Value", value: request.parameter67Value, schema: s.optional(s.string()) },
            { name: "Parameter68.Name", value: request.parameter68Name, schema: s.optional(s.string()) },
            { name: "Parameter68.Value", value: request.parameter68Value, schema: s.optional(s.string()) },
            { name: "Parameter69.Name", value: request.parameter69Name, schema: s.optional(s.string()) },
            { name: "Parameter69.Value", value: request.parameter69Value, schema: s.optional(s.string()) },
            { name: "Parameter70.Name", value: request.parameter70Name, schema: s.optional(s.string()) },
            { name: "Parameter70.Value", value: request.parameter70Value, schema: s.optional(s.string()) },
            { name: "Parameter71.Name", value: request.parameter71Name, schema: s.optional(s.string()) },
            { name: "Parameter71.Value", value: request.parameter71Value, schema: s.optional(s.string()) },
            { name: "Parameter72.Name", value: request.parameter72Name, schema: s.optional(s.string()) },
            { name: "Parameter72.Value", value: request.parameter72Value, schema: s.optional(s.string()) },
            { name: "Parameter73.Name", value: request.parameter73Name, schema: s.optional(s.string()) },
            { name: "Parameter73.Value", value: request.parameter73Value, schema: s.optional(s.string()) },
            { name: "Parameter74.Name", value: request.parameter74Name, schema: s.optional(s.string()) },
            { name: "Parameter74.Value", value: request.parameter74Value, schema: s.optional(s.string()) },
            { name: "Parameter75.Name", value: request.parameter75Name, schema: s.optional(s.string()) },
            { name: "Parameter75.Value", value: request.parameter75Value, schema: s.optional(s.string()) },
            { name: "Parameter76.Name", value: request.parameter76Name, schema: s.optional(s.string()) },
            { name: "Parameter76.Value", value: request.parameter76Value, schema: s.optional(s.string()) },
            { name: "Parameter77.Name", value: request.parameter77Name, schema: s.optional(s.string()) },
            { name: "Parameter77.Value", value: request.parameter77Value, schema: s.optional(s.string()) },
            { name: "Parameter78.Name", value: request.parameter78Name, schema: s.optional(s.string()) },
            { name: "Parameter78.Value", value: request.parameter78Value, schema: s.optional(s.string()) },
            { name: "Parameter79.Name", value: request.parameter79Name, schema: s.optional(s.string()) },
            { name: "Parameter79.Value", value: request.parameter79Value, schema: s.optional(s.string()) },
            { name: "Parameter80.Name", value: request.parameter80Name, schema: s.optional(s.string()) },
            { name: "Parameter80.Value", value: request.parameter80Value, schema: s.optional(s.string()) },
            { name: "Parameter81.Name", value: request.parameter81Name, schema: s.optional(s.string()) },
            { name: "Parameter81.Value", value: request.parameter81Value, schema: s.optional(s.string()) },
            { name: "Parameter82.Name", value: request.parameter82Name, schema: s.optional(s.string()) },
            { name: "Parameter82.Value", value: request.parameter82Value, schema: s.optional(s.string()) },
            { name: "Parameter83.Name", value: request.parameter83Name, schema: s.optional(s.string()) },
            { name: "Parameter83.Value", value: request.parameter83Value, schema: s.optional(s.string()) },
            { name: "Parameter84.Name", value: request.parameter84Name, schema: s.optional(s.string()) },
            { name: "Parameter84.Value", value: request.parameter84Value, schema: s.optional(s.string()) },
            { name: "Parameter85.Name", value: request.parameter85Name, schema: s.optional(s.string()) },
            { name: "Parameter85.Value", value: request.parameter85Value, schema: s.optional(s.string()) },
            { name: "Parameter86.Name", value: request.parameter86Name, schema: s.optional(s.string()) },
            { name: "Parameter86.Value", value: request.parameter86Value, schema: s.optional(s.string()) },
            { name: "Parameter87.Name", value: request.parameter87Name, schema: s.optional(s.string()) },
            { name: "Parameter87.Value", value: request.parameter87Value, schema: s.optional(s.string()) },
            { name: "Parameter88.Name", value: request.parameter88Name, schema: s.optional(s.string()) },
            { name: "Parameter88.Value", value: request.parameter88Value, schema: s.optional(s.string()) },
            { name: "Parameter89.Name", value: request.parameter89Name, schema: s.optional(s.string()) },
            { name: "Parameter89.Value", value: request.parameter89Value, schema: s.optional(s.string()) },
            { name: "Parameter90.Name", value: request.parameter90Name, schema: s.optional(s.string()) },
            { name: "Parameter90.Value", value: request.parameter90Value, schema: s.optional(s.string()) },
            { name: "Parameter91.Name", value: request.parameter91Name, schema: s.optional(s.string()) },
            { name: "Parameter91.Value", value: request.parameter91Value, schema: s.optional(s.string()) },
            { name: "Parameter92.Name", value: request.parameter92Name, schema: s.optional(s.string()) },
            { name: "Parameter92.Value", value: request.parameter92Value, schema: s.optional(s.string()) },
            { name: "Parameter93.Name", value: request.parameter93Name, schema: s.optional(s.string()) },
            { name: "Parameter93.Value", value: request.parameter93Value, schema: s.optional(s.string()) },
            { name: "Parameter94.Name", value: request.parameter94Name, schema: s.optional(s.string()) },
            { name: "Parameter94.Value", value: request.parameter94Value, schema: s.optional(s.string()) },
            { name: "Parameter95.Name", value: request.parameter95Name, schema: s.optional(s.string()) },
            { name: "Parameter95.Value", value: request.parameter95Value, schema: s.optional(s.string()) },
            { name: "Parameter96.Name", value: request.parameter96Name, schema: s.optional(s.string()) },
            { name: "Parameter96.Value", value: request.parameter96Value, schema: s.optional(s.string()) },
            { name: "Parameter97.Name", value: request.parameter97Name, schema: s.optional(s.string()) },
            { name: "Parameter97.Value", value: request.parameter97Value, schema: s.optional(s.string()) },
            { name: "Parameter98.Name", value: request.parameter98Name, schema: s.optional(s.string()) },
            { name: "Parameter98.Value", value: request.parameter98Value, schema: s.optional(s.string()) },
            { name: "Parameter99.Name", value: request.parameter99Name, schema: s.optional(s.string()) },
            { name: "Parameter99.Value", value: request.parameter99Value, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallStreamSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateStream(
    request: Api20100401Stream.UpdateStreamRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallStream, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountCallStream, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Streams/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: streamEnumUpdateStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallStreamSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Stream {
  export type CreateStreamRequest = {
    accountSid: string;
    callSid: string;
    url: string;
    name?: string;
    track?: StreamEnumTrack;
    statusCallback?: string;
    statusCallbackMethod?: StatusCallbackMethod19;
    parameter1Name?: string;
    parameter1Value?: string;
    parameter2Name?: string;
    parameter2Value?: string;
    parameter3Name?: string;
    parameter3Value?: string;
    parameter4Name?: string;
    parameter4Value?: string;
    parameter5Name?: string;
    parameter5Value?: string;
    parameter6Name?: string;
    parameter6Value?: string;
    parameter7Name?: string;
    parameter7Value?: string;
    parameter8Name?: string;
    parameter8Value?: string;
    parameter9Name?: string;
    parameter9Value?: string;
    parameter10Name?: string;
    parameter10Value?: string;
    parameter11Name?: string;
    parameter11Value?: string;
    parameter12Name?: string;
    parameter12Value?: string;
    parameter13Name?: string;
    parameter13Value?: string;
    parameter14Name?: string;
    parameter14Value?: string;
    parameter15Name?: string;
    parameter15Value?: string;
    parameter16Name?: string;
    parameter16Value?: string;
    parameter17Name?: string;
    parameter17Value?: string;
    parameter18Name?: string;
    parameter18Value?: string;
    parameter19Name?: string;
    parameter19Value?: string;
    parameter20Name?: string;
    parameter20Value?: string;
    parameter21Name?: string;
    parameter21Value?: string;
    parameter22Name?: string;
    parameter22Value?: string;
    parameter23Name?: string;
    parameter23Value?: string;
    parameter24Name?: string;
    parameter24Value?: string;
    parameter25Name?: string;
    parameter25Value?: string;
    parameter26Name?: string;
    parameter26Value?: string;
    parameter27Name?: string;
    parameter27Value?: string;
    parameter28Name?: string;
    parameter28Value?: string;
    parameter29Name?: string;
    parameter29Value?: string;
    parameter30Name?: string;
    parameter30Value?: string;
    parameter31Name?: string;
    parameter31Value?: string;
    parameter32Name?: string;
    parameter32Value?: string;
    parameter33Name?: string;
    parameter33Value?: string;
    parameter34Name?: string;
    parameter34Value?: string;
    parameter35Name?: string;
    parameter35Value?: string;
    parameter36Name?: string;
    parameter36Value?: string;
    parameter37Name?: string;
    parameter37Value?: string;
    parameter38Name?: string;
    parameter38Value?: string;
    parameter39Name?: string;
    parameter39Value?: string;
    parameter40Name?: string;
    parameter40Value?: string;
    parameter41Name?: string;
    parameter41Value?: string;
    parameter42Name?: string;
    parameter42Value?: string;
    parameter43Name?: string;
    parameter43Value?: string;
    parameter44Name?: string;
    parameter44Value?: string;
    parameter45Name?: string;
    parameter45Value?: string;
    parameter46Name?: string;
    parameter46Value?: string;
    parameter47Name?: string;
    parameter47Value?: string;
    parameter48Name?: string;
    parameter48Value?: string;
    parameter49Name?: string;
    parameter49Value?: string;
    parameter50Name?: string;
    parameter50Value?: string;
    parameter51Name?: string;
    parameter51Value?: string;
    parameter52Name?: string;
    parameter52Value?: string;
    parameter53Name?: string;
    parameter53Value?: string;
    parameter54Name?: string;
    parameter54Value?: string;
    parameter55Name?: string;
    parameter55Value?: string;
    parameter56Name?: string;
    parameter56Value?: string;
    parameter57Name?: string;
    parameter57Value?: string;
    parameter58Name?: string;
    parameter58Value?: string;
    parameter59Name?: string;
    parameter59Value?: string;
    parameter60Name?: string;
    parameter60Value?: string;
    parameter61Name?: string;
    parameter61Value?: string;
    parameter62Name?: string;
    parameter62Value?: string;
    parameter63Name?: string;
    parameter63Value?: string;
    parameter64Name?: string;
    parameter64Value?: string;
    parameter65Name?: string;
    parameter65Value?: string;
    parameter66Name?: string;
    parameter66Value?: string;
    parameter67Name?: string;
    parameter67Value?: string;
    parameter68Name?: string;
    parameter68Value?: string;
    parameter69Name?: string;
    parameter69Value?: string;
    parameter70Name?: string;
    parameter70Value?: string;
    parameter71Name?: string;
    parameter71Value?: string;
    parameter72Name?: string;
    parameter72Value?: string;
    parameter73Name?: string;
    parameter73Value?: string;
    parameter74Name?: string;
    parameter74Value?: string;
    parameter75Name?: string;
    parameter75Value?: string;
    parameter76Name?: string;
    parameter76Value?: string;
    parameter77Name?: string;
    parameter77Value?: string;
    parameter78Name?: string;
    parameter78Value?: string;
    parameter79Name?: string;
    parameter79Value?: string;
    parameter80Name?: string;
    parameter80Value?: string;
    parameter81Name?: string;
    parameter81Value?: string;
    parameter82Name?: string;
    parameter82Value?: string;
    parameter83Name?: string;
    parameter83Value?: string;
    parameter84Name?: string;
    parameter84Value?: string;
    parameter85Name?: string;
    parameter85Value?: string;
    parameter86Name?: string;
    parameter86Value?: string;
    parameter87Name?: string;
    parameter87Value?: string;
    parameter88Name?: string;
    parameter88Value?: string;
    parameter89Name?: string;
    parameter89Value?: string;
    parameter90Name?: string;
    parameter90Value?: string;
    parameter91Name?: string;
    parameter91Value?: string;
    parameter92Name?: string;
    parameter92Value?: string;
    parameter93Name?: string;
    parameter93Value?: string;
    parameter94Name?: string;
    parameter94Value?: string;
    parameter95Name?: string;
    parameter95Value?: string;
    parameter96Name?: string;
    parameter96Value?: string;
    parameter97Name?: string;
    parameter97Value?: string;
    parameter98Name?: string;
    parameter98Value?: string;
    parameter99Name?: string;
    parameter99Value?: string;
  };

  export type UpdateStreamRequest = {
    accountSid: string;
    callSid: string;
    sid: string;
    status: StreamEnumUpdateStatus;
  };
}
