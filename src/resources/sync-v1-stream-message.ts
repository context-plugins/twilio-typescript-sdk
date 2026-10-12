import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  syncV1ServiceSyncStreamStreamMessageSchema,
  type SyncV1ServiceSyncStreamStreamMessage,
} from "../models/sync-v1-service-sync-stream-stream-message.js";
import type { Servers } from "../servers.js";

export class SyncV1StreamMessage {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Stream Message.
   *
   * @remarks
   * Create a new Stream Message.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStreamMessage(
    request: SyncV1StreamMessage.CreateStreamMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStreamStreamMessage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "StreamSid", value: request.streamSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) }],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamStreamMessageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace SyncV1StreamMessage {
  export type CreateStreamMessageRequest = {
    /**
     * The SID of the [Sync Service](https://www.twilio.com/docs/sync/api/service) to create the new
     * Stream Message in.
     */
    serviceSid: string;
    /** The SID of the Sync Stream to create the new Stream Message resource for. */
    streamSid: string;
    /**
     * A JSON string that represents an arbitrary, schema-less object that makes up the Stream
     * Message body. Can be up to 4 KiB in length.
     */
    data: Record<string, unknown>;
  };
}
