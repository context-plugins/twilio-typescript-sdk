import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new Trust Product.
   *
   * @remarks
   * Create a new Trust Product.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTrustProduct(
    request: TrusthubV1TrustProducts.CreateTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/TrustProducts"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Trust Product.
   *
   * @remarks
   * Delete a specific Trust Product.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTrustProduct(
    request: TrusthubV1TrustProducts.DeleteTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Trust Product instance.
   *
   * @remarks
   * Fetch a specific Trust Product instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTrustProduct(
    request: TrusthubV1TrustProducts.FetchTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Trust Products for an account.
   *
   * @remarks
   * Retrieve a list of all Trust Products for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTrustProduct(
    request: TrusthubV1TrustProducts.ListTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => trustProductEnumStatusSchema)),
          },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PolicySid", value: request.policySid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates a Trust Product in an account.
   *
   * @remarks
   * Updates a Trust Product in an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTrustProduct(
    request: TrusthubV1TrustProducts.UpdateTrustProductRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProduct, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProducts {
  export type CreateTrustProductRequest = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /**
     * The email address that will receive updates when the Trust Product resource changes status.
     */
    email: string;
    /** The unique string of a policy that is associated to the Trust Product resource. */
    policySid: string;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
  };

  export type DeleteTrustProductRequest = {
    /** The unique string that we created to identify the Trust Product resource. */
    sid: string;
  };

  export type FetchTrustProductRequest = {
    /** The unique string that we created to identify the Trust Product resource. */
    sid: string;
  };

  export type ListTrustProductRequest = {
    /** The verification status of the Trust Product resource. */
    status?: TrustProductEnumStatus;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /** The unique string of a policy that is associated to the Trust Product resource. */
    policySid?: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateTrustProductRequest = {
    /** The unique string that we created to identify the Trust Product resource. */
    sid: string;
    /** The verification status of the Trust Product resource. */
    status?: TrustProductEnumStatus;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The email address that will receive updates when the Trust Product resource changes status.
     */
    email?: string;
  };
}
