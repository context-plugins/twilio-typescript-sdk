import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError, type Declared, type ErrorDecoders } from "../core/response-error.js";
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

  fetchRecordingAddOnResultPayloadData(
    request: Api20100401Data.FetchRecordingAddOnResultPayloadDataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Api20100401Data.FetchRecordingAddOnResultPayloadDataError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/Recordings/{ReferenceSid}/AddOnResults/{AddOnResultSid}/Payloads/{PayloadSid}/Data.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ReferenceSid", value: request.referenceSid, schema: s.string() },
          { name: "AddOnResultSid", value: request.addOnResultSid, schema: s.string() },
          { name: "PayloadSid", value: request.payloadSid, schema: s.string() },
        ],
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
    accountSid: string;
    referenceSid: string;
    addOnResultSid: string;
    payloadSid: string;
  };

  export class FetchRecordingAddOnResultPayloadDataError extends ResponseError<
    Declared<"recordingAddOnResultPayloadData", RecordingAddOnResultPayloadData>
  > {
    static readonly errors: ErrorDecoders<FetchRecordingAddOnResultPayloadDataError> = [
      {
        on: 307,
        kind: "recordingAddOnResultPayloadData",
        decode: { kind: "json", schema: recordingAddOnResultPayloadDataSchema },
      },
    ];
  }
}
