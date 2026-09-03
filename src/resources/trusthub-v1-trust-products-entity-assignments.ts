import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listTrustProductEntityAssignmentResponseSchema,
  type ListTrustProductEntityAssignmentResponse,
} from "../models/list-trust-product-entity-assignment-response.js";
import {
  trusthubV1TrustProductTrustProductEntityAssignmentSchema,
  type TrusthubV1TrustProductTrustProductEntityAssignment,
} from "../models/trusthub-v1-trust-product-trust-product-entity-assignment.js";
import type { Servers } from "../servers.js";

export class TrusthubV1TrustProductsEntityAssignments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.CreateTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductEntityAssignment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEntityAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.DeleteTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.FetchTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductEntityAssignment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEntityAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.ListTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductEntityAssignmentResponse, ResponseError> {
    return this.#rawClient.execute<ListTrustProductEntityAssignmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "ObjectType", value: request.objectType, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductEntityAssignmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsEntityAssignments {
  export type CreateTrustProductEntityAssignmentRequest = {
    trustProductSid: string;
    objectSid: string;
  };

  export type DeleteTrustProductEntityAssignmentRequest = {
    trustProductSid: string;
    sid: string;
  };

  export type FetchTrustProductEntityAssignmentRequest = {
    trustProductSid: string;
    sid: string;
  };

  export type ListTrustProductEntityAssignmentRequest = {
    trustProductSid: string;
    objectType?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
