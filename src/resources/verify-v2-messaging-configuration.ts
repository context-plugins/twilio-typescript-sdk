import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listMessagingConfigurationResponseSchema,
  type ListMessagingConfigurationResponse,
} from "../models/list-messaging-configuration-response.js";
import {
  verifyV2ServiceMessagingConfigurationSchema,
  type VerifyV2ServiceMessagingConfiguration,
} from "../models/verify-v2-service-messaging-configuration.js";
import type { Servers } from "../servers.js";

export class VerifyV2MessagingConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new MessagingConfiguration for a service.
   *
   * @remarks
   * Create a new MessagingConfiguration for a service.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.CreateMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Country", value: request.country, schema: s.string() },
            { name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceMessagingConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific MessagingConfiguration.
   *
   * @remarks
   * Delete a specific MessagingConfiguration.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.DeleteMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
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
   * Fetch a specific MessagingConfiguration.
   *
   * @remarks
   * Fetch a specific MessagingConfiguration.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.FetchMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceMessagingConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Messaging Configurations for a Service.
   *
   * @remarks
   * Retrieve a list of all Messaging Configurations for a Service.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.ListMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessagingConfigurationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessagingConfigurationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a specific MessagingConfiguration
   *
   * @remarks
   * Update a specific MessagingConfiguration
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.UpdateMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceMessagingConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace VerifyV2MessagingConfiguration {
  export type CreateMessagingConfigurationRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country this configuration will be applied to. If this is a global configuration, Country
     * will take the value `all`.
     */
    country: string;
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to be used to send SMS
     * to the country of this configuration.
     */
    messagingServiceSid: string;
  };

  export type DeleteMessagingConfigurationRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country this configuration will be applied to. If this is a global configuration, Country
     * will take the value `all`.
     */
    country: string;
  };

  export type FetchMessagingConfigurationRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country this configuration will be applied to. If this is a global configuration, Country
     * will take the value `all`.
     */
    country: string;
  };

  export type ListMessagingConfigurationRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateMessagingConfigurationRequest = {
    /**
     * The SID of the [Service](https://www.twilio.com/docs/verify/api/service) that the resource is
     * associated with.
     */
    serviceSid: string;
    /**
     * The [ISO-3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country code of the
     * country this configuration will be applied to. If this is a global configuration, Country
     * will take the value `all`.
     */
    country: string;
    /**
     * The SID of the [Messaging
     * Service](https://www.twilio.com/docs/messaging/api/service-resource) to be used to send SMS
     * to the country of this configuration.
     */
    messagingServiceSid: string;
  };
}
