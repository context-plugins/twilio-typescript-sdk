import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listEvaluationResponseSchema,
  type ListEvaluationResponse,
} from "../models/list-evaluation-response.js";
import {
  numbersV2RegulatoryComplianceBundleEvaluationSchema,
  type NumbersV2RegulatoryComplianceBundleEvaluation,
} from "../models/numbers-v2-regulatory-compliance-bundle-evaluation.js";
import type { Servers } from "../servers.js";

export class NumbersV2Evaluation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createEvaluation(
    request: NumbersV2Evaluation.CreateEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleEvaluation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchEvaluation(
    request: NumbersV2Evaluation.FetchEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleEvaluation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEvaluation(
    request: NumbersV2Evaluation.ListEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEvaluationResponse, ResponseError> {
    return this.#rawClient.execute<ListEvaluationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEvaluationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2Evaluation {
  export type CreateEvaluationRequest = {
    bundleSid: string;
  };

  export type FetchEvaluationRequest = {
    bundleSid: string;
    sid: string;
  };

  export type ListEvaluationRequest = {
    bundleSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
