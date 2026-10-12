import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new Assigned Item.
   *
   * @remarks
   * Create a new Assigned Item.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.CreateTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEntityAssignmentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an Assignment Item Instance.
   *
   * @remarks
   * Remove an Assignment Item Instance.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.DeleteTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
   * Fetch specific Assigned Item Instance.
   *
   * @remarks
   * Fetch specific Assigned Item Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.FetchTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductEntityAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments/{Sid}"),
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
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductEntityAssignmentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Assigned Items for an account.
   *
   * @remarks
   * Retrieve a list of all Assigned Items for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listTrustProductEntityAssignment(
    request: TrusthubV1TrustProductsEntityAssignments.ListTrustProductEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductEntityAssignmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "ObjectType", value: request.objectType, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductEntityAssignmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsEntityAssignments {
  export type CreateTrustProductEntityAssignmentRequest = {
    /** The unique string that we created to identify the TrustProduct resource. */
    trustProductSid: string;
    /** The SID of an object bag that holds information of the different items. */
    objectSid: string;
  };

  export type DeleteTrustProductEntityAssignmentRequest = {
    /** The unique string that we created to identify the TrustProduct resource. */
    trustProductSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type FetchTrustProductEntityAssignmentRequest = {
    /** The unique string that we created to identify the TrustProduct resource. */
    trustProductSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type ListTrustProductEntityAssignmentRequest = {
    /** The unique string that we created to identify the TrustProduct resource. */
    trustProductSid: string;
    /**
     * A string to filter the results by (EndUserType or SupportingDocumentType) machine-name. This
     * is useful when you want to retrieve the entity-assignment of a specific end-user or
     * supporting document.
     */
    objectType?: string;
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
