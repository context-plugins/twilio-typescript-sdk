import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
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

  /**
   * Fetch a specific Supporting Document Type Instance.
   *
   * @remarks
   * Fetch a specific Supporting Document Type Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchSupportingDocumentType(
    request: NumbersV2SupportingDocumentType.FetchSupportingDocumentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceSupportingDocumentType, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocumentTypes/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceSupportingDocumentTypeSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Supporting Document Types.
   *
   * @remarks
   * Retrieve a list of all Supporting Document Types.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSupportingDocumentType(
    request: NumbersV2SupportingDocumentType.ListSupportingDocumentTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSupportingDocumentTypeResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/SupportingDocumentTypes"),
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
        success: { kind: "json", schema: listSupportingDocumentTypeResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2SupportingDocumentType {
  export type FetchSupportingDocumentTypeRequest = {
    /** The unique string that identifies the Supporting Document Type resource. */
    sid: string;
  };

  export type ListSupportingDocumentTypeRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };
}
