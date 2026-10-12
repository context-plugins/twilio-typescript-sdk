import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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
  createSupportingDocument(
    request: NumbersV2SupportingDocument.CreateSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments"),
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
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
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
  deleteSupportingDocument(
    request: NumbersV2SupportingDocument.DeleteSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
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
  fetchSupportingDocument(
    request: NumbersV2SupportingDocument.FetchSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
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
  listSupportingDocument(
    request: NumbersV2SupportingDocument.ListSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments"),
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
        success: { kind: "json", schema: listSupportingDocumentResponseSchema },
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
  updateSupportingDocument(
    request: NumbersV2SupportingDocument.UpdateSupportingDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocument, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocuments/{Sid}"),
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
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2SupportingDocument {
  export type CreateSupportingDocumentRequest = {
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

  export type DeleteSupportingDocumentRequest = {
    /** The unique string created by Twilio to identify the Supporting Document resource. */
    sid: string;
  };

  export type FetchSupportingDocumentRequest = {
    /** The unique string created by Twilio to identify the Supporting Document resource. */
    sid: string;
  };

  export type ListSupportingDocumentRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateSupportingDocumentRequest = {
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
