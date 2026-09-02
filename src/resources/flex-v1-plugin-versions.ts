import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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
  ): ApiPromise<FlexV1PluginPluginVersion, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginPluginVersion, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PluginSid", value: request.pluginSid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPluginVersion(
    request: FlexV1PluginVersions.FetchPluginVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginPluginVersion, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginPluginVersion, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginPluginVersionSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPluginVersion(
    request: FlexV1PluginVersions.ListPluginVersionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPluginVersionResponse, ResponseError> {
    return this.#rawClient.execute<ListPluginVersionResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PluginSid", value: request.pluginSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPluginVersionResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginVersions {
  export type CreatePluginVersionRequest = {
    pluginSid: string;
    flexMetadata?: string;
    version: string;
    pluginUrl: string;
    changelog?: string;
    private?: boolean;
    cliVersion?: string;
    validateStatus?: string;
  };

  export type FetchPluginVersionRequest = {
    pluginSid: string;
    sid: string;
    flexMetadata?: string;
  };

  export type ListPluginVersionRequest = {
    pluginSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
    flexMetadata?: string;
  };
}
