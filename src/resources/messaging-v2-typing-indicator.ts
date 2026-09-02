import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { channelSchema, type Channel } from "../models/channel.js";
import {
  v2IndicatorsTypingJsonResponseSchema,
  type V2IndicatorsTypingJsonResponse,
} from "../models/v2-indicators-typing-json-response.js";
import type { Servers } from "../servers.js";

export class MessagingV2TypingIndicator {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTypingIndicator(
    request: MessagingV2TypingIndicator.CreateTypingIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V2IndicatorsTypingJsonResponse, ResponseError> {
    return this.#rawClient.execute<V2IndicatorsTypingJsonResponse, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default1("/v2/Indicators/Typing.json"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "channel", value: request.channel, schema: channelSchema },
            { name: "messageId", value: request.messageId, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: v2IndicatorsTypingJsonResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace MessagingV2TypingIndicator {
  export type CreateTypingIndicatorRequest = {
    channel: Channel;
    messageId: string;
  };
}
