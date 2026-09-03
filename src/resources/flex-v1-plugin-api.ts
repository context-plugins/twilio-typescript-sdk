import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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
  ): ApiPromise<FlexV1Plugin, ResponseError> {
    return this.#rawClient.execute<FlexV1Plugin, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Plugins"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPlugin(
    request: FlexV1PluginApi.FetchPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Plugin, ResponseError> {
    return this.#rawClient.execute<FlexV1Plugin, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Plugins/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPlugin(
    request: FlexV1PluginApi.ListPluginRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginResponse, ResponseError> {
    return this.#rawClient.execute<ListPluginResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Plugins"),
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
        success: { kind: "json", schema: listPluginResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updatePlugin(
    request: FlexV1PluginApi.UpdatePluginRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1Plugin, ResponseError> {
    return this.#rawClient.execute<FlexV1Plugin, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Plugins/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginApi {
  export type CreatePluginRequest = {
    flexMetadata?: string;
    uniqueName: string;
    friendlyName?: string;
    description?: string;
  };

  export type FetchPluginRequest = {
    sid: string;
    flexMetadata?: string;
  };

  export type ListPluginRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
    flexMetadata?: string;
  };

  export type UpdatePluginRequest = {
    sid: string;
    flexMetadata?: string;
    friendlyName?: string;
    description?: string;
  };
}
