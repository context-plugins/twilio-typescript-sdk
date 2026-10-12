import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  customerProfileEnumStatusSchema,
  type CustomerProfileEnumStatus,
} from "../models/customer-profile-enum-status.js";
import {
  listCustomerProfileResponseSchema,
  type ListCustomerProfileResponse,
} from "../models/list-customer-profile-response.js";
import {
  trusthubV1CustomerProfileSchema,
  type TrusthubV1CustomerProfile,
} from "../models/trusthub-v1-customer-profile.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Customer-Profile.
   *
   * @remarks
   * Create a new Customer-Profile.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerProfile(
    request: TrusthubV1CustomerProfiles.CreateCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles"),
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
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Customer-Profile.
   *
   * @remarks
   * Delete a specific Customer-Profile.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerProfile(
    request: TrusthubV1CustomerProfiles.DeleteCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
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
   * Fetch a specific Customer-Profile instance.
   *
   * @remarks
   * Fetch a specific Customer-Profile instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCustomerProfile(
    request: TrusthubV1CustomerProfiles.FetchCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Customer-Profiles for an account.
   *
   * @remarks
   * Retrieve a list of all Customer-Profiles for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCustomerProfile(
    request: TrusthubV1CustomerProfiles.ListCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => customerProfileEnumStatusSchema)),
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
        success: { kind: "json", schema: listCustomerProfileResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates a Customer-Profile in an account.
   *
   * @remarks
   * Updates a Customer-Profile in an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCustomerProfile(
    request: TrusthubV1CustomerProfiles.UpdateCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
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
              schema: s.optional(s.lazy(() => customerProfileEnumStatusSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Email", value: request.email, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfiles {
  export type CreateCustomerProfileRequest = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /**
     * The email address that will receive updates when the Customer-Profile resource changes
     * status.
     */
    email: string;
    /** The unique string of a policy that is associated to the Customer-Profile resource. */
    policySid: string;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
  };

  export type DeleteCustomerProfileRequest = {
    /** The unique string that we created to identify the Customer-Profile resource. */
    sid: string;
  };

  export type FetchCustomerProfileRequest = {
    /** The unique string that we created to identify the Customer-Profile resource. */
    sid: string;
  };

  export type ListCustomerProfileRequest = {
    /** The verification status of the Customer-Profile resource. */
    status?: CustomerProfileEnumStatus;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /** The unique string of a policy that is associated to the Customer-Profile resource. */
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

  export type UpdateCustomerProfileRequest = {
    /** The unique string that we created to identify the Customer-Profile resource. */
    sid: string;
    /** The verification status of the Customer-Profile resource. */
    status?: CustomerProfileEnumStatus;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The email address that will receive updates when the Customer-Profile resource changes
     * status.
     */
    email?: string;
  };
}
