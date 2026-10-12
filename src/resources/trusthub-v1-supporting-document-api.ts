import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Create a new Supporting Document.
   *
   * @remarks
   * Create a new Supporting Document.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.CreateSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/SupportingDocuments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Supporting Document.
   *
   * @remarks
   * Delete a specific Supporting Document.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.DeleteSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
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
   * Fetch specific Supporting Document Instance.
   *
   * @remarks
   * Fetch specific Supporting Document Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.FetchSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1SupportingDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Supporting Document for an account.
   *
   * @remarks
   * Retrieve a list of all Supporting Document for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.ListSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default9("/v1/SupportingDocuments"),
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
        success: { kind: "json", schema: listSupportingDocumentResponse1Schema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing Supporting Document.
   *
   * @remarks
   * Update an existing Supporting Document.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSupportingDocument2(
    request: TrusthubV1SupportingDocumentApi.UpdateSupportingDocument2Request,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1SupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default9("/v1/SupportingDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace TrusthubV1SupportingDocumentApi {
  export type CreateSupportingDocument2Request = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /** The type of the Supporting Document. */
    type: string;
    /**
     * The set of parameters that are the attributes of the Supporting Documents resource which are
     * derived Supporting Document Types.
     */
    attributes?: Record<string, unknown>;
  };

  export type DeleteSupportingDocument2Request = {
    /** The unique string created by Twilio to identify the Supporting Document resource. */
    sid: string;
  };

  export type FetchSupportingDocument2Request = {
    /** The unique string created by Twilio to identify the Supporting Document resource. */
    sid: string;
  };

  export type ListSupportingDocument2Request = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSupportingDocument2Request = {
    /** The unique string created by Twilio to identify the Supporting Document resource. */
    sid: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The set of parameters that are the attributes of the Supporting Document resource which are
     * derived Supporting Document Types.
     */
    attributes?: Record<string, unknown>;
  };
}
