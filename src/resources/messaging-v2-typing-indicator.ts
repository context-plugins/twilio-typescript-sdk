import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Send a typing indicator
   *
   * @remarks
   * Send a typing indicator to notify the recipient that you are composing a message. Currently
   * supported for whatsapp channel only. For WhatsApp, `messageId` is required.
   *
   * @returns Typing indicator was successfully sent to the recipient.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTypingIndicator(
    request: MessagingV2TypingIndicator.CreateTypingIndicatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V2IndicatorsTypingJsonResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default1("/v2/Indicators/Typing.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace MessagingV2TypingIndicator {
  export type CreateTypingIndicatorRequest = {
    /** Shared channel identifier */
    channel: Channel;
    /**
     * Message SID that identifies the conversation thread for the typing indicator. Must be a valid
     * Twilio Message SID (SM*) or Media SID (MM*) from an existing WhatsApp conversation.
     */
    messageId: string;
  };
}
