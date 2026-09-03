import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { flexV1PluginReleaseSchema, type FlexV1PluginRelease } from "../models/flex-v1-plugin-release.js";
import {
  listPluginReleaseResponseSchema,
  type ListPluginReleaseResponse,
} from "../models/list-plugin-release-response.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginReleaseApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPluginRelease(
    request: FlexV1PluginReleaseApi.CreatePluginReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginRelease, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginRelease, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Releases"),
        auth: this.#auth.accountSidAuthToken,
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ConfigurationId", value: request.configurationId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginReleaseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPluginRelease(
    request: FlexV1PluginReleaseApi.FetchPluginReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginRelease, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginRelease, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Releases/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginReleaseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPluginRelease(
    request: FlexV1PluginReleaseApi.ListPluginReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginReleaseResponse, ResponseError> {
    return this.#rawClient.execute<ListPluginReleaseResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Releases"),
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
        success: { kind: "json", schema: listPluginReleaseResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginReleaseApi {
  export type CreatePluginReleaseRequest = {
    flexMetadata?: string;
    configurationId: string;
  };

  export type FetchPluginReleaseRequest = {
    sid: string;
    flexMetadata?: string;
  };

  export type ListPluginReleaseRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
    flexMetadata?: string;
  };
}
