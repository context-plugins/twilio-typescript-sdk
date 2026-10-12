import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bundleEnumEndUserTypeSchema,
  type BundleEnumEndUserType,
} from "../models/bundle-enum-end-user-type.js";
import { bundleEnumSortBySchema, type BundleEnumSortBy } from "../models/bundle-enum-sort-by.js";
import {
  bundleEnumSortDirectionSchema,
  type BundleEnumSortDirection,
} from "../models/bundle-enum-sort-direction.js";
import { bundleEnumStatusSchema, type BundleEnumStatus } from "../models/bundle-enum-status.js";
import { listBundleResponseSchema, type ListBundleResponse } from "../models/list-bundle-response.js";
import {
  numbersV2RegulatoryComplianceBundleSchema,
  type NumbersV2RegulatoryComplianceBundle,
} from "../models/numbers-v2-regulatory-compliance-bundle.js";
import type { Servers } from "../servers.js";

export class NumbersV2Bundle {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new Bundle.
   *
   * @remarks
   * Create a new Bundle.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBundle(
    request: NumbersV2Bundle.CreateBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "RegulationSid", value: request.regulationSid, schema: s.optional(s.string()) },
            { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
            {
              name: "EndUserType",
              value: request.endUserType,
              schema: s.optional(s.lazy(() => bundleEnumEndUserTypeSchema)),
            },
            { name: "NumberType", value: request.numberType, schema: s.optional(s.string()) },
            { name: "IsTest", value: request.isTest, schema: s.optional(s.boolean()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete a specific Bundle.
   *
   * @remarks
   * Delete a specific Bundle.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteBundle(
    request: NumbersV2Bundle.DeleteBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
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
   * Fetch a specific Bundle instance.
   *
   * @remarks
   * Fetch a specific Bundle instance.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchBundle(
    request: NumbersV2Bundle.FetchBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all Bundles for an account.
   *
   * @remarks
   * Retrieve a list of all Bundles for an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBundle(
    request: NumbersV2Bundle.ListBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBundleResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "Status", value: request.status, schema: s.optional(s.lazy(() => bundleEnumStatusSchema)) },
          { name: "BundleSids", value: request.bundleSids, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "RegulationSid", value: request.regulationSid, schema: s.optional(s.string()) },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "NumberType", value: request.numberType, schema: s.optional(s.string()) },
          {
            name: "EndUserType",
            value: request.endUserType,
            schema: s.optional(s.lazy(() => bundleEnumEndUserTypeSchema)),
          },
          { name: "HasValidUntilDate", value: request.hasValidUntilDate, schema: s.optional(s.boolean()) },
          { name: "SortBy", value: request.sortBy, schema: s.optional(s.lazy(() => bundleEnumSortBySchema)) },
          {
            name: "SortDirection",
            value: request.sortDirection,
            schema: s.optional(s.lazy(() => bundleEnumSortDirectionSchema)),
          },
          { name: "ValidUntilDate", value: request.validUntilDate, schema: s.optional(s.dateTime()) },
          { name: "ValidUntilDate<", value: request.validUntilDateQuery, schema: s.optional(s.dateTime()) },
          {
            name: "ValidUntilDate>",
            value: request.validUntilDateQueryQuery,
            schema: s.optional(s.dateTime()),
          },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBundleResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Updates a Bundle in an account.
   *
   * @remarks
   * Updates a Bundle in an account.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBundle(
    request: NumbersV2Bundle.UpdateBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => bundleEnumStatusSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Email", value: request.email, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace NumbersV2Bundle {
  export type CreateBundleRequest = {
    /** The string that you assigned to describe the resource. */
    friendlyName: string;
    /** The email address that will receive updates when the Bundle resource changes status. */
    email: string;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
    /** The unique string of a regulation that is associated to the Bundle resource. */
    regulationSid?: string;
    /**
     * The [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the Bundle's
     * phone number country ownership request.
     */
    isoCountry?: string;
    endUserType?: BundleEnumEndUserType;
    /**
     * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`,
     * `national`, or `toll-free`.
     */
    numberType?: string;
    /** Indicates that Bundle is a Test Bundle and will be Auto-Rejected */
    isTest?: boolean;
  };

  export type DeleteBundleRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    sid: string;
  };

  export type FetchBundleRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    sid: string;
  };

  export type ListBundleRequest = {
    /**
     * The verification status of the Bundle resource. Please refer to [Bundle
     * Statuses](https://www.twilio.com/docs/phone-numbers/regulatory/api/bundles#bundle-statuses)
     * for more details.
     */
    status?: BundleEnumStatus;
    /**
     * A comma-separated list of Bundle SIDs to filter the results (maximum 20). Each Bundle SID
     * must match `^BU[0-9a-fA-F]{32}$`.
     */
    bundleSids?: string;
    /**
     * The string that you assigned to describe the resource. The column can contain 255 variable
     * characters.
     */
    friendlyName?: string;
    /**
     * The unique string of a [Regulation
     * resource](https://www.twilio.com/docs/phone-numbers/regulatory/api/regulations) that is
     * associated to the Bundle resource.
     */
    regulationSid?: string;
    /**
     * The 2-digit [ISO country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the
     * Bundle's phone number country ownership request.
     */
    isoCountry?: string;
    /**
     * The type of phone number of the Bundle's ownership request. Can be `local`, `mobile`,
     * `national`, or `toll-free`.
     */
    numberType?: string;
    /** The end user type of the regulation of the Bundle. Can be `business` or `individual`. */
    endUserType?: BundleEnumEndUserType;
    /** Indicates that the Bundle is a valid Bundle until a specified expiration date. */
    hasValidUntilDate?: boolean;
    /** Can be `valid-until` or `date-updated`. Defaults to `date-created`. */
    sortBy?: BundleEnumSortBy;
    /** Default is `DESC`. Can be `ASC` or `DESC`. */
    sortDirection?: BundleEnumSortDirection;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date.
     * Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well.
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDate?: Date;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date.
     * Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well.
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDateQuery?: Date;
    /**
     * Date to filter Bundles having their `valid_until_date` before or after the specified date.
     * Can be `ValidUntilDate>=` or `ValidUntilDate<=`. Both can be used in conjunction as well.
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) is the acceptable date format.
     */
    validUntilDateQueryQuery?: Date;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateBundleRequest = {
    /** The unique string that we created to identify the Bundle resource. */
    sid: string;
    /** The verification status of the Bundle resource. */
    status?: BundleEnumStatus;
    /** The URL we call to inform your application of status changes. */
    statusCallback?: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /** The email address that will receive updates when the Bundle resource changes status. */
    email?: string;
  };
}
