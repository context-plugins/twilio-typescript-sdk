import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createStreamMessage(
    request: SyncV1StreamMessage.CreateStreamMessageRequest,
    options?: RequestOptions,
  ): ApiPromise<SyncV1ServiceSyncStreamStreamMessage, ResponseError> {
    return this.#rawClient.execute<SyncV1ServiceSyncStreamStreamMessage, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default12("/v1/Services/{ServiceSid}/Streams/{StreamSid}/Messages"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "StreamSid", value: request.streamSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Data", value: request.data, schema: s.record(s.string(), s.unknown()) }],
        },
      },
      {
        success: { kind: "json", schema: syncV1ServiceSyncStreamStreamMessageSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace SyncV1StreamMessage {
  export type CreateStreamMessageRequest = {
    serviceSid: string;
    streamSid: string;
    data: Record<string, unknown>;
  };
}
