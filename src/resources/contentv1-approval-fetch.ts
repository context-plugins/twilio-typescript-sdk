import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  contentV1ContentApprovalFetchSchema,
  type ContentV1ContentApprovalFetch,
} from "../models/content-v1-content-approval-fetch.js";
import type { Servers } from "../servers.js";

export class Contentv1ApprovalFetch {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchApprovalFetch(
    request: Contentv1ApprovalFetch.FetchApprovalFetchRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1ContentApprovalFetch, ResponseError> {
    return this.#rawClient.execute<ContentV1ContentApprovalFetch, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v1/Content/{Sid}/ApprovalRequests"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentV1ContentApprovalFetchSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Contentv1ApprovalFetch {
  export type FetchApprovalFetchRequest = {
    sid: string;
  };
}
