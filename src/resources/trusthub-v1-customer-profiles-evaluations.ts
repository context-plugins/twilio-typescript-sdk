import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.CreateCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "PolicySid", value: request.policySid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.FetchCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileEvaluation, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEvaluationSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerProfileEvaluation(
    request: TrusthubV1CustomerProfilesEvaluations.ListCustomerProfileEvaluationRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileEvaluationResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerProfileEvaluationResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/Evaluations"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerProfileEvaluationResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesEvaluations {
  export type CreateCustomerProfileEvaluationRequest = {
    customerProfileSid: string;
    policySid: string;
  };

  export type FetchCustomerProfileEvaluationRequest = {
    customerProfileSid: string;
    sid: string;
  };

  export type ListCustomerProfileEvaluationRequest = {
    customerProfileSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
