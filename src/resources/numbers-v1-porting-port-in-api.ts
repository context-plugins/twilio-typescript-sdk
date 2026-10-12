import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listPortInRequestsResponseSchema,
  type ListPortInRequestsResponse,
} from "../models/list-port-in-requests-response.js";
import {
  numbersV1PortingPortInSchema,
  type NumbersV1PortingPortIn,
} from "../models/numbers-v1-porting-port-in.js";
import { portInRequestSchema, type PortInRequest } from "../models/port-in-request.js";
import type { Servers } from "../servers.js";

export class NumbersV1PortingPortInApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Allows to create a new port in request
   *
   * @remarks
   * Allows to create a new port in request
   *
   * @returns Accepted
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPortingPortIn(
    request: NumbersV1PortingPortInApi.CreatePortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortIn, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v1/Porting/PortIn"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: portInRequestSchema },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Allows to cancel a port in request by SID
   *
   * @remarks
   * Allows to cancel a port in request by SID
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePortingPortIn(
    request: NumbersV1PortingPortInApi.DeletePortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() }],
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
   * Fetch a port in request by SID
   *
   * @remarks
   * Fetch a port in request by SID
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchPortingPortIn(
    request: NumbersV1PortingPortInApi.FetchPortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortIn, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch all PortInRequests for a user
   *
   * @remarks
   * Retrieve a list of all PortInRequests for a user
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listPortInRequests(
    request: NumbersV1PortingPortInApi.ListPortInRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPortInRequestsResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v1/Porting/PortIn/PortInRequests"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Token", value: request.token, schema: s.optional(s.string()) },
          { name: "Size", value: request.size, schema: s.defaulted(s.int(), 20) },
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.optional(s.string()) },
          { name: "PortInRequestStatus", value: request.portInRequestStatus, schema: s.optional(s.string()) },
          { name: "CreatedBefore", value: request.createdBefore, schema: s.optional(s.string()) },
          { name: "CreatedAfter", value: request.createdAfter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPortInRequestsResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV1PortingPortInApi {
  export type CreatePortingPortInRequest = {
    body: PortInRequest;
  };

  export type DeletePortingPortInRequest = {
    /** The SID of the Port In request. This is a unique identifier of the port in request. */
    portInRequestSid: string;
  };

  export type FetchPortingPortInRequest = {
    /** The SID of the Port In request. This is a unique identifier of the port in request. */
    portInRequestSid: string;
  };

  export type ListPortInRequestsRequest = {
    /** Page start token, if null then it will start from the beginning */
    token?: string;
    /** Number of items per page @default 20 */
    size?: number;
    /** Filter by Port in request SID, supports multiple values separated by comma */
    portInRequestSid?: string;
    /** Filter by Port In request status */
    portInRequestStatus?: string;
    /** Find all created before a certain date */
    createdBefore?: string;
    /** Find all created after a certain date */
    createdAfter?: string;
  };
}
