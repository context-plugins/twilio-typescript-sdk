import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<FlexV2WebChannel, ResponseError> {
    return this.#rawClient.execute<FlexV2WebChannel, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v2/WebChats"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Ui-Version", value: request.uiVersion, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV2WebChannels {
  export type CreateWebChannel2Request = {
    uiVersion?: string;
    addressSid: string;
    chatFriendlyName?: string;
    customerFriendlyName?: string;
    preEngagementData?: string;
    identity?: string;
  };
}
