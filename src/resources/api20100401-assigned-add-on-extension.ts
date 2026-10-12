import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import {
  incomingPhoneNumberAssignedAddOnExtensionSchema,
  type IncomingPhoneNumberAssignedAddOnExtension,
} from "../models/incoming-phone-number-assigned-add-on-extension.js";
import {
  listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema,
  type ListIncomingPhoneNumberAssignedAddOnExtensionResponse,
} from "../models/list-incoming-phone-number-assigned-add-on-extension-response.js";
import type { Servers } from "../servers.js";

export class Api20100401AssignedAddOnExtension {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Fetch an instance of an Extension for the Assigned Add-on.
   *
   * @remarks
   * Fetch an instance of an Extension for the Assigned Add-on.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchIncomingPhoneNumberAssignedAddOnExtension(
    request: Api20100401AssignedAddOnExtension.FetchIncomingPhoneNumberAssignedAddOnExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<IncomingPhoneNumberAssignedAddOnExtension, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "AssignedAddOnSid", value: request.assignedAddOnSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: incomingPhoneNumberAssignedAddOnExtensionSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of Extensions for the Assigned Add-on.
   *
   * @remarks
   * Retrieve a list of Extensions for the Assigned Add-on.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listIncomingPhoneNumberAssignedAddOnExtension(
    request: Api20100401AssignedAddOnExtension.ListIncomingPhoneNumberAssignedAddOnExtensionRequest,
    options?: RequestOptions,
  ): ApiPromise<ListIncomingPhoneNumberAssignedAddOnExtensionResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/IncomingPhoneNumbers/{ResourceSid}/AssignedAddOns/{AssignedAddOnSid}/Extensions.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "ResourceSid", value: request.resourceSid, schema: s.string() },
          { name: "AssignedAddOnSid", value: request.assignedAddOnSid, schema: s.string() },
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
        success: { kind: "json", schema: listIncomingPhoneNumberAssignedAddOnExtensionResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401AssignedAddOnExtension {
  export type FetchIncomingPhoneNumberAssignedAddOnExtensionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resource to fetch.
     */
    accountSid: string;
    /** The SID of the Phone Number to which the Add-on is assigned. */
    resourceSid: string;
    /** The SID that uniquely identifies the assigned Add-on installation. */
    assignedAddOnSid: string;
    /** The Twilio-provided string that uniquely identifies the resource to fetch. */
    sid: string;
  };

  export type ListIncomingPhoneNumberAssignedAddOnExtensionRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * resources to read.
     */
    accountSid: string;
    /** The SID of the Phone Number to which the Add-on is assigned. */
    resourceSid: string;
    /** The SID that uniquely identifies the assigned Add-on installation. */
    assignedAddOnSid: string;
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
