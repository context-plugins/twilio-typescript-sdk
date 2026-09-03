import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createEndUser2(
    request: TrusthubV1EndUserApi.CreateEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ResponseError> {
    return this.#rawClient.execute<TrusthubV1EndUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteEndUser2(
    request: TrusthubV1EndUserApi.DeleteEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchEndUser2(
    request: TrusthubV1EndUserApi.FetchEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ResponseError> {
    return this.#rawClient.execute<TrusthubV1EndUser, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1EndUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEndUser2(
    request: TrusthubV1EndUserApi.ListEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserResponse1, ResponseError> {
    return this.#rawClient.execute<ListEndUserResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndUserResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateEndUser2(
    request: TrusthubV1EndUserApi.UpdateEndUser2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1EndUser, ResponseError> {
    return this.#rawClient.execute<TrusthubV1EndUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1EndUserApi {
  export type CreateEndUser2Request = {
    friendlyName: string;
    type: string;
    attributes?: Record<string, unknown>;
  };

  export type DeleteEndUser2Request = {
    sid: string;
  };

  export type FetchEndUser2Request = {
    sid: string;
  };

  export type ListEndUser2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateEndUser2Request = {
    sid: string;
    friendlyName?: string;
    attributes?: Record<string, unknown>;
  };
}
