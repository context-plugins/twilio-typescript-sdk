import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  configurationAddressEnumAutoCreationTypeSchema,
  type ConfigurationAddressEnumAutoCreationType,
} from "../models/configuration-address-enum-auto-creation-type.js";
import {
  configurationAddressEnumMethodSchema,
  type ConfigurationAddressEnumMethod,
} from "../models/configuration-address-enum-method.js";
import {
  configurationAddressEnumTypeSchema,
  type ConfigurationAddressEnumType,
} from "../models/configuration-address-enum-type.js";
import {
  conversationsV1ConfigurationAddressSchema,
  type ConversationsV1ConfigurationAddress,
} from "../models/conversations-v1-configuration-address.js";
import {
  listConfigurationAddressResponseSchema,
  type ListConfigurationAddressResponse,
} from "../models/list-configuration-address-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1AddressConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createConfigurationAddress(
    request: ConversationsV1AddressConfiguration.CreateConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConfigurationAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Configuration/Addresses"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Type", value: request.type, schema: configurationAddressEnumTypeSchema },
            { name: "Address", value: request.address, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "AutoCreation.Enabled",
              value: request.autoCreationEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "AutoCreation.Type",
              value: request.autoCreationType,
              schema: s.optional(s.lazy(() => configurationAddressEnumAutoCreationTypeSchema)),
            },
            {
              name: "AutoCreation.ConversationServiceSid",
              value: request.autoCreationConversationServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.WebhookUrl",
              value: request.autoCreationWebhookUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.WebhookMethod",
              value: request.autoCreationWebhookMethod,
              schema: s.optional(s.lazy(() => configurationAddressEnumMethodSchema)),
            },
            {
              name: "AutoCreation.WebhookFilters",
              value: request.autoCreationWebhookFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "AutoCreation.StudioFlowSid",
              value: request.autoCreationStudioFlowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.StudioRetryCount",
              value: request.autoCreationStudioRetryCount,
              schema: s.optional(s.number()),
            },
            { name: "AddressCountry", value: request.addressCountry, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteConfigurationAddress(
    request: ConversationsV1AddressConfiguration.DeleteConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchConfigurationAddress(
    request: ConversationsV1AddressConfiguration.FetchConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConfigurationAddress, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConfigurationAddress(
    request: ConversationsV1AddressConfiguration.ListConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConfigurationAddressResponse, ResponseError> {
    return this.#rawClient.execute<ListConfigurationAddressResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Configuration/Addresses"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Type", value: request.type, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConfigurationAddressResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateConfigurationAddress(
    request: ConversationsV1AddressConfiguration.UpdateConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ConfigurationAddress, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "AutoCreation.Enabled",
              value: request.autoCreationEnabled,
              schema: s.optional(s.boolean()),
            },
            {
              name: "AutoCreation.Type",
              value: request.autoCreationType,
              schema: s.optional(s.lazy(() => configurationAddressEnumAutoCreationTypeSchema)),
            },
            {
              name: "AutoCreation.ConversationServiceSid",
              value: request.autoCreationConversationServiceSid,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.WebhookUrl",
              value: request.autoCreationWebhookUrl,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.WebhookMethod",
              value: request.autoCreationWebhookMethod,
              schema: s.optional(s.lazy(() => configurationAddressEnumMethodSchema)),
            },
            {
              name: "AutoCreation.WebhookFilters",
              value: request.autoCreationWebhookFilters,
              schema: s.optional(s.array(s.string())),
            },
            {
              name: "AutoCreation.StudioFlowSid",
              value: request.autoCreationStudioFlowSid,
              schema: s.optional(s.string()),
            },
            {
              name: "AutoCreation.StudioRetryCount",
              value: request.autoCreationStudioRetryCount,
              schema: s.optional(s.number()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1AddressConfiguration {
  export type CreateConfigurationAddressRequest = {
    type: ConfigurationAddressEnumType;
    address: string;
    friendlyName?: string;
    autoCreationEnabled?: boolean;
    autoCreationType?: ConfigurationAddressEnumAutoCreationType;
    autoCreationConversationServiceSid?: string;
    autoCreationWebhookUrl?: string;
    autoCreationWebhookMethod?: ConfigurationAddressEnumMethod;
    autoCreationWebhookFilters?: string[];
    autoCreationStudioFlowSid?: string;
    autoCreationStudioRetryCount?: number;
    addressCountry?: string;
  };

  export type DeleteConfigurationAddressRequest = {
    sid: string;
  };

  export type FetchConfigurationAddressRequest = {
    sid: string;
  };

  export type ListConfigurationAddressRequest = {
    type?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateConfigurationAddressRequest = {
    sid: string;
    friendlyName?: string;
    autoCreationEnabled?: boolean;
    autoCreationType?: ConfigurationAddressEnumAutoCreationType;
    autoCreationConversationServiceSid?: string;
    autoCreationWebhookUrl?: string;
    autoCreationWebhookMethod?: ConfigurationAddressEnumMethod;
    autoCreationWebhookFilters?: string[];
    autoCreationStudioFlowSid?: string;
    autoCreationStudioRetryCount?: number;
  };
}
