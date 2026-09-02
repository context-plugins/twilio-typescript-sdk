import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  listItemAssignmentResponseSchema,
  type ListItemAssignmentResponse,
} from "../models/list-item-assignment-response.js";
import {
  numbersV2RegulatoryComplianceBundleItemAssignmentSchema,
  type NumbersV2RegulatoryComplianceBundleItemAssignment,
} from "../models/numbers-v2-regulatory-compliance-bundle-item-assignment.js";
import type { Servers } from "../servers.js";

export class NumbersV2ItemAssignment {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createItemAssignment(
    request: NumbersV2ItemAssignment.CreateItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleItemAssignment, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleItemAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteItemAssignment(
    request: NumbersV2ItemAssignment.DeleteItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchItemAssignment(
    request: NumbersV2ItemAssignment.FetchItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundleItemAssignment, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleItemAssignmentSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listItemAssignment(
    request: NumbersV2ItemAssignment.ListItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListItemAssignmentResponse, ResponseError> {
    return this.#rawClient.execute<ListItemAssignmentResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments"),
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
        success: { kind: "json", schema: listItemAssignmentResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2ItemAssignment {
  export type CreateItemAssignmentRequest = {
    bundleSid: string;
    objectSid: string;
  };

  export type DeleteItemAssignmentRequest = {
    bundleSid: string;
    sid: string;
  };

  export type FetchItemAssignmentRequest = {
    bundleSid: string;
    sid: string;
  };

  export type ListItemAssignmentRequest = {
    bundleSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };
}
