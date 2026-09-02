import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise, RawClient, RequestOptions } from "../core/index.js";
import { ResponseError, s } from "../core/index.js";
import {
  conversationsV1CredentialSchema,
  type ConversationsV1Credential,
} from "../models/conversations-v1-credential.js";
import {
  credentialEnumPushTypeSchema,
  type CredentialEnumPushType,
} from "../models/credential-enum-push-type.js";
import {
  listCredentialResponseSchema,
  type ListCredentialResponse,
} from "../models/list-credential-response.js";
import type { Servers } from "../servers.js";

export class ConversationsV1CredentialApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createCredential(
    request: ConversationsV1CredentialApi.CreateCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Credential, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Credentials"),
        auth: this.#auth.accountSidAuthToken,
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Type", value: request.type, schema: credentialEnumPushTypeSchema },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Certificate", value: request.certificate, schema: s.optional(s.string()) },
            { name: "PrivateKey", value: request.privateKey, schema: s.optional(s.string()) },
            { name: "Sandbox", value: request.sandbox, schema: s.optional(s.boolean()) },
            { name: "ApiKey", value: request.apiKey, schema: s.optional(s.string()) },
            { name: "Secret", value: request.secret, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1CredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteCredential(
    request: ConversationsV1CredentialApi.DeleteCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default7("/v1/Credentials/{Sid}"),
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

  fetchCredential(
    request: ConversationsV1CredentialApi.FetchCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Credential, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Credentials/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1CredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listCredential(
    request: ConversationsV1CredentialApi.ListCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCredentialResponse, ResponseError> {
    return this.#rawClient.execute<ListCredentialResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default7("/v1/Credentials"),
        auth: this.#auth.accountSidAuthToken,
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listCredentialResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateCredential(
    request: ConversationsV1CredentialApi.UpdateCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ResponseError> {
    return this.#rawClient.execute<ConversationsV1Credential, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default7("/v1/Credentials/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        body: {
          kind: "formUrlEncoded",
          value: [
            {
              name: "Type",
              value: request.type,
              schema: s.optional(s.lazy(() => credentialEnumPushTypeSchema)),
            },
            { name: "FriendlyName", value: request.friendlyName, schema: s.optional(s.string()) },
            { name: "Certificate", value: request.certificate, schema: s.optional(s.string()) },
            { name: "PrivateKey", value: request.privateKey, schema: s.optional(s.string()) },
            { name: "Sandbox", value: request.sandbox, schema: s.optional(s.boolean()) },
            { name: "ApiKey", value: request.apiKey, schema: s.optional(s.string()) },
            { name: "Secret", value: request.secret, schema: s.optional(s.string()) },
          ],
        },
      },
      {
        success: { kind: "json", schema: conversationsV1CredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace ConversationsV1CredentialApi {
  export type CreateCredentialRequest = {
    type: CredentialEnumPushType;
    friendlyName?: string;
    certificate?: string;
    privateKey?: string;
    sandbox?: boolean;
    apiKey?: string;
    secret?: string;
  };

  export type DeleteCredentialRequest = {
    sid: string;
  };

  export type FetchCredentialRequest = {
    sid: string;
  };

  export type ListCredentialRequest = {
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateCredentialRequest = {
    sid: string;
    type?: CredentialEnumPushType;
    friendlyName?: string;
    certificate?: string;
    privateKey?: string;
    sandbox?: boolean;
    apiKey?: string;
    secret?: string;
  };
}
