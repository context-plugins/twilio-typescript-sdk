import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createConversationScopedWebhook(
    request: ConversationsV1Webhook.CreateConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationScopedWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
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
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationScopedWebhookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.CreateServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
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
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteConversationScopedWebhook(
    request: ConversationsV1Webhook.DeleteConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.DeleteServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchConfigurationWebhook(
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConfigurationConfigurationWebhook, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationConfigurationWebhookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchConversationScopedWebhook(
    request: ConversationsV1Webhook.FetchConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationScopedWebhook, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConversationConversationScopedWebhookSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.FetchServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConversationServiceConversationScopedWebhookSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceWebhookConfiguration(
    request: ConversationsV1Webhook.FetchServiceWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: conversationsV1ServiceServiceConfigurationServiceWebhookConfigurationSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConversationScopedWebhook(
    request: ConversationsV1Webhook.ListConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConversationScopedWebhookResponse, ResponseError> {
    return this.#rawClient.execute<ListConversationScopedWebhookResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConversationSid", value: request.conversationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConversationScopedWebhookResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.ListServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceConversationScopedWebhookResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceConversationScopedWebhookResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceConversationScopedWebhookResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConfigurationWebhook(
    request: ConversationsV1Webhook.UpdateConfigurationWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationConfigurationWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConfigurationConfigurationWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConversationScopedWebhook(
    request: ConversationsV1Webhook.UpdateConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConversationConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConversationConversationScopedWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Conversations/{ConversationSid}/Webhooks/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceConversationScopedWebhook(
    request: ConversationsV1Webhook.UpdateServiceConversationScopedWebhookRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConversationServiceConversationScopedWebhook, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7(
          "/v1/Services/{ChatServiceSid}/Conversations/{ConversationSid}/Webhooks/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "ConversationSid", value: request.conversationSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceWebhookConfiguration(
    request: ConversationsV1Webhook.UpdateServiceWebhookConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Configuration/Webhooks"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1Webhook {
  export type CreateConversationScopedWebhookRequest = {
    conversationSid: string;
    target: ConversationScopedWebhookEnumTarget;
    configurationUrl?: string;
    configurationMethod?: ConversationScopedWebhookEnumMethod;
    configurationFilters?: string[];
    configurationTriggers?: string[];
    configurationFlowSid?: string;
    configurationReplayAfter?: number;
  };

  export type CreateServiceConversationScopedWebhookRequest = {
    chatServiceSid: string;
    conversationSid: string;
    target: ServiceConversationScopedWebhookEnumTarget;
    configurationUrl?: string;
    configurationMethod?: ServiceConversationScopedWebhookEnumMethod;
    configurationFilters?: string[];
    configurationTriggers?: string[];
    configurationFlowSid?: string;
    configurationReplayAfter?: number;
  };

  export type DeleteConversationScopedWebhookRequest = {
    conversationSid: string;
    sid: string;
  };

  export type DeleteServiceConversationScopedWebhookRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
  };

  export type FetchConversationScopedWebhookRequest = {
    conversationSid: string;
    sid: string;
  };

  export type FetchServiceConversationScopedWebhookRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
  };

  export type FetchServiceWebhookConfigurationRequest = {
    chatServiceSid: string;
  };

  export type ListConversationScopedWebhookRequest = {
    conversationSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceConversationScopedWebhookRequest = {
    chatServiceSid: string;
    conversationSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConfigurationWebhookRequest = {
    method?: string;
    filters?: string[];
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    target?: ConfigurationWebhookEnumTarget;
  };

  export type UpdateConversationScopedWebhookRequest = {
    conversationSid: string;
    sid: string;
    configurationUrl?: string;
    configurationMethod?: ConversationScopedWebhookEnumMethod;
    configurationFilters?: string[];
    configurationTriggers?: string[];
    configurationFlowSid?: string;
  };

  export type UpdateServiceConversationScopedWebhookRequest = {
    chatServiceSid: string;
    conversationSid: string;
    sid: string;
    configurationUrl?: string;
    configurationMethod?: ServiceConversationScopedWebhookEnumMethod;
    configurationFilters?: string[];
    configurationTriggers?: string[];
    configurationFlowSid?: string;
  };

  export type UpdateServiceWebhookConfigurationRequest = {
    chatServiceSid: string;
    preWebhookUrl?: string;
    postWebhookUrl?: string;
    filters?: string[];
    method?: string;
  };
}
