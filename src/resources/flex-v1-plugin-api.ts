import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { flexV1PluginSchema, type FlexV1Plugin } from "../models/flex-v1-plugin.js";
import { listPluginResponseSchema, type ListPluginResponse } from "../models/list-plugin-response.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPlugin(
    request: FlexV1PluginApi.CreatePluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Plugin, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins"),
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
            { name: "UniqueName", value: request.uniqueName, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchPlugin(
    request: FlexV1PluginApi.FetchPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Plugin, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listPlugin(
    request: FlexV1PluginApi.ListPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins"),
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
        success: { kind: "json", schema: listPluginResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  updatePlugin(
    request: FlexV1PluginApi.UpdatePluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Plugin, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginApi {
  export type CreatePluginRequest = {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin's unique name. */
    uniqueName: string;
    /** The Flex Plugin's friendly name. */
    friendlyName?: string;
    /**
     * A descriptive string that you create to describe the plugin resource. It can be up to 500
     * characters long
     */
    description?: string;
  };

  export type FetchPluginRequest = {
    /** The SID of the Flex Plugin resource to fetch. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };

  export type ListPluginRequest = {
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

  export type UpdatePluginRequest = {
    /** The SID of the Flex Plugin resource to update. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin's friendly name. */
    friendlyName?: string;
    /**
     * A descriptive string that you update to describe the plugin resource. It can be up to 500
     * characters long
     */
    description?: string;
  };
}
