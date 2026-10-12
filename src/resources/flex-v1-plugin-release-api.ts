import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  ): ApiPromise<FlexV1PluginRelease, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Releases"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ConfigurationId", value: request.configurationId, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginReleaseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchPluginRelease(
    request: FlexV1PluginReleaseApi.FetchPluginReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginRelease, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Releases/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginReleaseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listPluginRelease(
    request: FlexV1PluginReleaseApi.ListPluginReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginReleaseResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Releases"),
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
        success: { kind: "json", schema: listPluginReleaseResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginReleaseApi {
  export type CreatePluginReleaseRequest = {
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The SID or the Version of the Flex Plugin Configuration to release. */
    configurationId: string;
  };

  export type FetchPluginReleaseRequest = {
    /** The SID of the Flex Plugin Release resource to fetch. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };

  export type ListPluginReleaseRequest = {
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
