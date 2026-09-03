import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  listSupportingDocumentResponse1Schema,
  type ListSupportingDocumentResponse1,
} from "../models/list-supporting-document-response1.js";
import {
  trusthubV1SupportingDocumentSchema,
  type TrusthubV1SupportingDocument,
} from "../models/trusthub-v1-supporting-document.js";
import type { Servers } from "../servers.js";

export class TrusthubV1SupportingDocumentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.CreateSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ResponseError> {
    return this.#rawClient.execute<TrusthubV1SupportingDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/SupportingDocuments"),
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
        success: { kind: "json", schema: trusthubV1SupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.DeleteSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
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

  fetchSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.FetchSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ResponseError> {
    return this.#rawClient.execute<TrusthubV1SupportingDocument, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1SupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.ListSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentResponse1, ResponseError> {
    return this.#rawClient.execute<ListSupportingDocumentResponse1, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/SupportingDocuments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSupportingDocumentResponse1Schema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.UpdateSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ResponseError> {
    return this.#rawClient.execute<TrusthubV1SupportingDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
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
        success: { kind: "json", schema: trusthubV1SupportingDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1SupportingDocumentApi {
  export type CreateSupportingDocument2Request = {
    friendlyName: string;
    type: string;
    attributes?: Record<string, unknown>;
  };

  export type DeleteSupportingDocument2Request = {
    sid: string;
  };

  export type FetchSupportingDocument2Request = {
    sid: string;
  };

  export type ListSupportingDocument2Request = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSupportingDocument2Request = {
    sid: string;
    friendlyName?: string;
    attributes?: Record<string, unknown>;
  };
}
