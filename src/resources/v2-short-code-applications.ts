import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createShortCodeApplicationRequestSchema,
  type CreateShortCodeApplicationRequest,
} from "../models/create-short-code-application-request.js";
import {
  createShortCodeApplicationResponseSchema,
  type CreateShortCodeApplicationResponse,
} from "../models/create-short-code-application-response.js";
import {
  shortCodeApplicationResponsePageSchema,
  type ShortCodeApplicationResponsePage,
} from "../models/short-code-application-response-page.js";
import { shortCodeApplicationSchema, type ShortCodeApplication } from "../models/short-code-application.js";
import type { Servers } from "../servers.js";

export class V2ShortCodeApplications {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new short code application
   *
   * @remarks
   * Create a new short code application for an account
   *
   * @returns Response schema for creating a Short Code Application.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createShortCodeApplication(
    request: V2ShortCodeApplications.CreateShortCodeApplicationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateShortCodeApplicationResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default5("/v2/ShortCodes/Applications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createShortCodeApplicationRequestSchema },
      },
      {
        success: { kind: "json", schema: createShortCodeApplicationResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a specific Short Code Application instance.
   *
   * @remarks
   * Fetch a specific Short Code Application instance.
   *
   * @returns Response schema for a single Short Code Application instance.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchShortCodeApplication(
    request: V2ShortCodeApplications.FetchShortCodeApplicationRequest,
    options?: RequestOptions,
  ): ApiPromise<ShortCodeApplication, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/ShortCodes/Applications/{sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shortCodeApplicationSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Short Code Applications
   *
   * @remarks
   * list of all short code applications for an account
   *
   * @returns Response schema for listing Short Code Applications.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listShortCodeApplications(
    request: V2ShortCodeApplications.ListShortCodeApplicationsRequest,
    options?: RequestOptions,
  ): ApiPromise<ShortCodeApplicationResponsePage, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default5("/v2/ShortCodes/Applications"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "AccountSid", value: request.accountSid, schema: s.optional(s.string()) },
          { name: "IsoCountry", value: request.isoCountry, schema: s.optional(s.string()) },
          { name: "Status", value: request.status, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "Sid", value: request.sid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.defaulted(s.int(), 0) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: shortCodeApplicationResponsePageSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace V2ShortCodeApplications {
  export type CreateShortCodeApplicationRequestParams = {
    body: CreateShortCodeApplicationRequest;
  };

  export type FetchShortCodeApplicationRequest = {
    /** The unique string that identifies the Short Code Application resource. */
    sid: string;
  };

  export type ListShortCodeApplicationsRequest = {
    /** The Account SID to filter by. */
    accountSid?: string;
    /** The ISO country to filter by. */
    isoCountry?: string;
    /** The application status to filter by. */
    status?: string;
    /** The friendly name to filter by. */
    friendlyName?: string;
    /** The application SID to filter by. */
    sid?: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The current page. @default 0 */
    page?: number;
  };
}
