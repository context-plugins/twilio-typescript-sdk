import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createBundle(
    request: NumbersV2Bundle.CreateBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundle, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteBundle(
    request: NumbersV2Bundle.DeleteBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
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

  fetchBundle(
    request: NumbersV2Bundle.FetchBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundle, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: numbersV2RegulatoryComplianceBundleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listBundle(
    request: NumbersV2Bundle.ListBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListBundleResponse, ResponseError> {
    return this.#rawClient.execute<ListBundleResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles"),
        auth: this.#auth.accountSidAuthToken,
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
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBundleResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateBundle(
    request: NumbersV2Bundle.UpdateBundleRequest,
    options?: RequestOptions,
  ): ApiPromise<NumbersV2RegulatoryComplianceBundle, ResponseError> {
    return this.#rawClient.execute<NumbersV2RegulatoryComplianceBundle, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default5("/v2/RegulatoryCompliance/Bundles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace NumbersV2Bundle {
  export type CreateBundleRequest = {
    friendlyName: string;
    email: string;
    statusCallback?: string;
    regulationSid?: string;
    isoCountry?: string;
    endUserType?: BundleEnumEndUserType;
    numberType?: string;
    isTest?: boolean;
  };

  export type DeleteBundleRequest = {
    sid: string;
  };

  export type FetchBundleRequest = {
    sid: string;
  };

  export type ListBundleRequest = {
    status?: BundleEnumStatus;
    bundleSids?: string;
    friendlyName?: string;
    regulationSid?: string;
    isoCountry?: string;
    numberType?: string;
    endUserType?: BundleEnumEndUserType;
    hasValidUntilDate?: boolean;
    sortBy?: BundleEnumSortBy;
    sortDirection?: BundleEnumSortDirection;
    validUntilDate?: Date;
    validUntilDateQuery?: Date;
    validUntilDateQueryQuery?: Date;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateBundleRequest = {
    sid: string;
    status?: BundleEnumStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
  };
}
