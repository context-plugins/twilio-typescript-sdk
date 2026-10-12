import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Creates an evaluation for a bundle
   *
   * @remarks
   * Creates an evaluation for a bundle
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEvaluation(
    request: NumbersV2Evaluation.CreateEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleEvaluationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch specific Evaluation Instance.
   *
   * @remarks
   * Fetch specific Evaluation Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchEvaluation(
    request: NumbersV2Evaluation.FetchEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleEvaluationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Evaluations associated to the Bundle resource.
   *
   * @remarks
   * Retrieve a list of Evaluations associated to the Bundle resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEvaluation(
    request: NumbersV2Evaluation.ListEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEvaluationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEvaluationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2Evaluation {
  export type CreateEvaluationRequest = {
    /** The unique string that identifies the Bundle resource. */
    bundleSid: string;
  };

  export type FetchEvaluationRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    bundleSid: string;
    /** The unique string that identifies the Evaluation resource. */
    sid: string;
  };

  export type ListEvaluationRequest = {
    /** The unique string that identifies the Bundle resource. */
    bundleSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
