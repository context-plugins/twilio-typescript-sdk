import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conversationsV1RoleSchema, type ConversationsV1Role } from "../models/conversations-v1-role.js";
import {
  conversationsV1ServiceServiceRoleSchema,
  type ConversationsV1ServiceServiceRole,
} from "../models/conversations-v1-service-service-role.js";
import { listRoleResponseSchema, type ListRoleResponse } from "../models/list-role-response.js";
import {
  listServiceRoleResponseSchema,
  type ListServiceRoleResponse,
} from "../models/list-service-role-response.js";
import { roleEnumRoleTypeSchema, type RoleEnumRoleType } from "../models/role-enum-role-type.js";
import {
  serviceRoleEnumRoleTypeSchema,
  type ServiceRoleEnumRoleType,
} from "../models/service-role-enum-role-type.js";
import type { Servers } from "../servers.js";

export class ConversationsV1RoleApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a new user role in your account's default service
   *
   * @remarks
   * Create a new user role in your account's default service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRole(
    request: ConversationsV1RoleApi.CreateRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Roles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Type", value: request.type, schema: roleEnumRoleTypeSchema },
            { name: "Permission", value: request.permission, schema: s.array(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1RoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a new user role in your service
   *
   * @remarks
   * Create a new user role in your service
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createServiceRole(
    request: ConversationsV1RoleApi.CreateServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "FriendlyName", value: request.friendlyName, schema: s.string() },
            { name: "Type", value: request.type, schema: serviceRoleEnumRoleTypeSchema },
            { name: "Permission", value: request.permission, schema: s.array(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceRoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a user role from your account's default service
   *
   * @remarks
   * Remove a user role from your account's default service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteRole(
    request: ConversationsV1RoleApi.DeleteRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Roles/{Sid}"),
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
   * Remove a user role from your service
   *
   * @remarks
   * Remove a user role from your service
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteServiceRole(
    request: ConversationsV1RoleApi.DeleteServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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
   * Fetch a user role from your account's default service
   *
   * @remarks
   * Fetch a user role from your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchRole(
    request: ConversationsV1RoleApi.FetchRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1RoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Fetch a user role from your service
   *
   * @remarks
   * Fetch a user role from your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchServiceRole(
    request: ConversationsV1RoleApi.FetchServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
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
        success: { kind: "json", schema: conversationsV1ServiceServiceRoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all user roles in your account's default service
   *
   * @remarks
   * Retrieve a list of all user roles in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listRole(
    request: ConversationsV1RoleApi.ListRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoleResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Roles"),
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
        success: { kind: "json", schema: listRoleResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all user roles in your service
   *
   * @remarks
   * Retrieve a list of all user roles in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listServiceRole(
    request: ConversationsV1RoleApi.ListServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceRoleResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles"),
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
        success: { kind: "json", schema: listServiceRoleResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing user role in your account's default service
   *
   * @remarks
   * Update an existing user role in your account's default service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateRole(
    request: ConversationsV1RoleApi.UpdateRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Permission", value: request.permission, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1RoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing user role in your service
   *
   * @remarks
   * Update an existing user role in your service
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateServiceRole(
    request: ConversationsV1RoleApi.UpdateServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Permission", value: request.permission, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceRoleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1RoleApi {
  export type CreateRoleRequest = {
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64
     * characters long.
     */
    friendlyName: string;
    /**
     * The type of role. Can be: `conversation` for
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) roles or
     * `service` for [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) roles.
     */
    type: RoleEnumRoleType;
    /**
     * A permission that you grant to the new role. Only one permission can be granted per
     * parameter. To assign more than one permission, repeat this parameter for each permission
     * value. The values for this parameter depend on the role's `type`.
     */
    permission: string[];
  };

  export type CreateServiceRoleRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to create the Role
     * resource under.
     */
    chatServiceSid: string;
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64
     * characters long.
     */
    friendlyName: string;
    /**
     * The type of role. Can be: `conversation` for
     * [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) roles or
     * `service` for [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) roles.
     */
    type: ServiceRoleEnumRoleType;
    /**
     * A permission that you grant to the new role. Only one permission can be granted per
     * parameter. To assign more than one permission, repeat this parameter for each permission
     * value. The values for this parameter depend on the role's `type`.
     */
    permission: string[];
  };

  export type DeleteRoleRequest = {
    /** The SID of the Role resource to delete. */
    sid: string;
  };

  export type DeleteServiceRoleRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to delete the Role
     * resource from.
     */
    chatServiceSid: string;
    /** The SID of the Role resource to delete. */
    sid: string;
  };

  export type FetchRoleRequest = {
    /** The SID of the Role resource to fetch. */
    sid: string;
  };

  export type FetchServiceRoleRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to fetch the Role
     * resource from.
     */
    chatServiceSid: string;
    /** The SID of the Role resource to fetch. */
    sid: string;
  };

  export type ListRoleRequest = {
    /** How many resources to return in each list page. The default is 50, and the maximum is 50. */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type ListServiceRoleRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to read the Role
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

  export type UpdateRoleRequest = {
    /** The SID of the Role resource to update. */
    sid: string;
    /**
     * A permission that you grant to the role. Only one permission can be granted per parameter. To
     * assign more than one permission, repeat this parameter for each permission value. Note that
     * the update action replaces all previously assigned permissions with those defined in the
     * update action. To remove a permission, do not include it in the subsequent update action. The
     * values for this parameter depend on the role's `type`.
     */
    permission: string[];
  };

  export type UpdateServiceRoleRequest = {
    /**
     * The SID of the [Conversation
     * Service](https://www.twilio.com/docs/conversations/api/service-resource) to update the Role
     * resource in.
     */
    chatServiceSid: string;
    /** The SID of the Role resource to update. */
    sid: string;
    /**
     * A permission that you grant to the role. Only one permission can be granted per parameter. To
     * assign more than one permission, repeat this parameter for each permission value. Note that
     * the update action replaces all previously assigned permissions with those defined in the
     * update action. To remove a permission, do not include it in the subsequent update action. The
     * values for this parameter depend on the role's `type`.
     */
    permission: string[];
  };
}
