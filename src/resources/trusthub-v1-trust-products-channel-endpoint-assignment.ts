import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.CreateTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.DeleteTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}"),
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

  fetchTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.FetchTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1TrustProductTrustProductChannelEndpointAssignment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "TrustProductSid", value: request.trustProductSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1TrustProductTrustProductChannelEndpointAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listTrustProductChannelEndpointAssignment(
    request: TrusthubV1TrustProductsChannelEndpointAssignment.ListTrustProductChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListTrustProductChannelEndpointAssignmentResponse, ResponseError> {
    return this.#rawClient.execute<ListTrustProductChannelEndpointAssignmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/TrustProducts/{TrustProductSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "TrustProductSid", value: request.trustProductSid, schema: s.string() }],
        query: [
          { name: "ChannelEndpointSid", value: request.channelEndpointSid, schema: s.optional(s.string()) },
          { name: "ChannelEndpointSids", value: request.channelEndpointSids, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listTrustProductChannelEndpointAssignmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1TrustProductsChannelEndpointAssignment {
  export type CreateTrustProductChannelEndpointAssignmentRequest = {
    trustProductSid: string;
    channelEndpointType: string;
    channelEndpointSid: string;
  };

  export type DeleteTrustProductChannelEndpointAssignmentRequest = {
    trustProductSid: string;
    sid: string;
  };

  export type FetchTrustProductChannelEndpointAssignmentRequest = {
    trustProductSid: string;
    sid: string;
  };

  export type ListTrustProductChannelEndpointAssignmentRequest = {
    trustProductSid: string;
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
