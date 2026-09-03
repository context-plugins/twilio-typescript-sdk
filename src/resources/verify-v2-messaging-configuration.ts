import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.CreateMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceMessagingConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.DeleteMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
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

  fetchMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.FetchMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceMessagingConfiguration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceMessagingConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.ListMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListMessagingConfigurationResponse, ResponseError> {
    return this.#rawClient.execute<ListMessagingConfigurationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ServiceSid", value: request.serviceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listMessagingConfigurationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateMessagingConfiguration(
    request: VerifyV2MessagingConfiguration.UpdateMessagingConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<VerifyV2ServiceMessagingConfiguration, ResponseError> {
    return this.#rawClient.execute<VerifyV2ServiceMessagingConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default3("/v2/Services/{ServiceSid}/MessagingConfigurations/{Country}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ServiceSid", value: request.serviceSid, schema: s.string() },
          { name: "Country", value: request.country, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "MessagingServiceSid", value: request.messagingServiceSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: verifyV2ServiceMessagingConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace VerifyV2MessagingConfiguration {
  export type CreateMessagingConfigurationRequest = {
    serviceSid: string;
    country: string;
    messagingServiceSid: string;
  };

  export type DeleteMessagingConfigurationRequest = {
    serviceSid: string;
    country: string;
  };

  export type FetchMessagingConfigurationRequest = {
    serviceSid: string;
    country: string;
  };

  export type ListMessagingConfigurationRequest = {
    serviceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateMessagingConfigurationRequest = {
    serviceSid: string;
    country: string;
    messagingServiceSid: string;
  };
}
