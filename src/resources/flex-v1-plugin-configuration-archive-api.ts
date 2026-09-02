import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1PluginConfigurationArchiveSchema,
  type FlexV1PluginConfigurationArchive,
} from "../models/flex-v1-plugin-configuration-archive.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginConfigurationArchiveApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updatePluginConfigurationArchive(
    request: FlexV1PluginConfigurationArchiveApi.UpdatePluginConfigurationArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginConfigurationArchive, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginConfigurationArchive, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Configurations/{Sid}/Archive"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginConfigurationArchiveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginConfigurationArchiveApi {
  export type UpdatePluginConfigurationArchiveRequest = {
    sid: string;
    flexMetadata?: string;
  };
}
