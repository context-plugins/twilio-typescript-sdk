import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
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

  /**
   * Add a new conversation user to your service
   *
   * @remarks
   * Add a new conversation user to your service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceUser(
    request: ConversationsV1UserApi.CreateServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Add a new conversation user to your account's default service
   *
   * @remarks
   * Add a new conversation user to your account's default service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createUser(
    request: ConversationsV1UserApi.CreateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a conversation user from your service
   *
   * @remarks
   * Remove a conversation user from your service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceUser(
    request: ConversationsV1UserApi.DeleteServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Remove a conversation user from your account's default service
   *
   * @remarks
   * Remove a conversation user from your account's default service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteUser(
    request: ConversationsV1UserApi.DeleteUserRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
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
   * Fetch a conversation user from your service
   *
   * @remarks
   * Fetch a conversation user from your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceUser(
    request: ConversationsV1UserApi.FetchServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceUserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a conversation user from your account's default service
   *
   * @remarks
   * Fetch a conversation user from your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchUser(
    request: ConversationsV1UserApi.FetchUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1UserSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all conversation users in your service
   *
   * @remarks
   * Retrieve a list of all conversation users in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceUser(
    request: ConversationsV1UserApi.ListServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceUserResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listServiceUserResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all conversation users in your account's default service
   *
   * @remarks
   * Retrieve a list of all conversation users in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listUser(
    request: ConversationsV1UserApi.ListUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ListUserResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Users"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.int()) },
          { name: "Page", value: request.page, schema: s.optional(s.int()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listUserResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation user in your service
   *
   * @remarks
   * Update an existing conversation user in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceUser(
    request: ConversationsV1UserApi.UpdateServiceUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceUser, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing conversation user in your account's default service
   *
   * @remarks
   * Update an existing conversation user in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateUser(
    request: ConversationsV1UserApi.UpdateUserRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1User, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Users/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [
          {
            name: "X-Twilio-Webhook-Enabled",
            value: request.xTwilioWebhookEnabled,
            schema: s.optional(s.lazy(() => confirmationSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1UserApi {
  export type CreateServiceUserRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the User resource is
     * associated with.
     */
    chatServiceSid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /**
     * The application-defined string that uniquely identifies the resource's User within the
     * [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). This
     * value is often a username or an email address, and is case-sensitive.
     */
    identity: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been
     * set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The SID of a service-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
  };

  export type CreateUserRequest = {
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /**
     * The application-defined string that uniquely identifies the resource's User within the
     * [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource). This
     * value is often a username or an email address, and is case-sensitive.
     */
    identity: string;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been
     * set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The SID of a service-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
  };

  export type DeleteServiceUserRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the User
     * resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the User resource to delete. This value can be either the `sid` or the `identity`
     * of the User resource to delete.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type DeleteUserRequest = {
    /**
     * The SID of the User resource to delete. This value can be either the `sid` or the `identity`
     * of the User resource to delete.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
  };

  export type FetchServiceUserRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to fetch the User
     * resource from.
     */
    chatServiceSid: string;
    /**
     * The SID of the User resource to fetch. This value can be either the `sid` or the `identity`
     * of the User resource to fetch.
     */
    sid: string;
  };

  export type FetchUserRequest = {
    /**
     * The SID of the User resource to fetch. This value can be either the `sid` or the `identity`
     * of the User resource to fetch.
     */
    sid: string;
  };

  export type ListServiceUserRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to read the User
     * resources from.
     */
    chatServiceSid: string;
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListUserRequest = {
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateServiceUserRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) the User resource is
     * associated with.
     */
    chatServiceSid: string;
    /**
     * The SID of the User resource to update. This value can be either the `sid` or the `identity`
     * of the User resource to update.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been
     * set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The SID of a service-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
  };

  export type UpdateUserRequest = {
    /**
     * The SID of the User resource to update. This value can be either the `sid` or the `identity`
     * of the User resource to update.
     */
    sid: string;
    /** The X-Twilio-Webhook-Enabled HTTP request header */
    xTwilioWebhookEnabled?: Confirmation;
    /** The string that you assigned to describe the resource. */
    friendlyName?: string;
    /**
     * The JSON Object string that stores application-specific data. If attributes have not been
     * set, `{}` is returned.
     */
    attributes?: string;
    /**
     * The SID of a service-level
     * [Role](https://www.twilio.com/docs/conversations/api/role-resource) to assign to the user.
     */
    roleSid?: string;
  };
}
