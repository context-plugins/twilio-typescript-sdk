import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1PluginConfigurationConfiguredPlugin, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13(
          "/v1/PluginService/Configurations/{ConfigurationSid}/Plugins/{PluginSid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ConfigurationSid", value: request.configurationSid, schema: s.string() },
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationConfiguredPluginSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listConfiguredPlugin(
    request: FlexV1ConfiguredPlugin.ListConfiguredPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConfiguredPluginResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Configurations/{ConfigurationSid}/Plugins"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ConfigurationSid", value: request.configurationSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConfiguredPluginResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1ConfiguredPlugin {
  export type FetchConfiguredPluginRequest = {
    /** The SID of the Flex Plugin Configuration the resource to belongs to. */
    configurationSid: string;
    /** The unique string that we created to identify the Flex Plugin resource. */
    pluginSid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };

  export type ListConfiguredPluginRequest = {
    /** The SID of the Flex Plugin Configuration the resource to belongs to. */
    configurationSid: string;
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
