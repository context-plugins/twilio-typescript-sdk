import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listSupportingDocumentTypeResponse1Schema,
  type ListSupportingDocumentTypeResponse1,
} from "../models/list-supporting-document-type-response1.js";
import {
  numbersV2RegulatoryComplianceEndUserTypeSchema,
  type NumbersV2RegulatoryComplianceEndUserType,
} from "../models/numbers-v2-regulatory-compliance-end-user-type.js";
import type { Servers } from "../servers.js";

export class TrusthubV1SupportingDocumentType {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchSupportingDocumentType2(
    request: TrusthubV1SupportingDocumentType.FetchSupportingDocumentType2Request,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceEndUserType, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceEndUserType, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/SupportingDocumentTypes/{Sid}"),
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

  listSupportingDocumentType2(
    request: TrusthubV1SupportingDocumentType.ListSupportingDocumentType2Request,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentTypeResponse1, ResponseError> {
    return this.#rawClient.execute<ListSupportingDocumentTypeResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/SupportingDocumentTypes"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSupportingDocumentTypeResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1SupportingDocumentType {
  export type FetchSupportingDocumentType2Request = {
    sid: string;
  };

  export type ListSupportingDocumentType2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
