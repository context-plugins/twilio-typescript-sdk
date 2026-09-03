import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSupportingDocumentTypeResponseSchema,
  type ListSupportingDocumentTypeResponse,
} from "../models/list-supporting-document-type-response.js";
import {
  numbersV2RegulatoryComplianceSupportingDocumentTypeSchema,
  type NumbersV2RegulatoryComplianceSupportingDocumentType,
} from "../models/numbers-v2-regulatory-compliance-supporting-document-type.js";
import type { Servers } from "../servers.js";

export class NumbersV2SupportingDocumentType {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  fetchSupportingDocumentType(
    request: NumbersV2SupportingDocumentType.FetchSupportingDocumentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocumentType, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceSupportingDocumentType, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentTypeSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSupportingDocumentType(
    request: NumbersV2SupportingDocumentType.ListSupportingDocumentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentTypeResponse, ResponseError> {
    return this.#rawClient.execute<ListSupportingDocumentTypeResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocumentTypes"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSupportingDocumentTypeResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2SupportingDocumentType {
  export type FetchSupportingDocumentTypeRequest = {
    sid: string;
  };

  export type ListSupportingDocumentTypeRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
