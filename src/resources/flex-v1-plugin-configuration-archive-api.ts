import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1PluginConfigurationArchive, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Configurations/{Sid}/Archive"),
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
        success: { kind: "json", schema: flexV1PluginConfigurationArchiveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginConfigurationArchiveApi {
  export type UpdatePluginConfigurationArchiveRequest = {
    /** The SID of the Flex Plugin Configuration resource to archive. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };
}
