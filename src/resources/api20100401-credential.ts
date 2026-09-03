import type { AuthSchemes } from "../auth-schemes.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { ResponseError } from "../core/response-error.js";
import * as s from "../core/validation/index.js";
import {
  apiV2010AccountSipSipCredentialListSipCredentialSchema,
  type ApiV2010AccountSipSipCredentialListSipCredential,
} from "../models/api-v2010-account-sip-sip-credential-list-sip-credential.js";
import {
  listSipCredentialResponseSchema,
  type ListSipCredentialResponse,
} from "../models/list-sip-credential-response.js";
import type { Servers } from "../servers.js";

export class Api20100401Credential {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  createSipCredential(
    request: Api20100401Credential.CreateSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [
            { name: "Username", value: request.username, schema: s.string() },
            { name: "Password", value: request.password, schema: s.string() },
          ],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  deleteSipCredential(
    request: Api20100401Credential.DeleteSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ResponseError> {
    return this.#rawClient.execute<undefined, ResponseError>(
      {
        method: "DELETE",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
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

  fetchSipCredential(
    request: Api20100401Credential.FetchSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  listSipCredential(
    request: Api20100401Credential.ListSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ListSipCredentialResponse, ResponseError> {
    return this.#rawClient.execute<ListSipCredentialResponse, ResponseError>(
      {
        method: "GET",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
        ],
        query: [
          { name: "PageSize", value: request.pageSize, schema: s.optional(s.number()) },
          { name: "Page", value: request.page, schema: s.optional(s.number()) },
          { name: "PageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listSipCredentialResponseSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }

  updateSipCredential(
    request: Api20100401Credential.UpdateSipCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError> {
    return this.#rawClient.execute<ApiV2010AccountSipSipCredentialListSipCredential, ResponseError>(
      {
        method: "POST",
        url: this.#servers.default(
          "/2010-04-01/Accounts/{AccountSid}/SIP/CredentialLists/{CredentialListSid}/Credentials/{Sid}.json",
        ),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [
          { name: "AccountSid", value: request.accountSid, schema: s.string() },
          { name: "CredentialListSid", value: request.credentialListSid, schema: s.string() },
          { name: "Sid", value: request.sid, schema: s.string() },
        ],
        body: {
          kind: "formUrlEncoded",
          value: [{ name: "Password", value: request.password, schema: s.optional(s.string()) }],
        },
      },
      {
        success: { kind: "json", schema: apiV2010AccountSipSipCredentialListSipCredentialSchema },
        errorFactory: ResponseError,
      },
      options,
    );
  }
}

export namespace Api20100401Credential {
  export type CreateSipCredentialRequest = {
    accountSid: string;
    credentialListSid: string;
    username: string;
    password: string;
  };

  export type DeleteSipCredentialRequest = {
    accountSid: string;
    credentialListSid: string;
    sid: string;
  };

  export type FetchSipCredentialRequest = {
    accountSid: string;
    credentialListSid: string;
    sid: string;
  };

  export type ListSipCredentialRequest = {
    accountSid: string;
    credentialListSid: string;
    pageSize?: number;
    page?: number;
    pageToken?: string;
  };

  export type UpdateSipCredentialRequest = {
    accountSid: string;
    credentialListSid: string;
    sid: string;
    password?: string;
  };
}
