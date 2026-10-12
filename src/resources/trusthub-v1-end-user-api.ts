import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { listEndUserResponse1Schema, type ListEndUserResponse1 } from "../models/list-end-user-response1.js";
import { trusthubV1EndUserSchema, type TrusthubV1EndUser } from "../models/trusthub-v1-end-user.js";
import type { Servers } from "../servers.js";

export class TrusthubV1EndUserApi {
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
  createEndUser2(
    request: TrusthubV1EndUserApi.CreateEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Type", value: request.type, schema: s.string() },
            {
              name: "Attributes",
              value: request.attributes,
              schema: s.optional(s.record(s.string(), s.unknown())),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1EndUserSchema },
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
  deleteEndUser2(
    request: TrusthubV1EndUserApi.DeleteEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/v1/EndUsers/{Sid}"),
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
  fetchEndUser2(
    request: TrusthubV1EndUserApi.FetchEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1EndUserSchema },
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
  listEndUser2(
    request: TrusthubV1EndUserApi.ListEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/EndUsers"),
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
        success: { kind: "json", schema: listEndUserResponse1Schema },
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
  updateEndUser2(
    request: TrusthubV1EndUserApi.UpdateEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/EndUsers/{Sid}"),
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
        success: { kind: "json", schema: trusthubV1EndUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1EndUserApi {
  export type CreateEndUser2Request = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /** The type of end user of the Bundle resource - can be `individual` or `business`. */
    type: string;
    /**
     * The set of parameters that are the attributes of the End User resource which are derived End
     * User Types.
     */
    attributes?: Record<string, unknown>;
  };

  export type DeleteEndUser2Request = {
    /** The unique string created by Twilio to identify the End User resource. */
    sid: string;
  };

  export type FetchEndUser2Request = {
    /** The unique string created by Twilio to identify the End User resource. */
    sid: string;
  };

  export type ListEndUser2Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateEndUser2Request = {
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
