import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBundleCopy(
    request: NumbersV2BundleCopy.CreateBundleCopyRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleBundleCopy, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleBundleCopy, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleBundleCopySchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBundleCopy(
    request: NumbersV2BundleCopy.ListBundleCopyRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBundleCopyResponse, ResponseError> {
    return this.#rawClient.execute<ListBundleCopyResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/Copies"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBundleCopyResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2BundleCopy {
  export type CreateBundleCopyRequest = {
    bundleSid: string;
    friendlyName?: string;
  };

  export type ListBundleCopyRequest = {
    bundleSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
