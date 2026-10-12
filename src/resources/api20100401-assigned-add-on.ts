import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
  type ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn,
} from "../models/api-v2010-account-incoming-phone-number-incoming-phone-number-assigned-add-on.js";
import {
  listIncomingPhoneNumberAssignedAddOnResponseSchema,
  type ListIncomingPhoneNumberAssignedAddOnResponse,
} from "../models/list-incoming-phone-number-assigned-add-on-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AssignedAddOn {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Assign an Add-on installation to the Number specified.
   *
   * @remarks
   * Assign an Add-on installation to the Number specified.
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.CreateIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "InstalledAddOnSid", value: request.installedAddOnSid, schema: s.string() }],
        },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove the assignment of an Add-on installation from the Number specified.
   *
   * @remarks
   * Remove the assignment of an Add-on installation from the Number specified.
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.DeleteIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
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
   * Fetch an instance of an Add-on installation currently assigned to this Number.
   *
   * @remarks
   * Fetch an instance of an Add-on installation currently assigned to this Number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.FetchIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOn, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: {
          kind: "json",
          schema: apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberAssignedAddOnSchema,
        },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Add-on installations currently assigned to this Number.
   *
   * @remarks
   * Retrieve a list of Add-on installations currently assigned to this Number.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIncomingPhoneNumberAssignedAddOn(
    request: Api20100401AssignedAddOn.ListIncomingPhoneNumberAssignedAddOnRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberAssignedAddOnResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listIncomingPhoneNumberAssignedAddOnResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AssignedAddOn {
  export type CreateIncomingPhoneNumberAssignedAddOnRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the
     * resource.
     */
    accountSid: string;
    /** The SID of the Phone Number to assign the Add-on. */
    resourceSid: string;
    /** The SID that identifies the Add-on installation. */
    installedAddOnSid: string;
  };

  export type DeleteIncomingPhoneNumberAssignedAddOnRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resources to delete.
     */
    accountSid: string;
    /** The SID of the Phone Number to which the Add-on is assigned. */
    resourceSid: string;
    /** The Twilio-provided string that uniquely identifies the resource to delete. */
    sid: string;
  };

  export type FetchIncomingPhoneNumberAssignedAddOnRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resource to fetch.
     */
    accountSid: string;
    /** The SID of the Phone Number to which the Add-on is assigned. */
    resourceSid: string;
    /** The Twilio-provided string that uniquely identifies the resource to fetch. */
    sid: string;
  };

  export type ListIncomingPhoneNumberAssignedAddOnRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resources to read.
     */
    accountSid: string;
    /** The SID of the Phone Number to which the Add-on is assigned. */
    resourceSid: string;
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
