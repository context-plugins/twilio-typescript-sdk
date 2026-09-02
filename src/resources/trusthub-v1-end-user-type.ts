import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listEndUserTypeResponseSchema,
  type ListEndUserTypeResponse,
} from "../models/list-end-user-type-response.js";
import {
  numbersV2RegulatoryComplianceEndUserTypeSchema,
  type NumbersV2RegulatoryComplianceEndUserType,
} from "../models/numbers-v2-regulatory-compliance-end-user-type.js";
import type { Servers } from "../servers.js";

export class TrusthubV1EndUserType {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchEndUserType2(
    request: TrusthubV1EndUserType.FetchEndUserType2Request,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUserType, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/EndUserTypes/{Sid}"),
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

  listEndUserType2(
    request: TrusthubV1EndUserType.ListEndUserType2Request,
    options?: RequestOptions,
  ): ApiPromise<ListEndUserTypeResponse, ResponseError> {
    return this.#rawClient.execute<ListEndUserTypeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/EndUserTypes"),
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

export namespace TrusthubV1EndUserType {
  export type FetchEndUserType2Request = {
    sid: string;
  };

  export type ListEndUserType2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
