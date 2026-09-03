import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createEndUser(
    request: NumbersV2EndUser.CreateEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteEndUser(
    request: NumbersV2EndUser.DeleteEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
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

  fetchEndUser(
    request: NumbersV2EndUser.FetchEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUser, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEndUser(
    request: NumbersV2EndUser.ListEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserResponse, ResponseError> {
    return this.#rawClient.execute<ListEndUserResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndUserResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateEndUser(
    request: NumbersV2EndUser.UpdateEndUserRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUser, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUsers/{Sid}"),
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
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2EndUser {
  export type CreateEndUserRequest = {
    friendlyName: string;
    type: EndUserEnumType;
    attributes?: Record<string, unknown>;
  };

  export type DeleteEndUserRequest = {
    sid: string;
  };

  export type FetchEndUserRequest = {
    sid: string;
  };

  export type ListEndUserRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateEndUserRequest = {
    sid: string;
    friendlyName?: string;
    attributes?: Record<string, unknown>;
  };
}
