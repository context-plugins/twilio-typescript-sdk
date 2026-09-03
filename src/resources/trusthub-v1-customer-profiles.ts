import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  customerProfileEnumStatusSchema,
  type CustomerProfileEnumStatus,
} from "../models/customer-profile-enum-status.js";
import {
  listCustomerProfileResponseSchema,
  type ListCustomerProfileResponse,
} from "../models/list-customer-profile-response.js";
import {
  trusthubV1CustomerProfileSchema,
  type TrusthubV1CustomerProfile,
} from "../models/trusthub-v1-customer-profile.js";
import type { Servers } from "../servers.js";

export class TrusthubV1CustomerProfiles {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCustomerProfile(
    request: TrusthubV1CustomerProfiles.CreateCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfile, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/CustomerProfiles"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Email", value: request.email, schema: s.string() },
            { name: "PolicySid", value: request.policySid, schema: s.string() },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCustomerProfile(
    request: TrusthubV1CustomerProfiles.DeleteCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
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

  fetchCustomerProfile(
    request: TrusthubV1CustomerProfiles.FetchCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfile, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCustomerProfile(
    request: TrusthubV1CustomerProfiles.ListCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCustomerProfileResponse, ResponseError> {
    return this.#rawClient.execute<ListCustomerProfileResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default9("/v1/CustomerProfiles"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          {
            name: "Status",
            value: request.status,
            schema: s.optional(s.lazy(() => customerProfileEnumStatusSchema)),
          },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PolicySid", value: request.policySid, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCustomerProfileResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCustomerProfile(
    request: TrusthubV1CustomerProfiles.UpdateCustomerProfileRequest,
    options?: RequestOptions,
  ): ApiPromise<TrusthubV1CustomerProfile, ResponseError> {
    return this.#rawClient.execute<TrusthubV1CustomerProfile, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default9("/v1/CustomerProfiles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Status",
              value: request.status,
              schema: s.optional(s.lazy(() => customerProfileEnumStatusSchema)),
            },
            { name: "StatusCallback", value: request.statusCallback, schema: s.optional(s.string()) },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Email", value: request.email, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: trusthubV1CustomerProfileSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace TrusthubV1CustomerProfiles {
  export type CreateCustomerProfileRequest = {
    friendlyName: string;
    email: string;
    policySid: string;
    statusCallback?: string;
  };

  export type DeleteCustomerProfileRequest = {
    sid: string;
  };

  export type FetchCustomerProfileRequest = {
    sid: string;
  };

  export type ListCustomerProfileRequest = {
    status?: CustomerProfileEnumStatus;
    friendlyName?: string;
    policySid?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateCustomerProfileRequest = {
    sid: string;
    status?: CustomerProfileEnumStatus;
    statusCallback?: string;
    friendlyName?: string;
    email?: string;
  };
}
