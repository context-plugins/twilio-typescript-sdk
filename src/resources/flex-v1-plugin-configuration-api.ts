import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1PluginConfigurationSchema,
  type FlexV1PluginConfiguration,
} from "../models/flex-v1-plugin-configuration.js";
import {
  listPluginConfigurationResponseSchema,
  type ListPluginConfigurationResponse,
} from "../models/list-plugin-configuration-response.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginConfigurationApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPluginConfiguration(
    request: FlexV1PluginConfigurationApi.CreatePluginConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginConfiguration, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginConfiguration, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Name", value: request.name, schema: s.string() },
            {
              name: "Plugins",
              value: request.plugins,
              schema: s.optional(s.array(s.record(s.string(), s.unknown()))),
            },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPluginConfiguration(
    request: FlexV1PluginConfigurationApi.FetchPluginConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginConfiguration, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginConfiguration, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Configurations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPluginConfiguration(
    request: FlexV1PluginConfigurationApi.ListPluginConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginConfigurationResponse, ResponseError> {
    return this.#rawClient.execute<ListPluginConfigurationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPluginConfigurationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginConfigurationApi {
  export type CreatePluginConfigurationRequest = {
    flexMetadata?: string;
    name: string;
    plugins?: Record<string, unknown>[];
    description?: string;
  };

  export type FetchPluginConfigurationRequest = {
    sid: string;
    flexMetadata?: string;
  };

  export type ListPluginConfigurationRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
    flexMetadata?: string;
  };
}
