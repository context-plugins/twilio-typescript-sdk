import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listLegacyContentResponseSchema,
  type ListLegacyContentResponse,
} from "../models/list-legacy-content-response.js";
import type { Servers } from "../servers.js";

export class Contentv1LegacyContentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listLegacyContent(
    request: Contentv1LegacyContentApi.ListLegacyContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListLegacyContentResponse, ResponseError> {
    return this.#rawClient.execute<ListLegacyContentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v1/LegacyContent"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listLegacyContentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Contentv1LegacyContentApi {
  export type ListLegacyContentRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
