import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  ): ApiPromise<FlexV1PluginVersionArchive, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default13("/v1/PluginService/Plugins/{PluginSid}/Versions/{Sid}/Archive"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "PluginSid", value: request.pluginSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Flex-Metadata", value: request.flexMetadata, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: flexV1PluginVersionArchiveSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace FlexV1PluginVersionArchiveApi {
  export type UpdatePluginVersionArchiveRequest = {
    /** The SID of the Flex Plugin the resource to belongs to. */
    pluginSid: string;
    /** The SID of the Flex Plugin Version resource to archive. */
    sid: string;
    /** The Flex-Metadata HTTP request header */
    flexMetadata?: string;
  };
}
