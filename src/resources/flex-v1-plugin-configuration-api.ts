import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1PluginConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchPluginConfiguration(
    request: FlexV1PluginConfigurationApi.FetchPluginConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginConfiguration, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Configurations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listPluginConfiguration(
    request: FlexV1PluginConfigurationApi.ListPluginConfigurationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginConfigurationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Configurations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPluginConfigurationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginConfigurationApi {
  export type CreatePluginConfigurationRequest = {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin Configuration's name. */
    name: string;
    /**
     * A list of objects that describe the plugin versions included in the configuration. Each
     * object contains the sid of the plugin version.
     */
    plugins?: Record<string, unknown>[];
    /** The Flex Plugin Configuration's description. */
    description?: string;
  };

  export type FetchPluginConfigurationRequest = {
    /** The SID of the Flex Plugin Configuration resource to fetch. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };

  export type ListPluginConfigurationRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };
}
