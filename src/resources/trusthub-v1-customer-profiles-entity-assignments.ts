import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listCustomerProfileEntityAssignmentResponseSchema,
  type ListCustomerProfileEntityAssignmentResponse,
} from "../models/list-customer-profile-entity-assignment-response.js";
import {
  trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema,
  type TrusthubV1CustomerProfileCustomerProfileEntityAssignment,
} from "../models/trusthub-v1-customer-profile-customer-profile-entity-assignment.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfilesEntityAssignments {
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
  createCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.CreateCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema },
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
  deleteCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.DeleteCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}",
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
  fetchCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.FetchCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfileCustomerProfileEntityAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9(
          "/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments/{Sid}",
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
        success: { kind: "json", schema: trusthubV1CustomerProfileCustomerProfileEntityAssignmentSchema },
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
  listCustomerProfileEntityAssignment(
    request: TrusthubV1CustomerProfilesEntityAssignments.ListCustomerProfileEntityAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileEntityAssignmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/CustomerProfiles/{CustomerProfileSid}/EntityAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "CustomerProfileSid", value: request.customerProfileSid, schema: s.string() }],
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
        success: { kind: "json", schema: listCustomerProfileEntityAssignmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfilesEntityAssignments {
  export type CreateCustomerProfileEntityAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The SID of an object bag that holds information of the different items. */
    objectSid: string;
  };

  export type DeleteCustomerProfileEntityAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type FetchCustomerProfileEntityAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type ListCustomerProfileEntityAssignmentRequest = {
    /** The unique string that we created to identify the CustomerProfile resource. */
    customerProfileSid: string;
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
