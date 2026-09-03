import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listEndUserTypeResponseSchema,
  type ListEndUserTypeResponse,
} from "../models/list-end-user-type-response.js";
import {
  numbersV2RegulatoryComplianceEndUserTypeSchema,
  type NumbersV2RegulatoryComplianceEndUserType,
} from "../models/numbers-v2-regulatory-compliance-end-user-type.js";
import type { Servers } from "../servers.js";

export class NumbersV2EndUserType {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchEndUserType(
    request: NumbersV2EndUserType.FetchEndUserTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUserType, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUserTypes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceEndUserTypeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listEndUserType(
    request: NumbersV2EndUserType.ListEndUserTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserTypeResponse, ResponseError> {
    return this.#rawClient.execute<ListEndUserTypeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/EndUserTypes"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listEndUserTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2EndUserType {
  export type FetchEndUserTypeRequest = {
    sid: string;
  };

  export type ListEndUserTypeRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
