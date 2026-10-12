import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  listBundleCopyResponseSchema,
  type ListBundleCopyResponse,
} from "../models/list-bundle-copy-response.js";
import {
  numbersV2RegulatoryComplianceBundleBundleCopySchema,
  type NumbersV2RegulatoryComplianceBundleBundleCopy,
} from "../models/numbers-v2-regulatory-compliance-bundle-bundle-copy.js";
import type { Servers } from "../servers.js";

export class NumbersV2BundleCopy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Creates a new copy of a Bundle. It will internally create copies of all the bundle items
   * (identities and documents) of the original bundle
   *
   * @remarks
   * Creates a new copy of a Bundle. It will internally create copies of all the bundle items
   * (identities and documents) of the original bundle
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBundleCopy(
    request: NumbersV2BundleCopy.CreateBundleCopyRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleBundleCopy, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleBundleCopySchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Bundles Copies for a Bundle.
   *
   * @remarks
   * Retrieve a list of all Bundles Copies for a Bundle.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBundleCopy(
    request: NumbersV2BundleCopy.ListBundleCopyRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBundleCopyResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBundleCopyResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2BundleCopy {
  export type CreateBundleCopyRequest = {
    /** The unique string that identifies the Bundle to be copied. */
    bundleSid: string;
    /** The string that you assigned to describe the copied bundle. */
    friendlyName?: string;
  };

  export type ListBundleCopyRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    bundleSid: string;
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
