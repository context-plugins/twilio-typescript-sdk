import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
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

  /**
   * Add a new push notification credential to your account
   *
   * @remarks
   * Add a new push notification credential to your account
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCredential(
    request: ConversationsV1CredentialApi.CreateCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Credentials"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Remove a push notification credential from your account
   *
   * @remarks
   * Remove a push notification credential from your account
   *
   * @returns The resource was deleted successfully.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCredential(
    request: ConversationsV1CredentialApi.DeleteCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default7("/v1/Credentials/{Sid}"),
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
   * Fetch a push notification credential from your account
   *
   * @remarks
   * Fetch a push notification credential from your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchCredential(
    request: ConversationsV1CredentialApi.FetchCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Credentials/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: conversationsV1CredentialSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve a list of all push notification credentials on your account
   *
   * @remarks
   * Retrieve a list of all push notification credentials on your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCredential(
    request: ConversationsV1CredentialApi.ListCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ListCredentialResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default7("/v1/Credentials"),
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
        success: { kind: "json", schema: listCredentialResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update an existing push notification credential on your account
   *
   * @remarks
   * Update an existing push notification credential on your account
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link TwilioSdkError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateCredential(
    request: ConversationsV1CredentialApi.UpdateCredentialRequest,
    options?: RequestOptions,
  ): ApiPromise<ConversationsV1Credential, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default7("/v1/Credentials/{Sid}"),
        auth: this.#auth.accountSidAuthToken,
        pathParams: [{ name: "Sid", value: request.sid, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
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
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace ConversationsV1CredentialApi {
  export type CreateCredentialRequest = {
    /**
     * The type of push-notification service the credential is for. Can be: `fcm`, `gcm`, or `apn`.
     */
    type: CredentialEnumPushType;
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64
     * characters long.
     */
    friendlyName?: string;
    /**
     * [APN only] The URL encoded representation of the certificate. For example, `-----BEGIN
     * CERTIFICATE----- MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEF.....A== -----END
     * CERTIFICATE-----`.
     */
    certificate?: string;
    /**
     * [APN only] The URL encoded representation of the private key. For example, `-----BEGIN RSA
     * PRIVATE KEY----- MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fG... -----END RSA PRIVATE KEY-----`.
     */
    privateKey?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox
     * APNs or `false` to send to production.
     */
    sandbox?: boolean;
    /**
     * [GCM only] The API key for the project that was obtained from the Google Developer console
     * for your GCM Service application credential.
     */
    apiKey?: string;
    /**
     * [FCM only] The **Server key** of your project from the Firebase console, found under Settings
     * / Cloud messaging.
     */
    secret?: string;
  };

  export type DeleteCredentialRequest = {
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type FetchCredentialRequest = {
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
  };

  export type ListCredentialRequest = {
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 100.
     */
    pageSize?: number;
    /** The page index. This value is simply for client state. */
    page?: number;
    /** The page token. This is provided by the API. */
    pageToken?: string;
  };

  export type UpdateCredentialRequest = {
    /** A 34 character string that uniquely identifies this resource. */
    sid: string;
    /**
     * The type of push-notification service the credential is for. Can be: `fcm`, `gcm`, or `apn`.
     */
    type?: CredentialEnumPushType;
    /**
     * A descriptive string that you create to describe the new resource. It can be up to 64
     * characters long.
     */
    friendlyName?: string;
    /**
     * [APN only] The URL encoded representation of the certificate. For example, `-----BEGIN
     * CERTIFICATE----- MIIFnTCCBIWgAwIBAgIIAjy9H849+E8wDQYJKoZIhvcNAQEF.....A== -----END
     * CERTIFICATE-----`.
     */
    certificate?: string;
    /**
     * [APN only] The URL encoded representation of the private key. For example, `-----BEGIN RSA
     * PRIVATE KEY----- MIIEpQIBAAKCAQEAuyf/lNrH9ck8DmNyo3fG... -----END RSA PRIVATE KEY-----`.
     */
    privateKey?: string;
    /**
     * [APN only] Whether to send the credential to sandbox APNs. Can be `true` to send to sandbox
     * APNs or `false` to send to production.
     */
    sandbox?: boolean;
    /**
     * [GCM only] The API key for the project that was obtained from the Google Developer console
     * for your GCM Service application credential.
     */
    apiKey?: string;
    /**
     * [FCM only] The **Server key** of your project from the Firebase console, found under Settings
     * / Cloud messaging.
     */
    secret?: string;
  };
}
