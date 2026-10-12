import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listCustomerProfileEvaluationResponseSchema,
  type ListCustomerProfileEvaluationResponse,
} from "../models/list-customer-profile-evaluation-response.js";
import {
  trusthubV1CustomerProfileCustomerProfileEvaluationSchema,
  type TrusthubV1CustomerProfileCustomerProfileEvaluation,
} from "../models/trusthub-v1-customer-profile-customer-profile-evaluation.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfilesEvaluations {
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
  createCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.CreateCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PolicySid", value: request.policySid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEvaluationSchema },
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
  fetchCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.FetchCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEvaluationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Evaluations associated to the customer_profile resource.
   *
   * @remarks
   * Retrieve a list of Evaluations associated to the customer_profile resource.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.ListCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileEvaluationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerProfileEvaluationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesEvaluations {
  export type CreateCustomerProfileEvaluationRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The unique string of a policy that is associated to the customer_profile resource. */
    policySid: string;
  };

  export type FetchCustomerProfileEvaluationRequest = {
    /** The unique string that we created to identify the customer_profile resource. */
    customerProfileSid: string;
    /** The unique string that identifies the Evaluation resource. */
    sid: string;
  };

  export type ListCustomerProfileEvaluationRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
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
