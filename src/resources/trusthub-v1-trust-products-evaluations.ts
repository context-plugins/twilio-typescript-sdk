import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new Evaluation
   *
   * @remarks
   * Create a new Evaluation
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.CreateTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PolicySid", value: request.policySid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEvaluationSchema },
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
  fetchTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.FetchTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEvaluationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Evaluations associated to the trust_product resource.
   *
   * @remarks
   * Retrieve a list of Evaluations associated to the trust_product resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTrustProductEvaluation(
    request: TrusthubV1TrustProductsEvaluations.ListTrustProductEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductEvaluationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductEvaluationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsEvaluations {
  export type CreateTrustProductEvaluationRequest = {
    /** The unique string that we created to identify the trust_product resource. */
    trustProductSid: string;
    /** The unique string of a policy that is associated to the customer_profile resource. */
    policySid: string;
  };

  export type FetchTrustProductEvaluationRequest = {
    /** The unique string that we created to identify the trust_product resource. */
    trustProductSid: string;
    /** The unique string that identifies the Evaluation resource. */
    sid: string;
  };

  export type ListTrustProductEvaluationRequest = {
    /** The unique string that we created to identify the trust_product resource. */
    trustProductSid: string;
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
