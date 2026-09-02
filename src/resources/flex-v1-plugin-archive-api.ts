import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import { flexV1PluginArchiveSchema, type FlexV1PluginArchive } from "../models/flex-v1-plugin-archive.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginArchiveApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updatePluginArchive(
    request: FlexV1PluginArchiveApi.UpdatePluginArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginArchive, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginArchive, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Plugins/{Sid}/Archive"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginArchiveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginArchiveApi {
  export type UpdatePluginArchiveRequest = {
    sid: string;
    flexMetadata?: string;
  };
}
