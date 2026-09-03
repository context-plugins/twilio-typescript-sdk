import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSupportingDocumentResponseSchema,
  type ListSupportingDocumentResponse,
} from "../models/list-supporting-document-response.js";
import {
  numbersV2RegulatoryComplianceSupportingDocumentSchema,
  type NumbersV2RegulatoryComplianceSupportingDocument,
} from "../models/numbers-v2-regulatory-compliance-supporting-document.js";
import type { Servers } from "../servers.js";

export class NumbersV2SupportingDocument {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSupportingDocument(
    request: NumbersV2SupportingDocument.CreateSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments"),
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
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSupportingDocument(
    request: NumbersV2SupportingDocument.DeleteSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
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

  fetchSupportingDocument(
    request: NumbersV2SupportingDocument.FetchSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSupportingDocument(
    request: NumbersV2SupportingDocument.ListSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentResponse, ResponseError> {
    return this.#rawClient.execute<ListSupportingDocumentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSupportingDocumentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSupportingDocument(
    request: NumbersV2SupportingDocument.UpdateSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceSupportingDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
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
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2SupportingDocument {
  export type CreateSupportingDocumentRequest = {
    friendlyName: string;
    type: string;
    attributes?: Record<string, unknown>;
  };

  export type DeleteSupportingDocumentRequest = {
    sid: string;
  };

  export type FetchSupportingDocumentRequest = {
    sid: string;
  };

  export type ListSupportingDocumentRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSupportingDocumentRequest = {
    sid: string;
    friendlyName?: string;
    attributes?: Record<string, unknown>;
  };
}
