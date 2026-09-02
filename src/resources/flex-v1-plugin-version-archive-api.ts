import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  flexV1PluginVersionArchiveSchema,
  type FlexV1PluginVersionArchive,
} from "../models/flex-v1-plugin-version-archive.js";
import type { Servers } from "../servers.js";

export class FlexV1PluginVersionArchiveApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  updatePluginVersionArchive(
    request: FlexV1PluginVersionArchiveApi.UpdatePluginVersionArchiveRequest,
    options?: RequestOptions,
  ): ApiPromise<FlexV1PluginVersionArchive, ResponseError> {
    return this.#rawClient.execute<FlexV1PluginVersionArchive, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}/Archive"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [{ name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginVersionArchiveSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginVersionArchiveApi {
  export type UpdatePluginVersionArchiveRequest = {
    pluginSid: string;
    sid: string;
    flexMetadata?: string;
  };
}
