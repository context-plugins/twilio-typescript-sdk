import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new address configuration
   *
   * @remarks
   * Create a new address configuration
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createConfigurationAddress(
    request: ConversationsV1AddressConfiguration.CreateConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Configuration/Addresses"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optional(s.int()),
            },
            { name: "AddressCountry", value: request.addressCountry, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an existing address configuration
   *
   * @remarks
   * Remove an existing address configuration
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConfigurationAddress(
    request: ConversationsV1AddressConfiguration.DeleteConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
   * Fetch an address configuration
   *
   * @remarks
   * Fetch an address configuration
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConfigurationAddress(
    request: ConversationsV1AddressConfiguration.FetchConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of address configurations for an account
   *
   * @remarks
   * Retrieve a list of address configurations for an account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConfigurationAddress(
    request: ConversationsV1AddressConfiguration.ListConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConfigurationAddressResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Configuration/Addresses"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Type", value: request.type, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConfigurationAddressResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing address configuration
   *
   * @remarks
   * Update an existing address configuration
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConfigurationAddress(
    request: ConversationsV1AddressConfiguration.UpdateConfigurationAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ConfigurationAddress, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Configuration/Addresses/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
              schema: s.optional(s.int()),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ConfigurationAddressSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1AddressConfiguration {
  export type CreateConfigurationAddressRequest = {
    /** Type of Address, value can be `whatsapp` or `sms`. */
    type: ConfigurationAddressEnumType;
    /**
     * The unique address to be configured. The address can be a whatsapp address or phone number
     */
    address: string;
    /** The human-readable name of this configuration, limited to 256 characters. Optional. */
    friendlyName?: string;
    /** Enable/Disable auto-creating conversations for messages to this address */
    autoCreationEnabled?: boolean;
    autoCreationType?: ConfigurationAddressEnumAutoCreationType;
    /**
     * Conversation Service for the auto-created conversation. If not set, the conversation is
     * created in the default service.
     */
    autoCreationConversationServiceSid?: string;
    /** For type `webhook`, the url for the webhook request. */
    autoCreationWebhookUrl?: string;
    autoCreationWebhookMethod?: ConfigurationAddressEnumMethod;
    /**
     * The list of events, firing webhook event for this Conversation. Values can be any of the
     * following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`,
     * `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`,
     * `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`
     */
    autoCreationWebhookFilters?: string[];
    /** For type `studio`, the studio flow SID where the webhook should be sent to. */
    autoCreationStudioFlowSid?: string;
    /** For type `studio`, number of times to retry the webhook request */
    autoCreationStudioRetryCount?: number;
    /**
     * An ISO 3166-1 alpha-2n country code which the address belongs to. This is currently only
     * applicable to short code addresses.
     */
    addressCountry?: string;
  };

  export type DeleteConfigurationAddressRequest = {
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the
     * `address` of the configuration
     */
    sid: string;
  };

  export type FetchConfigurationAddressRequest = {
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the
     * `address` of the configuration
     */
    sid: string;
  };

  export type ListConfigurationAddressRequest = {
    /**
     * Filter the address configurations by its type. This value can be one of: `whatsapp`, `sms`.
     */
    type?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConfigurationAddressRequest = {
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the
     * `address` of the configuration
     */
    sid: string;
    /** The human-readable name of this configuration, limited to 256 characters. Optional. */
    friendlyName?: string;
    /** Enable/Disable auto-creating conversations for messages to this address */
    autoCreationEnabled?: boolean;
    autoCreationType?: ConfigurationAddressEnumAutoCreationType;
    /**
     * Conversation Service for the auto-created conversation. If not set, the conversation is
     * created in the default service.
     */
    autoCreationConversationServiceSid?: string;
    /** For type `webhook`, the url for the webhook request. */
    autoCreationWebhookUrl?: string;
    autoCreationWebhookMethod?: ConfigurationAddressEnumMethod;
    /**
     * The list of events, firing webhook event for this Conversation. Values can be any of the
     * following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`,
     * `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`,
     * `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`
     */
    autoCreationWebhookFilters?: string[];
    /** For type `studio`, the studio flow SID where the webhook should be sent to. */
    autoCreationStudioFlowSid?: string;
    /** For type `studio`, number of times to retry the webhook request */
    autoCreationStudioRetryCount?: number;
  };
}
