import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { endUserEnumTypeSchema, type EndUserEnumType } from "../models/end-user-enum-type.js";
import { listEndUserResponseSchema, type ListEndUserResponse } from "../models/list-end-user-response.js";
import {
  numbersV2RegulatoryComplianceEndUserSchema,
  type NumbersV2RegulatoryComplianceEndUser,
} from "../models/numbers-v2-regulatory-compliance-end-user.js";
import type { Servers } from "../servers.js";

export class NumbersV2EndUser {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new End User.
   *
   * @remarks
   * Create a new End User.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createEndUser(
    request: NumbersV2EndUser.CreateEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Type", value: request.type, schema: endUserEnumTypeSchema },
            {
              name: "Attributes",
              value: request.attributes,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific End User.
   *
   * @remarks
   * Delete a specific End User.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEndUser(
    request: NumbersV2EndUser.DeleteEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
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
   * Fetch specific End User Instance.
   *
   * @remarks
   * Fetch specific End User Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchEndUser(
    request: NumbersV2EndUser.FetchEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all End User for an account.
   *
   * @remarks
   * Retrieve a list of all End User for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listEndUser(
    request: NumbersV2EndUser.ListEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndUserResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing End User.
   *
   * @remarks
   * Update an existing End User.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateEndUser(
    request: NumbersV2EndUser.UpdateEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            {
              name: "Attributes",
              value: request.attributes,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2EndUser {
  export type CreateEndUserRequest = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /** The type of end user of the Bundle resource - can be `individual` or `business`. */
    type: EndUserEnumType;
    /**
     * The set of parameters that are the attributes of the End User resource which are derived End
     * User Types.
     */
    attributes?: Record<string, unknown>;
  };

  export type DeleteEndUserRequest = {
    /** The unique string created by Twilio to identify the End User resource. */
    sid: string;
  };

  export type FetchEndUserRequest = {
    /** The unique string created by Twilio to identify the End User resource. */
    sid: string;
  };

  export type ListEndUserRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateEndUserRequest = {
    /** The unique string created by Twilio to identify the End User resource. */
    sid: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The set of parameters that are the attributes of the End User resource which are derived End
     * User Types.
     */
    attributes?: Record<string, unknown>;
  };
}
