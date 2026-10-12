import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Create a new Assigned Item.
   *
   * @remarks
   * Create a new Assigned Item.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createItemAssignment(
    request: NumbersV2ItemAssignment.CreateItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "BundleSid", value: request.bundleSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "ObjectSid", value: request.objectSid, schema: s.string() }],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleItemAssignmentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove an Assignment Item Instance.
   *
   * @remarks
   * Remove an Assignment Item Instance.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteItemAssignment(
    request: NumbersV2ItemAssignment.DeleteItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5(
          "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
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
   * Fetch specific Assigned Item Instance.
   *
   * @remarks
   * Fetch specific Assigned Item Instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchItemAssignment(
    request: NumbersV2ItemAssignment.FetchItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundleItemAssignment, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5(
          "/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments/{Sid}",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "BundleSid", value: request.bundleSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleItemAssignmentSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Assigned Items for an account.
   *
   * @remarks
   * Retrieve a list of all Assigned Items for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listItemAssignment(
    request: NumbersV2ItemAssignment.ListItemAssignmentRequest,
    options?: RequestOptions,
  ): ApiPromise<ListItemAssignmentResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{BundleSid}/ItemAssignments"),
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
        success: { kind: "json", schema: listItemAssignmentResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2ItemAssignment {
  export type CreateItemAssignmentRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    bundleSid: string;
    /** The SID of an object bag that holds information of the different items. */
    objectSid: string;
  };

  export type DeleteItemAssignmentRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    bundleSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type FetchItemAssignmentRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    bundleSid: string;
    /** The unique string that we created to identify the Identity resource. */
    sid: string;
  };

  export type ListItemAssignmentRequest = {
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
