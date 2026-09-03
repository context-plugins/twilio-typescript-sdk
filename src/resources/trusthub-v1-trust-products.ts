import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listTrustProductResponseSchema,
  type ListTrustProductResponse,
} from "../models/list-trust-product-response.js";
import {
  trustProductEnumStatusSchema,
  type TrustProductEnumStatus,
} from "../models/trust-product-enum-status.js";
import {
  trusthubV1TrustProductSchema,
  type TrusthubV1TrustProduct,
} from "../models/trusthub-v1-trust-product.js";
import type { Servers } from "../servers.js";

export class TrusthubV1TrustProducts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createTrustProduct(
    request: TrusthubV1TrustProducts.CreateTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProduct, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/TrustProducts"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "PolicySid", value: request.policySid, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTrustProduct(
    request: TrusthubV1TrustProducts.DeleteTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchTrustProduct(
    request: TrusthubV1TrustProducts.FetchTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProduct, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTrustProduct(
    request: TrusthubV1TrustProducts.ListTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductResponse, ResponseError> {
    return this.#rawClient.execute<ListTrustProductResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => trustProductEnumStatusSchema)),
          },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PolicySid", value: request.policySid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateTrustProduct(
    request: TrusthubV1TrustProducts.UpdateTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProduct, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => trustProductEnumStatusSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Email", value: request.email, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProducts {
  export type CreateTrustProductRequest = {
    friendlyName: string;
    email: string;
    policySid: string;
    statusCallback?: string;
  };

  export type DeleteTrustProductRequest = {
    sid: string;
  };

  export type FetchTrustProductRequest = {
    sid: string;
  };

  export type ListTrustProductRequest = {
    status?: TrustProductEnumStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateTrustProductRequest = {
    sid: string;
    status?: TrustProductEnumStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
  };
}
