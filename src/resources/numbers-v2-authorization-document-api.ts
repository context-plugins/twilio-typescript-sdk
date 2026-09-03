import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  authorizationDocumentEnumStatusSchema,
  type AuthorizationDocumentEnumStatus,
} from "../models/authorization-document-enum-status.js";
import {
  listAuthorizationDocumentResponseSchema,
  type ListAuthorizationDocumentResponse,
} from "../models/list-authorization-document-response.js";
import {
  numbersV2AuthorizationDocumentSchema,
  type NumbersV2AuthorizationDocument,
} from "../models/numbers-v2-authorization-document.js";
import type { Servers } from "../servers.js";

export class NumbersV2AuthorizationDocumentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.CreateAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2AuthorizationDocument, ResponseError> {
    return this.#rawClient.execute<NumbersV2AuthorizationDocument, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "AddressSid", value: request.addressSid, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "ContactPhoneNumber", value: request.contactPhoneNumber, schema: s.string() },
            {
              name: "HostedNumberOrderSids",
              value: request.hostedNumberOrderSids,
              schema: s.array(s.string()),
            },
            { name: "ContactTitle", value: request.contactTitle, schema: s.optional(s.string()) },
            { name: "CcEmails", value: request.ccEmails, schema: s.optional(s.array(s.string())) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2AuthorizationDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.DeleteAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments/{Sid}"),
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

  fetchAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.FetchAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2AuthorizationDocument, ResponseError> {
    return this.#rawClient.execute<NumbersV2AuthorizationDocument, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2AuthorizationDocumentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listAuthorizationDocument(
    request: NumbersV2AuthorizationDocumentApi.ListAuthorizationDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListAuthorizationDocumentResponse, ResponseError> {
    return this.#rawClient.execute<ListAuthorizationDocumentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/HostedNumber/AuthorizationDocuments"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "Email", value: request.email, schema: s.optional(s.string()) },
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => authorizationDocumentEnumStatusSchema)),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listAuthorizationDocumentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2AuthorizationDocumentApi {
  export type CreateAuthorizationDocumentRequest = {
    addressSid: string;
    email: string;
    contactPhoneNumber: string;
    hostedNumberOrderSids: string[];
    contactTitle?: string;
    ccEmails?: string[];
  };

  export type DeleteAuthorizationDocumentRequest = {
    sid: string;
  };

  export type FetchAuthorizationDocumentRequest = {
    sid: string;
  };

  export type ListAuthorizationDocumentRequest = {
    email?: string;
    status?: AuthorizationDocumentEnumStatus;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
