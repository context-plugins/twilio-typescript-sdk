import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  flexV1PluginPluginVersionSchema,
  type FlexV1PluginPluginVersion,
} from "../models/flex-v1-plugin-plugin-version.js";
import {
  listPluginVersionResponseSchema,
  type ListPluginVersionResponse,
} from "../models/list-plugin-version-response.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginVersions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createPluginVersion(
    request: FlexV1PluginVersions.CreatePluginVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginPluginVersion, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PluginSid", value: request.pluginSid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Version", value: request.version, schema: s.string() },
            { name: "PluginUrl", value: request.pluginUrl, schema: s.string() },
            { name: "Changelog", value: request.changelog, schema: s.optional(s.string()) },
            { name: "Private", value: request.private, schema: s.optional(s.boolean()) },
            { name: "CliVersion", value: request.cliVersion, schema: s.optional(s.string()) },
            { name: "ValidateStatus", value: request.validateStatus, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: flexV1PluginPluginVersionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  fetchPluginVersion(
    request: FlexV1PluginVersions.FetchPluginVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginPluginVersion, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginPluginVersionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  listPluginVersion(
    request: FlexV1PluginVersions.ListPluginVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginVersionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PluginSid", value: request.pluginSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPluginVersionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginVersions {
  export type CreatePluginVersionRequest = {
    /** The SID of the Flex Plugin the resource to belongs to. */
    pluginSid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
    /** The Flex Plugin Version's version. */
    version: string;
    /** The URL of the Flex Plugin Version bundle */
    pluginUrl: string;
    /** The changelog of the Flex Plugin Version. */
    changelog?: string;
    /** Whether this Flex Plugin Version requires authorization. */
    private?: boolean;
    /** The version of Flex Plugins CLI used to create this plugin */
    cliVersion?: string;
    /** The validation status of the plugin, indicating whether it has been validated */
    validateStatus?: string;
  };

  export type FetchPluginVersionRequest = {
    /** The SID of the Flex Plugin the resource to belongs to. */
    pluginSid: string;
    /** The SID of the Flex Plugin Version resource to fetch. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };

  export type ListPluginVersionRequest = {
    /** The SID of the Flex Plugin the resource to belongs to. */
    pluginSid: string;
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
