import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listCustomerProfileChannelEndpointAssignmentResponseSchema,
  type ListCustomerProfileChannelEndpointAssignmentResponse,
} from "../models/list-customer-profile-channel-endpoint-assignment-response.js";
import {
  trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
  type TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment,
} from "../models/trusthub-v1-customer-profile-customer-profile-channel-endpoint-assignment.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfilesChannelEndpointAssignment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.CreateCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "ChannelEndpointType", value: request.channelEndpointType, schema: s.string() },
            { name: "ChannelEndpointSid", value: request.channelEndpointSid, schema: s.string() },
          ],
        },
      },
      {
        success: {
          kind: "json",
          schema: trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.DeleteCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
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

  fetchCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.FetchCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
        },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.ListCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileChannelEndpointAssignmentResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerProfileChannelEndpointAssignmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
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
        success: { kind: "json", schema: listCustomerProfileChannelEndpointAssignmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesChannelEndpointAssignment {
  export type CreateCustomerProfileChannelEndpointAssignmentRequest = {
    customerProfileSid: string;
    channelEndpointType: string;
    channelEndpointSid: string;
  };

  export type DeleteCustomerProfileChannelEndpointAssignmentRequest = {
    customerProfileSid: string;
    sid: string;
  };

  export type FetchCustomerProfileChannelEndpointAssignmentRequest = {
    customerProfileSid: string;
    sid: string;
  };

  export type ListCustomerProfileChannelEndpointAssignmentRequest = {
    customerProfileSid: string;
    channelEndpointSid?: string;
    channelEndpointSids?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
