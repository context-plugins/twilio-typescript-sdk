import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listTrustProductEvaluationResponseSchema,
  type ListTrustProductEvaluationResponse,
} from "../models/list-trust-product-evaluation-response.js";
import {
  trusthubV1TrustProductTrustProductEvaluationSchema,
  type TrusthubV1TrustProductTrustProductEvaluation,
} from "../models/trusthub-v1-trust-product-trust-product-evaluation.js";
import type { Servers } from "../servers.js";

export class TrusthubV1TrustProductsEvaluations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.CreateTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductEvaluation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PolicySid", value: request.policySid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.FetchTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductEvaluation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.ListTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductEvaluationResponse, ResponseError> {
    return this.#rawClient.execute<ListTrustProductEvaluationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductEvaluationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsEvaluations {
  export type CreateTrustProductEvaluationRequest = {
    trustProductSid: string;
    policySid: string;
  };

  export type FetchTrustProductEvaluationRequest = {
    trustProductSid: string;
    sid: string;
  };

  export type ListTrustProductEvaluationRequest = {
    trustProductSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
