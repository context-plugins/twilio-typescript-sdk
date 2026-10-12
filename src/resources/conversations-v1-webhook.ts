import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  configurationWebhookEnumTargetSchema,
  type ConfigurationWebhookEnumTarget,
} from "../models/configuration-webhook-enum-target.js";
import {
  conversationScopedWebhookEnumMethodSchema,
  type ConversationScopedWebhookEnumMethod,
} from "../models/conversation-scoped-webhook-enum-method.js";
import {
  conversationScopedWebhookEnumTargetSchema,
  type ConversationScopedWebhookEnumTarget,
} from "../models/conversation-scoped-webhook-enum-target.js";
import {
  conversationsV1ConfigurationConfigurationWebhookSchema,
  type ConversationsV1ConfigurationConfigurationWebhook,
} from "../models/conversations-v1-configuration-configuration-webhook.js";
import {
  conversationsV1ConversationConversationScopedWebhookSchema,
  type ConversationsV1ConversationConversationScopedWebhook,
} from "../models/conversations-v1-conversation-conversation-scoped-webhook.js";
import {
  conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema,
  type ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration,
} from "../models/conversations-v1-service-service-configuration-service-webhook-configuration.js";
import {
  conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
  type ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook,
} from "../models/conversations-v1-service-service-conversation-service-conversation-scoped-webhook.js";
import {
  listConversationScopedWebhookResponseSchema,
  type ListConversationScopedWebhookResponse,
} from "../models/list-conversation-scoped-webhook-response.js";
import {
  listServiceConversationScopedWebhookResponseSchema,
  type ListServiceConversationScopedWebhookResponse,
} from "../models/list-service-conversation-scoped-webhook-response.js";
import {
  serviceConversationScopedWebhookEnumMethodSchema,
  type ServiceConversationScopedWebhookEnumMethod,
} from "../models/service-conversation-scoped-webhook-enum-method.js";
import {
  serviceConversationScopedWebhookEnumTargetSchema,
  type ServiceConversationScopedWebhookEnumTarget,
} from "../models/service-conversation-scoped-webhook-enum-target.js";
import type { Servers } from "../servers.js";

export class ConversationsV1Webhook {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new webhook scoped to the conversation
   *
   * @remarks
   * Create a new webhook scoped to the conversation
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConversationScopedWebhook(
    request: ConversationsV1Webhook.CreateConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Target", value: request.target, schema: conversationScopedWebhookEnumTargetSchema },
            { name: "Configuration.Url", value: request.configurationUrl, schema: s.optional(s.string()) },
            {
              name: "Configuration.Method",
              value: request.configurationMethod,
              schema: s.optional(s.lazy(() => conversationScopedWebhookEnumMethodSchema)),
            },
            {
              name: "Configuration.Filters",
              value: request.configurationFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.Triggers",
              value: request.configurationTriggers,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.FlowSid",
              value: request.configurationFlowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Configuration.ReplayAfter",
              value: request.configurationReplayAfter,
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationScopedWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new webhook scoped to the conversation in a specific service
   *
   * @remarks
   * Create a new webhook scoped to the conversation in a specific service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.CreateServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Target",
              value: request.target,
              schema: serviceConversationScopedWebhookEnumTargetSchema,
            },
            { name: "Configuration.Url", value: request.configurationUrl, schema: s.optional(s.string()) },
            {
              name: "Configuration.Method",
              value: request.configurationMethod,
              schema: s.optional(s.lazy(() => serviceConversationScopedWebhookEnumMethodSchema)),
            },
            {
              name: "Configuration.Filters",
              value: request.configurationFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.Triggers",
              value: request.configurationTriggers,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.FlowSid",
              value: request.configurationFlowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "Configuration.ReplayAfter",
              value: request.configurationReplayAfter,
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an existing webhook scoped to the conversation
   *
   * @remarks
   * Remove an existing webhook scoped to the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConversationScopedWebhook(
    request: ConversationsV1Webhook.DeleteConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an existing webhook scoped to the conversation
   *
   * @remarks
   * Remove an existing webhook scoped to the conversation
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.DeleteServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Webhook resource manages a service-level set of callback URLs and their configuration for
   * receiving all conversation events.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConfigurationWebhook(
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationConfigurationWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the configuration of a conversation-scoped webhook
   *
   * @remarks
   * Fetch the configuration of a conversation-scoped webhook
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConversationScopedWebhook(
    request: ConversationsV1Webhook.FetchConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationScopedWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch the configuration of a conversation-scoped webhook
   *
   * @remarks
   * Fetch the configuration of a conversation-scoped webhook
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.FetchServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific service webhook configuration.
   *
   * @remarks
   * Fetch a specific service webhook configuration.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceWebhookConfiguration(
    request: ConversationsV1Webhook.FetchServiceWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all webhooks scoped to the conversation
   *
   * @remarks
   * Retrieve a list of all webhooks scoped to the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConversationScopedWebhook(
    request: ConversationsV1Webhook.ListConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationScopedWebhookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationScopedWebhookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all webhooks scoped to the conversation
   *
   * @remarks
   * Retrieve a list of all webhooks scoped to the conversation
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.ListServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationScopedWebhookResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationScopedWebhookResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A Webhook resource manages a service-level set of callback URLs and their configuration for
   * receiving all conversation events.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConfigurationWebhook(
    request: ConversationsV1Webhook.UpdateConfigurationWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Method", value: request.method, schema: s.optional(s.string()) },
            { name: "Filters", value: request.filters, schema: s.optional(s.array(s.string())) },
            { name: "PreWebhookUrl", value: request.preWebhookUrl, schema: s.optional(s.string()) },
            { name: "PostWebhookUrl", value: request.postWebhookUrl, schema: s.optional(s.string()) },
            {
              name: "Target",
              value: request.target,
              schema: s.optional(s.lazy(() => configurationWebhookEnumTargetSchema)),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationConfigurationWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation-scoped webhook
   *
   * @remarks
   * Update an existing conversation-scoped webhook
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConversationScopedWebhook(
    request: ConversationsV1Webhook.UpdateConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Configuration.Url", value: request.configurationUrl, schema: s.optional(s.string()) },
            {
              name: "Configuration.Method",
              value: request.configurationMethod,
              schema: s.optional(s.lazy(() => conversationScopedWebhookEnumMethodSchema)),
            },
            {
              name: "Configuration.Filters",
              value: request.configurationFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.Triggers",
              value: request.configurationTriggers,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.FlowSid",
              value: request.configurationFlowSid,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationScopedWebhookSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation-scoped webhook
   *
   * @remarks
   * Update an existing conversation-scoped webhook
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.UpdateServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Configuration.Url", value: request.configurationUrl, schema: s.optional(s.string()) },
            {
              name: "Configuration.Method",
              value: request.configurationMethod,
              schema: s.optional(s.lazy(() => serviceConversationScopedWebhookEnumMethodSchema)),
            },
            {
              name: "Configuration.Filters",
              value: request.configurationFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.Triggers",
              value: request.configurationTriggers,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "Configuration.FlowSid",
              value: request.configurationFlowSid,
              schema: s.optional(s.string()),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific Webhook.
   *
   * @remarks
   * Update a specific Webhook.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceWebhookConfiguration(
    request: ConversationsV1Webhook.UpdateServiceWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "PreWebhookUrl", value: request.preWebhookUrl, schema: s.optional(s.string()) },
            { name: "PostWebhookUrl", value: request.postWebhookUrl, schema: s.optional(s.string()) },
            { name: "Filters", value: request.filters, schema: s.optional(s.array(s.string())) },
            { name: "Method", value: request.method, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Webhook {
  export type CreateConversationScopedWebhookRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** The target of this webhook: `webhook`, `studio`, `trigger` */
    target: ConversationScopedWebhookEnumTarget;
    /** The absolute url the webhook request should be sent to. */
    configurationUrl?: string;
    configurationMethod?: ConversationScopedWebhookEnumMethod;
    /** The list of events, firing webhook event for this Conversation. */
    configurationFilters?: string[];
    /** The list of keywords, firing webhook event for this Conversation. */
    configurationTriggers?: string[];
    /** The studio flow SID, where the webhook should be sent to. */
    configurationFlowSid?: string;
    /**
     * The message index for which and it's successors the webhook will be replayed. Not set by
     * default
     */
    configurationReplayAfter?: number;
  };

  export type CreateServiceConversationScopedWebhookRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** The target of this webhook: `webhook`, `studio`, `trigger` */
    target: ServiceConversationScopedWebhookEnumTarget;
    /** The absolute url the webhook request should be sent to. */
    configurationUrl?: string;
    configurationMethod?: ServiceConversationScopedWebhookEnumMethod;
    /** The list of events, firing webhook event for this Conversation. */
    configurationFilters?: string[];
    /** The list of keywords, firing webhook event for this Conversation. */
    configurationTriggers?: string[];
    /** The studio flow SID, where the webhook should be sent to. */
    configurationFlowSid?: string;
    /**
     * The message index for which and it's successors the webhook will be replayed. Not set by
     * default
     */
    configurationReplayAfter?: number;
  };

  export type DeleteConversationScopedWebhookRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type DeleteServiceConversationScopedWebhookRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchConversationScopedWebhookRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchServiceConversationScopedWebhookRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchServiceWebhookConfigurationRequest = {
    /**
     * The unique ID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation
     * belongs to.
     */
    chatServiceSid: string;
  };

  export type ListConversationScopedWebhookRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** How many resources to return in each list page. The default is 5, and the maximum is 5. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceConversationScopedWebhookRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** How many resources to return in each list page. The default is 5, and the maximum is 5. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConfigurationWebhookRequest = {
    /** The HTTP method to be used when sending a webhook request. */
    method?: string;
    /**
     * The list of webhook event triggers that are enabled for this Service: `onMessageAdded`,
     * `onMessageUpdated`, `onMessageRemoved`, `onMessageAdd`, `onMessageUpdate`, `onMessageRemove`,
     * `onConversationUpdated`, `onConversationRemoved`, `onConversationAdd`, `onConversationAdded`,
     * `onConversationRemove`, `onConversationUpdate`, `onConversationStateUpdated`,
     * `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onParticipantAdd`,
     * `onParticipantRemove`, `onParticipantUpdate`, `onDeliveryUpdated`, `onUserAdded`,
     * `onUserUpdate`, `onUserUpdated`
     */
    filters?: string[];
    /** The absolute url the pre-event webhook request should be sent to. */
    preWebhookUrl?: string;
    /** The absolute url the post-event webhook request should be sent to. */
    postWebhookUrl?: string;
    /** The routing target of the webhook. Can be ordinary or route internally to Flex */
    target?: ConfigurationWebhookEnumTarget;
  };

  export type UpdateConversationScopedWebhookRequest = {
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The absolute url the webhook request should be sent to. */
    configurationUrl?: string;
    configurationMethod?: ConversationScopedWebhookEnumMethod;
    /** The list of events, firing webhook event for this Conversation. */
    configurationFilters?: string[];
    /** The list of keywords, firing webhook event for this Conversation. */
    configurationTriggers?: string[];
    /** The studio flow SID, where the webhook should be sent to. */
    configurationFlowSid?: string;
  };

  export type UpdateServiceConversationScopedWebhookRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the Participant
     * resource is associated with.
     */
    chatServiceSid: string;
    /**
     * The unique ID of the
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this
     * webhook.
     */
    conversationSid: string;
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /** The absolute url the webhook request should be sent to. */
    configurationUrl?: string;
    configurationMethod?: ServiceConversationScopedWebhookEnumMethod;
    /** The list of events, firing webhook event for this Conversation. */
    configurationFilters?: string[];
    /** The list of keywords, firing webhook event for this Conversation. */
    configurationTriggers?: string[];
    /** The studio flow SID, where the webhook should be sent to. */
    configurationFlowSid?: string;
  };

  export type UpdateServiceWebhookConfigurationRequest = {
    /**
     * The unique ID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation
     * belongs to.
     */
    chatServiceSid: string;
    /** The absolute url the pre-event webhook request should be sent to. */
    preWebhookUrl?: string;
    /** The absolute url the post-event webhook request should be sent to. */
    postWebhookUrl?: string;
    /**
     * The list of events that your configured webhook targets will receive. Events not configured
     * here will not fire. Possible values are `onParticipantAdd`, `onParticipantAdded`,
     * `onDeliveryUpdated`, `onConversationUpdated`, `onConversationRemove`, `onParticipantRemove`,
     * `onConversationUpdate`, `onMessageAdd`, `onMessageRemoved`, `onParticipantUpdated`,
     * `onConversationAdded`, `onMessageAdded`, `onConversationAdd`, `onConversationRemoved`,
     * `onParticipantUpdate`, `onMessageRemove`, `onMessageUpdated`, `onParticipantRemoved`,
     * `onMessageUpdate` or `onConversationStateUpdated`.
     */
    filters?: string[];
    /** The HTTP method to be used when sending a webhook request. One of `GET` or `POST`. */
    method?: string;
  };
}
