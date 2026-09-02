import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
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

  createPortingPortIn(
    request: NumbersV1PortingPortInApi.CreatePortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortIn, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingPortIn, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v1/Porting/PortIn"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: portInRequestSchema },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deletePortingPortIn(
    request: NumbersV1PortingPortInApi.DeletePortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchPortingPortIn(
    request: NumbersV1PortingPortInApi.FetchPortingPortInRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV1PortingPortIn, ResponseError> {
    return this.#rawClient.execute<NumbersV1PortingPortIn, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/Porting/PortIn/{PortInRequestSid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "PortInRequestSid", value: request.portInRequestSid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV1PortingPortInSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listPortInRequests(
    request: NumbersV1PortingPortInApi.ListPortInRequestsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListPortInRequestsResponse, ResponseError> {
    return this.#rawClient.execute<ListPortInRequestsResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v1/Porting/PortIn/PortInRequests"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Token", value: request.token, schema: s.optional(s.string()) },
          { name: "Size", value: request.size, schema: s.defaulted(s.number(), 20) },
          { name: "PortInRequestSid", value: request.portInRequestSid, schema: s.optional(s.string()) },
          { name: "PortInRequestStatus", value: request.portInRequestStatus, schema: s.optional(s.string()) },
          { name: "CreatedBefore", value: request.createdBefore, schema: s.optional(s.string()) },
          { name: "CreatedAfter", value: request.createdAfter, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listPortInRequestsResponseSchema },
        errorFactory: ResponseError,
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
    portInRequestSid: string;
  };

  export type FetchPortingPortInRequest = {
    portInRequestSid: string;
  };

  export type ListPortInRequestsRequest = {
    token?: string;
    size?: number;
    portInRequestSid?: string;
    portInRequestStatus?: string;
    createdBefore?: string;
    createdAfter?: string;
  };
}
