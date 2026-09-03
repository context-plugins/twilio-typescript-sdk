import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import { confirmationSchema, type Confirmation } from "../models/confirmation.js";
import {
  conversationsV1ServiceServiceUserSchema,
  type ConversationsV1ServiceServiceUser,
} from "../models/conversations-v1-service-service-user.js";
import { conversationsV1UserSchema, type ConversationsV1User } from "../models/conversations-v1-user.js";
import {
  listServiceUserResponseSchema,
  type ListServiceUserResponse,
} from "../models/list-service-user-response.js";
import { listUserResponseSchema, type ListUserResponse } from "../models/list-user-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1UserApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createServiceUser(
    request: ConversationsV1UserApi.CreateServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Identity", value: request.identity, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createUser(
    request: ConversationsV1UserApi.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ResponseError> {
    return this.#rawClient.execute<ConversationsV1User, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Users"),
        auth: this.#auth.accountSidAuthToken,
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Identity", value: request.identity, schema: s.string() },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1UserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteServiceUser(
    request: ConversationsV1UserApi.DeleteServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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

  deleteUser(
    request: ConversationsV1UserApi.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
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

  fetchServiceUser(
    request: ConversationsV1UserApi.FetchServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceUser, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchUser(
    request: ConversationsV1UserApi.FetchUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ResponseError> {
    return this.#rawClient.execute<ConversationsV1User, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1UserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceUser(
    request: ConversationsV1UserApi.ListServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceUserResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceUserResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceUserResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listUser(
    request: ConversationsV1UserApi.ListUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUserResponse, ResponseError> {
    return this.#rawClient.execute<ListUserResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Users"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUserResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceUser(
    request: ConversationsV1UserApi.UpdateServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceUser, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateUser(
    request: ConversationsV1UserApi.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ResponseError> {
    return this.#rawClient.execute<ConversationsV1User, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Attributes", value: request.attributes, schema: s.optional(s.string()) },
            { name: "RoleSid", value: request.roleSid, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1UserSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1UserApi {
  export type CreateServiceUserRequest = {
    chatServiceSid: string;
    xTwilioWebhookEnabled?: Confirmation;
    identity: string;
    friendlyName?: string;
    attributes?: string;
    roleSid?: string;
  };

  export type CreateUserRequest = {
    xTwilioWebhookEnabled?: Confirmation;
    identity: string;
    friendlyName?: string;
    attributes?: string;
    roleSid?: string;
  };

  export type DeleteServiceUserRequest = {
    chatServiceSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteUserRequest = {
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchServiceUserRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type FetchUserRequest = {
    sid: string;
  };

  export type ListServiceUserRequest = {
    chatServiceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListUserRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateServiceUserRequest = {
    chatServiceSid: string;
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    attributes?: string;
    roleSid?: string;
  };

  export type UpdateUserRequest = {
    sid: string;
    xTwilioWebhookEnabled?: Confirmation;
    friendlyName?: string;
    attributes?: string;
    roleSid?: string;
  };
}
