import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  recordingAddOnResultPayloadDataSchema,
  type RecordingAddOnResultPayloadData,
} from "../models/recording-add-on-result-payload-data.js";
import type { Servers } from "../servers.js";

export class Api20100401Data {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch an instance of a result payload
   *
   * @remarks
   * Fetch an instance of a result payload
   *
   * @throws {@link Api20100401Data.FetchRecordingAddOnResultPayloadDataError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRecordingAddOnResultPayloadData(
    request: Api20100401Data.FetchRecordingAddOnResultPayloadDataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Api20100401Data.FetchRecordingAddOnResultPayloadDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{PayloadSid}/Data.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
          { name: "PayloadSid", value: request.payloadSid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Api20100401Data.FetchRecordingAddOnResultPayloadDataError,
      },
      options,
    );
  }
}

export namespace Api20100401Data {
  export type FetchRecordingAddOnResultPayloadDataRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * Recording AddOnResult Payload resource to fetch.
     */
    accountSid: string;
    /**
     * The SID of the recording to which the AddOnResult resource that contains the payload to fetch
     * belongs.
     */
    referenceSid: string;
    /** The SID of the AddOnResult to which the payload to fetch belongs. */
    addOnResultSid: string;
    /**
     * The Twilio-provided string that uniquely identifies the Recording AddOnResult Payload
     * resource to fetch.
     */
    payloadSid: string;
  };

  export class FetchRecordingAddOnResultPayloadDataError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"recordingAddOnResultPayloadData", RecordingAddOnResultPayloadData>
    >;

    static readonly errors: ErrorDecoders<FetchRecordingAddOnResultPayloadDataError> = [
      {
        on: 307,
        kind: "recordingAddOnResultPayloadData",
        decode: { kind: "json", schema: recordingAddOnResultPayloadDataSchema },
      },
    ];
  }
}
