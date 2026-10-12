import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountConnectAppSchema,
  type ApiV2010AccountConnectApp,
} from "../models/api-v2010-account-connect-app.js";
import {
  connectAppEnumPermissionSchema,
  type ConnectAppEnumPermission,
} from "../models/connect-app-enum-permission.js";
import {
  deauthorizeCallbackMethod1Schema,
  type DeauthorizeCallbackMethod1,
} from "../models/deauthorize-callback-method1.js";
import {
  listConnectAppResponseSchema,
  type ListConnectAppResponse,
} from "../models/list-connect-app-response.js";
import type { Servers } from "../servers.js";

export class Api20100401ConnectApp {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete an instance of a connect-app
   *
   * @remarks
   * Delete an instance of a connect-app
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConnectApp(
    request: Api20100401ConnectApp.DeleteConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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
   * Fetch an instance of a connect-app
   *
   * @remarks
   * Fetch an instance of a connect-app
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchConnectApp(
    request: Api20100401ConnectApp.FetchConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConnectApp, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConnectAppSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of connect-apps belonging to the account used to make the request
   *
   * @remarks
   * Retrieve a list of connect-apps belonging to the account used to make the request
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listConnectApp(
    request: Api20100401ConnectApp.ListConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ListConnectAppResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listConnectAppResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a connect-app with the specified parameters
   *
   * @remarks
   * Update a connect-app with the specified parameters
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateConnectApp(
    request: Api20100401ConnectApp.UpdateConnectAppRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountConnectApp, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/ConnectApps/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "AuthorizeRedirectUrl",
              value: request.authorizeRedirectUrl,
              schema: s.optional(s.string()),
            },
            { name: "CompanyName", value: request.companyName, schema: s.optional(s.string()) },
            {
              name: "DeauthorizeCallbackMethod",
              value: request.deauthorizeCallbackMethod,
              schema: s.optional(s.lazy(() => deauthorizeCallbackMethod1Schema)),
            },
            {
              name: "DeauthorizeCallbackUrl",
              value: request.deauthorizeCallbackUrl,
              schema: s.optional(s.string()),
            },
            { name: "Description", value: request.description, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "HomepageUrl", value: request.homepageUrl, schema: s.optional(s.string()) },
            {
              name: "Permissions",
              value: request.permissions,
              schema: s.optional(s.array(s.lazy(() => connectAppEnumPermissionSchema))),
            },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountConnectAppSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Api20100401ConnectApp {
  export type DeleteConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ConnectApp resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
    sid: string;
  };

  export type FetchConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ConnectApp resource to fetch.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the ConnectApp resource to fetch. */
    sid: string;
  };

  export type ListConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ConnectApp resources to read.
     */
    accountSid: string;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateConnectAppRequest = {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the
     * ConnectApp resources to update.
     */
    accountSid: string;
    /** The Twilio-provided string that uniquely identifies the ConnectApp resource to update. */
    sid: string;
    /**
     * The URL to redirect the user to after we authenticate the user and obtain authorization to
     * access the Connect App.
     */
    authorizeRedirectUrl?: string;
    /** The company name to set for the Connect App. */
    companyName?: string;
    /** The HTTP method to use when calling `deauthorize_callback_url`. */
    deauthorizeCallbackMethod?: DeauthorizeCallbackMethod1;
    /** The URL to call using the `deauthorize_callback_method` to de-authorize the Connect App. */
    deauthorizeCallbackUrl?: string;
    /** A description of the Connect App. */
    description?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters
     * long.
     */
    friendlyName?: string;
    /** A public URL where users can obtain more information about this Connect App. */
    homepageUrl?: string;
    /**
     * A comma-separated list of the permissions you will request from the users of this ConnectApp.
     * Can include: `get-all` and `post-all`.
     */
    permissions?: ConnectAppEnumPermission[];
  };
}
