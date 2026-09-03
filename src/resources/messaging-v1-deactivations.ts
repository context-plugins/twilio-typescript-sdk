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

export class MessagingV1Deactivations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchDeactivation(
    request: MessagingV1Deactivations.FetchDeactivationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, MessagingV1Deactivations.FetchDeactivationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default1("/v1/Deactivations"),
        auth: this.#auth.accountSidAuthToken,
        query: [{ name: "Date", value: request.date, schema: s.optional(s.dateOnly()) }],
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
    date?: string;
  };

  export class FetchDeactivationError extends ResponseError<
    Declared<"recordingAddOnResultPayloadData", RecordingAddOnResultPayloadData>
  > {
    static readonly errors: ErrorDecoders<FetchDeactivationError> = [
      {
        on: 307,
        kind: "recordingAddOnResultPayloadData",
        decode: { kind: "json", schema: recordingAddOnResultPayloadDataSchema },
      },
    ];
  }
}
