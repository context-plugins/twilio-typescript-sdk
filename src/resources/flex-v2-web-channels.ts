import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flexV2WebChannelSchema, type FlexV2WebChannel } from "../models/flex-v2-web-channel.js";
import type { Servers } from "../servers.js";

export class FlexV2WebChannels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createWebChannel2(
    request: FlexV2WebChannels.CreateWebChannel2Request,
    options?: RequestOptions,
  ): ApiPromise<FlexV2WebChannel, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v2/WebChats"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Ui-Version", value: request.uiVersion, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AddressSid", value: request.addressSid, schema: s.string() },
            { name: "ChatFriendlyName", value: request.chatFriendlyName, schema: s.optional(s.string()) },
            {
              name: "CustomerFriendlyName",
              value: request.customerFriendlyName,
              schema: s.optional(s.string()),
            },
            { name: "PreEngagementData", value: request.preEngagementData, schema: s.optional(s.string()) },
            { name: "Identity", value: request.identity, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV2WebChannelSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV2WebChannels {
  export type CreateWebChannel2Request = {
    /** The Ui-Version HTTP request header */
    uiVersion?: string;
    /**
     * The SID of the Conversations Address. See [Address Configuration
     * Resource](https://www.twilio.com/docs/conversations/api/address-configuration-resource) for
     * configuration details. When a conversation is created on the Flex backend, the callback URL
     * will be set to the corresponding Studio Flow SID or webhook URL in your address
     * configuration.
     */
    addressSid: string;
    /**
     * The Conversation's friendly name. See the [Conversation
     * resource](https://www.twilio.com/docs/conversations/api/conversation-resource) for an
     * example.
     */
    chatFriendlyName?: string;
    /**
     * The Conversation participant's friendly name. See the [Conversation Participant
     * Resource](https://www.twilio.com/docs/conversations/api/conversation-participant-resource)
     * for an example.
     */
    customerFriendlyName?: string;
    /** The pre-engagement data. */
    preEngagementData?: string;
    /**
     * The Identity of the guest user. See the [Conversation User
     * Resource](https://www.twilio.com/docs/conversations/api/user-resource) for an example.
     */
    identity?: string;
  };
}
