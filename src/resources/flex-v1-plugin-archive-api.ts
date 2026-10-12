import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1PluginArchive, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{Sid}/Archive"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginArchiveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginArchiveApi {
  export type UpdatePluginArchiveRequest = {
    /** The SID of the Flex Plugin resource to archive. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };
}
