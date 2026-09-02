import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  conversationsV1ConfigurationSchema,
  type ConversationsV1Configuration,
} from "../models/conversations-v1-configuration.js";
import {
  conversationsV1ServiceServiceConfigurationSchema,
  type ConversationsV1ServiceServiceConfiguration,
} from "../models/conversations-v1-service-service-configuration.js";
import type { Servers } from "../servers.js";

export class ConversationsV1ConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchConfiguration(options?: RequestOptions): ApiPromise<ConversationsV1Configuration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Configuration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConfiguration(
    request: ConversationsV1ConfigurationApi.FetchServiceConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfiguration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfiguration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConfiguration(
    request: ConversationsV1ConfigurationApi.UpdateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Configuration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Configuration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "DefaultChatServiceSid",
              value: request.defaultChatServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "DefaultMessagingServiceSid",
              value: request.defaultMessagingServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "DefaultInactiveTimer",
              value: request.defaultInactiveTimer,
              schema: s.optional(s.string()),
            },
            { name: "DefaultClosedTimer", value: request.defaultClosedTimer, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceConfiguration(
    request: ConversationsV1ConfigurationApi.UpdateServiceConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfiguration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "DefaultConversationCreatorRoleSid",
              value: request.defaultConversationCreatorRoleSid,
              schema: s.optional(s.string()),
            },
            {
              name: "DefaultConversationRoleSid",
              value: request.defaultConversationRoleSid,
              schema: s.optional(s.string()),
            },
            {
              name: "DefaultChatServiceRoleSid",
              value: request.defaultChatServiceRoleSid,
              schema: s.optional(s.string()),
            },
            {
              name: "ReachabilityEnabled",
              value: request.reachabilityEnabled,
              schema: s.optional(s.boolean()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConfigurationApi {
  export type FetchServiceConfigurationRequest = {
    chatServiceSid: string;
  };

  export type UpdateConfigurationRequest = {
    defaultChatServiceSid?: string;
    defaultMessagingServiceSid?: string;
    defaultInactiveTimer?: string;
    defaultClosedTimer?: string;
  };

  export type UpdateServiceConfigurationRequest = {
    chatServiceSid: string;
    defaultConversationCreatorRoleSid?: string;
    defaultConversationRoleSid?: string;
    defaultChatServiceRoleSid?: string;
    reachabilityEnabled?: boolean;
  };
}
