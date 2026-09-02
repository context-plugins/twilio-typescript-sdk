import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listContentAndApprovalsResponseSchema,
  type ListContentAndApprovalsResponse,
} from "../models/list-content-and-approvals-response.js";
import type { Servers } from "../servers.js";

export class Contentv1ContentAndApprovalsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  listContentAndApprovals(
    request: Contentv1ContentAndApprovalsApi.ListContentAndApprovalsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListContentAndApprovalsResponse, ResponseError> {
    return this.#rawClient.execute<ListContentAndApprovalsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v1/ContentAndApprovals"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listContentAndApprovalsResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Contentv1ContentAndApprovalsApi {
  export type ListContentAndApprovalsRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
