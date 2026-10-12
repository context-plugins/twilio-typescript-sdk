import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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
  createCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.CreateCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
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
        success: {
          kind: "json",
          schema: trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
        },
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
  deleteCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.DeleteCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() },
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
  fetchCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.FetchCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileChannelEndpointAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments/{Sid}",
        ),
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
        success: {
          kind: "json",
          schema: trusthubV1CustomerProfileCustomerProfileChannelEndpointAssignmentSchema,
        },
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
  listCustomerProfileChannelEndpointAssignment(
    request: TrusthubV1CustomerProfilesChannelEndpointAssignment.ListCustomerProfileChannelEndpointAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileChannelEndpointAssignmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/ChannelEndpointAssignments",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
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
        success: { kind: "json", schema: listCustomerProfileChannelEndpointAssignmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesChannelEndpointAssignment {
  export type CreateCustomerProfileChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The type of channel endpoint. eg: phone-number */
    channelEndpointType: string;
    /** The SID of an channel endpoint */
    channelEndpointSid: string;
  };

  export type DeleteCustomerProfileChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The unique string that we created to identify the resource. */
    sid: string;
  };

  export type FetchCustomerProfileChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The unique string that we created to identify the resource. */
    sid: string;
  };

  export type ListCustomerProfileChannelEndpointAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
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
