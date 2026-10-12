import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listTrustProductChannelEndpointAssignmentResponseSchema,
  type ListTrustProductChannelEndpointAssignmentResponse,
} from "../models/list-trust-product-channel-endpoint-assignment-response.js";
import {
  trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema,
  type TrusthubV1TrustProductTrustProductChannelEndpointAssignment,
} from "../models/trusthub-v1-trust-product-trust-product-channel-endpoint-assignment.js";
import type { Servers } from "../servers.js";

export class TrusthubV1TrustProductsChannelEndpointAssignment {
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
  createTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.CreateTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ChannelEndpointType", value: request.channelEndpointType, schema: s.string() },
            { name: "ChannelEndpointSid", value: request.channelEndpointSid, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema },
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
  deleteTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.DeleteTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9(
          "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}",
        ),
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
  fetchTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.FetchTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}",
        ),
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
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema },
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
  listTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.ListTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductChannelEndpointAssignmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "ChannelEndpointSid", value: request.channelEndpointSid, schema: s.optional(s.string()) },
          { name: "ChannelEndpointSids", value: request.channelEndpointSids, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductChannelEndpointAssignmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsChannelEndpointAssignment {
  export type CreateTrustProductChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    trustProductSid: string;
    /** The type of channel endpoint. eg: phone-number */
    channelEndpointType: string;
    /** The SID of an channel endpoint */
    channelEndpointSid: string;
  };

  export type DeleteTrustProductChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    trustProductSid: string;
    /** The unique string that we created to identify the resource. */
    sid: string;
  };

  export type FetchTrustProductChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    trustProductSid: string;
    /** The unique string that we created to identify the resource. */
    sid: string;
  };

  export type ListTrustProductChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    trustProductSid: string;
    /** The SID of an channel endpoint */
    channelEndpointSid?: string;
    /** comma separated list of channel endpoint sids */
    channelEndpointSids?: string;
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
