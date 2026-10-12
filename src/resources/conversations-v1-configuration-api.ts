import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Fetch the global configuration of conversations on your account
   *
   * @remarks
   * Fetch the global configuration of conversations on your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConfiguration(options?: RequestOptions): ApiPromise<ConversationsV1Configuration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the configuration of a conversation service
   *
   * @remarks
   * Fetch the configuration of a conversation service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConfiguration(
    request: ConversationsV1ConfigurationApi.FetchServiceConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update the global configuration of conversations on your account
   *
   * @remarks
   * Update the global configuration of conversations on your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConfiguration(
    request: ConversationsV1ConfigurationApi.UpdateConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Configuration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update configuration settings of a conversation service
   *
   * @remarks
   * Update configuration settings of a conversation service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceConfiguration(
    request: ConversationsV1ConfigurationApi.UpdateServiceConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1ConfigurationApi {
  export type FetchServiceConfigurationRequest = {
    /** The SID of the Service configuration resource to fetch. */
    chatServiceSid: string;
  };

  export type UpdateConfigurationRequest = {
    /**
     * The SID of the default [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to use when creating
     * a conversation.
     */
    defaultChatServiceSid?: string;
    /**
     * The SID of the default [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to use when creating a
     * conversation.
     */
    defaultMessagingServiceSid?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `inactive` state. Minimum
     * value for this timer is 1 minute.
     */
    defaultInactiveTimer?: string;
    /**
     * Default ISO8601 duration when conversation will be switched to `closed` state. Minimum value
     * for this timer is 10 minutes.
     */
    defaultClosedTimer?: string;
  };

  export type UpdateServiceConfigurationRequest = {
    /** The SID of the Service configuration resource to update. */
    chatServiceSid: string;
    /**
     * The conversation-level role assigned to a conversation creator when they join a new
     * conversation. See [Conversation
     * Role](https://www.twilio.com/docs/conversations/api/role-resource) for more info about roles.
     */
    defaultConversationCreatorRoleSid?: string;
    /**
     * The conversation-level role assigned to users when they are added to a conversation. See
     * [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more
     * info about roles.
     */
    defaultConversationRoleSid?: string;
    /**
     * The service-level role assigned to users when they are added to the service. See
     * [Conversation Role](https://www.twilio.com/docs/conversations/api/role-resource) for more
     * info about roles.
     */
    defaultChatServiceRoleSid?: string;
    /**
     * Whether the [Reachability Indicator](https://www.twilio.com/docs/conversations/reachability)
     * is enabled for this Conversations Service. The default is `false`.
     */
    reachabilityEnabled?: boolean;
  };
}
