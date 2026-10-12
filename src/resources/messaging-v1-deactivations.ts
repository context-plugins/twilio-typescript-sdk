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

export class MessagingV1Deactivations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch a list of all United States numbers that have been deactivated on a specific date.
   *
   * @remarks
   * Fetch a list of all United States numbers that have been deactivated on a specific date.
   *
   * @throws {@link MessagingV1Deactivations.FetchDeactivationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchDeactivation(
    request: MessagingV1Deactivations.FetchDeactivationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MessagingV1Deactivations.FetchDeactivationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default1("/v1/Deactivations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [{ name: "Date", value: request.date, schema: s.optional(s.dateOnly()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: MessagingV1Deactivations.FetchDeactivationError,
      },
      options,
    );
  }
}

export namespace MessagingV1Deactivations {
  export type FetchDeactivationRequest = {
    /**
     * The request will return a list of all United States Phone Numbers that were deactivated on
     * the day specified by this parameter. This date should be specified in YYYY-MM-DD format.
     */
    date?: string;
  };

  export class FetchDeactivationError extends ApiError {
    declare readonly payload: ErrorPayload<
      Declared<"recordingAddOnResultPayloadData", RecordingAddOnResultPayloadData>
    >;

    static readonly errors: ErrorDecoders<FetchDeactivationError> = [
      {
        on: 307,
        kind: "recordingAddOnResultPayloadData",
        decode: { kind: "json", schema: recordingAddOnResultPayloadDataSchema },
      },
    ];
  }
}
