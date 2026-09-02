import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  apiV2010AccountOutgoingCallerIdSchema,
  type ApiV2010AccountOutgoingCallerId,
} from "../models/api-v2010-account-outgoing-caller-id.js";
import {
  listOutgoingCallerIdResponseSchema,
  type ListOutgoingCallerIdResponse,
} from "../models/list-outgoing-caller-id-response.js";
import type { Servers } from "../servers.js";

export class Api20100401OutgoingCallerId {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  deleteOutgoingCallerId(
    request: Api20100401OutgoingCallerId.DeleteOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
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

  fetchOutgoingCallerId(
    request: Api20100401OutgoingCallerId.FetchOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountOutgoingCallerId, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountOutgoingCallerId, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountOutgoingCallerIdSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listOutgoingCallerId(
    request: Api20100401OutgoingCallerId.ListOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ListOutgoingCallerIdResponse, ResponseError> {
    return this.#rawClient.execute<ListOutgoingCallerIdResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "AccountSid", value: request.accountSid, schema: s.string() }],
        query: [
          { name: "PhoneNumber", value: request.phoneNumber, schema: s.optional(s.string()) },
          { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listOutgoingCallerIdResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateOutgoingCallerId(
    request: Api20100401OutgoingCallerId.UpdateOutgoingCallerIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountOutgoingCallerId, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountOutgoingCallerId, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default("/2010-04-01/Accounts/{AccountSid}/OutgoingCallerIds/{Sid}.json"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountOutgoingCallerIdSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401OutgoingCallerId {
  export type DeleteOutgoingCallerIdRequest = {
    accountSid: string;
    sid: string;
  };

  export type FetchOutgoingCallerIdRequest = {
    accountSid: string;
    sid: string;
  };

  export type ListOutgoingCallerIdRequest = {
    accountSid: string;
    phoneNumber?: string;
    friendlyName?: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateOutgoingCallerIdRequest = {
    accountSid: string;
    sid: string;
    friendlyName?: string;
  };
}
