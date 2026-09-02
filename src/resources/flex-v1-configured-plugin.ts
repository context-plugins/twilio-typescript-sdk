import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1PluginConfigurationConfiguredPluginSchema,
  type FlexV1PluginConfigurationConfiguredPlugin,
} from "../models/flex-v1-plugin-configuration-configured-plugin.js";
import {
  listConfiguredPluginResponseSchema,
  type ListConfiguredPluginResponse,
} from "../models/list-configured-plugin-response.js";
import type { Servers } from "../servers.js";

export class FlexV1ConfiguredPlugin {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchConfiguredPlugin(
    request: FlexV1ConfiguredPlugin.FetchConfiguredPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginConfigurationConfiguredPlugin, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginConfigurationConfiguredPlugin, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13(
          "/v1/PluginService/Configurations/{ConfigurationSid}/Plugins/{PluginSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConfigurationSid", value: request.configurationSid, schema: s.string() },
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationConfiguredPluginSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listConfiguredPlugin(
    request: FlexV1ConfiguredPlugin.ListConfiguredPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConfiguredPluginResponse, ResponseError> {
    return this.#rawClient.execute<ListConfiguredPluginResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Configurations/{ConfigurationSid}/Plugins"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConfigurationSid", value: request.configurationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConfiguredPluginResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1ConfiguredPlugin {
  export type FetchConfiguredPluginRequest = {
    configurationSid: string;
    pluginSid: string;
    flexMetadata?: string;
  };

  export type ListConfiguredPluginRequest = {
    configurationSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    flexMetadata?: string;
  };
}
