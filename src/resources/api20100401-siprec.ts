import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountCallSiprecSchema,
  type ApiV2010AccountCallSiprec,
} from "../models/api-v2010-account-call-siprec.js";
import { siprecEnumTrackSchema, type SiprecEnumTrack } from "../models/siprec-enum-track.js";
import {
  siprecEnumUpdateStatusSchema,
  type SiprecEnumUpdateStatus,
} from "../models/siprec-enum-update-status.js";
import {
  statusCallbackMethod17Schema,
  type StatusCallbackMethod17,
} from "../models/status-callback-method17.js";
import type { Servers } from "../servers.js";

export class Api20100401Siprec {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Siprec
   *
   * @remarks
   * Create a Siprec
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSiprec(
    request: Api20100401Siprec.CreateSiprecRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallSiprec, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Name", value: request.name, schema: s.optional(s.string()) },
            { name: "ConnectorName", value: request.connectorName, schema: s.optional(s.string()) },
            { name: "Track", value: request.track, schema: s.optional(s.lazy(() => siprecEnumTrackSchema)) },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            {
              name: "StatusCallbackMethod",
              value: request.statusCallbackMethod,
              schema: s.optional(s.lazy(() => statusCallbackMethod17Schema)),
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
        success: { kind: "json", schema: apiV2010AccountCallSiprecSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the
   * resource
   *
   * @remarks
   * Stop a Siprec using either the SID of the Siprec resource or the `name` used when creating the
   * resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSiprec(
    request: Api20100401Siprec.UpdateSiprecRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountCallSiprec, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Calls/{CallSid}/Siprec/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CallSid", value: request.callSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Status", value: request.status, schema: siprecEnumUpdateStatusSchema }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountCallSiprecSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401Siprec {
  export type CreateSiprecRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
     * Siprec resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec
     * resource is associated with.
     */
    callSid: string;
    /**
     * The user-specified name of this Siprec, if one was given when the Siprec was created. This
     * may be used to stop the Siprec.
     */
    name?: string;
    /** Unique name used when configuring the connector via Marketplace Add-on. */
    connectorName?: string;
    /** One of `inbound_track`, `outbound_track`, `both_tracks`. */
    track?: SiprecEnumTrack;
    /** Absolute URL of the status callback. */
    statusCallback?: string;
    /** The http method for the status_callback (one of GET, POST). */
    statusCallbackMethod?: StatusCallbackMethod17;
    /** Parameter name */
    parameter1Name?: string;
    /** Parameter value */
    parameter1Value?: string;
    /** Parameter name */
    parameter2Name?: string;
    /** Parameter value */
    parameter2Value?: string;
    /** Parameter name */
    parameter3Name?: string;
    /** Parameter value */
    parameter3Value?: string;
    /** Parameter name */
    parameter4Name?: string;
    /** Parameter value */
    parameter4Value?: string;
    /** Parameter name */
    parameter5Name?: string;
    /** Parameter value */
    parameter5Value?: string;
    /** Parameter name */
    parameter6Name?: string;
    /** Parameter value */
    parameter6Value?: string;
    /** Parameter name */
    parameter7Name?: string;
    /** Parameter value */
    parameter7Value?: string;
    /** Parameter name */
    parameter8Name?: string;
    /** Parameter value */
    parameter8Value?: string;
    /** Parameter name */
    parameter9Name?: string;
    /** Parameter value */
    parameter9Value?: string;
    /** Parameter name */
    parameter10Name?: string;
    /** Parameter value */
    parameter10Value?: string;
    /** Parameter name */
    parameter11Name?: string;
    /** Parameter value */
    parameter11Value?: string;
    /** Parameter name */
    parameter12Name?: string;
    /** Parameter value */
    parameter12Value?: string;
    /** Parameter name */
    parameter13Name?: string;
    /** Parameter value */
    parameter13Value?: string;
    /** Parameter name */
    parameter14Name?: string;
    /** Parameter value */
    parameter14Value?: string;
    /** Parameter name */
    parameter15Name?: string;
    /** Parameter value */
    parameter15Value?: string;
    /** Parameter name */
    parameter16Name?: string;
    /** Parameter value */
    parameter16Value?: string;
    /** Parameter name */
    parameter17Name?: string;
    /** Parameter value */
    parameter17Value?: string;
    /** Parameter name */
    parameter18Name?: string;
    /** Parameter value */
    parameter18Value?: string;
    /** Parameter name */
    parameter19Name?: string;
    /** Parameter value */
    parameter19Value?: string;
    /** Parameter name */
    parameter20Name?: string;
    /** Parameter value */
    parameter20Value?: string;
    /** Parameter name */
    parameter21Name?: string;
    /** Parameter value */
    parameter21Value?: string;
    /** Parameter name */
    parameter22Name?: string;
    /** Parameter value */
    parameter22Value?: string;
    /** Parameter name */
    parameter23Name?: string;
    /** Parameter value */
    parameter23Value?: string;
    /** Parameter name */
    parameter24Name?: string;
    /** Parameter value */
    parameter24Value?: string;
    /** Parameter name */
    parameter25Name?: string;
    /** Parameter value */
    parameter25Value?: string;
    /** Parameter name */
    parameter26Name?: string;
    /** Parameter value */
    parameter26Value?: string;
    /** Parameter name */
    parameter27Name?: string;
    /** Parameter value */
    parameter27Value?: string;
    /** Parameter name */
    parameter28Name?: string;
    /** Parameter value */
    parameter28Value?: string;
    /** Parameter name */
    parameter29Name?: string;
    /** Parameter value */
    parameter29Value?: string;
    /** Parameter name */
    parameter30Name?: string;
    /** Parameter value */
    parameter30Value?: string;
    /** Parameter name */
    parameter31Name?: string;
    /** Parameter value */
    parameter31Value?: string;
    /** Parameter name */
    parameter32Name?: string;
    /** Parameter value */
    parameter32Value?: string;
    /** Parameter name */
    parameter33Name?: string;
    /** Parameter value */
    parameter33Value?: string;
    /** Parameter name */
    parameter34Name?: string;
    /** Parameter value */
    parameter34Value?: string;
    /** Parameter name */
    parameter35Name?: string;
    /** Parameter value */
    parameter35Value?: string;
    /** Parameter name */
    parameter36Name?: string;
    /** Parameter value */
    parameter36Value?: string;
    /** Parameter name */
    parameter37Name?: string;
    /** Parameter value */
    parameter37Value?: string;
    /** Parameter name */
    parameter38Name?: string;
    /** Parameter value */
    parameter38Value?: string;
    /** Parameter name */
    parameter39Name?: string;
    /** Parameter value */
    parameter39Value?: string;
    /** Parameter name */
    parameter40Name?: string;
    /** Parameter value */
    parameter40Value?: string;
    /** Parameter name */
    parameter41Name?: string;
    /** Parameter value */
    parameter41Value?: string;
    /** Parameter name */
    parameter42Name?: string;
    /** Parameter value */
    parameter42Value?: string;
    /** Parameter name */
    parameter43Name?: string;
    /** Parameter value */
    parameter43Value?: string;
    /** Parameter name */
    parameter44Name?: string;
    /** Parameter value */
    parameter44Value?: string;
    /** Parameter name */
    parameter45Name?: string;
    /** Parameter value */
    parameter45Value?: string;
    /** Parameter name */
    parameter46Name?: string;
    /** Parameter value */
    parameter46Value?: string;
    /** Parameter name */
    parameter47Name?: string;
    /** Parameter value */
    parameter47Value?: string;
    /** Parameter name */
    parameter48Name?: string;
    /** Parameter value */
    parameter48Value?: string;
    /** Parameter name */
    parameter49Name?: string;
    /** Parameter value */
    parameter49Value?: string;
    /** Parameter name */
    parameter50Name?: string;
    /** Parameter value */
    parameter50Value?: string;
    /** Parameter name */
    parameter51Name?: string;
    /** Parameter value */
    parameter51Value?: string;
    /** Parameter name */
    parameter52Name?: string;
    /** Parameter value */
    parameter52Value?: string;
    /** Parameter name */
    parameter53Name?: string;
    /** Parameter value */
    parameter53Value?: string;
    /** Parameter name */
    parameter54Name?: string;
    /** Parameter value */
    parameter54Value?: string;
    /** Parameter name */
    parameter55Name?: string;
    /** Parameter value */
    parameter55Value?: string;
    /** Parameter name */
    parameter56Name?: string;
    /** Parameter value */
    parameter56Value?: string;
    /** Parameter name */
    parameter57Name?: string;
    /** Parameter value */
    parameter57Value?: string;
    /** Parameter name */
    parameter58Name?: string;
    /** Parameter value */
    parameter58Value?: string;
    /** Parameter name */
    parameter59Name?: string;
    /** Parameter value */
    parameter59Value?: string;
    /** Parameter name */
    parameter60Name?: string;
    /** Parameter value */
    parameter60Value?: string;
    /** Parameter name */
    parameter61Name?: string;
    /** Parameter value */
    parameter61Value?: string;
    /** Parameter name */
    parameter62Name?: string;
    /** Parameter value */
    parameter62Value?: string;
    /** Parameter name */
    parameter63Name?: string;
    /** Parameter value */
    parameter63Value?: string;
    /** Parameter name */
    parameter64Name?: string;
    /** Parameter value */
    parameter64Value?: string;
    /** Parameter name */
    parameter65Name?: string;
    /** Parameter value */
    parameter65Value?: string;
    /** Parameter name */
    parameter66Name?: string;
    /** Parameter value */
    parameter66Value?: string;
    /** Parameter name */
    parameter67Name?: string;
    /** Parameter value */
    parameter67Value?: string;
    /** Parameter name */
    parameter68Name?: string;
    /** Parameter value */
    parameter68Value?: string;
    /** Parameter name */
    parameter69Name?: string;
    /** Parameter value */
    parameter69Value?: string;
    /** Parameter name */
    parameter70Name?: string;
    /** Parameter value */
    parameter70Value?: string;
    /** Parameter name */
    parameter71Name?: string;
    /** Parameter value */
    parameter71Value?: string;
    /** Parameter name */
    parameter72Name?: string;
    /** Parameter value */
    parameter72Value?: string;
    /** Parameter name */
    parameter73Name?: string;
    /** Parameter value */
    parameter73Value?: string;
    /** Parameter name */
    parameter74Name?: string;
    /** Parameter value */
    parameter74Value?: string;
    /** Parameter name */
    parameter75Name?: string;
    /** Parameter value */
    parameter75Value?: string;
    /** Parameter name */
    parameter76Name?: string;
    /** Parameter value */
    parameter76Value?: string;
    /** Parameter name */
    parameter77Name?: string;
    /** Parameter value */
    parameter77Value?: string;
    /** Parameter name */
    parameter78Name?: string;
    /** Parameter value */
    parameter78Value?: string;
    /** Parameter name */
    parameter79Name?: string;
    /** Parameter value */
    parameter79Value?: string;
    /** Parameter name */
    parameter80Name?: string;
    /** Parameter value */
    parameter80Value?: string;
    /** Parameter name */
    parameter81Name?: string;
    /** Parameter value */
    parameter81Value?: string;
    /** Parameter name */
    parameter82Name?: string;
    /** Parameter value */
    parameter82Value?: string;
    /** Parameter name */
    parameter83Name?: string;
    /** Parameter value */
    parameter83Value?: string;
    /** Parameter name */
    parameter84Name?: string;
    /** Parameter value */
    parameter84Value?: string;
    /** Parameter name */
    parameter85Name?: string;
    /** Parameter value */
    parameter85Value?: string;
    /** Parameter name */
    parameter86Name?: string;
    /** Parameter value */
    parameter86Value?: string;
    /** Parameter name */
    parameter87Name?: string;
    /** Parameter value */
    parameter87Value?: string;
    /** Parameter name */
    parameter88Name?: string;
    /** Parameter value */
    parameter88Value?: string;
    /** Parameter name */
    parameter89Name?: string;
    /** Parameter value */
    parameter89Value?: string;
    /** Parameter name */
    parameter90Name?: string;
    /** Parameter value */
    parameter90Value?: string;
    /** Parameter name */
    parameter91Name?: string;
    /** Parameter value */
    parameter91Value?: string;
    /** Parameter name */
    parameter92Name?: string;
    /** Parameter value */
    parameter92Value?: string;
    /** Parameter name */
    parameter93Name?: string;
    /** Parameter value */
    parameter93Value?: string;
    /** Parameter name */
    parameter94Name?: string;
    /** Parameter value */
    parameter94Value?: string;
    /** Parameter name */
    parameter95Name?: string;
    /** Parameter value */
    parameter95Value?: string;
    /** Parameter name */
    parameter96Name?: string;
    /** Parameter value */
    parameter96Value?: string;
    /** Parameter name */
    parameter97Name?: string;
    /** Parameter value */
    parameter97Value?: string;
    /** Parameter name */
    parameter98Name?: string;
    /** Parameter value */
    parameter98Value?: string;
    /** Parameter name */
    parameter99Name?: string;
    /** Parameter value */
    parameter99Value?: string;
  };

  export type UpdateSiprecRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this
     * Siprec resource.
     */
    accountSid: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Siprec
     * resource is associated with.
     */
    callSid: string;
    /** The SID of the Siprec resource, or the `name` used when creating the resource */
    sid: string;
    status: SiprecEnumUpdateStatus;
  };
}
