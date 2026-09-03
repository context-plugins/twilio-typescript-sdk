import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { contentCreateRequestSchema, type ContentCreateRequest } from "../models/content-create-request.js";
import { contentUpdateRequestSchema, type ContentUpdateRequest } from "../models/content-update-request.js";
import { contentV1ContentSchema, type ContentV1Content } from "../models/content-v1-content.js";
import { listContentResponseSchema, type ListContentResponse } from "../models/list-content-response.js";
import type { Servers } from "../servers.js";

export class Contentv1ContentApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createContent(
    request: Contentv1ContentApi.CreateContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ResponseError> {
    return this.#rawClient.execute<ContentV1Content, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default2("/v1/Content"),
        auth: this.#auth.accountSidAuthToken,
        body: { kind: "json", value: request.body, schema: contentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteContent(
    request: Contentv1ContentApi.DeleteContentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default2("/v1/Content/{Sid}"),
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

  fetchContent(
    request: Contentv1ContentApi.FetchContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ResponseError> {
    return this.#rawClient.execute<ContentV1Content, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v1/Content/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listContent(
    request: Contentv1ContentApi.ListContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListContentResponse, ResponseError> {
    return this.#rawClient.execute<ListContentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default2("/v1/Content"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listContentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateContent(
    request: Contentv1ContentApi.UpdateContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ResponseError> {
    return this.#rawClient.execute<ContentV1Content, ResponseError>(
      {
        method: "PUT",
        url: this.#servers.default2("/v1/Content/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contentUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Contentv1ContentApi {
  export type CreateContentRequest = {
    body: ContentCreateRequest;
  };

  export type DeleteContentRequest = {
    sid: string;
  };

  export type FetchContentRequest = {
    sid: string;
  };

  export type ListContentRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateContentRequest = {
    sid: string;
    body: ContentUpdateRequest;
  };
}
