import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
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

  createRole(
    request: ConversationsV1RoleApi.CreateRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Role, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Roles"),
        auth: this.#auth.accountSidAuthToken,
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  createServiceRole(
    request: ConversationsV1RoleApi.CreateServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceRole, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() }],
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
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteRole(
    request: ConversationsV1RoleApi.DeleteRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Roles/{Sid}"),
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

  deleteServiceRole(
    request: ConversationsV1RoleApi.DeleteServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
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

  fetchRole(
    request: ConversationsV1RoleApi.FetchRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Role, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1RoleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  fetchServiceRole(
    request: ConversationsV1RoleApi.FetchServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceRole, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceRoleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listRole(
    request: ConversationsV1RoleApi.ListRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListRoleResponse, ResponseError> {
    return this.#rawClient.execute<ListRoleResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Roles"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listRoleResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listServiceRole(
    request: ConversationsV1RoleApi.ListServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ListServiceRoleResponse, ResponseError> {
    return this.#rawClient.execute<ListServiceRoleResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles"),
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
        success: { kind: "json", schema: listServiceRoleResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateRole(
    request: ConversationsV1RoleApi.UpdateRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Role, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Role, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Permission", value: request.permission, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1RoleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateServiceRole(
    request: ConversationsV1RoleApi.UpdateServiceRoleRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1ServiceServiceRole, ResponseError> {
    return this.#rawClient.execute<ConversationsV1ServiceServiceRole, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Services/{ChatServiceSid}/Roles/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "ChatServiceSid", value: request.chatServiceSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Permission", value: request.permission, schema: s.array(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1ServiceServiceRoleSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1RoleApi {
  export type CreateRoleRequest = {
    friendlyName: string;
    type: RoleEnumRoleType;
    permission: string[];
  };

  export type CreateServiceRoleRequest = {
    chatServiceSid: string;
    friendlyName: string;
    type: ServiceRoleEnumRoleType;
    permission: string[];
  };

  export type DeleteRoleRequest = {
    sid: string;
  };

  export type DeleteServiceRoleRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type FetchRoleRequest = {
    sid: string;
  };

  export type FetchServiceRoleRequest = {
    chatServiceSid: string;
    sid: string;
  };

  export type ListRoleRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type ListServiceRoleRequest = {
    chatServiceSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateRoleRequest = {
    sid: string;
    permission: string[];
  };

  export type UpdateServiceRoleRequest = {
    chatServiceSid: string;
    sid: string;
    permission: string[];
  };
}
