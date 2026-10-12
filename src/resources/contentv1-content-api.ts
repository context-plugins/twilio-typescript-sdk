import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create Content
   *
   * @remarks
   * Create a Content resource
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createContent(
    request: Contentv1ContentApi.CreateContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default2("/v1/Content"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contentCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete Content
   *
   * @remarks
   * Deletes a Content resource
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteContent(
    request: Contentv1ContentApi.DeleteContentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default2("/v1/Content/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch Content
   *
   * @remarks
   * Fetch a Content resource by its unique Content Sid
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchContent(
    request: Contentv1ContentApi.FetchContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default2("/v1/Content/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Contents
   *
   * @remarks
   * Retrieve a list of Contents belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listContent(
    request: Contentv1ContentApi.ListContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListContentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default2("/v1/Content"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listContentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update Content
   *
   * @remarks
   * Update a Content resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateContent(
    request: Contentv1ContentApi.UpdateContentRequest,
    options?: RequestOptions,
  ): ApiPromise<ContentV1Content, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default2("/v1/Content/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contentUpdateRequestSchema },
      },
      {
        success: { kind: "json", schema: contentV1ContentSchema },
        errorFactory: ApiError,
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
    /** The Twilio-provided string that uniquely identifies the Content resource to fetch. */
    sid: string;
  };

  export type FetchContentRequest = {
    /** The Twilio-provided string that uniquely identifies the Content resource to fetch. */
    sid: string;
  };

  export type ListContentRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateContentRequest = {
    /** The Twilio-provided string that uniquely identifies the Content resource to update. */
    sid: string;
    body: ContentUpdateRequest;
  };
}
