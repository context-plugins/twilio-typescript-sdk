import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { listPoliciesResponseSchema, type ListPoliciesResponse } from "../models/list-policies-response.js";
import { trusthubV1PoliciesSchema, type TrusthubV1Policies } from "../models/trusthub-v1-policies.js";
import type { Servers } from "../servers.js";

export class TrusthubV1PoliciesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchPolicies(
    request: TrusthubV1PoliciesApi.FetchPoliciesRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1Policies, ResponseError> {
    return this.#rawClient.execute<TrusthubV1Policies, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/Policies/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1PoliciesSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPolicies(
    request: TrusthubV1PoliciesApi.ListPoliciesRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPoliciesResponse, ResponseError> {
    return this.#rawClient.execute<ListPoliciesResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/Policies"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPoliciesResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1PoliciesApi {
  export type FetchPoliciesRequest = {
    sid: string;
  };

  export type ListPoliciesRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
